'use client'

import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import React, { useRef } from 'react'
import TableOfContents from './components/sections/TableOfContents';
import BannerVerticalFmrp from '@/components/common/banner/BannerVerticalFmrp';
import BannerVerticalBlog from '@/components/common/banner/BannerVerticalBlog';
import Image from 'next/image';
import AvatarCustom from '@/components/common/avatar/AvatarCustom';
import CalendarBlankIcon from '@/components/icons/common/CalendarBlankIcon';
import ClockIcon from '@/components/icons/common/ClockIcon';
import ReactionBox from './components/ui/ReactionBox';
import RelatedBlogList from './components/ui/RelatedBlogList';
import { uuidv4 } from '@/lib/uuid';
import { IBlogItem } from '@/types/blog/IBlog';
import SocialShare from './components/ui/SocialShare';
import { useResizeStore } from '../../../../../stores/useResizeStore';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useBlogsList } from '@/managers/api/blogs/useBlogsList';
import { useGetDataDetailBlog } from '../../../../../managers/api/blogs/useGetDataDetailBlog';
import { useParams } from 'next/navigation'
import { FORMAT_DATE } from '../../../../../constants/FormatDate';
import moment from 'moment';
import QuoteBox from '../../../../../components/common/quote/QuoteBox';
import AutoTableOfContents from './components/sections/AutoTableOfContents';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "#" },
    { label: "Blog", href: "/resource/blogs" },
    { label: "Quản Lý Sản Xuất" },
];

const dataTypeBlog = [
    {
        name: "Quản lý sản xuất",
        id: 1,
        color: "#0F4F9E",
    },
    {
        name: "Quản lý Bán Hàng",
        id: 2,
        color: "#15AA7A",
    },
]


const dataBlogList: IBlogItem[] = [
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        type_blog: [
            {
                name: "Quản lý sản xuất",
                id: 1,
                color: "#0F4F9E",
            },
            {
                name: "Quản lý Bán Hàng",
                id: 2,
                color: "#15AA7A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc",
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        type_blog: [
            {
                name: "Quản lý Bán Hàng",
                id: 2,
                color: "#15AA7A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        type_blog: [
            {
                name: "Thiết Kế Website",
                id: 3,
                color: "#555CF3",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
]

const DetailBlog = () => {

    const idBlog = useParams()
    console.log('idBlog slug params', idBlog);

    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()
    const { data: dataBlogsRelatedList, isLoading: isLoadingBlogsRelatedList } = useBlogsList({ page: 1, limit: 3, idBlog: idBlog?.slug })
    const { data: dataBlogDetail } = useGetDataDetailBlog({ slug: idBlog?.slug })

    console.log('dataBlogsRelatedList', dataBlogsRelatedList);
    console.log('dataBlogDetail', dataBlogDetail);


    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },
    }

    const addIdsToHeadings = (html: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');

        headings.forEach((heading, index) => {
            const text = heading.textContent || '';
            const slug = text.toLowerCase().replace(/[^\w]+/g, '-'); // chuyển thành slug
            heading.id = `${slug}-${index}`; // tránh trùng id
        });

        return doc.body.innerHTML;
    };

    return (
        <main className='custom-padding-section'>
            <div className='custom-container 3xl:space-y-14 space-y-10'>
                <div className='lg:pt-8 pt-8'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>

                <div className='flex lg:flex-row flex-col 3xl:gap-8 gap-6'>
                    <div className='3xl:w-[74%] xxl:w-[70%] lg:w-[68%] w-full shrink-0 flex flex-col lg:gap-8 gap-4'>
                        <div className="rounded-lg">
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-wrap items-center gap-2'>
                                    {
                                        dataBlogDetail?.type_blog && dataBlogDetail?.type_blog?.map((item: any) => (
                                            <div
                                                key={`tag-${item.id}`}
                                                className='px-3 py-2 3xl:text-[13px] text-xs text-white font-semibold rounded-lg capitalize'
                                                style={{
                                                    background: item.color
                                                }}
                                            >
                                                {item?.name ?? ""}
                                            </div>
                                        ))
                                    }
                                </div>

                                <h1 className="text-title-section-small font-extrabold mb-2">
                                    {dataBlogDetail?.title}
                                </h1>

                                <div className='flex md:flex-row flex-col md:items-center md:justify-between md:gap-2 gap-4'>
                                    <div className='flex items-center 3xl:gap-4 gap-2'>
                                        <AvatarCustom
                                            classNameContainer='size-16 border border-[#F1F5F7] flex items-center justify-center shadow-md'
                                            classImage='!size-8 !rounded-none'
                                            avatar='/avatar/common/avatar-foso.png'
                                        />

                                        <div className='space-y-0.5'>
                                            <div className='text-sm text-[#667F93] font-medium'>
                                                Tác giả
                                            </div>

                                            <div className="2xl:text-base lg:text-sm text-base font-bold">
                                                FOSO Creator
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2 flex items-center md:gap-8 gap-4 2xl:text-base text-sm  font-medium">
                                        <div className="flex items-center gap-1 text-[#667F93] md:pr-8 pr-4 border-r">
                                            <CalendarBlankIcon className="mr-1 size-6" />
                                            <span>
                                                Cập nhật vào: {moment(dataBlogDetail?.created_at)?.format(FORMAT_DATE?.DATE_SLASH_LONG)}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 text-[#667F93]">
                                            <ClockIcon className="mr-1 size-6" />

                                            <span>
                                                10 phút đọc
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className='w-full h-auto aspect-3/2 rounded-xl overflow-hidden'>
                                    <Image
                                        src="/example/blog/example12.png"
                                        width={1200}
                                        height={900}
                                        alt="Quy trình 5S là gì?"
                                        className="rounded-xl w-full aspect-3/2 hover:scale-[1.02] custom-transition"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <QuoteBox content={dataBlogDetail?.descption} />


                            <div className="article-content">
                                <p
                                    className="text-[#33404A] font-medium"
                                    dangerouslySetInnerHTML={{ __html: `${addIdsToHeadings(dataBlogDetail?.content ?? '')}` }}
                                />
                            </div>
                        </div>

                        {isVisibleTablet &&
                            <SocialShare
                                classNameContainer={"flex flex-col items-center justify-center gap-4 z-40"}
                                classNameSocial={"flex items-center justify-center gap-2"}
                            />
                        }

                        <ReactionBox />
                    </div>

                    {
                        !isVisibleTablet &&
                        <div className='3xl:w-[26%] xxl:w-[30%] lg:w-[32%] w-full'>
                            <div className='sticky top-28 space-y-8'>
                                {/* <TableOfContents /> */}
                                <AutoTableOfContents /> 
                                <BannerVerticalFmrp />
                                <BannerVerticalBlog />
                            </div>
                        </div>
                    }
                </div>

                <RelatedBlogList dataBlogList={dataBlogList} />

                {
                    isVisibleTablet &&
                    <div className='w-full'>
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
                            className='custom-swiper-pagination lg:h-full md:h-[560px] h-[620px] rounded-2xl mx-2'
                            allowTouchMove={true}
                        >
                            <SwiperSlide className='h-full'>
                                <BannerVerticalFmrp />
                            </SwiperSlide>
                            <SwiperSlide className='h-full'>
                                <BannerVerticalBlog />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                }
            </div>

            {
                !isVisibleTablet &&
                <SocialShare
                    classNameContainer={"fixed 3xl:left-24 xxl:left-12 xl:left-8 left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-40"}
                    classNameSocial={"flex flex-col items-center justify-center gap-4"}
                />
            }
        </main>
    )
}

export default DetailBlog