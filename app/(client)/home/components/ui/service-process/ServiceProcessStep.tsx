import React, { useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { useResizeStore } from '@/stores/useResizeStore';

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

const imageVariants = {
    hiddenLeft: { opacity: 0, x: -100 }, // Trượt từ trái
    hiddenRight: { opacity: 0, x: 100 }, // Trượt từ phải
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
        },
    }
};


const ServiceProcessStep = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [activeStep, setActiveStep] = useState<number>(0);

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Ngừng theo dõi sau khi đã hiển thị
                }
            },
            { threshold: 0.05 } // Khi 20% của section vào viewport thì kích hoạt animation
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="3xl:max-w-5xl xl:max-w-4xl max-w-3xl mx-auto px-6 py-12">
            {/* Timeline Steps */}
            <div className="relative flex flex-col gap-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        id={`step-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Chỉ chạy khi visible
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className={`${!isVisibleTablet ? index % 2 === 0 ? "flex-row" : "flex-row-reverse" : ""} relative flex items-center gap-20 justify-between`}
                    >
                        {/* Hình ảnh hiển thị từ desktop */}
                        {
                            !isVisibleTablet &&
                            <motion.div
                                className={`${index % 2 === 0 ? "justify-end" : "justify-start"} w-1/2 max-w-[50%] flex`}
                                initial={index % 2 === 0 ? "hiddenRight" : "hiddenLeft"}
                                animate={isVisible ? "visible" : "hiddenRight"} // Chỉ chạy animation khi visible
                                variants={imageVariants}
                            >
                                <div className="3xl:w-full xxl:w-[90%] xl:w-[85%] w-[90%] aspect-square relativee z-0">
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
                            </motion.div>
                            // <div className={`${index % 2 === 0 ? "justify-end" : "justify-start"} w-1/2 max-w-[50%] flex`}>
                            //     <div className="3xl:w-full xxl:w-[90%] xl:w-[85%] w-[90%] aspect-square relativee z-0">
                            //         <Image
                            //             src={step.image}
                            //             alt={step.title}
                            //             width={1920}
                            //             height={1080}
                            //             className="size-full rounded-lg object-contain aspect-square"
                            //             style={{
                            //                 WebkitMaskImage:
                            //                     "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)",
                            //             }}
                            //             loading='lazy'
                            //         />
                            //     </div>
                            // </div>
                        }

                        {/* Nội dung */}
                        <div className={`lg:w-1/2 w-full lg:max-w-[50%] max-w-full md:pl-10 pl-6 space-y-2`}>

                            <div className='relative w-fit '>
                                <h3 className="3xl:!text-2xl xl:!text-xl lg:!text-lg !text-lg font-bold text-[#33404A] relative z-[1]">
                                    {step.title}
                                </h3>
                                <div className='absolute 3xl:-top-14 xl:-top-12 md:-top-10 -top-10 3xl:-right-12 xl:-right-10 md:-right-7 -right-7 z-0'>
                                    <h3
                                        className='3xl:text-[64px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[52px] text-[52px] font-extrabold '
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

                            <p className="3xl:!text-xl xl:!text-lg lg:!text-base !text-base text-[#33404A] font-medium">{step.description}</p>

                            {/* Hình ảnh hiển thị ở giao diện tablet */}
                            {
                                isVisibleTablet &&
                                <div className={`w-full flex justify-center`}>
                                    <div className="md:w-1/2 w-full aspect-square relativee z-0 ">
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
                                </div>
                            }
                        </div>

                        <div className={`${index !== steps.length - 1 ? "items-center justify-center" : "items-center justify-start"}
                             flex flex-col gap-8 h-full absolute top-0 lg:left-1/2 left-0 transform -translate-x-1/2
                             `}>
                            {/* Hình tròn Active */}
                            <div
                                className={`relative size-4 shrink-0 rounded-full flex items-center justify-center font-bold transition-all duration-300`}
                                style={{
                                    background: activeStep === index ? "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)" : "#809FB8"
                                }}
                            >
                                {
                                    activeStep === index ?
                                        <motion.div
                                            className="absolute size-10 rounded-full bg-green-400 opacity-20"
                                            initial={{ scale: 1, opacity: 0.3 }}
                                            animate={{
                                                scale: [1, 1.5],
                                                opacity: [0.3, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeOut",
                                            }}
                                        />
                                        :
                                        <div className="absolute size-8 rounded-full bg-[#33404A] opacity-20" />
                                }
                            </div>

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

export default ServiceProcessStep