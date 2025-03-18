import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle'
import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb';
import React, { useEffect, useMemo, useRef, useState } from 'react'

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image';
import SalyAnimation from '@/components/common/animations/common/SalyAnimation';
import { useResizeStore } from '@/stores/useResizeStore';
import { useTheme } from 'next-themes';
import AnimatedTitleGradient from '@/components/common/animations/text/AnimatedTitleGradient';
import { useLenis } from '@/contexts/LenisContext';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "#" },
    { label: "Blog" }
];

// CSS gradient tái sử dụng
const gradientStyle = {
    // backgroundImage: `linear-gradient(to right, #53B086 0%, #53B086 50%, #85EEB3 100%), 
    // radial-gradient(219.3% 1471.82% at 24.6% -30.56%, 
    // rgba(84, 171, 177, 0) 0%, 
    // rgba(84, 171, 177, 0.409141) 34.37%, 
    // rgba(133, 238, 179, 0.71) 51.52%, 
    // rgba(84, 171, 177, 0) 100%)`,
    background: "radial-gradient(17.7% 241.79% at 46.95% 25.05%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.38%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%), linear-gradient(90deg, #53B086 0%, rgba(83, 176, 134, 0.99) 27.5%)"
};

const IntroBlogSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    const { lenis } = useLenis(); // ✅ Lấy Lenis từ context
    const sectionRef = useRef<HTMLDivElement>(null);

    // ✅ Dùng `useMotionValue` để tránh re-render
    const scrollY = useMotionValue(0);
    const yLeft = useTransform(scrollY, [0, 500], [0, 100]); // ✅ Điều chỉnh phạm vi trượt
    const yRight = useTransform(scrollY, [0, 500], [0, 100]);

    // ✅ Theo dõi scroll bằng requestAnimationFrame
    useEffect(() => {
        if (!lenis) return;

        const updateScroll = () => {
            scrollY.set(lenis.scroll);
            requestAnimationFrame(updateScroll);
        };

        requestAnimationFrame(updateScroll);
        return () => lenis.off("scroll", updateScroll);
    }, [lenis, scrollY]);

    const heroPerTitle1 = useMemo(
        () => "Blog".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const heroPerTitle2 = useMemo(
        () =>
            "FOSO"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    const heroPerTitle3 = useMemo(
        () =>
            "Cập nhật tin tức"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle2.length, letter })),
        [heroPerTitle2]
    );

    const heroPerTitle4 = useMemo(
        () =>
            "Mới nhất"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle3.length, letter })),
        [heroPerTitle3]
    );


    return (
        <div ref={sectionRef} className='custom-padding-section lg:h-full h-[80svh] relative'>
            {
                !isVisibleTablet &&
                <React.Fragment>
                    {/* Hình nền trái - Tối ưu lazy loading */}
                    {/* <div className='absolute lg:top-1/2 top-[80%] left-6 lg:-translate-y-1/2 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none'> */}
                    <motion.div
                        className="absolute lg:top-1/4 top-[80%] left-6 lg:-translate-y-1/4 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none z-[1]"
                        style={{ y: yLeft }} // ✅ Gán giá trị y từ `useTransform`
                        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                    >
                        <Image
                            alt="Logo Left"
                            width={600}
                            height={400}
                            src="/background/ui/blogs/saly-calendar.png"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 200px, 270px" // Responsive sizes
                            priority
                        />
                    </motion.div>
                    {/* </div> */}

                    {/* Hình nền phải - Tối ưu lazy loading */}
                    <motion.div
                        className="absolute lg:top-1/4 top-[80%] right-6 lg:-translate-y-1/4 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none z-[1]"
                        style={{ y: yRight }} // ✅ Gán giá trị y từ `useTransform`
                        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
                    >
                        <Image
                            alt="Logo Right"
                            width={600}
                            height={400}
                            src="/background/ui/blogs/saly-hand-1.png"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 150px, 195px"
                            priority
                        />
                    </motion.div>
                </React.Fragment>
            }

            <div className='absolute w-[500px] h-auto aspect-square rounded-[40px] -translate-x-[40%] -bottom-72 pointer-events-none'>
                <Image
                    width={500}
                    height={500}
                    alt="green-blur"
                    src="/background/blur/bg-green-v2.svg"
                    className="size-full object-contain"
                />
            </div>

            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2]'>
                <div className='lg:pt-12 pt-20 3xl:pb-16 lg:pb-10'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 md:pt-20 pt-28">
                    <h2 className="text-title-section text-center font-normal space-x-2 ">
                        <span className='space-x-2'>
                            <AnimatedTitle className='text-[#050505] font-normal' heroPerTitle={heroPerTitle1} />
                            <AnimatedTitleGradient
                                className='relative z-10 font-extrabold textGradientToBottomRight'
                                heroPerTitle={heroPerTitle2}
                                delay={0.4}
                                style={{
                                    ...gradientStyle,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            />
                            <span>–</span>
                        </span>

                        <br />

                        <span className='space-x-2'>
                            <AnimatedTitle className='text-[#050505] font-normal' heroPerTitle={heroPerTitle3} />

                            <span className="relative">
                                {/* Background trượt từ trái sang phải */}
                                <motion.span
                                    className="absolute bottom-[6%] left-[1%] bg-[#A3EED6] rounded-full h-[24px] w-full"
                                    initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
                                    animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Hiện dần ra
                                    transition={{
                                        duration: 2, // Làm chậm hiệu ứng để mượt hơn
                                        delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                                        ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
                                    }}
                                />

                                <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle4} />
                            </span>
                        </span>
                    </h2>

                    <p className='text-default text-[#33404A] font-medium text-center'>
                        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
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

export default IntroBlogSection