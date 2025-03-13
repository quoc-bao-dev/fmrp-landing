import FacebookOriginIcon from '@/components/icons/social-media/FacebookOriginIcon'
import FosoOriginIcon from '@/components/icons/social-media/FosoOriginIcon'
import TiktokOriginIcon from '@/components/icons/social-media/TiktokOriginIcon'
import YoutubeOriginIcon from '@/components/icons/social-media/YoutubeOriginIcon'
import { uuidv4 } from '@/lib/uuid'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { variantButtonScaleZoom, variantCardScaleZoom } from '@/utils/animations/variantsAnimation'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import { ArrowUpRightIcon } from 'lucide-react'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import Image from 'next/image'
import { useResizeStore } from '@/stores/useResizeStore'

type Props = {}

const dataCommunity = [
    {
        id: uuidv4(),
        icon: <FacebookOriginIcon className='size-full text-[#0866FF]' />,
        name: "Fanpage",
        bg: "linear-gradient(135deg, #1877F2 0%, #4C8BF5 100%)", // Gradient xanh Facebook hiện đại
    },
    {
        id: uuidv4(),
        icon: <FosoOriginIcon className='size-full' />,
        name: "Group",
        bg: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)", // Xanh biển nổi bật
    },
    {
        id: uuidv4(),
        icon: <YoutubeOriginIcon className='size-full text-[#E62117]' />,
        name: "Youtube",
        bg: "linear-gradient(135deg, #FF0000 0%, #FF6347 100%)", // Đỏ Youtube rực rỡ
    },
    {
        id: uuidv4(),
        icon: <TiktokOriginIcon className='size-full text-[#010101]' />,
        name: "Tiktok",
        bg: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)", // Hiệu ứng gradient tím-hồng-cam
    },
]

// Variants cho nền (trượt lên khi hover)
const bgVariants = {
    rest: { top: '100%' },
    hover: { top: '0%', transition: { duration: 0.5 } },
};

// Variants cho icon (Xoay 360° + đổi màu khi hover)
const iconVariants = {
    rest: (color: any) => ({
        rotateY: 0,
        color: color,
        transition: { duration: 0.6, ease: "easeInOut" }
    }),
    hover: {
        rotateY: 360,
        color: "#FFFFFF",
        transition: { duration: 0.6, ease: "easeInOut" }
    }
};


// Variants cho text (đổi màu khi hover)
const textVariants = {
    rest: { color: "#1A2025" },
    hover: { color: "#FFFFFF", transition: { duration: 0.6 } }
};


const CommunityFmrpSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-10 gap-8'>
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

                <div className='grid lg:grid-cols-4 grid-cols-2 3xl:gap-8 lg:gap-6 gap-2 w-full'>
                    {
                        dataCommunity && dataCommunity?.map((item, index) => {
                            const defaultColor = item.icon.props.className.match(/text-\[(.*?)\]/)?.[1] || "#1A2025";

                            return (
                                <motion.div
                                    key={`community-${item.id}`}
                                    initial="rest"
                                    animate="rest"
                                    whileHover="hover"
                                    whileTap="press"
                                    variants={variantCardScaleZoom}
                                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                                    className='relative col-span-1 flex items-center lg:gap-4 gap-2 lg:p-6 p-6 w-full bg-white border border-[#F3F4FE] 2xl:rounded-3xl rounded-2xl overflow-hidden group cursor-pointer'
                                    style={{
                                        boxShadow: "0px 20px 95px 0px #C9CBCC4D"
                                    }}
                                >
                                    {/* Hiệu ứng nền hover */}
                                    <motion.div
                                        className='absolute top-0 left-0 inset-0 z-[1] w-full h-full'
                                        variants={bgVariants}
                                        style={{ background: item.bg }}
                                    />

                                    {/* Hiệu ứng icon xoay 360° và đổi màu */}
                                    <motion.div
                                        className='lg:size-12 size-10 shrink-0 relative z-10'
                                        custom={defaultColor} // Truyền màu gốc vào variants
                                        variants={iconVariants}
                                    >
                                        {React.cloneElement(item.icon, { className: "size-full" })}
                                    </motion.div>

                                    {/* Tên cộng đồng - đổi màu khi hover */}
                                    <motion.div
                                        className="3xl:text-xl text-lg font-bold relative z-10"
                                        variants={textVariants}
                                    >
                                        {item.name}
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </div>

                <div
                    className='relative rounded-3xl 2xl:px-28 xl:px-24 lg:px-20 lg:py-20 lg:p-12 py-10 w-full overflow-hidden mt-6'
                    style={{
                        background: "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)"
                    }}
                >
                    {
                        isVisibleTablet &&
                        <div className='flex items-center justify-center'>
                            <div className='md:w-[460px] w-[520px] h-auto aspect-1.92/1'>
                                <Image
                                    alt="community"
                                    src={"/background/ui/fmrp/bg-community.webp"}
                                    width={500}
                                    height={450}
                                    className='size-full object-contain'
                                />
                            </div>
                        </div>
                    }

                    <div className='flex flex-col 3xl:gap-8 gap-6 lg:mt-0 mt-6 md:px-0 px-6'>
                        <div className="2xl:max-w-[50%] xl:max-w-[55%] lg:max-w-[60%] max-w-full 3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] 3xl:!leading-[56px] 2xl:!leading-[46px] xxl:!leading-[46px] xl:!leading-[42px] md:!leading-[38px] !leading-[34px] tracking-[-2%] text-white font-bold">
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

                    {
                        !isVisibleTablet &&
                        <div className='absolute -z-0 2xl:right-28 xl:right-24 right-20 -bottom-20 2xl:w-[480px] xxl:w-[420px] xl:w-[400px] w-[360px] h-auto aspect-1.92/1'>
                            <Image
                                alt="community"
                                src={"/background/ui/fmrp/bg-community.webp"}
                                width={500}
                                height={450}
                                className='size-full object-contain'
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CommunityFmrpSection