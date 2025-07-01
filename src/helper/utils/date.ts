import { format, subMonths, startOfWeek, endOfWeek, startOfYear, subDays } from 'date-fns';

const thaiMonths = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

const englishMonths = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

type DateObject = {
    day: number;
    dayWithPadStart: string;
    monthIndex: number; // 1-12
    monthIndexWithPadStart: string; // 01-12
    engMonthText: string; // English month name
    thaiMonthText: string; // Thai month name
    engYear: number; // English year
    thaiYear: number; // Thai Buddhist year
    thaiFormat: string; // Formatted date in Thai
    engFormat: string; // Formatted date in English
    engShortFormat: string; // Short formatted date in English with pad start
    engShortFormatWithPadStart: string; // Short formatted date in English
}
export const getDetailedDateInfo = (value: Date) => {

    const date = new Date(value);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const dateObject: DateObject = {
        day: day,
        dayWithPadStart: String(day).padStart(2, '0'),
        monthIndex: month + 1, // Month index starts from 0
        monthIndexWithPadStart: String(month + 1).padStart(2, '0'), // Month index starts from 0
        engMonthText: englishMonths[month],
        thaiMonthText: thaiMonths[month],
        engYear: year,
        thaiYear: year + 543, // Convert to Thai Buddhist calendar
        thaiFormat: `${day} ${thaiMonths[month]} ${year + 543}`,
        engFormat: `${day} ${englishMonths[month]} ${year}`,
        engShortFormat: `${day}/${month + 1}/${year}`,
        engShortFormatWithPadStart: `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`,
    };

    return dateObject;
};

const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');
const getWeekRange = (offsetWeeks: number) => {
    const today = new Date();
    const mondayOfThisWeek = startOfWeek(today, { weekStartsOn: 1 });

    // Shift by offsetWeeks
    const start = new Date(mondayOfThisWeek);
    start.setDate(start.getDate() + offsetWeeks * 7);

    const end = endOfWeek(start, { weekStartsOn: 1 });

    return { startDate: formatDate(start), endDate: formatDate(end) };
};

export type Period = 'PW' | 'TW' | 'NW' | '15D' | '1M';
export const dateSelector = (period: Period) => {
    const today = new Date();

    switch (period) {
        case 'PW': return getWeekRange(-1);
        case 'TW': return getWeekRange(0);
        case 'NW': return getWeekRange(1);
        case '15D': return { startDate: formatDate(subDays(today, 15)), endDate: formatDate(today) };
        case '1M': return { startDate: formatDate(subMonths(today, 1)), endDate: formatDate(today) };
        default: return { startDate: formatDate(startOfYear(today)), endDate: formatDate(today) };
    }
};