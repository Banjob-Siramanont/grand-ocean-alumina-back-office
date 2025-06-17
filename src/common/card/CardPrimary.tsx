import type { ReactNode } from 'react';

type CardPrimaryProps = {
    className?: string;
    children: ReactNode;
};

export default function CardPrimary({ className, children }: CardPrimaryProps) {
    return (
        <div className={`shadow rounded-[10px] w-full bg-white dark:bg-secondaryBlack p-4 ${className}`}>
            {children}
        </div>
    )
}
