import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';

import { motion } from 'framer-motion'
import React, { useState } from 'react';
import LogoMarquee from '../ui/partner-fmrp/LogoMarquee';
import { ArrowUpRightIcon } from 'lucide-react';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';

type Props = {}

const PartnerFmrpSection = (props: Props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const logos = [
        "/logo/partner/partner-logo1.svg", "/logo/partner/partner-logo2.svg", "/logo/partner/partner-logo3.svg", "/logo/partner/partner-logo4.svg", "/logo/partner/partner-logo5.svg",
        "/logo/partner/partner-logo6.svg", "/logo/partner/partner-logo7.svg", "/logo/partner/partner-logo8.svg", "/logo/partner/partner-logo9.svg", "/logo/partner/partner-logo10.svg",
        "/logo/partner/partner-logo11.svg", "/logo/partner/partner-logo12.svg", "/logo/partner/partner-logo13.svg", "/logo/partner/partner-logo14.svg", "/logo/partner/partner-logo15.svg",
        "/logo/partner/partner-logo16.svg", "/logo/partner/partner-logo17.svg", "/logo/partner/partner-logo18.svg", "/logo/partner/partner-logo19.svg", "/logo/partner/partner-logo20.svg"
    ];

    return (
        <div className='custom-padding-section '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1]'>
                <div className='space-x-2 font-extrabold' >
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Khách hàng và đối tác</span>
                </div>

                <LogoMarquee logos={logos} />

                <ButtonAnimationNew
                    title="Trở Thành Khách Hàng Của Chúng Tôi"
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
                    onClick={() => console.log('Button Clicked!')}
                    reverse={true}
                    className="border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
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

export default PartnerFmrpSection