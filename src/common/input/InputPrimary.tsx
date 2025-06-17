import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type InputPrimaryProps = {
    className?: string;
    labelTag?: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    value: string | number | readonly string[] | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    textHelper?: string;
    max?: number;
    min?: number;
    maxLength?: number;
};

export default function InputPrimary({
    className, labelTag, type, placeholder, value, max, min, maxLength = 250, onChange, textHelper
}: InputPrimaryProps) {

    return (
        <div className={className}>
            <div className='grid grid-cols-1 px-3 py-[7px] rounded-sm font-light border border-lightGrey'>
                <div className='text-inputText dark:text-inputTextDark'>{labelTag}</div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className='dark:text-white focus:outline-none py-1'
                    pattern='\d{4}-\d{2}-\d{2}'
                    value={value}
                    onChange={onChange}
                    max={max}
                    min={min}
                    maxLength={maxLength}
                />
            </div>
            <div className='text-alarmRed dark:text-warningYellow text-xs'>
                {textHelper}
            </div>
        </div>
    )
}
