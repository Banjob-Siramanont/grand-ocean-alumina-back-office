type TopicOfPageProps = {
    text: string;
    className?: string;
};

export default function TopicOfPage({ text, className }: TopicOfPageProps) {
    return (
        <div className={`bg-gradient-to-r from-themeColor/23 to-white/23 dark:from-themeColor/15 dark:to-primaryBlack/15 px-4 py-2 mb-5 rounded-[10px] ${className}`}>
            <div className='text-themeColor text-[40px] font-bold'>{text}</div>
        </div>
    )
}
