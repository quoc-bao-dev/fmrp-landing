'use client'

import BlurredBackground from '@/components/common/blur/BlurredBackground';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import { useResizeStore } from '@/stores/useResizeStore';
import { useSheetStores } from '@/stores/useSheetStores';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ProjectShowcase from '../ui/solutions/ProjectShowcase';
const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });

type Props = {}

const SolutionsSection = (props: Props) => {
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='custom-padding-section '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 lg:gap-8 gap-4 relative z-10'>
                {!isVisibleTablet && <BlurredBackground className='top-[20%] -left-[40%] z-[1]' />}

                <AnimatedReveal
                    // once={false}
                    from="bottom"
                    effect='fade'
                    className='space-x-2 font-extrabold text-title-section-small lg:text-center text-start lg:max-w-[50%] max-w-full'
                >
                    <span
                        className='uppercase'
                        style={{
                            background: "linear-gradient(to right, #85EEB3 0%, #53B086 100%), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Foso
                    </span>
                    <span className='text-[#1A2025] capitalize'>
                        Cung cấp giải pháp
                    </span>
                </AnimatedReveal>

                <ProjectShowcase />

                <AnimatedReveal
                    // once={false}
                    effect='fade'
                    className='lg:w-fit w-full'
                >
                    <ButtonAnimationNew
                        title="Đăng ký tư vấn ngay"
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
}

export default SolutionsSection