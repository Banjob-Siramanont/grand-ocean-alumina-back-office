import type { ReactNode } from 'react';

type CardIdentifierProps = {
    className?: string;
    topicText: string;
    borderColor?: string;
    children: ReactNode;
};

export default function CardIdentifier({ className, topicText, borderColor = 'border-themeColor', children }: CardIdentifierProps) {
    return (
        <div className={`border border-l-16 rounded-[10px] p-4 dark:text-white ${borderColor} ${className}`}>
            <div className='text-2xl text-themeColor font-semibold mb-2'>{topicText}</div>
            {children}
        </div>
    )
}
