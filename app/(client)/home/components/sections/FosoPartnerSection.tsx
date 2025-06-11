'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useMemo } from 'react';
const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });

type Props = {}

const FosoPartnerSection = (props: Props) => {
    // Memo hóa giá trị background để tránh tính toán lại mỗi lần render
    const backgroundStyle = useMemo(() => ({
        background: "linear-gradient(179.98deg, rgba(122, 242, 177, 0.156585) 0.02%, rgba(61, 221, 173, 0.36) 100.06%)"
    }), []);

    return (
        <div className='custom-padding-section custom-container '>
            <div
                className='grid grid-cols-16 lg:p-0 px-6 pt-6 rounded-3xl w-full relative'
                style={backgroundStyle}
            >
                {/* Lớp nền */}
                <div className='absolute top-0 left-0 size-full ' />

                {/* Grid layout chính */}
                <div className='lg:col-span-1 lg:block hidden ' />
                <div className='lg:col-span-14 col-span-16 grid lg:grid-cols-14 grid-cols-16 3xl:gap-20 lg:gap-16'>
                    {/* Phần nội dung */}
                    <div className='lg:col-span-7 col-span-16 flex flex-col lg:gap-6 gap-3 justify-center size-full '>
                        <div className='space-x-2 font-extrabold text-title-section-small lg:max-w-[80%] max-w-full'>
                            <span
                                className='uppercase'
                                style={{
                                    background: "linear-gradient(to right, #85EEB3 0%, #53B086 100%), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Foso
                            </span>
                            <span className='text-[#1A2025] capitalize'>
                                - Nhà đồng hành tận tâm nhất
                            </span>
                        </div>

                        <div className='text-base-default text-[#33404A] font-medium lg:max-w-[90%] max-w-full'>
                            Nếu mỗi doanh nghiệp là sự kiến tạo thành công của chính mình, FOSO mong muốn trở thành cầu nối công nghệ giúp bạn đạt được mục tiêu chuyển đổi số, tối ưu hóa quản lý và thúc đẩy tăng trưởng doanh thu.
                        </div>
                    </div>

                    {/* Hình ảnh minh họa */}
                    <div className='lg:col-span-7 col-span-16 flex lg:items-center lg:justify-end justify-center'>
                        <AnimatedReveal
                            from='center'
                            effect='fade'
                            className='aspect-1.08/1 3xl:h-[584px] 2xl:h-[480px] lg:h-[424px] h-[300px]'
                        >
                            <Image
                                src="/background/ui/mascot/home5.webp"
                                alt="Foso Team"
                                width={800}
                                height={450}
                                className="size-full object-cover rounded-xl"
                                priority={false}
                                loading="lazy"
                            />
                        </AnimatedReveal>
                    </div>
                </div>

                <div className='lg:col-span-1 lg:block hidden' />
            </div>
        </div>
    )
}

// Memo hóa để tránh re-render không cần thiết
export default React.memo(FosoPartnerSection);