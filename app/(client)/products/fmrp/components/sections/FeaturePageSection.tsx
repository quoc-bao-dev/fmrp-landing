"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, MessageCircle } from "lucide-react"
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import FeatureFirst from '../ui/feature-page/FeatureFirst';
import FeatureSecond from '../ui/feature-page/FeatureSecond';
import FeatureThird from '../ui/feature-page/FeatureThird';
import FeatureFour from '../ui/feature-page/FeatureFour';
import { useInView } from 'react-intersection-observer';
import UnderlineCurveLinearSvg2 from '../../../../../../components/icons/underline/UnderlineCurveLinearSvg2';
import { useMemo } from 'react';
import AnimatedTitle from '../../../../../../components/common/animations/text/AnimatedTitle';
import { useResizeStore } from '../../../../../../stores/useResizeStore';

const FeaturePageSection = () => {
    const { isVisibleTablet } = useResizeStore()
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const heroPerTitle1 = useMemo(
        () => "...Và nhiều".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const heroPerTitle2 = useMemo(
        () =>
            "tính năng khác"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    const heroPerTitle3 = useMemo(
        () =>
            "sắp được ra mắt"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle2.length, letter })),
        [heroPerTitle2]
    );

    return (
        <div
            className="min-h-screen custom-padding-section"
            style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 10.1%, #F0F8FF 90.89%, #FFFFFF 100.99%)"
            }}
        >
            <div className="custom-container 3xl:space-y-24 lg:space-y-20 space-y-0">
                {/* Header */}
                <AnimatedReveal
                    effect='fade'
                    className={`flex flex-col items-center justify-center gap-2`}
                >
                    <span className="font-extrabold text-title-section-small text-[#1A2025] capitalize space-x-2 text-center">
                        <span className="lg:order-1">Các Tính Năng</span>
                        <span className="lg:order-2" style={{
                            background: "linear-gradient(to bottom, #0375F3 0%, #036EEA 11%, #0267E1 22%, #0261D7 33%, #025ACE 44%, #0254C5 56%, #024EBC 67%, #0148B3 78%, #0142A9 89%, #013DA0 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Nổi Bật
                        </span>
                    </span>
                </AnimatedReveal>

                {/* Feature 1 */}
                <FeatureFirst />

                {/* Feature 2 */}
                <FeatureSecond />

                {/* Feature 3 */}
                <FeatureThird />

                {/* Feature 4 */}
                <FeatureFour />

                {/* Footer */}
                <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-2 !mt-8 mb-8">
                    <div className="3xl:text-[48px] 2xl:text-[36px] xxl:text-[32px] xl:text-[32px] md:text-[24px] text-[24px] 3xl:!leading-[58px] 2xl:!leading-[54px] xxl:!leading-[50px] xl:!leading-[50px] md:!leading-[46px] !leading-[38px] tracking-[-2%] text-[#33404A]">
                        <AnimatedTitle
                            className=''
                            heroPerTitle={heroPerTitle1}
                            delay={0}
                        />
                        <span ref={ref} className="relative inline-block w-fit px-2">
                            <UnderlineCurveLinearSvg2
                                inView={inView}
                                className="absolute -bottom-0 left-1/2 -translate-x-1/2 !w-full h-[14px] pointer-events-none"
                                delay={1.2}
                            />

                            <AnimatedTitle
                                className='font-semibold relative z-10'
                                heroPerTitle={heroPerTitle2}
                                delay={0.6}
                            />
                        </span>
                        {
                            !isVisibleTablet &&
                            <AnimatedTitle
                                className=''
                                heroPerTitle={heroPerTitle3}
                                delay={1.2}
                            />
                        }
                    </div>

                    {
                        isVisibleTablet &&
                        <div className='flex items-center gap-2'>
                            <AnimatedTitle
                                className='3xl:text-[48px] 2xl:text-[36px] xxl:text-[32px] xl:text-[32px] md:text-[24px] text-[24px] 3xl:!leading-[58px] 2xl:!leading-[54px] xxl:!leading-[50px] xl:!leading-[50px] md:!leading-[46px] !leading-[38px] tracking-[-2%]'
                                heroPerTitle={heroPerTitle3}
                                delay={1.2}
                            />

                            <AnimatedReveal
                                effect='fade'
                                className='size-8'
                                delay={2}
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    src="/icons/fmrp/dizzy.svg"
                                    className='size-full object-contain'
                                    alt="dizzy"
                                />
                            </AnimatedReveal>
                        </div>
                    }

                    {
                        !isVisibleTablet &&
                        <AnimatedReveal
                            effect='fade'
                            className='3xl:size-12 size-10'
                            delay={2}
                        >
                            <Image
                                width={100}
                                height={100}
                                src="/icons/fmrp/dizzy.svg"
                                className='size-full object-contain'
                                alt="dizzy"
                            />
                        </AnimatedReveal>
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturePageSection;