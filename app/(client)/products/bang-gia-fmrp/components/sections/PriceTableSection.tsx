'use client'
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew"
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon"
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import React from "react"

type Props = {}

const PriceTableSection = (props: Props) => {
    const pricingData = [
        {
            title: "Training online",
            freemium: "1,000,000 đ/buổi/60p",
            professional: "860,000 đ/buổi/60p",
        },
        {
            title: "Training trực tiếp",
            freemium: "2,000,000 đ/buổi/90p + phí di chuyển",
            professional: "1,680,000 đ/buổi/90p + phí di chuyển",
        },
        {
            title: "Thêm chi nhánh",
            freemium: "1,299,000 đ",
            professional: "999,000 đ",
        },
    ]

    return (
        <div className="3xl:py-24 xl:py-20 lg:py-16 py-4 w-full lg:px-4">
            <div className='custom-container'>
                <h1 className="text-center text-title-section-small font-extrabold text-[#1A2025] mb-6">
                    Dịch Vụ Add-On
                </h1>

                {/* Desktop version */}
                <div
                    className="hidden md:block"
                >
                    <Card
                        className="border-transparent rounded-3xl"
                        style={{
                            boxShadow: "2px 4px 6px 2px rgba(18, 18, 23, 0.05), 2px 10px 15px 3px rgba(18, 18, 23, 0.08)"
                        }}
                    >
                        <CardContent className="p-0">
                            <div className="grid grid-cols-5 w-full">
                                {/* Header row */}
                                <div className="col-span-1 p-4 border-b border-dashed"></div>
                                <h2 className="col-span-2 p-4 text-start text-title font-bold border-b border-dashed text-[#33404A]">
                                    Freemium
                                </h2>
                                <h2 className="col-span-2 p-4 text-start text-title font-bold border-b border-dashed text-[#33404A]">
                                    Professional
                                </h2>

                                {/* Pricing rows */}
                                {pricingData.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className="col-span-1 p-4 flex items-start text-sm-default font-semibold text-[#33404A]">{item.title}</div>
                                        <div className="col-span-2 p-4 text-start text-sm-default font-semibold text-[#33404A]">{item.freemium}</div>
                                        <div className="col-span-2 p-4 text-start text-sm-default font-semibold text-[#33404A]">{item.professional}</div>
                                    </React.Fragment>
                                ))}

                                {/* Button row */}
                                <div className="col-span-1 p-4"></div>
                                <div className="col-span-2 p-4 flex justify-center">
                                    <ButtonAnimationNew
                                        title={"Liên hệ"}
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
                                        onClick={() => { window.open("https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft") }}
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
                                <div className="col-span-2 p-4 flex justify-center">
                                    <ButtonAnimationNew
                                        title={"Liên hệ"}
                                        icon={
                                            <div className="2xl:size-10 md:size-8 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                                                <motion.div
                                                    variants={{
                                                        rest: { x: 0, y: 0 },
                                                        hover: { x: 4, y: -4 },
                                                    }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    {/* Dùng Tailwind để đổi icon khi hover mà không cần state */}
                                                    <ArrowUpRightIcon className="2xl:size-5 md:size-4 size-4" />
                                                    {/* <ArrowUpRightIcon className="2xl:size-5 md:size-5 size-4 hidden group-hover:block" />
                                        <ArrowUpRightLinearBlueIcon className="2xl:size-5 md:size-5 size-4 group-hover:hidden" /> */}
                                                </motion.div>
                                            </div>
                                        }
                                        onClick={() => { window.open("https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft") }}
                                        reverse={true}
                                        className="lg:mr-0 mr-1 lg:order-1 order-2 border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-base xl:!text-sm lg:!text-sm md:!text-base text-sm !tracking-[1%] text-white group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] w-full"
                                        style={{
                                            // background: "linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                            background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                            // background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(118.21deg, #0375F3 10.03%, #013DA0 107.74%)",
                                            // WebkitBackgroundClip: "text",
                                            // WebkitTextFillColor: "transparent",
                                            boxShadow: "0px 1px 2px 0px #FFFFFF7D inset",
                                            WebkitBackdropFilter: "blur(15px)", // Safari
                                        }}
                                        whileHover={{
                                            background: [
                                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)"
                                            ],
                                            transition: {
                                                duration: 1.5,
                                                ease: [0.4, 0, 0.6, 1],
                                                repeat: Infinity
                                            },
                                            boxShadow: [
                                                "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                                "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                                "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                                "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Mobile version */}
                <div className="md:hidden space-y-6">
                    <Card
                        className="border rounded-3xl shadow-sm"
                        style={{
                            boxShadow: "0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714",
                            background: "#FFFFFF"
                        }}
                    >
                        <div className={`border-gradient-freemium-price-list h-2 rounded-2xl border-3 absolute top-0 left-0 w-[98%] mx-auto`} />

                        <CardContent className="px-4 pb-4 pt-2">
                            <h2 className="text-start text-title font-bold pb-3 border-b border-dashed text-[#33404A]">
                                Freemium
                            </h2>
                            <div className="space-y-3 pt-4">
                                {pricingData.map((item, index) => (
                                    <div key={index} className="space-x-2 text-base-default text-[#33404A]">
                                        <span className='font-semibold'>{item.title}:</span>
                                        <span className="font-extrabold">{item.freemium}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-center">
                                <ButtonAnimationNew
                                    title={"Liên hệ"}
                                    icon={
                                        <div className="2xl:size-10 md:size-8 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                                            <motion.div
                                                variants={{
                                                    rest: { x: 0, y: 0 },
                                                    hover: { x: 4, y: -4 },
                                                }}
                                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            >
                                                {/* Dùng Tailwind để đổi icon khi hover mà không cần state */}
                                                <ArrowUpRightIcon className="2xl:size-5 md:size-4 size-4" />
                                                {/* <ArrowUpRightIcon className="2xl:size-5 md:size-5 size-4 hidden group-hover:block" />
                                        <ArrowUpRightLinearBlueIcon className="2xl:size-5 md:size-5 size-4 group-hover:hidden" /> */}
                                            </motion.div>
                                        </div>
                                    }
                                    onClick={() => { window.open("https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft") }}
                                    reverse={true}
                                    className="lg:mr-0 mr-1 lg:order-1 order-2 border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-base xl:!text-sm lg:!text-sm md:!text-base text-sm !tracking-[1%] text-white group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] w-full"
                                    style={{
                                        // background: "linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                        background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                        // background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(118.21deg, #0375F3 10.03%, #013DA0 107.74%)",
                                        // WebkitBackgroundClip: "text",
                                        // WebkitTextFillColor: "transparent",
                                        boxShadow: "0px 1px 2px 0px #FFFFFF7D inset",
                                        WebkitBackdropFilter: "blur(15px)", // Safari
                                    }}
                                    whileHover={{
                                        background: [
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)"
                                        ],
                                        transition: {
                                            duration: 1.5,
                                            ease: [0.4, 0, 0.6, 1],
                                            repeat: Infinity
                                        },
                                        boxShadow: [
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                                        ],
                                    }}
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <Card
                        className="border rounded-3xl shadow-sm"
                        style={{
                            boxShadow: "0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714",
                            background: "#FFFFFF"
                        }}
                    >
                        <div className={`border-gradient-professional-price-list h-2 rounded-2xl border-3 absolute top-0 left-0 w-[92%] mx-auto`} />

                        <CardContent className="px-4 pb-4 pt-2">
                            <h2 className="text-start text-title font-bold pb-3 border-b border-dashed text-[#33404A]">
                                Professional
                            </h2>
                            <div className="space-y-3 pt-4">
                                {pricingData.map((item, index) => (
                                    <div key={index} className="space-x-2 text-base-default text-[#33404A]">
                                        <span className='font-semibold'>{item.title}:</span>
                                        <span className="font-extrabold">{item.professional}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-center">
                                <ButtonAnimationNew
                                    title={"Liên hệ"}
                                    icon={
                                        <div className="2xl:size-10 md:size-8 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                                            <motion.div
                                                variants={{
                                                    rest: { x: 0, y: 0 },
                                                    hover: { x: 4, y: -4 },
                                                }}
                                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            >
                                                {/* Dùng Tailwind để đổi icon khi hover mà không cần state */}
                                                <ArrowUpRightIcon className="2xl:size-5 md:size-4 size-4" />
                                                {/* <ArrowUpRightIcon className="2xl:size-5 md:size-5 size-4 hidden group-hover:block" />
                                        <ArrowUpRightLinearBlueIcon className="2xl:size-5 md:size-5 size-4 group-hover:hidden" /> */}
                                            </motion.div>
                                        </div>
                                    }
                                    onClick={() => { window.open("https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft") }}
                                    reverse={true}
                                    className="lg:mr-0 mr-1 lg:order-1 order-2 border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-base xl:!text-sm lg:!text-sm md:!text-base text-sm !tracking-[1%] text-white group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] w-full"
                                    style={{
                                        // background: "linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                        background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #0375F3 0%, #0B69D2 100%)",
                                        // background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(118.21deg, #0375F3 10.03%, #013DA0 107.74%)",
                                        // WebkitBackgroundClip: "text",
                                        // WebkitTextFillColor: "transparent",
                                        boxShadow: "0px 1px 2px 0px #FFFFFF7D inset",
                                        WebkitBackdropFilter: "blur(15px)", // Safari
                                    }}
                                    whileHover={{
                                        background: [
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)"
                                        ],
                                        transition: {
                                            duration: 1.5,
                                            ease: [0.4, 0, 0.6, 1],
                                            repeat: Infinity
                                        },
                                        boxShadow: [
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                                        ],
                                    }}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default PriceTableSection