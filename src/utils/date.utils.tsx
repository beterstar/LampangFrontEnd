export const dateTimeToView = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return (
        new Intl.DateTimeFormat(locales, {
            year: isFullYear ? "numeric" : "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
        }).format(today) + " น."
    );
};

export const dateToView = (date?: any, isFullYear = true, locales = "th") => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        year: isFullYear ? "numeric" : "2-digit",
        month: "2-digit",
        day: "2-digit",
    }).format(today);
};

export const timeToView = (date?: any, isFullYear = true, locales = "th") => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
    }).format(today);
};

enum SHORT_DAY_OF_WEEK {
    Sun = `Sun`,
    Mon = `Mon`,
    Tue = `Tue`,
    Wed = `Wed`,
    Thu = `Thu`,
    Fri = `Fri`,
    Sat = `Sat`,
}
export const dateOfWeek = (type: any = "SHORT") => {
    const dateOfWeek = SHORT_DAY_OF_WEEK;
    return type === "SHORT" ? SHORT_DAY_OF_WEEK : [];
};

export const fullDateToView = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        year: "numeric",
        month: "long",
    }).format(today);
};

export const fullDate = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        day: "numeric",
        year: "numeric",
        month: "long",
    }).format(today);
};

export const shortnessDate = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        day: "numeric",
        month: "short",
    }).format(today);
};
export const shortnessDatemonth = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        month: "long",
    }).format(today);
};
export const lnessDatemonth = (
    date?: any,
    isFullYear = true,
    locales = "th"
) => {
    let today: any = Date.now();
    if (date) today = new Date(date);
    return new Intl.DateTimeFormat(locales, {
        month: "short",
    }).format(today);
};

export const monthOnly = (
    monthNumber: any
) => {
    const months = [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
        'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        return 'Invalid Month';
    }
};