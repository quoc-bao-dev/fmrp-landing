import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import ProcessStep from '../ui/ProcessStep'
import { forwardRef } from 'react';

type Props = {}




const ServiceProcessSection = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref} className='relative 3xl:py-24 py-20 '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 gap-10 relative z-[1]'>
                <div className='flex flex-col gap-4 max-w-[49%]'>
                    <div className='space-x-2 font-extrabold text-center'>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>
                            Tăng hiệu suất, giảm rủi ro cùng
                        </span>
                        <span
                            className='text-title-section-small uppercase'
                            style={{
                                background: "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Foso
                        </span>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>
                            vận hành tối ưu
                        </span>
                    </div>

                    <div className='text-default text-[#33404A] font-medium text-center'>
                        Khát vọng nâng tầm doanh nghiệp nhỏ – FOSO đồng hành cùng SME Việt Nam, Giúp họ quản trị hiệu quả, bứt phá kinh doanh. Mỗi giải pháp chúng tôi mang lại là cơ hội để bạn vươn xa hơn. Đồng hành cùng doanh nghiệp Việt.
                    </div>
                </div>

                <ProcessStep />

                <ButtonAnimation
                    type="button"
                    title="Hẹn lịch tư vấn ngay"
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
});

// ✅ Bắt buộc phải đặt `displayName` khi dùng `forwardRef`
ServiceProcessSection.displayName = "ServiceProcessSection";

export default ServiceProcessSection