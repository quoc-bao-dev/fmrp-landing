import React, { useMemo } from 'react'
import Image from 'next/image';
import { useResizeStore } from '@/stores/useResizeStore';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';

type Props = {}

const FosoPartnerSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    // Memo hóa giá trị background để tránh tính toán lại mỗi lần render
    const backgroundStyle = useMemo(() => ({
        background: isVisibleTablet
            ? "linear-gradient(180deg, rgba(157, 255, 179, 0.05) -9.88%, rgba(61, 221, 173, 0.45) 94.42%)"
            : "linear-gradient(to right, rgba(157, 255, 179, 0.1) 8%, rgba(61, 221, 173, 0.45) 73.22%)",
    }), [isVisibleTablet]);

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
                        {/* <AnimatedReveal
                            from='left'
                            effect='fade'
                            // once={false}
                            className='space-x-2 font-extrabold text-title-section-small lg:max-w-[80%] max-w-full'
                        >
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
                        </AnimatedReveal> */}
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

                        {/* <AnimatedReveal
                            from='left'
                            effect='fade'
                            // once={false}
                            delay={0.1}
                            className='text-default text-[#33404A] font-medium lg:max-w-[90%] max-w-full'
                        >
                            Nếu mỗi doanh nghiệp là sự kiến tạo thành công của chính mình, FOSO mong muốn trở thành cầu nối công nghệ giúp bạn đạt được mục tiêu chuyển đổi số, tối ưu hóa quản lý và thúc đẩy tăng trưởng doanh thu.
                        </AnimatedReveal> */}
                        <div className='text-default text-[#33404A] font-medium lg:max-w-[90%] max-w-full'>
                            Nếu mỗi doanh nghiệp là sự kiến tạo thành công của chính mình, FOSO mong muốn trở thành cầu nối công nghệ giúp bạn đạt được mục tiêu chuyển đổi số, tối ưu hóa quản lý và thúc đẩy tăng trưởng doanh thu.
                        </div>
                    </div>

                    {/* Hình ảnh minh họa */}
                    <div className='lg:col-span-7 col-span-16 flex lg:items-center lg:justify-end justify-center'>
                        <AnimatedReveal
                            from='center'
                            effect='fade'
                            // once={false}
                            className='aspect-1.08/1 3xl:h-[584px] 2xl:h-[480px] lg:h-[424px] h-[300px]'
                        >
                            <Image
                                src="/background/team/be-team-1.png"
                                alt="Foso Team"
                                fill
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