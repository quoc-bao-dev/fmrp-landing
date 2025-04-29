import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import CheckIconLinear from "@/components/icons/fmrp/CheckIconLinear";
import CloseIconLinear from "@/components/icons/fmrp/CloseIconLinear";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FormatNumberToCommanDecimal } from "@/utils/format/FormatNumber";
import React, { useRef } from "react";

import { motion } from 'framer-motion'
import LockIcon from '../../../../../../components/icons/fmrp/LockIcon';
import { useResizeStore } from '../../../../../../stores/useResizeStore';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FireIcon from "@/components/icons/fmrp/FireIcon";

const features = [
    {
        label: "Lập lệnh sản xuất",
        key: "plan",
        freemium: true,
        pro: true
    },
    {
        label: "Thiết kế định mức BOM",
        key: "bom",
        freemium: true,
        pro: true
    },
    {
        label: "Thiết kế công đoạn",
        key: "steps",
        freemium: true,
        pro: true
    },
    {
        label: "Quản lý đơn đặt hàng (PO)",
        key: "po",
        freemium: false,
        pro: true
    },
    {
        label: "Quản lý chuyên sâu công đoạn BTP",
        key: "btp",
        freemium: false,
        pro: true
    },
    {
        label: "Quản lý khách hàng, NCC",
        key: "customers",
        freemium: true,
        pro: true
    },
    {
        label: "Quản lý đơn hàng bán & xuất hàng",
        key: "sale",
        freemium: true,
        pro: true
    },
    {
        label: "Quản lý nhập hàng & trả hàng",
        key: "return",
        freemium: true,
        pro: true
    },
    {
        label: "Quản lý nhập kho & xuất kho",
        key: "warehouse",
        freemium: true,
        pro: true
    },
    {
        label: "Cảnh báo tồn kho & hạn sử dụng",
        key: "alert",
        freemium: true,
        pro: true
    },
    {
        label: "Kiểm tra QC",
        key: "qc",
        freemium: true,
        pro: true
    },
    {
        label: "Tính năng in QR",
        key: "qr",
        freemium: true,
        pro: true
    },
    {
        label: "Báo cáo tồn kho",
        key: "report_stock",
        freemium: false,
        pro: true
    },
    {
        label: "Báo cáo bán hàng",
        key: "report_sale",
        freemium: false,
        pro: true
    },
    {
        label: "Báo cáo mua hàng",
        key: "report_buy",
        freemium: false,
        pro: true
    },
    {
        label: "AI hỗ trợ thiết kế BOM",
        key: "ai_bom",
        freemium: true,
        pro: true
    },
    {
        label: "Thảo luận chi tiết lệnh sản xuất sản phẩm",
        key: "discussion",
        freemium: true,
        pro: true
    }
];

const planList = [
    {
        title: "Freemium",
        price: 0,
        expirationDate: "/1 user",
        brand: "1 chi nhánh",
        support: "Cộng đồng FMRP & Gitbook",
        type: "Cơ bản",
        features: features,
        buttonText: "Đăng ký ngay",
        variant: "freemium",
        className: "col-span-1 w-full",
        popular: false
    },
    {
        title: "Professional",
        price: 86000,
        expirationDate: "/1 user / tháng",
        brand: "1 chi nhánh",
        support: "đội ngũ chuyên gia",
        type: "Chuyên sâu",
        features: features,
        buttonText: "Liên hệ",
        variant: "pro",
        className: "col-span-1 w-full",
        popular: true
    }
];

