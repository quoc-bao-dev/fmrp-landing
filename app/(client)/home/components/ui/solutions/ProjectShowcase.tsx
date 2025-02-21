"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useResizeStore } from "@/stores/useResizeStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";

const categories = [
    { id: 1, title: "Thiết kế web", image: "/example/solution/image1.png" },
    { id: 2, title: "Thiết kế App Mobile", image: "/example/solution/image2.png" },
    { id: 3, title: "Thuê Hosting", image: "/example/solution/image1.png" },
    { id: 4, title: "Thuê IT Outsourcing", image: "/example/solution/image2.png" },
    { id: 5, title: "FMRP - Trợ lí sản xuất", image: "/example/solution/image1.png" },
    { id: 6, title: "FPOS - Trợ lí bán hàng", image: "/example/solution/image2.png" },
];

const ProjectShowcase = () => {
    const { isVisibleTablet } = useResizeStore()
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Mặc định chọn "Thiết kế App Mobile"

    const [isUserHovering, setIsUserHovering] = useState<boolean>(false); // Tránh auto thay đổi khi người dùng hover
    // Tạo callback tối ưu để thay đổi danh mục mà không gây re-render không cần thiết
    const handleCategoryChange = useCallback((item: any) => {
        setSelectedCategory(item);
    }, []);

    useEffect(() => {
        if (isUserHovering) return;

        const interval = setInterval(() => {
            setSelectedCategory((prev) => {
                const currentIndex = categories.findIndex((c) => c.id === prev.id);
                return categories[(currentIndex + 1) % categories.length];
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isUserHovering]);

    // Tối ưu danh sách danh mục để tránh tính toán lại
    const categoryListMobile = useMemo(() => {
        return categories.map((item) => (
            <motion.div
                key={item.id}
                className={`relative flex items-center cursor-pointer text-title transition-all duration-300 w-fit
    ${selectedCategory.id === item.id ? "font-semibold text-[#33404A]" : "text-[#99B2C6] hover:text-[#33404A] font-normal"}`}
                onMouseEnter={() => setSelectedCategory(item)}
                whileHover={{ scale: 1.04 }}
            >
                {/* Hiệu ứng trượt vào với motion.div */}
                <motion.div
                    initial={{ opacity: 0, x: !isVisibleTablet ? -30 : 0 }} // Tiêu đề trượt từ ngoài vào
                    animate={{
                        opacity: 1,
                        x: 0,
                        paddingLeft: (selectedCategory.id === item.id) && !isVisibleTablet ? "48px" : "0px", // Tăng padding khi active
                    }}
                    exit={{ opacity: 0, x: !isVisibleTablet ? -30 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className='lg:text-wrap text-nowrap'
                >
                    {item.title}
                </motion.div>
            </motion.div>
        ));
    }, [selectedCategory, handleCategoryChange]);


    const categoryListDesktop = useMemo(() => {
        return categories.map((item) => (
            <motion.div
                key={item.id}
                className={`relative flex items-center gap-1 cursor-pointer text-title transition-all duration-300 w-fit
            ${selectedCategory.id === item.id ? "font-semibold text-[#33404A]" : "text-[#99B2C6] hover:text-[#33404A] font-normal"}`}
                onMouseEnter={() => setSelectedCategory(item)}
                whileHover={{ scale: 1.04 }}
            >
                {/* Hiệu ứng trượt từ trái vào của gạch ngang */}
                <AnimatePresence mode="wait">
                    {selectedCategory.id === item.id && (
                        <motion.div
                            key={selectedCategory.id} // Cập nhật lại khi danh mục thay đổi
                            layoutId="underline"
                            className="absolute left-0 top-1/2 w-10 h-[3px] bg-black rounded-full z-10"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                    )}
                </AnimatePresence>

                {/* Hiệu ứng trượt vào với motion.div */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }} // Tiêu đề trượt từ ngoài vào
                    animate={{
                        opacity: 1,
                        x: 0,
                        paddingLeft: selectedCategory.id === item.id ? "48px" : "0px", // Tăng padding khi active
                    }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {item.title}
                </motion.div>
            </motion.div>
        ))
    }, [selectedCategory, handleCategoryChange]);


    return (
        <div className="grid grid-cols-16 items-center justify-center lg:gap-10 gap-4 py-10 w-full h-full">
            {/* Danh mục bên trái */}
            {
                isVisibleTablet
                    ?
                    <ScrollArea
                        type="hover"
                        className="lg:col-span-6 col-span-16 flex flex-row lg:order-0 order-1 h-full overflow-x-auto w-full"
                    // onMouseEnter={() => setIsUserHovering(true)} // Dừng auto nếu hover
                    // onMouseLeave={() => setIsUserHovering(false)} // Tiếp tục auto khi rời chuột
                    >
                        <AnimatedReveal
                            effect="fade"
                            // once={false}
                            className='flex flex-row gap-6 w-full md:max-w-[700px] max-w-[360px] overflow-x-auto'
                        >
                            {categoryListMobile}
                        </AnimatedReveal>
                    </ScrollArea>
                    :
                    <AnimatedReveal
                        effect="fade"
                        // once={false}
                        className="lg:col-span-6 col-span-16 flex lg:flex-col gap-10 lg:order-0 order-1 justify-between h-full overflow-scroll"
                        onMouseEnter={() => setIsUserHovering(true)} // Dừng auto nếu hover
                        onMouseLeave={() => setIsUserHovering(false)} // Tiếp tục auto khi rời chuột
                    >
                        {categoryListDesktop}
                    </AnimatedReveal>
            }

            {/* Hình ảnh bên phải */}
            <AnimatedReveal
                effect="fade"
                // once={false}
                className="relative lg:col-span-10 col-span-16 lg:order-1 order-0 aspect-2/1 w-full h-auto"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory.id}
                        layoutId={`image-${selectedCategory.id}`} // Giữ trạng thái animation khi đổi ảnh
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute w-full h-full flex items-center justify-center aspect-2/1"
                    >
                        <Image
                            src={selectedCategory.image}
                            alt={selectedCategory.title}
                            width={500}
                            height={300}
                            priority // Chỉ giữ nếu ảnh quan trọng
                            placeholder="blur" // Nếu có ảnh blur
                            blurDataURL={selectedCategory.image} // Dùng hình ảnh mờ trước khi load
                            className="size-full rounded-3xl aspect-2/1 shadow-xl"
                        />
                    </motion.div>
                </AnimatePresence>
            </AnimatedReveal>
        </div>
    );
};

export default React.memo(ProjectShowcase);
