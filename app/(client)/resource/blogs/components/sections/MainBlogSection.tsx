import React, { useEffect, useRef, useState } from 'react'
import CommunityJoinSection from '../ui/CommunityJonbinSection'
import { uuidv4 } from '@/lib/uuid'
import BlogCardVertical from '@/components/common/card/blog/BlogCardVertical'
import { IBlogItem, IFilterBlog } from '@/types/blog/IBlog'
import { CustomPagination } from '@/components/common/paginations/CustomPagination'
import { useResizeStore } from '@/stores/useResizeStore';

import InputSearchComponent from '@/components/common/search/InputSearchComponent'
import { useStatePageBlogs } from '../../_state/useStatePageBlogs'
import BannerVerticalBlog from '@/components/common/banner/BannerVerticalBlog'
import BannerVerticalFmrp from '@/components/common/banner/BannerVerticalFmrp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useGetTypeBlogsList } from '@/managers/api/blogs/useGetTypeBlogsList'
import { useBlogsList } from '@/managers/api/blogs/useBlogsList'
import BlogTypeSkeleton from '@/components/common/skeleton/blogs/BlogTypeSkeleton';
import BlogCardSkeletonVertical from '../../../../../../components/common/skeleton/blogs/BlogCardSkeletonVertical';
import SystemNodataNew from '../../../../../../components/common/system/SystemNodataNew';
import { smoothScrollTo } from '@/utils/scroll/scrollUtils'

type Props = {}

