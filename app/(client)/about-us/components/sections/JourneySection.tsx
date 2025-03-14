import BlurImage from '@/components/common/blur/BlurImage'
import { uuidv4 } from '@/lib/uuid'
import { useResizeStore } from '@/stores/useResizeStore'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {}

const dataImage = [
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-1.png",
        year: "2016"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-2.png",
        year: "2019"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-6.webp",
        year: "Hiện tại"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-4.png",
        year: "Hiện tại"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-5.png",
        year: "Hiện tại"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example-3.png",
        year: "Hiện tại"
    },
]

const JourneySection = (props: Props) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const swiperRef = useRef<any>(null);
    const [selectedImage, setSelectedImage] = useState<any>(null);

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },
    }

    useEffect(() => {
        if (swiperRef.current) {
            if (inView) {
                swiperRef.current.autoplay.start();
            } else {
                swiperRef.current.autoplay.stop();
            }
        }
    }, [inView]);

    return (
        <div className='custom-padding-section'>
            <div ref={ref} className='custom-container-no-right relative'>
                <div className='absolute -top-20 -left-3 flex space-x-2 space-y-8'>
                    <motion.div
                        className='relative xl:w-[50px] w-11 h-auto aspect-1/2 left-4'
                        animate={{
                            y: [0, -3, 0], // Nhảy lên xuống nhẹ
                            rotate: [-8, 0, -8], // Lắc nhẹ để nhấn mạnh hướng
                        }}
                        transition={{
                            duration: 1, // Đồng bộ với chữ
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/background/ui/about-us/arrow-right-down.webp"
                            alt="Mission Icon"
                            width={200}
                            height={200}
                            className='size-full object-contain aspect-1/2'
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div
                        className={`${playwrite_is_sans.className} capitalize -rotate-[3deg] 3xl:!text-lg xl:!text-base lg:!text-sm !text-sm !tracking-[1%] text-[#4D5F6E] font-normal`}
                        animate={{
                            rotate: [-4, 0, -4], // Lắc cùng hướng với mũi tên
                            x: [-2, 0, -2], // Nhẹ nhàng đẩy qua lại
                        }}
                        transition={{
                            duration: 1, // Đồng bộ với mũi tên
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Chặng đường khởi tạo nên FOSO
                    </motion.div>
                </div>

                {/* <Marquee
                    speed={30}
                    pauseOnHover
                    autoFill
                    gradient={false}
                    className='rounded-l-xl'
                >
                    {dataImage.map((item, index) => (
                        <div key={`item-${index}`} className="3xl:w-[600px] xl:w-[480px] w-[380px] h-auto aspect-3/2 3xl:px-4 xl:px-3 px-2 flex items-center rounded-xl">
                            <Image
                                src={item.image}
                                alt={`item-${index}`}
                                width={800}
                                height={600}
                                className="size-full object-cover aspect-3/2 rounded-xl"
                            />
                        </div>
                    ))}
                </Marquee> */}

                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        if (!inView) {
                            swiper.autoplay.stop();
                        }
                    }}
                    autoplay={inView ? { delay: 3000, disableOnInteraction: false } : false}
                    speed={1200}
                    pagination={false}
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
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        },
                        1920: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        }
                    }}
                    className='custom-swiper-pagination 3xl:h-[380px] xl:h-[320px] lg:h-[280px] h-[280px] rounded-l-2xl'
                    allowTouchMove={true}
                    grabCursor={true}
                >
                    {
                        dataImage.map((item, index) => (
                            <SwiperSlide
                                key={`item-${index}`}
                                onClick={() => setSelectedImage(item.image)}
                                className='w-full h-auto flex items-center rounded-2xl relative group aspect-3/2'
                            >
                                <Image
                                    src={item.image}
                                    alt={`item-${index}`}
                                    width={800}
                                    height={600}
                                    className="size-full object-cover rounded-2xl aspect-3/2"
                                />

                                <div
                                    className='absolute bottom-0 left-0 px-6 py-2 w-full rounded-b-2xl text-title-section-small text-white group-hover:text-[#53B086] font-bold custom-transition'
                                    style={{
                                        background: "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 12.85%, rgba(0, 0, 0, 0) 100%)"
                                    }}
                                >
                                    {item.year}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* Overlay hiển thị ảnh toàn màn hình */}
                {
                    selectedImage &&
                    (
                        <div
                            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50 overflow-x-hidden"
                        // onClick={() => setSelectedImage(null)}
                        >
                            {/* Nút Close */}
                            <button
                                className="size-8 flex justify-center items-center absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>

                            <Image
                                src={selectedImage}
                                alt="Preview"
                                width={1920}
                                height={1080}
                                className="size-full max-w-[90%] max-h-[90%] object-contain"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default JourneySection