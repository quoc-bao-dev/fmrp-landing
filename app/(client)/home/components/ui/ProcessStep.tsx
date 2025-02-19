import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {}

const steps = [
    {
        id: 1,
        title: "Tiếp nhận sâu sắc và thấu hiểu",
        description:
            "Lắng nghe sâu sắc, thấu hiểu trọn vẹn, biến mong muốn thành khởi nguồn cho giải pháp hoàn hảo.",
        image: "/background/foso/foso-step1.svg",
    },
    {
        id: 2,
        title: "Đề xuất giải pháp tối ưu",
        description:
            "Đánh giá toàn diện, chắt lọc tinh tuý để kiến tạo giải pháp tối ưu, mở lối cho hiệu quả bền vững.",
        image: "/background/foso/foso-step2.svg",
    },
    {
        id: 3,
        title: "Định phí, vạch thời gian",
        description:
            "Định hình ngân sách, ấn định lộ trình thời gian, giúp khách hàng nắm bắt rõ ràng bức tranh dự án.",
        image: "/background/foso/foso-step3.svg",
    },
    {
        id: 4,
        title: "Quản lý dự án trọn vẹn",
        description:
            "Điều phối dự án từ đàm phán ký kết hợp đồng, triển khai thực thi đến vận hành và bảo trì bền vững.",
        image: "/background/foso/foso-step4.svg",
    },
];

const ProcessStep = (props: Props) => {
    const [activeStep, setActiveStep] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            let stepIndex = 0;

            steps.forEach((_, index) => {
                const element = document.getElementById(`step-${index}`);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2) {
                        stepIndex = index;
                    }
                }
            });

            setActiveStep(stepIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            {/* Timeline Steps */}
            <div className="relative flex flex-col gap-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        id={`step-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className={`relative flex items-center gap-20 justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            }`}
                    >

                        {/* Hình ảnh */}
                        <div className="w-1/2 aspect-square relativee z-0">
                            <Image
                                src={step.image}
                                alt={step.title}
                                width={1920}
                                height={1080}
                                className="size-full rounded-lg object-contain aspect-square"
                                style={{
                                    WebkitMaskImage:
                                        "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)",
                                }}
                                loading='lazy'
                            />
                        </div>

                        {/* Nội dung */}
                        <div className={`w-1/2 space-y-2`}>
                            <div className='relative w-fit'>
                                <h3 className="text-title font-bold text-[#33404A] relative z-[1]">
                                    {step.title}
                                </h3>
                                <div
                                    className='absolute -top-14 -right-12 z-0'
                                // style={{
                                //     background: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 0%, #F9FBFC 100%)"
                                // }}
                                >
                                    <h3
                                        className='text-title-section font-extrabold'
                                        style={{
                                            background: "linear-gradient(209deg, #09090B -58.41%, #FFF 69.81%)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {index < 10 && 0}{index + 1}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-button text-[#33404A] font-medium">{step.description}</p>
                        </div>

                        <div className={`${index !== steps.length - 1 ? "items-center justify-center" : "items-center justify-start"} flex flex-col gap-8 h-full absolute top-0 left-1/2 transform -translate-x-1/2`}>
                            {/* Hình tròn Active */}
                            <motion.div
                                className={`size-4 shrink-0 rounded-full flex items-center justify-center font-bold transition-all duration-300`}
                                style={{
                                    background: activeStep === index ? "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)" : "#809FB8"
                                }}
                            />

                            {/* Thanh dọc (chỉ vẽ nếu không phải bước cuối cùng) */}
                            {
                                index !== steps.length - 1 && (
                                    <div className="w-[1px] h-full bg-[#D9E1E7]"></div>
                                )
                            }
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >
    )
}

export default ProcessStep