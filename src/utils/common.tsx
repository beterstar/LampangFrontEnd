export const numberFormat = (num: any, minDigits = 2, maxDigits = 2) => {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: minDigits,
        maximumFractionDigits: maxDigits,
    });
    return formatter.format(num);
};

export const toBuddhistYear = (moment: any, format: string) => {
    const christianYear = moment.format("YYYY");
    const buddhishYear = (parseInt(christianYear) + 543).toString();
    return moment
        .format(
            format
                .replace("YYYY", buddhishYear)
                .replace("YY", buddhishYear.substring(2, 4))
        )
        .replace(christianYear, buddhishYear);
};

export const padCode = (length: number, number: any, prefix = ``) => prefix + number.toString().padStart(length, '0')
