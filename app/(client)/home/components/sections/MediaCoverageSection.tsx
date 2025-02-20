import BlurredBackground from '@/components/common/blur/BlurredBackground'
import React, { useRef } from 'react'

import { uuidv4 } from '@/lib/uuid';
import MediaCard from '@/components/common/card/media/MediaCard';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';

import { GoArrowUpRight } from "react-icons/go";
import { useResizeStore } from '@/stores/useResizeStore';

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const MediaCoverageSection = (props: Props) => {
    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()

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

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className='relative 3xl:py-24 xl:py-20 lg:py-16 py-8 '>
            <BlurredBackground className='-top-[10%] -left-[250px] -z-0' />

            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1]'>
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

                {
                    isVisibleTablet
                        ?
                        <div className='w-full '>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={60}
                                modules={[Pagination, Autoplay]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                // loop
                                autoplay={true}
                                speed={1000}
                                pagination={customPagination}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                    1920: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    }
                                }}
                                className='custom-swiper-pagination md:h-[400px] h-[400px] rounded-2xl'
                                allowTouchMove={true}
                            >
                                {
                                    mediaList && mediaList?.map((media) => (
                                        <SwiperSlide
                                            key={`media-${media?.id}`}
                                        // className='h-full relative cursor-pointer group'
                                        >
                                            <MediaCard media={media} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        :
                        <div className='grid grid-cols-3 3xl:gap-6 gap-4 w-full'>
                            {
                                mediaList && mediaList?.map((media) => (
                                    <React.Fragment key={`media-${media?.id}`}>
                                        <MediaCard media={media} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                }

                <ButtonAnimation
                    type="button"
                    title="Xem tất cả"
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
}

export default MediaCoverageSection