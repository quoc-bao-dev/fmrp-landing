import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import React, { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import Image from 'next/image'
import { variantButtonPressZoom, variantButtonScaleZoom } from '@/utils/animations/variantsAnimation'
import AnimatedTyping from '@/components/common/animations/text/AnimatedTyping'
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal'
import { useResizeStore } from '@/stores/useResizeStore'
import { useRouter } from 'next/navigation';

type Props = {}

const TEXTS = [
    "Tự động hóa sản xuất – Tiết kiệm thời gian",
    "Kiểm soát từng công đoạn, tối ưu từng quyết định",
    "Giám sát quá trình – Vận hành hiệu quả",
];

const IntroductionFmrpSection = (props: Props) => {
    const router = useRouter()
    const { isVisibleTablet } = useResizeStore()
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section bg-transparent'>
            <div className='3xl:ml-60 xxl:ml-40 xl:ml-32 lg:ml-10 lg:mr-0 md:mx-8 mx-4 4xl:px-[10%] flex lg:flex-row flex-col items-center lg:justify-normal justify-center overflow-x-hidden'>
                <div className='flex flex-col lg:items-start items-center lg:justify-normal justify-center lg:text-start text-center 3xl:gap-8 2xl:gap-6 gap-4 w-full 3xl:max-w-[38%] 2xl:max-w-[37%] xxl:max-w-[40%] xl:max-w-[45%] lg:max-w-[48%] max-w-full'>
                    <div className='xxl:space-y-2 space-y-1'>
                        <h2 className='text-title-section-small text-[#1A2025] font-extrabold capitalize'>
                            Hơn cả một phần mềm
                        </h2>

                        <AnimatedTyping
                            phrases={TEXTS}
                            className="text-title capitalize font-extrabold"
                        />
                    </div>
                    {
                        isVisibleTablet &&
                        <div className='w-full 3xl:max-w-[62%] 2xl:max-w-[63%] xxl:max-w-[60%] xl:max-w-[55%] lg:max-w-[52%] max-w-full'>
                            <AnimatedReveal from="right" className='w-auto 3xl:h-[800px] 2xl:h-[720px] xxl:h-[620px] xl:h-[540px] lg:h-[500px] h-auto aspect-3/2'>
                                <Image
                                    src="/background/ui/fmrp/test-fmrp-4.svg"
                                    alt="bg-fmrp"
                                    width={1536}
                                    height={853}
                                    className='size-full object-contain aspect-3/2'
                                />
                            </AnimatedReveal>
                        </div>
                    }

                    <ButtonAnimationNew
                        title="Trải Nghiệm Ngay"
                        icon={
                            <div className="2xl:size-12 md:size-10 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                                <motion.div
                                    initial={{ x: 0, y: 0 }}
                                    animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {/* {isHovered ? <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" />} */}

                                    {/* Dùng Tailwind để đổi icon khi hover mà không cần state */}
                                    <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                                    <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                                </motion.div>
                            </div>
                        }
                        onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
                        onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
                        onClick={() => { window.open("https://bom.so/mrpbeta") }}
                        reverse={true}
                        className="lg:mr-0 mr-1 lg:order-1 order-2 border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] lg:w-fit w-full"
                        style={{

                            background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",

                            WebkitBackdropFilter: "blur(15px)", // Safari
                            boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                        }}
                    />

                    <div className='lg:order-2 order-1 flex items-center gap-4'>
                        <motion.div
                            initial={false}
                            animate="rest"
                            whileTap="press"
                            whileHover="hover"
                            variants={variantButtonScaleZoom}
                            onClick={() => { window.open("https://bom.so/mrpbeta") }}
                            className='3xl:w-[200px] xxl:w-[180px] w-[160px] h-auto aspect-3.38/1 cursor-pointer'
                        >
                            <Image
                                src="/icons/app/appstore.svg"
                                alt="appstore"
                                width={300}
                                height={100}
                                className='size-full object-contain aspect-3.38/1'
                            />
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate="rest"
                            whileTap="press"
                            whileHover="hover"
                            variants={variantButtonScaleZoom}
                            onClick={() => { window.open("https://bom.so/mrpbeta") }}
                            className='3xl:w-[200px] xxl:w-[180px] w-[160px] h-auto aspect-3.38/1 cursor-pointer'
                        >
                            <Image
                                src="/icons/app/googleplay.svg"
                                alt="googleplay"
                                width={300}
                                height={100}
                                className='size-full object-contain aspect-3.38/1'
                            />
                        </motion.div>
                    </div>
                </div>

                {
                    !isVisibleTablet &&
                    <div className='w-full 3xl:max-w-[62%] 2xl:max-w-[63%] xxl:max-w-[60%] xl:max-w-[55%] lg:max-w-[52%] max-w-full'>
                        <AnimatedReveal from="right" className='w-auto 3xl:h-[800px] 2xl:h-[720px] xxl:h-[620px] xl:h-[540px] h-[500px] aspect-3/2'>
                            <Image
                                src="/background/ui/fmrp/test-fmrp-4.svg"
                                alt="bg-fmrp"
                                width={1536}
                                height={853}
                                className='size-full object-contain aspect-3/2'
                            />
                        </AnimatedReveal>
                    </div>
                }
            </div>
        </div>
    )
}

export default IntroductionFmrpSection