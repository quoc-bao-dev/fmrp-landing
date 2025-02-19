import React from 'react'
import Image from 'next/image';

type Props = {}

const PartnerWithFoso = (props: Props) => {
    return (
        <div className='3xl:py-24 py-20 custom-container '>
            <div
                className='grid grid-cols-12  pl-20 gap-20 rounded-3xl w-full'
                style={{
                    background: "linear-gradient(to right, rgba(157, 255, 179, 0.1) 8%, rgba(61, 221, 173, 0.45) 73.22%)",
                }}
            >
                <div className='col-span-5 flex flex-col gap-6 justify-center size-full '>
                    <div className='space-x-2 font-extrabold text-title-section-small max-w-[90%]'>
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

                    <div className='text-default text-[#33404A] font-medium line-clamp-4'>
                        Nếu mỗi doanh nghiệp là sự kiến tạo thành công của chính mình, FOSO mong muốn trở thành cầu nối công nghệ giúp bạn đạt được mục tiêu chuyển đổi số, tối ưu hóa quản lý và thúc đẩy tăng trưởng doanh thu.
                    </div>
                </div>

                <div className='col-span-6 flex items-center justify-end'>
                    <div className='aspect-1.08/1 h-[584px]'>
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
        </div>
    )
}

export default PartnerWithFoso