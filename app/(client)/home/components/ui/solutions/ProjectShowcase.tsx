"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules';

import { useResizeStore } from '../../../../../../stores/useResizeStore';

interface Category {
    id: number
    title: string
    image: string
}

const categories: Category[] = [
    { id: 1, title: "Thiết kế web", image: "/example/solution/image1.png" },
    { id: 2, title: "Thiết kế App Mobile", image: "/example/solution/image2.png" },
    { id: 3, title: "Thuê Hosting", image: "/example/solution/image1.png" },
    { id: 4, title: "Thuê IT Outsourcing", image: "/example/solution/image2.png" },
    { id: 5, title: "FMRP - Trợ lí sản xuất", image: "/example/solution/image1.png" },
    { id: 6, title: "FPOS - Trợ lí bán hàng", image: "/example/solution/image2.png" },
]

const ProjectShowcase = () => {
    const { isVisibleTablet } = useResizeStore()
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0])
    const [swiperInstance, setSwiperInstance] = useState<any>(null)

    const handleCategoryChange = (category: Category) => {
        setSelectedCategory(category)
        if (swiperInstance) {
            const index = categories.findIndex((c) => c.id === category.id)
            swiperInstance.slideTo(index)
        }
    }

    const customPagination = {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-16 items-center justify-center lg:gap-10 gap-4 py-10 w-full h-full">
            {/* Danh mục bên trái */}
            <div className="2xl:col-span-6 col-span-full h-full flex lg:flex-col lg:justify-between 3xl:gap-16 lg:gap-12 gap-8 lg:order-1 order-2 overflow-x-auto">
                {
                    categories && categories.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`relative flex items-center gap-2 cursor-pointer text-title transition-all duration-300 w-fit text-nowrap
                            ${selectedCategory.id === item.id
                                    ? "font-semibold text-[#33404A]"
                                    : "text-[#99B2C6] hover:text-[#33404A] font-normal"
                                }`}
                            onClick={() => handleCategoryChange(item)}
                            whileHover={{ scale: 1.04 }}
                        >
                            {
                                selectedCategory.id === item.id && !isVisibleTablet && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 top-1/2 w-10 h-[3px] bg-black rounded-full z-10"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                )
                            }

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    paddingLeft: selectedCategory.id === item.id ? "20px" : "0px",
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                {item.title}
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>

            {/* Swiper dọc với hình active ở giữa và hình tiếp theo lộ ra 200px */}
            <Swiper
                modules={[Autoplay, Pagination]}
                direction="vertical"
                slidesPerView={isVisibleTablet ? 1 : 1.2} // Hiện một hình đầy đủ + 200px của hình tiếp theo
                spaceBetween={20}
                centeredSlides={false}
                onSwiper={setSwiperInstance}
                pagination={customPagination}
                // onSlideChange={(swiper) => setSelectedCategory(categories[swiper.activeIndex])}
                onSlideChange={(swiper) => setSelectedCategory(categories[swiper.realIndex])}
                autoplay={false}
                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="custom-swiper-pagination 2xl:col-span-10 col-span-full lg:order-2 order-1 w-full lg:h-[580px] h-full aspect-video relative overflow-hidden"
                style={{ WebkitMaskImage: isVisibleTablet ? "" : "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 1%, #F9FBFC 20%)" }}
                loop
                grabCursor
            >
                {
                    categories.map((category) => (
                        <SwiperSlide
                            key={category.id}
                            className="w-full h-full flex items-center justify-center aspect-video !rotate-0"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full h-full aspect-video"
                            >
                                <Image
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.title}
                                    width={1920}
                                    height={1024}
                                    className="size-full object-cover rounded-3xl aspect-video"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default React.memo(ProjectShowcase)
