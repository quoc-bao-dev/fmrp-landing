import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import SparkleIcon from '@/components/icons/common/SparkleIcon'
import Image from 'next/image'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { useResizeStore } from '@/stores/useResizeStore'

type Props = {}

const AiBomFmrpSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex lg:flex-row flex-col items-center gap-10'>
                <div className='lg:order-1 order-2 w-full h-auto lg:max-w-[50%] max-w-full aspect-1.75/1'>
                    <Image
                        alt="ai"
                        src="/background/ui/fmrp/bg-ai.webp"
                        width={1920}
                        height={1080}
                        className='size-full object-contain aspect-1.75/1'
                    />
                    {
                        isVisibleTablet &&
                        <ButtonAnimationNew
                            title="Trải nghiệm ngay"
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
                            onClick={() => { window.open("https://bom.so/mrpbeta") }}
                            reverse={true}
                            className="mt-4 border-gradient-button-no-bg-fmrp capitalize flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                            style={{

                                background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",

                                WebkitBackdropFilter: "blur(15px)", // Safari
                                boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                            }}
                        />
                    }
                </div>

                <div className='lg:order-2 order-1 flex flex-col gap-4 w-full lg:max-w-[50%] max-w-full'>
                    <p className='space-x-2 font-extrabold xxl:max-w-[95%] max-w-full'>
                        <span
                            className='text-title-section-small uppercase'
                            style={{
                                background: "linear-gradient(79.09deg, #0375F3 13.36%, #036EEA 14.68%, #0267E1 15.99%, #0261D7 17.31%, #025ACE 18.62%, #0254C5 19.93%, #024EBC 21.25%, #0148B3 22.56%, #0142A9 23.88%, #013DA0 25.19%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Fmrp
                        </span>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>– Nâng Tầm Quản Lý Sản Xuất Hiệu Quả Với AI Trong Thiết Kế Định Mức BOM</span>
                    </p>

                    <p className='text-default text-[#33404A] font-medium xxl:max-w-[95%] max-w-full'>
                        FMRP tích hợp AI giúp tự động hóa quá trình thiết kế định mức nguyên vật liệu (BOM) giúp doanh nghiệp giảm sai sót, tiết kiệm chi phí và tăng hiệu suất sản xuất.
                    </p>

                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <SparkleIcon className='3xl:size-6 size-[18px] text-[#5599EC]' />
                            <span className='text-default text-[#33404A] font-medium'>
                                Tính toán BOM chính xác
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SparkleIcon className='3xl:size-6 size-[18px] text-[#5599EC]' />
                            <span className='text-default text-[#33404A] font-medium'>
                                Giảm hao hụt nguyên vật liệu
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <SparkleIcon className='3xl:size-6 size-[18px] text-[#5599EC]' />
                            <span className='text-default text-[#33404A] font-medium'>
                                Quyết định nhanh chóng
                            </span>
                        </div>
                    </div>

                    {
                        !isVisibleTablet &&
                        <ButtonAnimationNew
                            title="Trải nghiệm ngay"
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
                            onClick={() => { window.open("https://bom.so/mrpbeta") }}
                            reverse={true}
                            className="border-gradient-button-no-bg-fmrp capitalize flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                            style={{

                                background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",

                                WebkitBackdropFilter: "blur(15px)", // Safari
                                boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                            }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default AiBomFmrpSection