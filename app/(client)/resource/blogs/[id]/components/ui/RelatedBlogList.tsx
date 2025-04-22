import React, { useRef } from 'react'
import { IBlogItem } from '@/types/blog/IBlog';
import BlogCardVertical from '@/components/common/card/blog/BlogCardVertical';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';
import BlogCardHorizontal from '../../../../../../../components/common/card/blog/BlogCardHorizontal';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

type Props = {
    dataBlogList: IBlogItem[]
}

const RelatedBlogList = ({ dataBlogList = [] }: Props) => {
    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className='flex flex-col 3xl:gap-6 gap-4 py-10'>
            <h1 className="text-title-section-small font-extrabold mb-2 capitalize">
                Bài Viết Liên Quan
            </h1>


            {
                isVisibleTablet ?
                    (
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
                            className='custom-swiper-pagination h-[640px] rounded-2xl mx-2'
                            allowTouchMove={true}
                        >
                            {
                                dataBlogList?.map((item) => (
                                    <SwiperSlide key={`blog2-${item.id}`} className='h-full'>
                                        <BlogCardVertical blog={item} className={"col-span-3"} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    )
                    :
                    (
                        <div className="grid grid-cols-3 3xl:gap-8 gap-6">
                            {
                                dataBlogList?.map((item) => (
                                    <React.Fragment key={`blog-${item.id}`}>
                                        <BlogCardVertical blog={item} className={"col-span-1"} />
                                    </React.Fragment>
                                ))

                            }
                        </div>
                    )
            }
        </div>
    )
}

export default RelatedBlogList