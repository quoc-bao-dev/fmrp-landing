'use client'

import BlurredBackground from '@/components/common/blur/BlurredBackground';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import MediaCard from '@/components/common/card/media/MediaCard';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import { uuidv4 } from '@/lib/uuid';
import { useResizeStore } from '@/stores/useResizeStore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useMemo, useRef } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {}

const mediaList = [
    {
        id: uuidv4(),
        image: "/example/blog/ket-noi-dau-tu.webp",
        date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
        category: "Kết nối đầu tư",
        title: "FOSO ra mắt App Quản lý xưởng cải thiện tiến độ sản xuất",
        link: "https://ketnoidautu.net/foso-ra-mat-app-quan-ly-xuong-cai-thien-tien-do-san-xuat-trong-quan-ly-nha-may-a32964.html"
    },
    {
        id: uuidv4(),
        image: "/example/blog/doanh-nhan-online.webp",
        date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
        category: "Doanh nhân Sài Gòn online",
        title: "Doanh nghiệp chuyển đổi số mạnh mẽ cùng giải pháp phần mềm FMRP",
        link: "https://doanhnhansaigon.vn/doanh-nghiep-chuyen-doi-so-manh-me-cung-giai-phap-phan-mem-fmrp-304651.html?"
    },
    {
        id: uuidv4(),
        image: "/example/blog/cong-nghe-doi-song.webp",
        date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
        category: "Công nghệ đời sống",
        title: "Quản lý sản xuất thông minh với giải pháp phần mềm FMRP",
        link: "https://congnghedoisong.net/quan-ly-san-xuat-thong-minh-voi-giai-phap-phan-mem-fmrp-a37796.html"
    },
]

const MediaCoverageSection = (props: Props) => {
    const router = useRouter()
    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()

    const customPagination = useMemo(() => ({
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },
    }), [])

    return (
        <div className='relative custom-padding-section '>
            {!isVisibleTablet && <BlurredBackground className='-top-[25%] -left-[250px] z-[1]' />}

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
                        <div className='w-full px-2'>
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
                                className='custom-swiper-pagination md:h-[500px] h-[520px] rounded-2xl'
                                allowTouchMove={true}
                            >
                                {
                                    mediaList && mediaList?.map((media) => (
                                        <SwiperSlide key={`media-${media?.id}`}>
                                            <MediaCard media={media} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        :
                        <div className='grid grid-cols-3 3xl:gap-6 gap-4 w-full'>
                            {
                                mediaList && mediaList?.map((media, index) => (
                                    <React.Fragment key={`media-${media?.id}`}>
                                        <MediaCard media={media} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                }

                <ButtonAnimationNew
                    title="Xem tất cả"
                    icon={
                        <div className="2xl:size-12 md:size-10 size-9 rounded-full flex items-center justify-center group-hover:bg-[#10805B] group-hover:text-white duration-500 transition-colors">
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { x: 2, y: -2 }, // Khi hover vào button, div cũng scale lớn hơn
                                    press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
                            </motion.div>
                        </div>
                    }
                    onClick={() => {
                        router.push("/resource/blogs")
                    }}
                    reverse={true}
                    className="border-gradient-button-no-bg-foso flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-[#10805B] hover:bg-[#A3EED6]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter hover:text-[#10805B] font-medium pl-6 pr-1 py-1 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                    style={{
                        WebkitBackdropFilter: "blur(15px)", // Safari
                        boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                    }}
                />
            </div>
        </div>
    )
}

export default MediaCoverageSection