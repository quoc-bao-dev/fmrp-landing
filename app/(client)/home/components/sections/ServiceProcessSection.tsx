import React, { useEffect, useRef } from 'react'
import ServiceProcessIntro from '../ui/service-process/ServiceProcessIntro';
import ServiceProcessStep from '../ui/service-process/ServiceProcessStep';

import { motion, Variants } from 'framer-motion';

import { useScrollContext } from '@/contexts/ScrollContext';

import { useResizeStore } from '@/stores/useResizeStore';
import { useSheetStores } from '@/stores/useSheetStores';

import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import BlurredBackground from '@/components/common/blur/BlurredBackground';

import dynamic from 'next/dynamic';

const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });

type Props = {}

// Định nghĩa animation cho icon
const iconVariants: Variants = {
    rest: { y: 0 },
    hover: { y: -5 }, // Bay lên 5px khi hover
};

const ServiceProcessSection = () => {
    const { isVisibleTablet } = useResizeStore()
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()
    const serviceProcessRef = useRef<HTMLDivElement>(null!)
    const { registerRef } = useScrollContext();

    useEffect(() => {
        registerRef("serviceProcess", serviceProcessRef); // khởi tạo ref động để sử dụng scroll to element
    }, [registerRef]);

    return (
        <div ref={serviceProcessRef} className='relative custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[10]'>
                {!isVisibleTablet && <BlurredBackground className='top-[25%] -left-[40%] z-[1]' />}

                {!isVisibleTablet && <BlurredBackground className='bottom-[25%] -right-[40%] z-[1]' />}
                <ServiceProcessIntro />

                <ServiceProcessStep />

                <AnimatedReveal
                    // once={false}
                    effect='fade'
                    className='lg:w-fit w-full'
                >
                    <ButtonAnimationNew
                        title="Hẹn Lịch Tư Vấn Ngay"
                        icon={
                            <div className="2xl:size-12 md:size-10 size-9 rounded-full flex items-center justify-center group-hover:bg-[#10805B] group-hover:text-white duration-500 transition-colors">
                                <motion.div
                                    initial={{ x: 0, y: 0 }}
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { x: 2, y: -2 }, // Khi hover vào button, div cũng scale lớn hơn
                                        press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                                    }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
                                </motion.div>
                            </div>
                        }
                        onClick={() => {
                            setOpenSheetCustom(true)
                            setStatusSheet("contact")
                        }}
                        reverse={true}
                        className="border-gradient-button-no-bg-foso flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-[#10805B] hover:bg-[#A3EED6]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter hover:text-[#10805B] font-medium pl-6 pr-1 py-1 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                        style={{
                            WebkitBackdropFilter: "blur(15px)", // Safari
                            boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                        }}
                    />
                </AnimatedReveal>
            </div>
        </div>
    )
};

export default ServiceProcessSection