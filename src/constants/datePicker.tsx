import AdapterDateFns from '@mui/lab/AdapterDateFns';
import getYear from 'date-fns/getYear';
import format from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

class CustomString extends String {
    charAt(_: number): string {
        return this.valueOf();
    }
}

const weekDays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
const customWeekDays = weekDays.map((day) => new CustomString(day) as string);

export class DateAdapter extends AdapterDateFns {
    getWeekdays = (): string[] => customWeekDays;
    formatByString = (date: Date, formatString: string) => {
        const christianYear = `${getYear(date)}`;
        const buddhishYear = (parseInt(christianYear) + 543).toString();
        const result = format(date, formatString, { locale: this.locale });

        return result.replace(christianYear, buddhishYear);
    };
    parse: any = (value: string, formatString: string) => {
        if (value === '') {
            return null;
        }

        if ((formatString === 'dd/MM/yyyy' || formatString === 'P') && value.length === 10) {
            const year = parseInt(value.substring(6, 10));
            if (year > 543) {
                const newYear = year - 543;
                const res = value.replace(`${year}`, `${newYear}`);
                return dateFnsParse(res, formatString, new Date(), { locale: this.locale });
            } else {
                return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
            }
        }

        if (formatString === 'MM/yyyy' && value.length === 7) {
            const year = parseInt(value.substring(3, 7));
            if (year > 543) {
                const newYear = year - 543;
                const res = value.replace(`${year}`, `${newYear}`);
                return dateFnsParse(res, formatString, new Date(), { locale: this.locale });
            } else {
                return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
            }
        }
        if (formatString === 'yyyy' && value.length === 4) {
            const year = parseInt(value);
            if (year > 543) {
                const newYear = year - 543;
                const res = value.replace(`${year}`, `${newYear}`);
                return dateFnsParse(res, formatString, new Date(), { locale: this.locale });
            } else {
                return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
            }
        }
        if (formatString === 'MM' && value.length === 2) {
            return dateFnsParse(value, formatString, new Date(), { locale: this.locale });
        }

        return null;
    };
}

