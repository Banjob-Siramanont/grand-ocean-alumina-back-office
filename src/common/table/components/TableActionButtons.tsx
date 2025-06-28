import { FiEdit3 } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';

// Component
import OutlinedButton from '../../button/OutlinedButton';

// Type
import type { Data } from '../../../types/common/tableTypes';

type TableActionButtonsProps = {
    editButtonText?: string;
    extraButtonText?: string;
    deleteButtonText?: string;
    hasEditBtn?: boolean;
    hasExtraBtn?: boolean;
    hasDeleteBtn?: boolean;
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
                    className='text-xl'
                    text={editButtonText}
                    textColor='text-themeColor'
                    bgColor='bg-themeColor'
                    borderColor='border-themeColor'
                    reactIcon={<FiEdit3 />}
                    onClick={() => editOnClick(element[keyNameOfId])}
                />
            )}
            {hasExtraBtn && (
                <OutlinedButton
                    className='text-xl'
                    text={extraButtonText}
                    textColor='text-emeraldGreen'
                    bgColor='bg-emeraldGreen'
                    borderColor='border-emeraldGreen'
                    onClick={() => extraOnClick(element[keyNameOfId])}
                />
            )}
            {hasDeleteBtn && (
                <OutlinedButton
                    className='text-xl'
                    text={deleteButtonText}
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    reactIcon={<FaRegTrashCan />}
                    onClick={() => deleteOnClick(element[keyNameOfId])}
                />
            )}
        </div>
    )
}
