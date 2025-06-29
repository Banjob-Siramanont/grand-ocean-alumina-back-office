import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';

// Component
import OutlinedButton from '../../button/OutlinedButton';

// Type
import type { Data } from '../../../types/common/tableTypes';
import type { IconType } from 'react-icons/lib';

type TableActionButtonsProps = {
    editButtonText?: string;
    extraButtonText?: string;
    deleteButtonText?: string;
    hasEditBtn?: boolean;
    hasExtraBtn?: boolean;
    hasDeleteBtn?: boolean;
    editButtonIcon?: IconType;
    extraButtonIcon?: IconType;
    deleteButtonIcon?: IconType;
    element: Data;
    keyNameOfId: string;
    editOnClick: (id: string | number) => void;
    extraOnClick?: (id: string | number) => void;
    deleteOnClick: (id: string | number) => void;
}

export default function TableActionButtons({
    editButtonText = 'แก้ไข',
    extraButtonText = '',
    deleteButtonText = 'ลบ',
    hasEditBtn = true,
    hasExtraBtn = false,
    hasDeleteBtn = true,
    editButtonIcon,
    extraButtonIcon,
    deleteButtonIcon,
    element,
    keyNameOfId,
    editOnClick = () => { },
    extraOnClick = () => { },
    deleteOnClick = () => { },
}: TableActionButtonsProps) {
    return (
        <div className='flex justify-between items-center gap-2'>
            {hasEditBtn && (
                <OutlinedButton
                    className='text-lg'
                    text={editButtonText}
                    textColor='text-themeColor'
                    bgColor='bg-themeColor'
                    borderColor='border-themeColor'
                    reactIcon={editButtonIcon ? React.createElement(editButtonIcon) : <FiEdit3 />}
                    onClick={() => editOnClick(element[keyNameOfId])}
                />
            )}
            {hasExtraBtn && (
                <OutlinedButton
                    className='text-lg'
                    text={extraButtonText}
                    textColor='text-emeraldGreen'
                    bgColor='bg-emeraldGreen'
                    borderColor='border-emeraldGreen'
                    reactIcon={extraButtonIcon ? React.createElement(extraButtonIcon) : undefined}
                    onClick={() => extraOnClick(element[keyNameOfId])}
                />
            )}
            {hasDeleteBtn && (
                <OutlinedButton
                    className='text-lg'
                    text={deleteButtonText}
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    reactIcon={deleteButtonIcon ? React.createElement(deleteButtonIcon) : <FaRegTrashCan />}
                    onClick={() => deleteOnClick(element[keyNameOfId])}
                />
            )}
        </div>
    )
}
