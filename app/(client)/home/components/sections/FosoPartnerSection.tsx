import React from 'react'
import Image from 'next/image';
import { useResizeStore } from '@/stores/useResizeStore';

type Props = {}

const FosoPartnerSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='3xl:py-24 xl:py-20 lg:py-16 py-8 custom-container '>
            <div
                className='grid grid-cols-16 lg:p-0 px-6 pt-6 rounded-3xl w-full relative'
                style={{
                    background: isVisibleTablet ? "linear-gradient(180deg, rgba(157, 255, 179, 0.05) -9.88%, rgba(61, 221, 173, 0.45) 94.42%)" : "linear-gradient(to right, rgba(157, 255, 179, 0.1) 8%, rgba(61, 221, 173, 0.45) 73.22%)",
                }}
            >
                <div className='absolute top-0 left-0 size-full ' />
                <div className='lg:col-span-1 lg:block hidden ' />
                <div className='lg:col-span-14 col-span-16 grid lg:grid-cols-14 grid-cols-16 3xl:gap-20 lg:gap-16'>
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

                        <div className='text-default text-[#33404A] font-medium lg:max-w-[90%] max-w-full'>
                            Nếu mỗi doanh nghiệp là sự kiến tạo thành công của chính mình, FOSO mong muốn trở thành cầu nối công nghệ giúp bạn đạt được mục tiêu chuyển đổi số, tối ưu hóa quản lý và thúc đẩy tăng trưởng doanh thu.
                        </div>
                    </div>

                    <div className='lg:col-span-7 col-span-16 flex lg:items-center lg:justify-end justify-center'>
                        <div className='aspect-1.08/1 3xl:h-[584px] 2xl:h-[480px] lg:h-[424px] h-[300px]'>
                            <Image
                                width={1920}
                                height={1080}
                                alt="image"
                                src="/background/team/be-team-1.png"
                                className='size-full object-cover aspect-1.08/1'
                            />
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-1 lg:block hidden' />
            </div>
        </div>
    )
}

export default FosoPartnerSection