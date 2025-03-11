import FacebookOriginIcon from '@/components/icons/social-media/FacebookOriginIcon'
import FosoOriginIcon from '@/components/icons/social-media/FosoOriginIcon'
import TiktokOriginIcon from '@/components/icons/social-media/TiktokOriginIcon'
import YoutubeOriginIcon from '@/components/icons/social-media/YoutubeOriginIcon'
import { uuidv4 } from '@/lib/uuid'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import { ArrowUpRightIcon } from 'lucide-react'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import Image from 'next/image'

type Props = {}

const dataCommunity = [
    {
        id: uuidv4(),
        icon: <FacebookOriginIcon className='size-full text-[#0866FF]' />,
        name: "Fanpage"
    },
    {
        id: uuidv4(),
        icon: <FosoOriginIcon className='size-full' />,
        name: "Group"
    },
    {
        id: uuidv4(),
        icon: <YoutubeOriginIcon className='size-full text-[#E62117]' />,
        name: "Youtube"
    },
    {
        id: uuidv4(),
        icon: <TiktokOriginIcon className='size-full text-[#010101]' />,
        name: "Tiktok"
    },
]

const CommunityFmrpSection = (props: Props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-8 gap-6'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='space-x-2 font-extrabold'>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>Tham gia cộng đồng cho</span>
                        <span
                            className='text-title-section-small capitalize'
                            style={{
                                background: "linear-gradient(107.4deg, #0375F3 65.02%, #036EEA 67.88%, #0267E1 70.73%, #0261D7 73.59%, #025ACE 76.45%, #0254C5 79.31%, #024EBC 82.17%, #0148B3 85.03%, #0142A9 87.89%, #013DA0 90.75%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Nhà Sản Xuất
                        </span>
                    </div>

                    <div className='text-default text-[#33404A] font-medium md:text-center text-start max-w-full'>
                        <span>
                            Kết nối với các chuyên gia và doanh nghiệp sử dụng FMRP để trao đổi kinh nghiệm, bí quyết tối ưu quy trình sản xuất ngay!
                        </span>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-2 3xl:gap-8 gap-6 w-full'>
                    {
                        dataCommunity && dataCommunity?.map((item, index) => (
                            <motion.div
                                initial={false}
                                whileHover="hover"
                                whileTap="press"
                                variants={variantButtonScaleZoom}
                                key={`community-${item.id}`}
                                className='col-span-1 flex items-center gap-4 p-6 w-full bg-white border border-[#F3F4FE] hover:!shadow-sm rounded-3xl duration-300 transition-all ease-in-out'
                                style={{
                                    boxShadow: "0px 20px 95px 0px #C9CBCC4D"
                                }}
                            >
                                <div className='size-12 shrink-0'>
                                    {item.icon}
                                </div>

                                <div className="3xl:text-xl text-lg text-[#1A2025] font-bold">
                                    {item.name}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

                <div
                    className='relative rounded-3xl px-28 py-20 w-full overflow-hidden'
                    style={{
                        background: "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)"
                    }}
                >
                    <div className='flex flex-col 3xl:gap-8 gap-6'>
                        <div className="xxl:max-w-[50%] md:max-w-[50%] max-w-[70%] 3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] 3xl:!leading-[56px] 2xl:!leading-[46px] xxl:!leading-[46px] xl:!leading-[42px] md:!leading-[38px] !leading-[34px] tracking-[-2%] text-white font-bold">
                            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
                        </div>

                        <ButtonAnimationNew
                            title="Tham Gia Ngay"
                            icon={
                                <div className="2xl:size-12 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-white group-hover:text-white duration-500 transition-colors">
                                    <motion.div
                                        initial={{ x: 0, y: 0 }}
                                        animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        {/* <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4 text-white" /> */}
                                        {isHovered ? <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />}
                                    </motion.div>
                                </div>
                            }
                            onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
                            onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
                            onClick={() => console.log('Button Clicked!')}
                            reverse={true}
                            className="border border-white flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-white hover:!bg-[#FFFFFF]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                            style={{
                                WebkitBackdropFilter: "blur(15px)", // Safari
                                boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                            }}
                        />
                    </div>

                    <div className='absolute -z-0 right-28 -bottom-20 w-[480px] h-auto aspect-1.92/1'>
                        <Image
                            alt="community"
                            src={"/background/ui/fmrp/bg-community.webp"}
                            width={500}
                            height={450}
                            className='size-full object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityFmrpSection