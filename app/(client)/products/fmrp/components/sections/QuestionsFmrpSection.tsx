"use client"
import CaretUpIcon from '@/components/icons/common/CaretUpIcon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useStatePageFmrp } from '../../_state/useStatePageFmrp';

type Props = {}

const questions: any[] = [
    {
        value: "item-1",
        question: "FMRP có nghĩa là gì?",
        answer: "FMRP viết tắt của F (chữ cái đầu của FOSO) và MRP (Material Requirement Planning). FMRP là phần mềm quản lý sản xuất, chuyên tập trung vào quản lý hoạt động sản xuất cho doanh nghiệp."
    },
    {
        value: "item-2",
        question: "FMRP phù hợp cho doanh nghiệp nào?",
        answer: "FMRP phù hợp cho doanh nghiệp có quy mô vừa và nhỏ, cụ thể doanh nghiệp hoạt động trong lĩnh vực sản xuất."
    },
    {
        value: "item-3",
        question: "FMRP có theo dõi được kế hoạch sản xuất không?",
        answer: "FMRP giúp bạn từ tính toán NVL cần có cho sản xuất, lập kế hoạch sản xuất cho đến theo dõi hoàn thành kế hoạch sản xuất."
    },
    {
        value: "item-4",
        question: "FMRP có lập được kế hoạch NVL?",
        answer: "Hệ thống dễ dàng lập kế hoạch NVL nhanh chóng từ dữ liệu thông tin đã thu nhập trên phần mềm."
    },
    {
        value: "item-5",
        question: "Tôi có thể thiết lập quyền truy cập của người dùng?",
        answer: "Bạn có thể dễ dàng thiết lập quyền truy cập người dùng ngay trên phần mềm."
    },
    {
        value: "item-6",
        question: "Dữ liệu được bảo mật như thế nào?",
        answer: "Mã hóa dữ liệu được sử dụng để giữ cho dữ liệu an toàn trong khi sử dụng phần mềm."
    },
    // {
    //     value: "item-7",
    //     question: "FMRP có thể tuỳ chỉnh được hay không?",
    //     answer: "FMRP có thể được tuỳ chỉnh và mở rộng cho phù hợp với tính năng đặc thù cho từng doanh nghiệp."
    // },
];

const QuestionsFmrpSection = (props: Props) => {
    const { isStatePageFmrp, queryKeyIsStatePageFmrp } = useStatePageFmrp()

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-8 gap-6 relative z-[1]'>
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Câu hỏi thường gặp</span>
                </div>

                <div className='3xl:max-w-5xl xl:max-w-4xl max-w-3xl w-full mx-auto'>
                    <Accordion
                        onValueChange={(value: string) => queryKeyIsStatePageFmrp({ isOpenAccordion: value })}
                        type="single"
                        collapsible
                        className='w-full space-y-8'
                    >
                        {
                            questions?.map((item: any, index) => {
                                const isActive = isStatePageFmrp.isOpenAccordion === item.value;

                                return (
                                    <AccordionItem
                                        key={`accordion-${item.value}`}
                                        value={item.value}
                                        className='w-full border border-[#F3F4FE] rounded-xl transition-shadow duration-500 ease-in-out'
                                        style={{
                                            boxShadow: "0px 20px 95px 0px #C9CBCC4D"
                                        }}
                                    >
                                        <AccordionTrigger className={`${isActive ? "bg-[#11315B] text-white rounded-t-xl" : "bg-white text-[#1A2025] hover:bg-[#11315B] hover:text-white rounded-xl"} focus-visible:outline-none w-full xxl:px-7 xxl:py-6 px-6 py-5 hover:no-underline custom-transition`}>
                                            <div className='flex items-center gap-4 justify-between w-full group transition-all duration-150 ease-linear'>
                                                <div className={`3xl:text-lg text-base transition-all duration-150 ease-linear font-bold text-start`}>
                                                    {item.question}
                                                </div>
                                                <div className={`${isActive ? "bg-[#0F4F9E] text-[#EBF5FF]" : "bg-[#EBF5FF] text-[#0F4F9E]"} size-11 p-3.5 shrink-0 flex items-center justify-center rounded-[10px] custom-transition`}>
                                                    <CaretUpIcon className={`${isActive ? "" : "rotate-180"} size-full shrink-0 transition-transform duration-500`} />
                                                </div>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className='xxl:p-7 p-6 text-[#33404A] 3xl:text-base text-base font-medium max-w-full'>
                                            {/* <p dangerouslySetInnerHTML={{ __html: item.answer }} /> */}
                                            <p>{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default QuestionsFmrpSection