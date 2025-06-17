import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

type InputDateAndTimeProps = {
    className?: string;
    labelTag?: string;
    type: 'date' | 'time' | 'month';
    placeholder?: string;
    value: string;
    onChange: (date: string) => void;
    textHelper?: string;
};

export default function InputDateAndTime({ className, labelTag, type, placeholder, value, onChange, textHelper }: InputDateAndTimeProps) {

    const [selectedDate, setSelectedDate] = useState<Date | string>('');

    const handleDateAndTimeOnChange = (date: Date) => {
        let format: string;
        if (type === 'date') format = 'YYYY-MM-DD';
        else if (type === 'time') format = 'HH:mm';
        else if (type === 'month') format = 'YYYY-MM';
        else format = 'YYYY-MM-DD';

        const formatted = moment(date).format(format);
        onChange(formatted === 'Invalid date' ? '' : formatted);
    };

    useEffect(() => {
        if (value === '') setSelectedDate('');
        else if (type === 'date') setSelectedDate(new Date(value));
        else if (type === 'time') {
            const [hours, minutes] = value.split(':');
            const selectTime = new Date();
            selectTime.setHours(Number(hours));
            selectTime.setMinutes(Number(minutes));
            selectTime.setSeconds(0);
            selectTime.setMilliseconds(0);
            setSelectedDate(selectTime);
        }
        else if (type === 'month') {
            const monthDate = new Date(value + '-01'); // Add day, '-01', to make it a valid date
            setSelectedDate(monthDate);
        }
    }, [value, type]);

    return (
        <div className={className}>
            <div className='grid grid-cols-1 border border-lightGrey rounded-sm px-3 py-[7px] dark:text-white font-light'>
                <div className='text-inputText dark:text-inputTextDark'>{labelTag}</div>
                <DatePicker
                    placeholderText={placeholder}
                    selected={selectedDate as Date}
                    onChange={date => handleDateAndTimeOnChange(date as Date)}
                    dateFormat={type === 'month' ? 'MM/yyyy' : (type === 'date' ? 'dd/MM/yyyy' : 'HH:mm')}
                    timeFormat='HH:mm'
                    showTimeSelect={type === 'time'}
                    showTimeSelectOnly={type === 'time'}
                    showMonthYearPicker={type === 'month'}
                    className='w-full dark:text-white focus:outline-none py-1'
                    showMonthDropdown
                    showYearDropdown
                    yearDropdownItemNumber={100} // Show 100 years in dropdown
                    scrollableYearDropdown
                    minDate={new Date(1901, 0, 1)} // Set earliest selectable date
                    withPortal={type === 'date' || type === 'month' ? true : false}
                    customInput={<input inputMode='none' />} // ยกเลิก keyboard pop up ตอนที่เลือก type date ในมือถือ
                />

            </div>
            <div className='text-alarmRed dark:text-warningYellow text-xs'>
                {textHelper}
            </div>
        </div>
    )
}
