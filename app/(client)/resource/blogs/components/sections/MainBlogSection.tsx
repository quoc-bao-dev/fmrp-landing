import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CommunityJoinSection from '../ui/CommunityJonbinSection'
import { uuidv4 } from '@/lib/uuid'
import BlogCard from '@/components/common/card/blog/BlogCard'
import { IBlogItem } from '@/types/blog/IBlog'
import { CustomPagination } from '@/components/common/paginations/CustomPagination'
import { Input } from '@/components/ui/input';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import { useResizeStore } from '@/stores/useResizeStore';

import { motion } from 'framer-motion'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';

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
    const { isVisibleTablet } = useResizeStore()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [isHovered, setIsHovered] = useState<boolean>(false)

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
                    <div className="sticky top-32 space-y-8">
                        {/* Search Section */}
                        <div>
                            <h2 className="mb-4 text-title font-extrabold">Tìm Kiếm</h2>
                            <div className="flex relative">
                                <Input
                                    type="text"
                                    // value={text}
                                    // onChange={(e) => 
                                    //     setText({
                                    //     placeholderSearch: e.target.value,
                                    //     valueSearch: e.target.value
                                    // })}
                                    placeholder={"Tìm kiếm bài viết"}
                                    className={`pr-16 pl-6 py-3 h-16 max-h-16 w-full text-sm-default rounded-xl border-none placeholder:text-xs-default placeholder:font-medium placeholder:text-[#99B2C6] focus-visible:ring-0 focus-visible:ring-offset-0`}
                                    style={{
                                        boxShadow: "0px 12px 24px 8px rgba(145, 158, 171, 0.16)"
                                    }}
                                />

                                <ButtonAnimationNew
                                    icon={
                                        <div className='size-6'>
                                            <Search className="size-full" />
                                        </div>
                                    }
                                    hideTitle={true}
                                    className="absolute size-12 flex items-center justify-center bg-[#15AA7A] text-white rounded-xl right-2 inset-y-0 my-auto"
                                />

                                {/* {
                                    (search.valueSearch || search.placeholderSearch) != "" &&
                                    (
                                        <MdClear
                                            onClick={() => {
                                                setSearch({ placeholderSearch: "", valueSearch: "" })
                                            }}
                                            className={`w-6 h-6 p-1 hover:scale-110 transition-all bg-gray-200 rounded-full duration-150 ease-linear absolute top-1/2 -translate-y-1/2 3xl:translate-x-[-14%] translate-x-0 right-2  text-[#200E32] cursor-pointer z-50`}
                                        />
                                    )
                                } */}
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
                        <div className="overflow-hidden rounded-lg text-white">
                            <div
                                className="relative rounded-[40px] 2xl:p-16 xl:p-12 lg:p-8 py-8 w-full overflow-hidden"
                                style={{
                                    background: "linear-gradient(357.92deg, #013DA0 2.23%, #0142A9 12.81%, #0148B3 23.39%, #024EBC 33.96%, #0254C5 44.54%, #025ACE 55.12%, #0261D7 65.7%, #0267E1 76.28%, #036EEA 86.86%, #0375F3 97.44%)"
                                }}
                            >
                                {/* Ảnh hiển thị trên Tablet */}
                                {!isVisibleTablet && (
                                    <div className="flex items-center justify-center">
                                        <div className="md:w-[460px] w-[520px] h-auto aspect-1.92/1">
                                            <Image
                                                alt="community"
                                                src="/background/ui/fmrp/bg-community.webp"
                                                width={500}
                                                height={450}
                                                className="size-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Nội dung */}
                                <div className="flex flex-col 3xl:gap-8 gap-6 lg:mt-0 mt-6 md:px-0 px-6">
                                    {/* Hiệu ứng chuyển động chữ */}
                                    <motion.div
                                        className="max-w-full text-white font-bold"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <motion.span
                                            className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%]"
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{
                                                duration: 1,
                                                ease: "easeOut",
                                            }}
                                        >
                                            Gia nhập cộng đồng{" "}
                                        </motion.span>
                                        <motion.span
                                            className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%] text-[#53B086]"
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{
                                                duration: 1,
                                                ease: "easeOut",
                                                delay: 0.2,
                                            }}
                                        >
                                            FMRP
                                        </motion.span>
                                        <motion.span
                                            className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%]"
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            transition={{
                                                duration: 1,
                                                ease: "easeOut",
                                                delay: 0.4,
                                            }}
                                        >
                                            {" "}
                                            – Kết nối, chia sẻ, cùng phát triển!
                                        </motion.span>
                                    </motion.div>

                                    {/* Button */}
                                    <ButtonAnimationNew
                                        title="Tham Gia Ngay"
                                        icon={
                                            <div className="2xl:size-10 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-white group-hover:text-gray-400 duration-500 transition-colors">
                                                <motion.div
                                                    initial={{ x: 0, y: 0 }}
                                                    animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    {/* <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4 text-white" /> */}
                                                    {isHovered ? <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightIcon className="md:size-5 size-4" />}
                                                </motion.div>
                                            </div>
                                        }
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={() => {
                                            window.open("https://www.facebook.com/groups/mrpvn");
                                        }}
                                        reverse={true}
                                        className="border border-white flex items-center gap-2 xl:!text-base lg:!text-sm md:!text-base text-sm tracking-[1%] group text-white hover:!bg-[#FFFFFF]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                                        style={{
                                            WebkitBackdropFilter: "blur(15px)",
                                            boxShadow:
                                                "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
                                        }}
                                    />
                                </div>
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