import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CommunityJoinSection from '../ui/CommunityJonbinSection'
import { uuidv4 } from '@/lib/uuid'
import BlogCard from '@/components/common/card/blog/BlogCard'
import { IBlogItem, IFilterBlog } from '@/types/blog/IBlog'
import { CustomPagination } from '@/components/common/paginations/CustomPagination'
import { Input } from '@/components/ui/input';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import { useResizeStore } from '@/stores/useResizeStore';

import { motion } from 'framer-motion'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import InputSearchComponent from '@/components/common/search/InputSearchComponent'
import { useStatePageBlogs } from '../../_state/useStatePageBlogs'
import BannerVerticalBlog from '@/components/common/banner/BannerVerticalBlog'
import BannerVerticalFmrp from '@/components/common/banner/BannerVerticalFmrp'

type Props = {}

const dataBlog: IBlogItem[] = [
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Quản lý sản xuất",
                id: 1,
                bg: "#0F4F9E",
            },
            {
                name: "Quản lý Bán Hàng",
                id: 2,
                bg: "#15AA7A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc",
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Quản lý Bán Hàng",
                id: 2,
                bg: "#15AA7A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Thiết Kế Website",
                id: 3,
                bg: "#555CF3",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Thiết Kế App Mobile",
                id: 4,
                bg: "#F3654A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Tin Tức FOSO",
                id: 5,
                bg: "#F47690",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Báo chí nói về FOSO",
                id: 6,
                bg: "#12AFF0",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Sản phẩm công ty",
                id: 7,
                bg: "#FACA4A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
    {
        id: uuidv4(),
        image: "/example/blog/blog1.png",
        title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
        tag: [
            {
                name: "Quản lý sản xuất",
                id: 1,
                bg: "#0F4F9E",
            },
            {
                name: "Quản lý Bán Hàng",
                id: 2,
                bg: "#15AA7A",
            },
        ],
        created_date: "17/11/2025",
        time_read: "20 phút đọc"
    },
]

const dataFilterBlog: IFilterBlog[] = [
    {
        id: "1",
        name: "Tất cả",
        quantity: 108
    },
    {
        id: "2",
        name: "Thiết kế Website",
        quantity: 36
    },
    {
        id: "3",
        name: "Thiết kế App Mobile",
        quantity: 13
    },
    {
        id: "4",
        name: "Quản Lý Sản Xuất",
        quantity: 25
    },
    {
        id: "5",
        name: "Quản Lý Bán Hàng",
        quantity: 22
    },
    {
        id: "6",
        name: "Báo Chí Nói Về FOSO",
        quantity: 7
    },
    {
        id: "7",
        name: "Tin Tức FOSO",
        quantity: 5
    },
]

const MainBlogSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const { isStatePageBlogs, queryKeyIsStatePageBlogs } = useStatePageBlogs()

    useEffect(() => {
        if (dataFilterBlog) {
            queryKeyIsStatePageBlogs({
                isSelectedCategory: dataFilterBlog[0]
            })
        }
    }, [dataFilterBlog])


    const handleFilterBlog = (value: IFilterBlog) => {
        queryKeyIsStatePageBlogs({
            isSelectedCategory: value
        })
    }

    const totalPages = 10

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        console.log(`Page changed to: ${page}`)
    }

    console.log('isStatePageBlogs', isStatePageBlogs);


    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col 3xl:gap-6 gap-6'>
                <div className='w-full flex 3xl:gap-8 gap-6'>
                    {/* Main Content Area */}
                    <div className="w-[74%] flex flex-col 3xl:gap-8 gap-6">
                        <h1 className="text-title-section-small font-extrabold align-middle">Tất Cả Bài Viết</h1>

                        {/* Hero Banner */}
                        <CommunityJoinSection />

                        {/* Article Grid */}
                        <div className="grid grid-cols-1 3xl:gap-8 gap-6 md:grid-cols-2 mt-4">
                            {
                                dataBlog && dataBlog.map((blog) => (
                                    <React.Fragment key={`blog-${blog.id}`}>
                                        <BlogCard blog={blog} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>

                    {/* Sidebar - Sticky */}
                    <div className="w-[26%]">
                        <div className="sticky top-32 3xl:space-y-8 space-y-6">
                            <InputSearchComponent />

                            {/* Categories Section */}
                            <div className="flex flex-col gap-2">
                                <h2 className="mb-4 text-xl font-bold">Danh Mục</h2>
                                <div className="space-y-2">
                                    {
                                        dataFilterBlog && dataFilterBlog?.map((item, index) => (
                                            <div
                                                className={`${dataFilterBlog?.length - 1 === index ? "border-transparent" : "border-[#F1F5F7]"} flex justify-between pb-2 border-b `}
                                                onClick={() => handleFilterBlog(item)}
                                            >
                                                <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] font-semibold" : ""} hover:text-[#53B086] cursor-pointer custom-transition`}>
                                                    {item.name}
                                                </span>

                                                <span className={`${isStatePageBlogs?.isSelectedCategory === item ? "text-[#53B086] rounded-full font-semibold" : "text-[#667F93] font-medium"} text-default`}>
                                                    {item.quantity}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* Promo Banner */}
                            <div className="overflow-hidden 3xl:space-y-8 space-y-6 text-white">
                                <BannerVerticalFmrp />
                                <BannerVerticalBlog />
                            </div>
                        </div>
                    </div>
                </div>

                <CustomPagination
                    className='w-full mt-10'
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default MainBlogSection