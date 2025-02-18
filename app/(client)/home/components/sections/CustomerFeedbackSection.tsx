import React from 'react'

import LogoMarquee from '../ui/LogoMarquee';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';
import { GoArrowUpRight } from 'react-icons/go';

type Props = {}

const CustomerFeedbackSection = (props: Props) => {
    const logos = [
        "/logo/partner/partner-logo1.svg", "/logo/partner/partner-logo2.svg", "/logo/partner/partner-logo3.svg", "/logo/partner/partner-logo4.svg", "/logo/partner/partner-logo5.svg",
        "/logo/partner/partner-logo6.svg", "/logo/partner/partner-logo7.svg", "/logo/partner/partner-logo8.svg", "/logo/partner/partner-logo9.svg", "/logo/partner/partner-logo10.svg",
        "/logo/partner/partner-logo11.svg", "/logo/partner/partner-logo12.svg", "/logo/partner/partner-logo13.svg", "/logo/partner/partner-logo14.svg", "/logo/partner/partner-logo15.svg",
        "/logo/partner/partner-logo16.svg", "/logo/partner/partner-logo17.svg", "/logo/partner/partner-logo18.svg", "/logo/partner/partner-logo19.svg", "/logo/partner/partner-logo20.svg"
    ];

    return (
        <div className='3xl:py-24 py-20 '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 gap-10 relative z-[1]'>
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Khách hàng và đối tác</span>
                </div>

                <LogoMarquee logos={logos} />

                <ButtonAnimation
                    type="button"
                    title="Trở thành khách hàng của chúng tôi"
                    reverse={true}
                    icon={
                        <div className='size-5'>
                            <GoArrowUpRight className='size-full' />
                        </div>
                    }
                    className="flex items-center gap-2 text-default text-[#10805B] font-medium px-8 py-2 border border-[#10805B] rounded-[40px]"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default CustomerFeedbackSection