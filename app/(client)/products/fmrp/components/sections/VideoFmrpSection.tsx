import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { Play } from 'iconsax-react'

import YouTube from 'react-youtube';
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation'
import PlayFmrpIcon from '@/components/icons/play/PlayFmrpIcon'

type Props = {}

const VideoFmrpSection = (props: Props) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-8 gap-6'>
                <div className='space-x-2 font-extrabold text-center'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Đón đầu xu hướng sản xuất cùng</span>
                    <span
                        className='text-title-section-small uppercase'
                        style={{
                            background: "linear-gradient(107.4deg, #0375F3 80.08%, #0142A9 89.56%, #013DA0 90.75%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Fmrp
                    </span>
                </div>

                <div className='relative 3xl:w-full lg:w-[75%]w-full aspect-1.5/1'>
                    <Image
                        alt="ipad"
                        src="/background/ui/fmrp/bg-ipad.png"
                        width={1920}
                        height={1080}
                        className='size-full object-contain aspect-1.5/1'
                    />

                    {/* Video */}
                    {/* <YouTube
                            className="absolute inset-0 rounded-lg overflow-hidden aspect-1.5/1"
                            videoId='t6eztmEQBK4'
                        /> */}

                    {/* Nút phát video - Luôn nằm giữa */}
                    {/* {!isPlaying && ( */}
                    <motion.button
                        className="absolute top-[50%] left-[50%] 3xl:w-[200px] lg:w-[160px] md:w-[140px] w-[120px] 3xl:h-[160px] lg:h-[120px] md:h-[100px] h-[80px] -translate-x-[50%] -translate-y-[50%] bg-[#C7DFFB]/80 hover:bg-[#C7DFFB]/60 border border-[#92BFF7] backdrop-blur-[10px] flex items-center justify-center md:rounded-3xl rounded-xl custom-transition"
                        onClick={() => setIsPlaying(true)}
                        variants={{
                            // rest: { scale: 1 },
                            // hover: { scale: 1 },
                        }}
                        initial="rest"
                        whileHover="hover"
                        whileTap="press"
                    >
                        <motion.div
                            className="flex items-center justify-center 3xl:size-16 lg:size-12 md:size-10 size-8"
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.2 }, // Khi hover vào button, div cũng scale lớn hơn
                                press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                            }}
                        >
                            <PlayFmrpIcon className="size-full text-[#0F4F9E]" />
                        </motion.div>
                    </motion.button>
                    {/* )} */}
                </div>

                <ButtonAnimationNew
                    title="Trải Nghiệm Ngay"
                    icon={
                        <div className="2xl:size-12 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                {isHovered ? <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" />}
                            </motion.div>
                        </div>
                    }
                    onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
                    onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
                    onClick={() => { window.open("https://hub.fmrp.vn/auth/register") }}
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
        </div>
    )
}

export default VideoFmrpSection