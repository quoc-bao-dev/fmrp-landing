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
    image: string,
    description: string
}

const categories: Category[] = [
    {
        id: 5,
        title: "FMRP - Quản Lý Xưởng Online",
        image: "/example/solution/fmrp.webp",
        description: "Phần mềm giúp quản lý toàn bộ xưởng sản xuất từ đơn hàng, nguyên vật liệu đến tiến độ công đoạn. Thiết kế riêng cho nhà xưởng nhỏ, dễ dùng, triển khai nhanh.",
    },
    {
        id: 1,
        title: "Thiết Kế Web",
        image: "/example/solution/web.webp",
        description: "Website chuẩn SEO, giao diện hiện đại theo nhận diện thương hiệu. Tối ưu tốc độ, dễ quản trị và sẵn sàng mở rộng theo từng giai đoạn kinh doanh.",
    },
    {
        id: 2,
        title: "Thiết Kế App Mobile",
        image: "/example/solution/mobile-app.webp",
        description: "Từ bán hàng, đặt lịch, đến quản lý kho và sản xuất – FOSO thiết kế ứng dụng mobile theo đúng bài toán thực tế của bạn. App mượt mà, giao diện thân thiện, dễ dùng trên cả iOS và Android.",
    },
    {
        id: 3,
        title: "Thuê Hosting & Server",
        image: "/example/solution/hosting.webp",
        description: "Hạ tầng máy chủ chuyên dụng cho phần mềm sản xuất và hệ thống doanh nghiệp. Ổn định, bảo mật cao và hỗ trợ kỹ thuật nhanh chóng khi cần",
    },
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
        <div className="grid grid-cols-1 lg:grid-cols-16 items-center justify-center lg:gap-10 gap-4 xl:py-10 py-4 w-full h-full overflow-x-hidden relative z-10">
            {/* Danh mục bên trái */}
            <AnimatedReveal effect="fade" className="xl:col-span-6 lg:col-span-5 col-span-full h-full flex lg:flex-col lg:justify-center     lg:gap-8 gap-8 lg:order-1 order-2 overflow-x-auto">
                {
                    categories && categories.map((item, index) => (
                        <motion.div
                            key={`category-${item.id}`}
                            ref={(el) => { categoryRefs.current[index] = el }} // Gán ref cho từng item
                            className={`relative flex items-center gap-2 cursor-pointer px-2 pt-2 pb-4 3xl:text-2xl xl:text-xl lg:text-lg text-lg !tracking-[2%] transition-all duration-300 w-fit text-nowrap
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
                            {/* {selectedCategory.id === item.id && !isVisibleTablet && (
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
                            )} */}

                            {/* Hiệu ứng trượt vào với motion.div */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }} // Tiêu đề trượt từ ngoài vào
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    // paddingLeft: selectedCategory.id === item.id && !isVisibleTablet ? "48px" : "0px", // Tăng padding khi active
                                }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`${!isVisibleTablet && selectedCategory.id === item.id ? "bg-white !p-4" : ""} capitalize rounded-xl flex flex-col space-y-2`}
                                style={{
                                    boxShadow: !isVisibleTablet && selectedCategory.id === item.id ? "0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714" : ""
                                }}
                            >
                                <div className={`${selectedCategory.id === item.id ? "text-[#33404A]" : "text-[#99B2C6]"} 3xl:text-2xl xl:text-xl lg:text-lg text-lg !tracking-[2%] font-semibold`}>
                                    {item.title}
                                </div>

                                {
                                    !isVisibleTablet && selectedCategory.id === item.id &&
                                    <div className='text-sm-default text-[#667F93] font-medium text-wrap'>
                                        {item.description}
                                    </div>
                                }
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
                                // if (categoryRefs.current[newIndex]) {
                                //     categoryRefs.current[newIndex]?.scrollIntoView({
                                //         behavior: "smooth",
                                //         block: "nearest",
                                //         inline: isFirstHalf ? "nearest" : "nearest"
                                //     });
                                // }
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
