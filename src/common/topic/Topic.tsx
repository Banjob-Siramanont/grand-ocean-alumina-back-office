type TopicProps = {
    text: string;
    className?: string;
};

export default function Topic({ text, className }: TopicProps) {
    return (
        <div className={`text-2xl text-themeColor font-semibold mb-4 ${className}`}>{text}</div>
    )
}
