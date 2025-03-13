import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { memo, useMemo, useRef, useState, useEffect } from 'react'
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle';
import { motion } from 'framer-motion'
import AnimatedTitleGradient from '@/components/common/animations/text/AnimatedTitleGradient';
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation';
import BlurBackground from '../ui/common/BlurBackgroundFixed';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giải pháp", href: "#" },
    { label: "Sản phẩm" }
];

// CSS gradient tái sử dụng
const gradientStyle = {
    // background: `linear-gradient(to right, #0375F3, #013DA0)`,
    background: `linear-gradient(107deg, #0375F3 13.08%, #036EEA, #0267E1, #0261D7, #025ACE, #0254C5, #024EBC, #0148B3, #0142A9, #013DA0)`,
    // background: `linear-gradient(107deg, #0375F3 43.86%, #036EEA 45.1%, #0267E1 46.34%, #0261D7 47.57%, #025ACE 48.81%, #0254C5 50.05%, #024EBC 51.29%, #0148B3 52.52%, #0142A9 53.76%, #013DA0 55%)`
};

const HeroFmrpSection = memo((props: Props) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    // ✅ Tạo danh sách chữ để hiển thị với hiệu ứng Animation
    const heroPerTitle1 = useMemo(
        () => "Tối Ưu".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const heroPerTitle2 = useMemo(
        () =>
            "Sản Xuất, "
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    const heroPerTitle3 = useMemo(
        () =>
            "Tối Đa"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle2.length, letter })),
        [heroPerTitle2]
    );

    const heroPerTitle4 = useMemo(
        () =>
            "Năng Suất,"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle3.length, letter })),
        [heroPerTitle3]
    );

    const heroPerTitle5 = useMemo(
        () =>
            "Tối Thiểu"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle4.length, letter })),
        [heroPerTitle4]
    );

    const heroPerTitle6 = useMemo(
        () =>
            "Lãng Phí"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle5.length, letter })),
        [heroPerTitle5]
    );

    return (
        <div ref={sectionRef} className='custom-padding-section lg:h-screen h-svh relative bg-transparent'>
            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2] lg:pt-12 pt-20'>
                <CustomBreadcrumb items={breadcrumbItems} />

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 pt-0">
                    <AnimatedReveal>
                        <motion.div
                            initial={false}
                            animate="rest"
                            whileTap="press"
                            variants={variantButtonScaleZoom}
                            className="3xl:w-[330px] 2xl:w-[280px] xxl:w-[260px] lg:w-[240px] w-[200px] h-auto aspect-2.57/1 cursor-default"
                        // onClick={() => { scrollToTop() }}
                        >
                            <Image
                                alt="logo"
                                src="/logo/fmrp/logo-fmrp.svg"
                                width={134}
                                height={55}
                                quality={100}
                                priority
                                className="size-full object-contain aspect-2.57/1"
                            />
                        </motion.div>
                    </AnimatedReveal>

                    <h2 className="3xl:text-[64px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[38px] text-[26px] 3xl:!leading-[94px] 2xl:!leading-[84px] xxl:!leading-[80px] xl:!leading-[70px] lg:!leading-[60px] md:!leading-[50px] !leading-[36px] tracking-normal text-center font-normal align-middle">
                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle1}
                            delay={0}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />
                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle2}
                            delay={1}
                        />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle3}
                            delay={1.5}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle4}
                            delay={2}
                        />
                        <br />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle5}
                            delay={2.5}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle6}
                            delay={3.2}
                        />
                    </h2>
                </div>
            </div>

            <BlurBackground />
        </div >
    )
})

// Đặt displayName để debug dễ hơn
HeroFmrpSection.displayName = 'HeroFmrpSection';

export default HeroFmrpSection