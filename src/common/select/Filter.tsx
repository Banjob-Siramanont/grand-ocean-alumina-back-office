import { useState, useEffect, useRef, useCallback } from 'react';
import type { Period } from '../../helper/utils/date';

type FilterProps<T extends string> = {
    isDate?: boolean;
    selectedOption: T;
    onClick: (selectedOption: T) => void;
    customOption?: T[]; // so options match type
};

type FocusStyle = {
    width?: number;
    height?: number;
    top?: number;
    transform?: string;
}
const dateOptions: Period[] = ['PW', 'TW', 'NW', '15D', '1M'];

export default function Filter<T extends string>({ isDate, selectedOption, onClick, customOption = [] }: FilterProps<T>) {

    const options = useCallback(() => {
        if (customOption.length > 0) return customOption;
        return dateOptions as T[];
    }, [isDate, dateOptions]);

    const [focusStyle, setFocusStyle] = useState<FocusStyle>({});
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClick = useCallback((_: any, selectedOption: T) => {
        onClick(selectedOption);
    }, [onClick]);

    const positionFocus = useCallback((selectedElement: HTMLDivElement) => {
        if (selectedElement) {
            const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = selectedElement;
            setFocusStyle({
                width: offsetWidth,
                height: offsetHeight,
                top: offsetTop,
                transform: `translateX(${offsetLeft - 4}px)`, // เติม -4 เพราะว่าค่า offsetLeft ไม่ตรงความเป็นจริง
            });
        }
    }, [setFocusStyle]);

    useEffect(() => {
        // Initial focus position
        if (containerRef.current) {
            const selectedElement = containerRef.current.querySelector(`[data-value="${selectedOption}"]`) as HTMLDivElement;
            positionFocus(selectedElement)
        }
    }, [selectedOption]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const selectedElement = containerRef.current.querySelector(`[data-value="${selectedOption}"]`) as HTMLDivElement;
                positionFocus(selectedElement);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [selectedOption]);

    return (
        <div className='flex justify-start items-center flex-wrap'>

            <div ref={containerRef} className='relative flex justify-start gap-x-2 items-center flex-wrap bg-backgroundColor1 dark:bg-black p-1 rounded-lg text-themeColor font-[500]'>
                <div
                    className='absolute bg-white dark:bg-secondaryBlack rounded-[4px] transition-transform duration-300 ease-out'
                    style={{ ...focusStyle }}
                />
                {options().map((option) => (
                    <div
                        key={option}
                        className={`px-3 py-1 select-none cursor-pointer text-center break-all z-[10] ${selectedOption === option ? 'font-bold' : ''}`}
                        data-value={option}
                        onClick={event => handleClick(event, option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
}
