import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import React, { useEffect, useRef } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { useScrollContext } from '@/contexts/ScrollContext';
import ServiceProcessIntro from '../ui/service-process/ServiceProcessIntro';
import ServiceProcessStep from '../ui/service-process/ServiceProcessStep';

type Props = {}

const ServiceProcessSection = () => {
    const serviceProcessRef = useRef<HTMLDivElement>(null!)
    const { registerRef } = useScrollContext();

    useEffect(() => {
        registerRef("serviceProcess", serviceProcessRef); // khởi tạo ref động để sử dụng scroll to element
    }, [registerRef]);

    return (
        <div ref={serviceProcessRef} className='relative 3xl:py-24 xl:py-20 lg:py-16 py-8 '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1]'>
                <ServiceProcessIntro />

                <ServiceProcessStep />

                <ButtonAnimation
                    type="button"
                    title="Hẹn lịch tư vấn ngay"
                    reverse={true}
                    icon={
                        <div className='size-5'>
                            <GoArrowUpRight className='size-full' />
                        </div>
                    }
                    className="flex items-center gap-2 text-default text-[#10805B] font-medium px-8 py-2 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
};

export default ServiceProcessSection