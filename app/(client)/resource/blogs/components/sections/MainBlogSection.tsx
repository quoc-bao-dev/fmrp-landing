import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CommunityJoinSection from '../ui/CommunityJonbinSection'
import { uuidv4 } from '@/lib/uuid'
import BlogCard from '@/components/common/card/blog/BlogCard'
import { IBlogItem } from '@/types/blog/IBlog'
import { CustomPagination } from '@/components/common/paginations/CustomPagination'

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

const MainBlogSection = (props: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1)

    const totalPages = 10

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        console.log(`Page changed to: ${page}`)
    }

    return (
        <div className='custom-padding-section'>
            <div className='custom-container grid grid-cols-1 3xl:gap-8 gap-6 lg:grid-cols-4'>
                {/* Main Content Area */}
                <div className="lg:col-span-3 flex flex-col 3xl:gap-8 gap-6">
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
                <div className="lg:col-span-1">
                    <div className="sticky top-4 space-y-8">
                        {/* Search Section */}
                        <div>
                            <h2 className="mb-4 text-xl font-bold">Tìm Kiếm</h2>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bài viết"
                                    className="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                                />
                                <button className="rounded-r-lg bg-green-500 px-4 py-2 text-white">
                                    <Search className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div>
                            <h2 className="mb-4 text-xl font-bold">Danh Mục</h2>
                            <ul className="space-y-2">
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Tất cả
                                    </Link>
                                    <span className="text-gray-500">108</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Thiết Kế Website
                                    </Link>
                                    <span className="text-gray-500">36</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Thiết Kế App Mobile
                                    </Link>
                                    <span className="text-gray-500">13</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Quản Lý Sản Xuất
                                    </Link>
                                    <span className="text-gray-500">25</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Quản Lý Bán Hàng
                                    </Link>
                                    <span className="text-gray-500">22</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Báo Chí Nói Về FOSO
                                    </Link>
                                    <span className="text-gray-500">7</span>
                                </li>
                                <li className="flex justify-between">
                                    <Link href="#" className="hover:text-blue-600">
                                        Tin Tức FOSO
                                    </Link>
                                    <span className="text-gray-500">5</span>
                                </li>
                            </ul>
                        </div>

                        {/* Promo Banner */}
                        <div className="overflow-hidden rounded-lg bg-blue-600 text-white">
                            <div className="p-6">
                                <Image
                                    src="/placeholder.svg?height=200&width=300"
                                    alt="HRP Software"
                                    width={300}
                                    height={200}
                                    className="mx-auto mb-4"
                                />
                                <div className="mb-4 text-center">
                                    <h3 className="text-lg font-bold">Miễn phí dùng thử</h3>
                                    <Image
                                        src="/placeholder.svg?height=50&width=100"
                                        alt="HRP Logo"
                                        width={100}
                                        height={50}
                                        className="mx-auto mt-2"
                                    />
                                </div>
                                <Link
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-full border border-white px-4 py-2 text-center text-sm font-medium transition hover:bg-white hover:text-blue-600"
                                >
                                    Trải Nghiệm Ngay
                                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <CustomPagination
                    className='lg:col-span-4 col-span-1 mt-10'
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default MainBlogSection