'use client'
import SalyAnimation from '@/components/common/animations/common/SalyAnimation';
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle';
import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb';
import { useResizeStore } from '@/stores/useResizeStore';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useMemo } from 'react';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Liên hệ" }
];

const IntroContactSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    const heroPerTitle1 = useMemo(
        () => "Liên hệ".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    return (
        <div className='3xl:py-24 xl:py-20 lg:py-16 pt-8 lg:h-full h-[75svh] relative'>
            {/* <button onClick={() => { setTheme("fmrp") }}>
                Hello
            </button> */}
            {
                !isVisibleTablet &&
                <React.Fragment>
                    {/* Hình nền trái - Tối ưu lazy loading */}
                    <div className='absolute lg:top-1/2 top-[80%] left-0 lg:-translate-y-1/2 -translate-y-[80%] 3xl:h-[270px] xl:h-[250px] lg:h-[200px] md:h-[300px] h-[200px] aspect-square pointer-events-none'>
                        <Image
                            alt="Logo Left"
                            width={330}
                            height={400}
                            src="/background/ui/contact/intro/hand-left.webp"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 200px, 270px" // Responsive sizes
                            priority
                        />
                    </div>

                    {/* Hình nền phải - Tối ưu lazy loading */}
                    <div className='absolute lg:top-1/2 top-[80%] -right-0 lg:-translate-y-1/2 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none'>
                        <Image
                            alt="Logo Right"
                            width={300}
                            height={350}
                            src="/background/ui/contact/intro/hand-right.webp"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 150px, 195px"
                            priority
                        />
                    </div>
                </React.Fragment>
            }

            {/* Container chính */}
            <div className='custom-container flex flex-col items-center lg:justify-between gap-2 h-full relative z-[2]'>
                <div className='lg:pt-12 pt-20 3xl:pb-16 lg:pb-10'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 md:pt-20">
                    <h2 className="text-title-section font-normal space-x-2">
                        <span className="relative flex justify-center">
                            {/* Background trượt từ trái sang phải */}
                            <motion.span
                                className="absolute lg:bottom-[16%] bottom-[10%] bg-[#A3EED6] rounded-full h-[26%] lg:w-[95%] w-[98%]"
                                initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
                                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Hiện dần ra
                                transition={{
                                    duration: 2, // Làm chậm hiệu ứng để mượt hơn
                                    delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                                    ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
                                }}
                            />

                            <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle1} />
                        </span>
                    </h2>

                    <p className='text-base-default text-[#33404A] font-medium text-center'>
                        Bạn có thắc mắc hoặc cần tư vấn giải pháp? Hãy trao đổi ngay.
                    </p>
                    {
                        isVisibleTablet &&
                        <SalyAnimation className="w-[200px] h-auto aspect-square pointer-events-none">
                            <Image
                                width={400}
                                height={400}
                                alt="saly"
                                src="/background/ui/about-us/saly.webp"
                                className="size-full object-contain"
                            />
                        </SalyAnimation>
                    }
                </div>
            </div>
        </div>
    )
}

export default IntroContactSection