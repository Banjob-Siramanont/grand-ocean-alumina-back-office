import type { ReactNode } from 'react';

type TwoColumnGridProps = {
    className?: string;
    children: ReactNode;
};

export default function TwoColumnGrid({ className, children }: TwoColumnGridProps) {
    return (
        <div className={`
            ${className}
            grid grid-cols-2 gap-2 mb-8
            max-[800px]:grid-cols-1
        `}>
            {children}
        </div>
    )
}
