import type { ReactNode } from 'react';

type ThreeColumnGridProps = {
    className?: string;
    children: ReactNode;
};

export default function ThreeColumnGrid({ className, children }: ThreeColumnGridProps) {
    return (
        <div className={`
            ${className}
            grid grid-cols-3 gap-2 mb-8
            max-[1100px]:grid-cols-2 max-[800px]:grid-cols-1 
        `}>
            {children}
        </div>
    )
}
