import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

// Helper
import { filteredData } from '../../../helper/utils/filter';

import type { Option } from '../../../types/common/commonTypes';

type SelectSearchBaseProps = {
    className?: string;
    labelTag?: string;
    optionDatas: Option[];
    selectedValue: string | number;
    keyValue?: string;
    keyDisplayValue?: string;
    textHelper?: string;
    variant?: 'primary' | 'secondary';
    onChange: (data: string | number) => void;
}

export default function SelectSearchBase({
    className,
    labelTag,
    optionDatas,
    selectedValue,
    keyValue = 'value',
    keyDisplayValue = 'displayValue',
    textHelper,
    variant = 'primary',
    onChange
}: SelectSearchBaseProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLFormElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [onDrop, setOnDrop] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [dropdownTop, setDropdownTop] = useState<number | null>(0);

    // Determine styling based on variant
    const formClassName = variant === 'primary'
        ? 'border rounded-md border-lightGrey px-3 pt-2 pb-1.5 w-full transition-transform duration-500 overflow-x-auto bg-white dark:bg-secondaryBlack'
        : 'border-b border-lightGrey px-3 pt-2 pb-1.5 w-full transition-transform duration-500 overflow-x-auto bg-white dark:bg-secondaryBlack';

    const calculatePosition = () => {
        if (!buttonRef.current || !contentRef.current) return;

        const spaceRemaining = window.innerHeight - buttonRef.current.getBoundingClientRect().bottom;
        const contentHeight = contentRef.current.clientHeight + 47; // 47 px คือค่าความสูงของกล่องข้อความค้นหา
        const topPosition = spaceRemaining > contentHeight ? null : spaceRemaining - contentHeight;

        setDropdownTop(topPosition);
    };

    const handleToggleDropdown = () => {
        setOnDrop(previous => !previous);
        calculatePosition();
    };

    const handleBlur = (event: React.FocusEvent) => {
        // Only close if focus is moving outside the entire component
        if (!dropdownRef.current?.contains(event.relatedTarget as Node)) {
            setTimeout(() => setOnDrop(false), 150);
        }
    };

    const filteredDatas = optionDatas.filter(optionData =>
        optionData[keyDisplayValue]?.toLowerCase().includes(searchValue?.toLowerCase())
    );

    useEffect(() => {
        calculatePosition();
    }, [optionDatas, searchValue]);

    useEffect(() => {
        if (onDrop && inputRef.current) inputRef.current.focus();
    }, [onDrop]);

    return (
        <div className={`dark:text-white font-light relative ${className}`} ref={dropdownRef} tabIndex={0} onBlur={handleBlur}>
            <form
                ref={buttonRef}
                className={formClassName}
                onClick={() => handleToggleDropdown()}
            >
                <label className='text-inputText dark:text-inputTextDark'>{labelTag}</label>
                <div className={`${variant === 'secondary' && selectedValue === '' ? 'text-alarmRed dark:text-warningYellow' : ''} flex justify-between items-center py-1 whitespace-nowrap`}>
                    {filteredData(optionDatas, selectedValue, keyValue, keyDisplayValue, 'โปรดเลือก')}
                    <FaAngleDown className={`${onDrop ? 'rotate-180' : ''} duration-300`} />
                </div>
            </form>
            <div className='flex w-full'>
                <span className='text-alarmRed dark:text-warningYellow text-[12px] font-normal'>{textHelper}</span>
            </div>

            <div
                ref={contentRef}
                className={`
                    absolute pb-2 mt-1 z-[30] w-full max-h-[40vh] bg-white dark:bg-secondaryBlack border-[2px] border-lightGrey shadow overflow-hidden overflow-y-auto rounded-lg
                    transform transition-transform duration-200 ease-in-out
                    ${onDrop ? 'translate-y-0' : 'translate-y-[-5%] opacity-0 pointer-events-none'}
                `}
                style={{ top: dropdownTop ? `${dropdownTop}px` : 'auto' }}
            >
                <div className={`${onDrop ? '' : 'hidden'} px-5 py-2 border-b border-lightGrey mb-1 sticky top-0 bg-white dark:bg-secondaryBlack z-[20]`}>
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder='ค้นหา'
                        className='w-full outline-0'
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
                    />
                </div>
                {filteredDatas?.map(filteredData => {
                    return (
                        <div
                            className='px-5 hover:bg-themeColor hover:text-white transition-transform cursor-pointer'
                            key={filteredData[keyValue]}
                            onClick={() => {
                                setOnDrop(false);
                                onChange(filteredData[keyValue]);
                            }}
                        >
                            {filteredData[keyDisplayValue]}
                        </div>
                    )
                })}
                <div className={`px-5 ${filteredDatas.length === 0 ? '' : 'hidden'}`}>ไม่มีข้อมูล</div>
            </div>
        </div>
    )
}
