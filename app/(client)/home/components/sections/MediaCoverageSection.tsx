import BlurredBackground from '@/components/common/blur/BlurredBackground'
import React from 'react'

import { uuidv4 } from '@/lib/uuid';
import MediaCard from '@/components/common/card/media/MediaCard';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';

import { GoArrowUpRight } from "react-icons/go";

type Props = {}

const MediaCoverageSection = (props: Props) => {
    const mediaList = [
        {
            id: uuidv4(),
            image: "/example/blog/example1.svg",
            date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
            category: "Doanh nhân Sài Gòn online",
            title: "Doanh nghiệp chuyển đổi số mạnh mẽ cùng giải pháp phần mềm FMRP"
        },
        {
            id: uuidv4(),
            image: "/example/blog/example1.svg",
            date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
            category: "Công nghệ đời sống",
            title: "Quản lý sản xuất thông minh với giải pháp phần mềm FMRP"
        },
        {
            id: uuidv4(),
            image: "/example/blog/example1.svg",
            date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
            category: "Kết nối đầu tư",
            title: "FOSO ra mắt App Quản lý xưởng cải thiện tiến độ sản xuất"
        },
    ]

    return (
        <div className='relative 3xl:py-24 py-20 '>
            <BlurredBackground className='-top-[10%] -left-[250px] -z-0' />

            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 gap-10 relative z-[1]'>
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Báo chí nói về</span>
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
                </div>

                <div className='grid grid-cols-3 3xl:gap-6 gap-4 w-full'>
                    {
                        mediaList && mediaList?.map((media) => (
                            <React.Fragment key={`media-${media?.id}`}>
                                <MediaCard media={media} />
                            </React.Fragment>
                        ))
                    }
                </div>

                <ButtonAnimation
                    type="button"
                    title="Xem tất cả"
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

export default MediaCoverageSection