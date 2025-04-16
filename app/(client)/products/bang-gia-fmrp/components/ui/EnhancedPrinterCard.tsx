import React, { memo } from 'react'
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { IPrinterSpec } from '../sections/EnhancedPrinterSection'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'

import { motion } from 'framer-motion'
import { FormatNumberToCommanDecimal } from '@/utils/format/FormatNumber'
import Link from 'next/link'

type Props = {
    printer: IPrinterSpec
}

const EnhancedPrinterCard = ({ printer }: Props) => {
    return (
        <Link
            href={printer?.href ?? "#"}
            target='_blank'
            className="bg-white overflow-hidden h-full p-6 rounded-3xl group"
            style={{
                boxShadow: "0px 4px 48px 0px #0000001A",
                backdropFilter: "blur(24px)"
            }}
        >
            <div className="pb-3 border-b border-[#D1D5D8] relative">
                <h1 className="text-title-section-small font-bold text-[#33404A]">
                    {printer.name}
                </h1>
            </div>
            <div className="space-y-4 pt-4">
                <div className="rounded-md p-4 flex justify-center relative">
                    <div className='absolute left-1/2 -translate-x-1/2 w-full h-[400px] aspect-square rounded-[40px] blur-[60px] pointer-events-none'>
                        <Image
                            width={500}
                            height={500}
                            alt="green-blur"
                            src="/background/blur/bg-pupple.svg"
                            className="size-full object-contain"
                        />
                    </div>
                    <div className="relative w-full h-[300px]">
                        <Image
                            src={printer.image || "/placeholder.svg"}
                            alt={printer.name}
                            fill
                            className="size-full object-contain group-hover:scale-[1.02] custom-transition"
                        />
                    </div>
                </div>

                <div className="space-y-1 text-sm">
                    <p className="text-button text-[#1F2A37] font-medium space-x-1">
                        <span>Tốc độ in:</span>
                        <span>{printer.printSpeed}</span>
                    </p>
                    <p className="text-button text-[#1F2A37] font-medium space-x-1">
                        <span>Kết nối:</span>
                        <span>{printer.connectivity}</span>
                    </p>
                </div>

                <div className="space-x-2 pt-2">
                    <span className='text-title-section-small text-[#003DA0] font-bold'>
                        {FormatNumberToCommanDecimal(+printer?.price, 3)}
                    </span>

                    <span className='text-title-section-small text-[#003DA0] font-bold underline decoration-2 underline-offset-4'>
                        đ
                    </span>
                </div>

                <ButtonAnimationNew
                    title={"Đặt mua ngay"}
                    icon={
                        <div className="2xl:size-10 md:size-8 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                            <motion.div
                                // variants={{
                                //     rest: { x: 0, y: 0 },
                                //     hover: { x: 4, y: -4 },
                                // }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                {/* Dùng Tailwind để đổi icon khi hover mà không cần state */}
                                <ArrowUpRightIcon className="2xl:size-5 md:size-4 size-4 hidden group-hover:block" />
                                <ArrowUpRightLinearBlueIcon className="2xl:size-5 md:size-4 size-4 group-hover:hidden" />
                            </motion.div>
                        </div>
                    }
                    onClick={() => { window.open(printer?.href) }}
                    reverse={true}
                    className="lg:mr-0 mr-1 lg:order-1 order-2 border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-base xl:!text-sm lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] w-full"
                    style={{

                        background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",

                        WebkitBackdropFilter: "blur(15px)", // Safari
                        boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                    }}
                />
            </div>
        </Link>
    )
}

export default memo(EnhancedPrinterCard)