const dataBlog: IBlogItem[] = [
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
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        type_blog: [
            {
                name: "Thiết Kế App Mobile",
                id: 4,
                color: "#F3654A",
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
                name: "Tin Tức FOSO",
                id: 5,
                color: "#F47690",
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
                name: "Báo chí nói về FOSO",
                id: 6,
                color: "#12AFF0",
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
                name: "Sản phẩm công ty",
                id: 7,
                color: "#FACA4A",
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
        time_read: "20 phút đọc"
    },
]

const dataFilterBlog: any[] = [
    {
        id: "1",
        name: "Tất cả",
        countBlog: 108
    },
    {
        id: "2",
        name: "Thiết kế Website",
        countBlog: 36
    },
    {
        id: "3",
        name: "Thiết kế App Mobile",
        countBlog: 13
    },
    {
        id: "4",
        name: "Quản Lý Sản Xuất",
        countBlog: 25
    },
    {
        id: "5",
        name: "Quản Lý Bán Hàng",
        countBlog: 22
    },
    {
        id: "6",
        name: "Báo Chí Nói Về FOSO",
        countBlog: 7
    },
    {
        id: "7",
        name: "Tin Tức FOSO",
        countBlog: 5
    },
]

const itemsPerPage = 8 // Set your desired items per page here

const MainBlogSection = (props: Props) => {
    const swiperRef = useRef<any>(null);
    const titleRef = useRef<HTMLHeadingElement>(null)

    const { isVisibleTablet } = useResizeStore()
    const [currentPage, setCurrentPage] = useState<number>(1)

    const { isStatePageBlogs, queryKeyIsStatePageBlogs } = useStatePageBlogs()

    const { data: dataTypeBlogsList, isLoading: isLoadingDataTypeBlogsList } = useGetTypeBlogsList()

    const { data: dataBlogsList, isLoading: isLoadingBlogsList } = useBlogsList({ page: currentPage, limit: itemsPerPage, typeBlog: isStatePageBlogs?.isSelectedCategory, search: isStatePageBlogs?.searchBlog, enabled: true })

    useEffect(() => {
        if (dataTypeBlogsList && !isStatePageBlogs?.isSelectedCategory) {
            queryKeyIsStatePageBlogs({ isSelectedCategory: dataTypeBlogsList[0] });
        }
    }, [dataTypeBlogsList]);

    const handleFilterBlog = (value: IFilterBlog) => {
        queryKeyIsStatePageBlogs({
            isSelectedCategory: value
        })
        setCurrentPage(1)
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)

        setTimeout(() => {
            if (titleRef.current) {
                const targetY = titleRef.current.getBoundingClientRect().top + window.scrollY - 100

                smoothScrollTo(targetY,500)
            }
        }, 100);
    }

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    const handleChangeInputSearch = (value: string) => {
        queryKeyIsStatePageBlogs({
            searchBlog: value
        })
        setCurrentPage(1)
    }

    // const dataBackgroundColor = [
    //     {
    //         id: "Quản Lý Sản Xuất",
    //         bg: "#0F4F9E"
    //     },
    //     {
    //         id: "Quản Lý Bán Hàng",
    //         bg: "#15AA7A"
    //     },
    //     {
    //         id: "Thiết Kế Website",
    //         bg: "#555CF3"
    //     },
    //     {
    //         id: "Thiết Kế App Mobile",
    //         bg: "#F3654A"
    //     },
    //     {
    //         id: "Tin Tức FOSO",
    //         bg: "#F47690"
    //     },
    //     {
    //         id: "Báo Chí Nói Về FOSO",
    //         bg: "#12AFF0"
    //     },
    //     {
    //         id: "Sản phẩm công ty",
    //         bg: "#FACA4A"
    //     },
    // ]

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col 3xl:gap-6 gap-6 relative z-[2]'>
                <div className='w-full flex lg:flex-row flex-col 3xl:gap-8 gap-6'>
                    {/* Main Content Area */}
                    <div className="3xl:w-[74%] xxl:w-[70%] lg:w-[68%] w-full flex flex-col 3xl:gap-8 gap-6 lg:order-1 order-2">
                        <h1 ref={titleRef} className="text-title-section-small font-extrabold align-middle">Tất Cả Bài Viết</h1>
                        {/* Hero Banner */}

                        {/* {
                            !isVisibleTablet && dataBlogsList?.data?.length > 0 &&
                            <React.Fragment>
                                <CommunityJoinSection />
                            </React.Fragment>
                        } */}

                        {/* Article Grid */}
                        <div className={`${dataBlogsList?.data?.length > 0 ? "" : " "} grid md:grid-cols-2 grid-cols-1 3xl:gap-8 gap-6 mt-4`}>
                            {
                                isLoadingBlogsList ?
                                    (
                                        [...Array(6)].map((_, index) => (
                                            <BlogCardSkeletonVertical key={`skeleton-${index}`} />
                                        ))
                                    )
                                    :
                                    dataBlogsList && dataBlogsList?.data?.length > 0
                                        ? dataBlogsList?.data?.map((blog: any) => (
                                            <React.Fragment key={`blog-${blog.id}`}>
                                                <BlogCardVertical blog={blog} />
                                            </React.Fragment>
                                        ))
                                        :
                                        (
                                            isStatePageBlogs?.searchBlog ?
                                                <SystemNodataNew
                                                    type='no-search'
                                                    searchValue={isStatePageBlogs?.searchBlog}
                                                    className='md:col-span-2 col-span-1 h-full w-full'
                                                    classNameTitle='3xl:text-lg text-base font-normal !text-[#33404A]'
                                                    classNameDescription="3xl:text-2xl text-xl font-semibold !text-[#050505]"
                                                />
                                                :
                                                <SystemNodataNew
                                                    type='blog-list'
                                                    className='md:col-span-2 col-span-1 h-full w-full'
                                                    classNameTitle='3xl:text-2xl text-xl font-semibold !text-[#050505]'
                                                />
                                        )
                            }
                        </div>
                    </div>

                    {/* Sidebar - Sticky */}
                    <div className="3xl:w-[26%] xxl:w-[30%] lg:w-[32%] w-full lg:order-2 order-1">
                        <div className="sticky top-28 3xl:space-y-8 space-y-6 z-[2]">
                            <InputSearchComponent
                                value={isStatePageBlogs?.searchBlog}
                                handleChangeInputSearch={handleChangeInputSearch}
                            />

                            {/* Categories Section */}
                            <div className="flex flex-col gap-2">
                                {
                                    !isVisibleTablet &&
                                    <h2 className="mb-4 text-xl font-bold">Danh Mục</h2>
                                }

                                {
                                    isVisibleTablet
                                        ?
                                        <ScrollArea type="hover" className={`w-full overflow-auto pb-3`}>
                                            <div className='flex items-center gap-4 border-b border-[#B3C5D4] pt-4 w-full'>
                                                {
                                                    isLoadingDataTypeBlogsList
                                                        ?
                                                        (
                                                            Array.from({ length: 7 }).map((_, index) => (
                                                                <React.Fragment key={`type-categories-${index}`}>
                                                                    <BlogTypeSkeleton />
                                                                </React.Fragment>
                                                            ))
                                                        )
                                                        :
                                                        dataTypeBlogsList && dataTypeBlogsList?.map((item: IFilterBlog, index: number) => (
                                                            <div
                                                                key={`tab-filter-${item.id}`}
                                                                className={`${isStatePageBlogs?.isSelectedCategory === item ? "border-[#53B086] border-b-[3px]" : "border-transparent"} flex justify-between pb-1`}
                                                                onClick={() => handleFilterBlog(item)}
                                                            >
                                                                <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] font-semibold" : ""} hover:text-[#53B086] cursor-pointer custom-transition text-nowrap`}>
                                                                    {item.name}
                                                                </span>

                                                            </div>
                                                        ))
                                                }
                                            </div>
                                            <ScrollBar orientation='horizontal' />
                                        </ScrollArea>
                                        :
                                        <div className="space-y-2">
                                            {
                                                isLoadingDataTypeBlogsList
                                                    ?
                                                    (
                                                        Array.from({ length: 7 }).map((_, index) => (
                                                            <React.Fragment key={`type-categories-${index}`}>
                                                                <BlogTypeSkeleton />
                                                            </React.Fragment>
                                                        ))
                                                    )
                                                    :
                                                    (
                                                        dataTypeBlogsList && dataTypeBlogsList?.map((item: IFilterBlog, index: number) => (
                                                            <div
                                                                key={`tab-filter-${item.id}`}
                                                                className={`${dataTypeBlogsList?.length - 1 === index ? "border-transparent" : "border-[#F1F5F7]"} flex justify-between pb-2 border-b cursor-pointer group`}
                                                                onClick={() => handleFilterBlog(item)}
                                                            >
                                                                <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] font-semibold" : ""} group-hover:text-[#53B086] custom-transition`}>
                                                                    {item.name}
                                                                </span>

                                                                <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] rounded-full font-semibold" : "text-[#667F93] font-medium"} text-base-default`}>
                                                                    {item.countBlog}
                                                                </span>
                                                            </div>
                                                        ))
                                                    )
                                            }
                                            {/* {
                                                dataFilterBlog && dataFilterBlog?.map((item: IFilterBlog, index: number) => (
                                                    <div
                                                        key={`tab-filter-${item.id}`}
                                                        className={`${dataFilterBlog?.length - 1 === index ? "border-transparent" : "border-[#F1F5F7]"} flex justify-between pb-2 border-b cursor-pointer group`}
                                                        onClick={() => handleFilterBlog(item)}
                                                    >
                                                        <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] font-semibold" : ""} group-hover:text-[#53B086] custom-transition`}>
                                                            {item.name}
                                                        </span>

                                                        <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] rounded-full font-semibold" : "text-[#667F93] font-medium"} text-base-default`}>
                                                            {item.countBlog}
                                                        </span>
                                                    </div>
                                                ))
                                            } */}
                                        </div>
                                }
                            </div>

                            {/* Promo Banner */}
                            {
                                !isVisibleTablet &&
                                <div className="overflow-hidden 3xl:space-y-8 space-y-6 text-white">
                                    <React.Fragment>
                                        <BannerVerticalFmrp />
                                        <BannerVerticalBlog />
                                    </React.Fragment>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {
                    dataBlogsList && dataBlogsList?.data?.length > 0 &&
                    <CustomPagination
                        className='w-full lg:mt-10 mt-2'
                        // totalPages={dataBlogsList?.total || 0}
                        totalPages={Math.ceil((dataBlogsList?.meta?.total || 0) / itemsPerPage)}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                }

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
                            className='custom-swiper-pagination lg:h-full h-[620px] rounded-2xl mx-2'
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
        </div>
    )
}

export default MainBlogSection