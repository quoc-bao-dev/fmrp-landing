"use client"
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import MediaCard from '@/components/common/card/media/MediaCard';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import { uuidv4 } from '@/lib/uuid';
import { useResizeStore } from '@/stores/useResizeStore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
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
        link: "https://ketnoidautu.net/foso-ra-mat-app-quan-ly-xuong-cai-thien-tien-do-san-xuat-trong-quan-ly-nha-may-a32964.html",
    },
    {
        id: uuidv4(),
        image: "/example/blog/doanh-nhan-online.webp",
        date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
        category: "Doanh nhân Sài Gòn online",
        title: "Doanh nghiệp chuyển đổi số mạnh mẽ cùng giải pháp phần mềm FMRP",
        link: "https://doanhnhansaigon.vn/doanh-nghiep-chuyen-doi-so-manh-me-cung-giai-phap-phan-mem-fmrp-304651.html?",
    },
    {
        id: uuidv4(),
        image: "/example/blog/cong-nghe-doi-song.webp",
        date: "Wed Aug 14 2024 00:00:00 GMT+0000 (UTC)",
        category: "Công nghệ đời sống",
        title: "Quản lý sản xuất thông minh với giải pháp phần mềm FMRP",
        link: "https://congnghedoisong.net/quan-ly-san-xuat-thong-minh-voi-giai-phap-phan-mem-fmrp-a37796.html",
    },
]

const MediaCoverageFmrpSection = (props: Props) => {
    const swiperRef = useRef<any>(null);
    const router = useRouter()
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { isVisibleTablet } = useResizeStore()

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className='relative custom-padding-section bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_10.1%,#F0F8FF_90.89%,#FFFFFF_100.99%)]'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1]'>
                <div className='space-x-2 font-extrabold text-center'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Báo chí nói về phần mềm</span>
                    <span
                        className='text-title-section-small uppercase'
                        style={{
                            background: "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                            // background: "linear-gradient(107.4deg, #0375F3 80.08%, #013DA0 90.75%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Fmrp
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
                                className='custom-swiper-pagination px-2 flex flex-col gap-8'
                                allowTouchMove={true}
                            >
                                {
                                    mediaList && mediaList?.map((media) => (
                                        <SwiperSlide
                                            key={`media-${media?.id}`}
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
                                mediaList && mediaList?.map((media, index) => (
                                    <React.Fragment key={`media-${media?.id}`}>
                                        <MediaCard media={media} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                }

                <ButtonAnimationNew
                    title="Xem Tất Cả"
                    icon={
                        <div className="2xl:size-12 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                {isHovered ? <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" />}
                            </motion.div>
                        </div>
                    }
                    onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
                    onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
                    onClick={() => { 
                        router.push("/resource/blogs")
                        // window.open("https://fososoft.vn/fblog/") 
                    }}
                    reverse={true}
                    className="border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                    style={{

                        background: "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",

                        WebkitBackdropFilter: "blur(15px)", // Safari
                        boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                    }}
                />
            </div>

        </div>
    )
}

export default MediaCoverageFmrpSection