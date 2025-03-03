import { uuidv4 } from '@/lib/uuid'
import { useResizeStore } from '@/stores/useResizeStore'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { useRef } from 'react'
import Marquee from 'react-fast-marquee'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const dataImage = [
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example1.webp"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example2.webp"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example3.webp"
    },
]

const JourneySection = (props: Props) => {
    const swiperRef = useRef<any>(null);

    const { isVisibleTablet } = useResizeStore()

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className='custom-padding-section'>
            <div className='custom-container-no-right relative'>
                <div className='absolute -top-20 -left-3 flex space-x-2 space-y-8'>
                    <div className='relative xl:w-[50px] w-11 h-auto aspect-1/2 left-4'>
                        <Image
                            src="/background/ui/about-us/arrow-right-down.webp"
                            alt="Mission Icon"
                            width={200}
                            height={200}
                            className='size-full object-contain aspect-1/2'
                            loading="lazy"
                        />
                    </div>

                    <div className={`${playwrite_is_sans.className} capitalize -rotate-[3deg] 3xl:!text-lg xl:!text-base lg:!text-sm !text-sm !tracking-[1%] text-[#4D5F6E] font-normal`}>
                        Chặng đường khởi tạo nên FOSO
                    </div>
                </div>

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
                        dataImage.map((item, index) => (
                            <SwiperSlide
                                key={`item-${index}`}
                            // className='h-full relative cursor-pointer group'
                            >
                                <div className="3xl:w-[600px] xl:w-[480px] w-[380px] h-auto aspect-3/2 3xl:px-4 xl:px-3 px-2 flex items-center rounded-xl">
                                    <Image
                                        src={item.image}
                                        alt={`item-${index}`}
                                        width={800}
                                        height={600}
                                        className="size-full object-cover aspect-3/2 rounded-xl"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default JourneySection