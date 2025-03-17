import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import Image from 'next/image'
import React, { useState, useCallback } from 'react'

import { motion } from 'framer-motion'
import PlayFmrpIcon from '@/components/icons/play/PlayFmrpIcon'
import { VideoPopup } from '../ui/video-fmrp/VideoPopup';

type Props = {}

const VideoFmrpSection = (props: Props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false)

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);
    const handleButtonClick = useCallback(() => window.open("https://bom.so/mrpbeta"), []);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-8 gap-6'>
                <div className='space-x-2 font-extrabold text-center'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Đón đầu xu hướng sản xuất cùng</span>
                    <span
                        className='text-title-section-small uppercase w-fit'
                        style={{
                            background: "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            imageRendering: "crisp-edges",
                        }}
                    >
                        Fmrp
                    </span>
                </div>

                <motion.div
                    initial="rest"
                    whileHover="hover"
                    whileTap="press"
                    className='relative 3xl:w-full lg:w-[80%] w-full aspect-1.5/1 cursor-pointer'
                    onClick={() => setShowVideoPopup(true)}
                >
                    <Image
                        alt="ipad"
                        src="/background/ui/fmrp/bg-ipad.png"
                        width={1920}
                        height={1080}
                        className='size-full object-contain aspect-1.5/1'
                    />

                    {/* Nút phát video - Luôn nằm giữa */}
                    <motion.button
                        className="absolute top-[50%] left-[50%] 3xl:w-[200px] 2xl:w-[160px] md:w-[140px] w-[120px] 3xl:h-[160px] 2xl:h-[120px] md:h-[100px] h-[80px] -translate-x-[50%] -translate-y-[50%] bg-[#C7DFFB]/80 hover:bg-[#C7DFFB]/60 border border-[#92BFF7] backdrop-blur-[10px] flex items-center justify-center md:rounded-3xl rounded-xl custom-transition"
                        variants={{
                            // rest: { scale: 1 },
                            // hover: { scale: 1 },
                        }}

                    >
                        <motion.div
                            className="flex items-center justify-center 3xl:size-16 2xl:size-12 md:size-10 size-8"
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.2 }, // Khi hover vào button, div cũng scale lớn hơn
                                press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                            }}
                        >
                            <PlayFmrpIcon className="size-full text-[#0F4F9E]" />
                        </motion.div>
                    </motion.button>
                </motion.div>

                <ButtonAnimationNew
                    title="Trải Nghiệm Ngay"
                    icon={
                        <div className="2xl:size-12 md:size-10 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                                <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                                {/* {isHovered ? <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" />} */}
                            </motion.div>
                        </div>
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleButtonClick}
                    reverse={true}
                    className="border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] lg:w-fit w-full"
                    style={{

                        background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",

                        WebkitBackdropFilter: "blur(15px)", // Safari
                        boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                    }}
                />
            </div>

            {/* Video Popup */}
            <VideoPopup
                open={showVideoPopup}
                onOpenChange={setShowVideoPopup}
                videoId={"t6eztmEQBK4"}
                title="FMRP - Trợ lý sản xuất"
            />
        </div>
    )
}

export default VideoFmrpSection