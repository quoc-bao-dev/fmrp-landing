
import LogoMarquee from '../ui/customer-partner/LogoMarquee';

import { motion } from 'framer-motion'
import React, { useState } from 'react';

import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';

import { useSheetStores } from '@/stores/useSheetStores';

type Props = {}

const CustomerPartnerSection = (props: Props) => {
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()

    const logos = [
        "/logo/partner/partner-logo1.svg", "/logo/partner/partner-logo2.svg", "/logo/partner/partner-logo3.svg", "/logo/partner/partner-logo4.svg", "/logo/partner/partner-logo5.svg",
        "/logo/partner/partner-logo6.svg", "/logo/partner/partner-logo7.svg", "/logo/partner/partner-logo8.svg", "/logo/partner/partner-logo9.svg", "/logo/partner/partner-logo10.svg",
        "/logo/partner/partner-logo11.svg", "/logo/partner/partner-logo12.svg", "/logo/partner/partner-logo13.svg", "/logo/partner/partner-logo14.svg", "/logo/partner/partner-logo15.svg",
        "/logo/partner/partner-logo16.svg", "/logo/partner/partner-logo17.svg", "/logo/partner/partner-logo18.svg", "/logo/partner/partner-logo19.svg", "/logo/partner/partner-logo20.svg", "/logo/partner/partner-logo14.svg"
    ];

    return (
        <div className='custom-padding-section '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1]'>
                <div className='space-x-2 font-extrabold' >
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Khách hàng và đối tác</span>
                </div>

                <LogoMarquee logos={logos} />

                <ButtonAnimationNew
                    title="Trở thành khách hàng của chúng tôi"
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
            </div>
        </div>
    )
}

export default CustomerPartnerSection