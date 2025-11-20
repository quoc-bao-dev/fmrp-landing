"use client"
import Image from 'next/image'
import React, { memo, useMemo, useRef } from 'react'

import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'

import { motion } from 'framer-motion'
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation';

import dynamic from 'next/dynamic';

const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });
const AnimatedTitle = dynamic(() => import('@/components/common/animations/text/AnimatedTitle'), { ssr: true });
const AnimatedTitleGradient = dynamic(() => import('@/components/common/animations/text/AnimatedTitleGradient'), { ssr: true });
const BlurBackgroundFixed = dynamic(() => import('../ui/common/BlurBackgroundFixed'), { ssr: true })

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giải pháp", href: "#" },
    { label: "Sản phẩm" }
];

// CSS gradient tái sử dụng
const gradientStyle = {
    background: `linear-gradient(107deg, #0375F3 13.08%, #036EEA, #0267E1, #0261D7, #025ACE, #0254C5, #024EBC, #0148B3, #0142A9, #013DA0)`,
};


const HeroFmrpSection = memo((props: Props) => {
    const strings = ["Tối Ưu", "Sản Xuất, ", "Tối Đa", "Năng Suất,", "Tối Thiểu", "Lãng Phí"]
    const sectionRef = useRef<HTMLDivElement>(null);

    const heroTitles = useMemo(() => {
        const baseDelay = 0.07;
        let cumulativeIndex = 0;

        return strings.map(text => {
            const letters = text.split("").map((letter, index) => ({
                id: cumulativeIndex + index,
                letter
            }))
            const delay = cumulativeIndex * baseDelay
            cumulativeIndex += letters.length
            return { letters, delay }
        })
    }, [])

    return (
        <div ref={sectionRef} className='custom-padding-section lg:h-screen h-svh relative bg-transparent'>
            <BlurBackgroundFixed />

            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2] lg:pt-12 pt-20'>
                <CustomBreadcrumb items={breadcrumbItems} />

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 pt-0">
                    <AnimatedReveal className="3xl:w-[330px] 2xl:w-[280px] xxl:w-[260px] lg:w-[240px] w-[200px] h-auto aspect-2.57/1 cursor-default pointer-events-none">
                        <img
                            alt="logo"
                            src="/logo/fmrp/logo-fmrp.svg"
                            className="size-full object-contain"
                        />
                    </AnimatedReveal>

                    <h2 className="3xl:text-[64px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[38px] text-[26px] 3xl:!leading-[94px] 2xl:!leading-[84px] xxl:!leading-[80px] xl:!leading-[70px] lg:!leading-[60px] md:!leading-[50px] !leading-[36px] tracking-normal text-center font-normal align-middle">
                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroTitles[0].letters}
                            delay={heroTitles[0].delay}
                            style={{ ...gradientStyle }}
                        />
                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroTitles[1].letters}
                            delay={heroTitles[1].delay}
                        />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroTitles[2].letters}
                            delay={heroTitles[2].delay}
                            style={{ ...gradientStyle }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroTitles[3].letters}
                            delay={heroTitles[3].delay}
                        />
                        <br />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroTitles[4].letters}
                            delay={heroTitles[4].delay}
                            style={{ ...gradientStyle }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroTitles[5].letters}
                            delay={heroTitles[5].delay}
                        />
                    </h2>
                </div>
            </div>
        </div >
    )
})

// Đặt displayName để debug dễ hơn
HeroFmrpSection.displayName = 'HeroFmrpSection';

export default HeroFmrpSection