const PlanCard = ({ className, title, price, popular, brand, support, type, features, buttonText, variant, expirationDate }: any) => (
    <Card
        className={`${cn(`w-full max-w-full rounded-2xl relative border-none hover:!drop-shadow-lg custom-transition`, className)}`}
        // className={`${cn(`w-full 3xl:max-w-xl max-w-lg rounded-2xl relative border-none hover:!drop-shadow-lg custom-transition`, className)}`}
        // className={`${cn(`w-full max-w-lg rounded-2xl ${popular ? "border-gradient-professional-price-list" : "border-gradient-freemium-price-list"}`, className)}`}
        style={{
            boxShadow: "0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714",
            background: popular ? "linear-gradient(180deg, rgba(3, 117, 243, 0.25) -0.03%, rgba(3, 117, 243, 0) 21.87%), linear-gradient(0deg, #FFFFFF, #FFFFFF)" : "#FFFFFF"
        }}
    >
        <div className={`${popular ? "border-gradient-professional-price-list" : "border-gradient-freemium-price-list"} h-2 rounded-2xl border-3 absolute top-0 left-0 w-[98%] mx-auto`} />

        <CardContent className="px-4 pb-4 pt-2 flex flex-col gap-4">
            <div className='space-y-2'>
                <div className="flex items-center gap-3">
                    <h2 className="text-title font-bold text-[#33404A]">
                        {title}
                    </h2>
                    {
                        popular &&
                        <span className="flex items-center gap-1 text-sxs-default text-[#64511E] bg-[#FACA4A] font-semibold rounded-full pl-1 pr-2.5 py-[3px]">
                            <FireIcon className='size-4' /> Phổ biến
                        </span>
                    }
                </div>

                <div className="space-x-2">
                    <span className='text-title-section-small text-[#003DA0] font-bold'>
                        {FormatNumberToCommanDecimal(price, 3)}
                    </span>

                    <span className='text-title-section-small text-[#003DA0] font-bold underline decoration-2 underline-offset-4'>
                        đ
                    </span>

                    <span className="text-xs-default font-bold text-[#667F93]">
                        {expirationDate}
                    </span>
                </div>
            </div>

            <div className='py-4 border-y border-dashed space-y-2'>
                <p className="text-sm-default text-[#33404A] font-semibold">{brand}</p>
                <p className="text-sm-default text-[#33404A] font-semibold">
                    Được hỗ trợ bởi <span className='font-extrabold'>{support}</span>
                </p>
            </div>

            <div className='space-y-2'>
                <p className="text-sm-default text-[#1A2025] font-bold uppercase">TÍNH NĂNG</p>
                <p className="text-sm-default text-[#33404A] font-semibold">
                    Báo cáo sản xuất: <span className='font-extrabold'>{type}</span>
                </p>
                <ul className="space-y-2 text-sm">
                    {
                        features.map((f: any) => (
                            <li key={f.key} className="flex items-center gap-2">
                                <div className='size-4'>
                                    {
                                        f[variant] ? (
                                            <CheckIconLinear className="size-full" />
                                        )
                                            :
                                            (
                                                <LockIcon className="text-[#B3C5D4] size-full" />
                                            )
                                    }
                                </div>
                                <span className={`${f[variant] ? "text-[#33404A]" : "text-[#B3C5D4]"} text-sm-default font-semibold`}>
                                    {f.label}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="3xl:mt-3 mt-2">
                {
                    popular
                        ?
                        <ButtonAnimationNew
                            title={buttonText}
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
                        :
                        <ButtonAnimationNew
                            title={buttonText}
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
                            onClick={() => { window.open("https://bom.so/mrpbeta") }}
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
                }
            </div>
        </CardContent>
    </Card>
);


const MembershipPlansSection = () => {
    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()


    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className="w-full custom-padding-section lg:px-4">
            <div className="custom-container">
                <h1 className="text-center text-title-section-small font-extrabold text-[#1A2025] mb-6">
                    Gói Thành Viên
                </h1>

                {/* <div className="grid grid-cols-2 gap-6"> */}
                {
                    isVisibleTablet
                        ?
                        <div className='w-full'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={60}
                                modules={[Pagination, Autoplay]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                // loop
                                autoplay={true}
                                speed={1000}
                                pagination={customPagination}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 15
                                    },
                                    640: {
                                        slidesPerView: 1.2,
                                        spaceBetween: 15
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                    1920: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    }
                                }}
                                className='custom-swiper-pagination-fmrp h-[880px] !px-2'
                                allowTouchMove={true}
                            >
                                {
                                    planList && planList?.map((plan, index) => (
                                        <SwiperSlide
                                            key={`member-plan-${index}`}
                                        // className='h-full relative cursor-pointer group'
                                        >
                                            <PlanCard
                                                key={`plan-${index}`}
                                                {...plan}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        :
                        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-5">
                            {planList.map((plan, index) => (
                                <PlanCard
                                    key={`plan-${index}`}
                                    {...plan}
                                />
                            ))}
                            {/* <PlanCard
                                title="Freemium"
                                price={0}
                                expirationDate="/1 user"
                                brand="1 chi nhánh"
                                support="Cộng đồng FMRP & Gitbook"
                                type="Cơ bản"
                                features={features}
                                buttonText="Đăng ký ngay"
                                variant="freemium"
                                className="col-span-1 w-full"
                            />
                            <PlanCard
                                title="Professional"
                                price={86000}
                                expirationDate="/1 user / tháng"
                                popular
                                brand="1 chi nhánh"
                                support="đội ngũ chuyên gia"
                                type="Chuyên sâu"
                                features={features}
                                buttonText="Liên hệ"
                                variant="pro"
                                className='col-span-1 w-full'
                            /> */}
                        </div>
                }
            </div>
        </div>
    );
};

export default MembershipPlansSection;
