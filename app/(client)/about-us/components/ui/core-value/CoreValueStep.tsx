"use client"
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import AnimatedCircle from '@/components/common/animations/ui/AnimatedCircle';
import BlurImage from '@/components/common/blur/BlurImage';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import { uuidv4 } from '@/lib/uuid';
import { useResizeStore } from '@/stores/useResizeStore';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {}

const steps = [
    {
        id: uuidv4(),
        title: "Giải quyết",
        description: "Lắng nghe sâu sắc, thấu hiểu trọn vẹn, biến mong muốn thành khởi nguồn cho giải pháp hoàn hảo.",
        image: "/background/ui/mascot/about1.webp",
        word: "solve"
    },
    {
        id: uuidv4(),
        title: "Giải pháp",
        description: "Mỗi cá nhân đến từ FOSO luôn trau dồi học hỏi và tìm kiếm tri thức mới để mang đến giải pháp tối ưu hóa nhất cho khách hàng.",
        image: "/background/ui/mascot/about2.webp",
        word: "solution"
    },
    {
        id: uuidv4(),
        title: "Cộng đồng",
        description: "Mỗi cá nhân đến từ FOSO luôn đặt trọng tâm các dự án phải mang tinh thần tập thể vì một tương lai Việt Nam phát triển, bền vững và đoàn kết.",
        image: "/background/ui/mascot/about3.webp",
        word: "socially"
    },
    {
        id: uuidv4(),
        title: "Tâm hồn",
        description: "Mỗi cá nhân đến từ FOSO luôn coi trọng đạo đức nghề nghiệp, đạo đức xã hội ở tiêu chuẩn cao nhất.",
        image: "/background/ui/mascot/about4.webp",
        word: "soul"
    },
];

const CoreValueStep = (props: Props) => {
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
        <div className='w-full relative overflow-x-hidden'>
            <div className=" 3xl:max-w-5xl xl:max-w-4xl max-w-3xl mx-auto px-6 py-12 flex flex-col gap-10 ">
                {
                    steps.map((step, index) => (
                        <div
                            key={`step-${step.id}`}
                            ref={(el) => { stepRefs.current[index] = el }}
                            className={`relative`}
                        >
                            {/* Nội dung */}
                            <AnimatedReveal
                                // from="left"
                                effect='fade'
                                // once={false}
                                className={`${index !== steps.length - 1 ? "3xl:pt-20 lg:pt-10 pt-12 lg:h-[80vh]" : " pb-10"}  flex lg:flex-row flex-col lg:items-start xl:gap-20 gap-16 w-full max-w-full lg:pl-20 pl-8 relative`}
                            >
                                {!isVisibleTablet && (index !== steps.length - 1) &&
                                    <BlurredBackground className='top-20 -right-[90%] z-40' />
                                }

                                <div className={`w-full 2xl:max-w-[50%] lg:max-w-[45%] max-w-full flex items-center justify-center lg:order-1 order-2`}>
                                    <BlurImage
                                        src={step.image}
                                        alt={step.title}
                                        width={800}
                                        height={600}
                                        className=" w-full h-auto aspect-square object-contain relativee z-0"
                                        classNameContainer='w-full h-auto aspect-square relativee z-0'
                                        // style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                                        loading="lazy"
                                    />
                                </div>

                                <div className='space-y-2 w-full 2xl:max-w-[50%] lg:max-w-[55%] max-w-full lg:order-2 order-1'>
                                    <div className='relative '>
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
                                </div>
                            </AnimatedReveal>

                            {/* Thanh timeline */}
                            <div className={`${index !== steps.length - 1 ? "items-center justify-center" : "items-center justify-start"} flex flex-col gap-8 h-full absolute top-0 left-0 transform -translate-x-1/2`}>
                                {/* Hình tròn Active */}
                                <AnimatedCircle active={activeStep === index} />

                                {/* Thanh dọc (chỉ vẽ nếu không phải bước cuối cùng) */}
                                {
                                    index !== steps.length - 1 && (
                                        <div className="w-[1px] h-full bg-[#D9E1E7]"></div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CoreValueStep