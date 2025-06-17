import type { MouseEventHandler, ReactNode } from 'react';

// css
import '../../index.css';

type ContainedButtonProps = {
    className?: string
    text: string
    bgColor: string;
    borderColor: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    reactIcon?: ReactNode;
}

export default function ContainedButton({
    className = '',
    text,
    bgColor,
    borderColor,
    onClick = () => { },
    disabled = false,
    reactIcon = '',
}: ContainedButtonProps) {

    return (
        <button
            onClick={onClick}
            className={`
                ${className}
                flex justify-center items-center gap-x-1.5 rounded-lg px-4 py-1 select-none break-all transition-colors duration-150
                ${disabled ?
                    'bg-lightGrey border border-lightGrey text-grey' :
                    `clickable cursor-pointer text-white border ${borderColor} ${bgColor}`
                }
            `}
            disabled={disabled}
        >
            {reactIcon}
            {text}
        </button>
    )
}

/*
    tailwind safelist
    hover:bg-alarmRed
    hover:bg-themeColor
    hover:bg-emeraldGreen
*/