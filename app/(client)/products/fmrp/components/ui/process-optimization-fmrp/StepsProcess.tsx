import React, { useCallback, useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { useResizeStore } from '@/stores/useResizeStore';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import BlurImage from '@/components/common/blur/BlurImage';
import AnimatedCircle from '@/components/common/animations/ui/AnimatedCircle';
import { uuidv4 } from '@/lib/uuid';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import AnimatedCircleFmrp from '@/components/common/animations/ui/AnimatedCircleFmrp';
import ProcessManufacture from './ProcessManufacture';
import FlowChart from './FlowChart';

type Props = {}

const steps = [
    {
        id: uuidv4(),
        title_gradient: "Tăng trưởng bền vững",
        title_normal: "Tối ưu quy trình sản xuất –",
        image: "/background/ui/fmrp/process/bg1.svg",
        image_mobile: "/background/ui/fmrp/process/bg5.svg",
        hightlight_first: false,
        description: "Trợ lý sản xuất thông minh, giúp doanh nghiệp lập kế hoạch hiệu quả, theo dõi lệnh sản xuất, quản lý nguyên vật liệu (BOM) và giám sát tiến độ theo thời gian thực.",
        // component: ProcessManufacture
    },
    {
        id: uuidv4(),
        title_gradient: "Tăng Tốc Doanh Thu,",
        title_normal: "Giảm Thiểu Rủi Ro",
        image: "/background/ui/fmrp/process/bg2.svg",
        image_mobile: "/background/ui/fmrp/process/bg6.svg",
        hightlight_first: true,
        description: "Với giao diện trực quan, vận hành linh hoạt, FMRP giúp tối ưu quy trình, giảm lãng phí và nâng cao năng suất, đảm bảo doanh nghiệp vận hành trơn tru và phát triển bền vững.",
        // component: ProcessManufacture
    },
    {
        id: uuidv4(),
        title_gradient: "kiểm soát chặt chẽ",
        title_normal: "Tối ưu chuỗi cung ứng,",
        image: "/background/ui/fmrp/process/bg3.svg",
        image_mobile: "/background/ui/fmrp/process/bg7.svg",
        hightlight_first: false,
        description: "Theo dõi nhập kho đến quản lý công nợ. Hệ thống tự động đồng bộ dữ liệu, giúp kiểm soát hàng tồn kho, hạn chế sai sót và tối ưu dòng tiền. Đảm bảo chuỗi cung ứng vận hành hiệu quả.",
        // component: ProcessManufacture
    },
    {
        id: uuidv4(),
        title_gradient: "Mọi ngành nghề",
        title_normal: "Ứng dụng cho",
        image: "/background/ui/fmrp/process/bg4.svg",
        image_mobile: "/background/ui/fmrp/process/bg4.svg",
        hightlight_first: false,
        description: "Với giao diện trực quan, vận hành linh hoạt, FMRP giúp tối ưu quy trình, giảm lãng phí và nâng cao năng suất, đảm bảo doanh nghiệp vận hành trơn tru và phát triển bền vững.",
        // component: ProcessManufacture
    },
];

const StepsProcess = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [activeStep, setActiveStep] = useState<number>(0);
    const stepRefs = useRef<(HTMLElement | null)[]>([]);
    const scrollTimeout = useRef<number | null>(null);

    const handleScroll = useCallback(() => {
        if (scrollTimeout.current) return;
        scrollTimeout.current = window.requestAnimationFrame(() => {
            let newStepIndex = 0;
            stepRefs.current.forEach((element, index) => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2) {
                        newStepIndex = index;
                    }
                }
            });
            setActiveStep((prev) => (prev !== newStepIndex ? newStepIndex : prev));
            scrollTimeout.current = null;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) cancelAnimationFrame(scrollTimeout.current);
        };
    }, [handleScroll]);

    return (
        <div className='px-10 py-12 flex flex-col 3xl:gap-8 gap-4 w-full relative overflow-x-hidden'>
            {
                steps.map((item, index) => {
                    // const ProcessComponent = item.component;

                    return (
                        <div
                            key={`item-${item.id}`}
                            ref={(el) => { stepRefs.current[index] = el }}
                            className={`relative`}
                        >
                            {/* Nội dung */}
                            <AnimatedReveal
                                from="left"
                                effect='fade'
                                // once={false}
                                className={`${index !== steps.length - 1 ? "lg:min-h-[100vh] h-full" : "3xl:pb-10 pb-8"} -space-y-10  flex flex-col items-center justify-start gap-10 w-full max-w-full lg:pl-20 pl-8 relative`}
                            >
                                <div className='flex flex-col items-center justify-center gap-2'>
                                    <span className="font-extrabold text-title-section-small text-[#1A2025] capitalize space-x-2 text-center">
                                        {item.hightlight_first ? (
                                            <>
                                                <span className="lg:order-2">{item.title_gradient}</span>
                                                <span className="lg:order-1" style={{
                                                    background: "linear-gradient(107.37deg, #0375F3 30.15%, #036EEA 32.4%, #0267E1 34.65%, #0261D7 36.89%, #025ACE 39.14%, #0254C5 41.39%, #024EBC 43.63%, #0148B3 45.88%, #0142A9 48.13%, #013DA0 50.38%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                }}>
                                                    {item.title_normal}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="lg:order-1">{item.title_normal}</span>
                                                <span className="lg:order-2" style={{
                                                    background: "linear-gradient(107.37deg, #0375F3 30.15%, #036EEA 32.4%, #0267E1 34.65%, #0261D7 36.89%, #025ACE 39.14%, #0254C5 41.39%, #024EBC 43.63%, #0148B3 45.88%, #0142A9 48.13%, #013DA0 50.38%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent"
                                                }}>
                                                    {item.title_gradient}
                                                </span>
                                            </>
                                        )}
                                    </span>

                                    <div className='text-base-default text-[#33404A] font-medium md:text-center text-start 3xl:max-w-[65%] lg:max-w-[70%]'>
                                        <span>
                                            {item.description}
                                        </span>
                                    </div>
                                </div>

                                {/* <div className='w-full h-full max-w-full relative'>
                                    <ProcessComponent />
                                </div> */}
                                <div className={`w-full max-w-full flex items-center justify-center`}>
                                    <BlurImage
                                        src={(isVisibleTablet ? item.image_mobile : item.image) || ""}
                                        alt={"image"}
                                        width={800}
                                        height={600}
                                        className=" w-full h-auto aspect-video object-contain relativee z-0"
                                        classNameContainer='w-full h-auto aspect-video relativee z-0'
                                        // style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                                        loading="lazy"
                                    />
                                </div>

                                {/* <div className='space-y-2 w-full 2xl:max-w-[50%] lg:max-w-[55%] max-w-full lg:order-2 order-1'>
                                    <div className='relative w-fit '>
                                        <h3 className="3xl:!text-2xl xl:!text-2xl lg:!text-xl !text-2xl font-extrabold text-[#33404A] relative z-[1]">
                                            {step.title}
                                        </h3>
                                        <div className='absolute 2xl:-top-10 xl:-top-11 lg:-top-10 -top-12 left-0 z-0'>
                                            <h2
                                                className='3xl:text-[54px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[52px] text-[52px] font-bold uppercase w-fit'
                                                style={{
                                                    // backgroundImage: "linear-gradient(420deg, #FFFFFF 10%, #B3B3B3 80%, #FFFFFF 100%)"
                                                    background: "linear-gradient(218.75deg, #CDCDCE 43.55%, #FFFFFF 80.72%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >

                                                {step.word}
                                            </h2>
                                        </div>
                                    </div>

                                    <p className="3xl:!text-xl xl:!text-lg lg:!text-base !text-base text-[#33404A] font-medium">{step.description}</p>
                                </div> */}
                            </AnimatedReveal>

                            {/* Thanh timeline */}
                            <div className={`${index !== steps.length - 1 ? "items-center justify-center" : "items-center justify-start"} flex flex-col gap-8 h-full absolute top-0 left-0 transform -translate-x-1/2`}>
                                {/* Hình tròn Active */}
                                <AnimatedCircleFmrp active={activeStep === index} />

                                {/* Thanh dọc (chỉ vẽ nếu không phải bước cuối cùng) */}
                                {
                                    index !== steps.length - 1 && (
                                        <div className="w-[1px] h-full bg-[#D9E1E7]"></div>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StepsProcess