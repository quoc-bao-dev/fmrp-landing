"use client"

import React, { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules';

import { useResizeStore } from '../../../../../../stores/useResizeStore';
import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal"
import { useInView } from "react-intersection-observer"

interface Category {
    id: number
    title: string
    image: string
}

const categories: Category[] = [
    { id: 5, title: "FMRP - Quản Lý Xưởng Online", image: "/example/solution/image2.png" },
    { id: 1, title: "Thiết kế web", image: "/example/solution/web.webp" },
    { id: 2, title: "Thiết kế App Mobile", image: "/example/solution/mobile-app.webp" },
    { id: 3, title: "Thuê Hosting & Server", image: "/example/solution/hosting.webp" },
    // { id: 4, title: "Thuê IT Outsourcing", image: "/example/solution/outsourcing.webp" },
    // { id: 6, title: "FPOS - Trợ lý bán hàng", image: "/example/solution/fpos.webp" },
]

const ProjectShowcase = () => {
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Theo dõi khi component xuất hiện trong viewport

    const { isVisibleTablet } = useResizeStore()
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0])
    const [swiperInstance, setSwiperInstance] = useState<any>(null)


    const handleCategoryChange = (category: Category, index: number) => {
        setSelectedCategory(category);
        if (swiperInstance) {
            swiperInstance.slideToLoop(index);
        }

        if (isVisibleTablet) {
            // Xác định nếu danh mục ở nửa đầu → Căn trái, nửa sau → Căn phải
            const isFirstHalf = index < Math.floor(categories.length / 2);

            if (categoryRefs.current[index]) {
                categoryRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: isFirstHalf ? "nearest" : "nearest"
                });
            }
        }
    };

    const customPagination = {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-16 items-center justify-center lg:gap-10 gap-4 py-10 w-full h-full overflow-x-hidden relative z-10">
            {/* Danh mục bên trái */}
            <AnimatedReveal effect="fade" className="xl:col-span-6 lg:col-span-5 col-span-full h-full flex lg:flex-col lg:justify-center     lg:gap-8 gap-8 lg:order-1 order-2 overflow-x-auto">
                {
                    categories && categories.map((item, index) => (
                        <motion.div
                            key={`category-${item.id}`}
                            ref={(el) => { categoryRefs.current[index] = el }} // Gán ref cho từng item
                            className={`relative flex items-center gap-2 cursor-pointer 3xl:!text-2xl xl:!text-xl lg:!text-lg !text-lg !tracking-[2%] transition-all duration-300 w-fit text-nowrap
                ${selectedCategory.id === item.id
                                    ? "font-semibold text-[#33404A]"
                                    : "text-[#99B2C6] hover:text-[#33404A] font-normal"
                                }`}
                            onMouseEnter={() => {
                                if (swiperInstance) swiperInstance.slideToLoop(index);
                                setSelectedCategory(categories[index]);
                            }}

                            onClick={() => handleCategoryChange(item, index)} // Gọi hàm cuộn vào viewport
                        >
                            {/* Hiệu ứng trượt từ trái vào của gạch ngang */}
                            {selectedCategory.id === item.id && !isVisibleTablet && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        layout
                                        className="absolute left-0 top-1/2 w-10 h-[3px] bg-black rounded-full z-10"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </AnimatePresence>
                            )}

                            {/* Hiệu ứng trượt vào với motion.div */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }} // Tiêu đề trượt từ ngoài vào
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    paddingLeft: selectedCategory.id === item.id && !isVisibleTablet ? "48px" : "0px", // Tăng padding khi active
                                }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="capitalize"
                            >
                                {item.title}
                            </motion.div>
                        </motion.div>
                    ))
                }
            </AnimatedReveal>

            {/* Swiper dọc với hình active ở giữa và hình tiếp theo lộ ra 200px */}
            <AnimatedReveal
                effect="fade"
                className='xl:col-span-10 lg:col-span-11 col-span-full lg:order-2 order-1 w-full lg:h-full h-fit aspect-video relative overflow-hidden'
            >
                <div >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        direction={isVisibleTablet ? "horizontal" : "vertical"}
                        slidesPerView={isVisibleTablet ? 1 : 1.2} // Hiện một hình đầy đủ + 200px của hình tiếp theo
                        spaceBetween={20}
                        centeredSlides={false}
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper)
                        }}
                        pagination={customPagination}
                        onSlideChange={(swiper) => {
                            const newIndex = swiper.realIndex;
                            setSelectedCategory(categories[newIndex]);

                            if (swiper.activeIndex === 0) return; // ⛔ CHẶN `scrollIntoView` KHI MỚI LOAD

                            if (isVisibleTablet) {
                                // Xác định nếu danh mục ở nửa đầu → Căn trái, nửa sau → Căn phải
                                const isFirstHalf = newIndex < Math.floor(categories.length / 2);

                                // Cuộn đến category đang active trên mobile
                                if (categoryRefs.current[newIndex]) {
                                    categoryRefs.current[newIndex]?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "nearest",
                                        inline: isFirstHalf ? "nearest" : "nearest"
                                    });
                                }
                            }
                        }}
                        autoplay={!isVisibleTablet ? { delay: 4000, disableOnInteraction: false } : false}
                        className="custom-swiper-pagination2 w-full aspect-video"
                        style={{ WebkitMaskImage: isVisibleTablet ? "" : "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 1%, #F9FBFC 20%)" }}
                        loop
                        grabCursor
                    >
                        {
                            categories.map((category) => (
                                <SwiperSlide
                                    key={`content-${category.id}`}
                                    className="w-full h-full flex items-center justify-center aspect-video"
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
            </AnimatedReveal>
        </div>
    )
}

export default React.memo(ProjectShowcase)
