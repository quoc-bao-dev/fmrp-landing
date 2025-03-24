
type QuoteBoxProps = {
    content?: string
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ content }) => {
    return (
        <div className="relative px-16 py-8 rounded-lg text-center custom-box-content">
            {/* <p className="italic text-[#33404A] 3xl:text-xl text-lg font-medium">
                {content}
            </p> */}
            <p
                className="italic text-[#33404A] 3xl:text-xl text-lg font-medium"
                dangerouslySetInnerHTML={{ __html: `${content ?? ''}` }}
            />
        </div>
    );
}

export default QuoteBox
