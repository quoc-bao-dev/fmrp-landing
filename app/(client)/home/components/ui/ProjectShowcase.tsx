"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
    { id: 1, title: "Thiết kế web", image: "/example/solution/image1.png" },
    { id: 2, title: "Thiết kế App Mobile", image: "/example/solution/image2.png" },
    { id: 3, title: "Thuê Hosting", image: "/example/solution/image1.png" },
    { id: 4, title: "Thuê IT Outsourcing", image: "/example/solution/image2.png" },
    { id: 5, title: "FMRP - Trợ lí sản xuất", image: "/example/solution/image1.png" },
    { id: 6, title: "FPOS - Trợ lí bán hàng", image: "/example/solution/image2.png" }
];

const ProjectShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Mặc định chọn "Thiết kế App Mobile"

    const [isUserHovering, setIsUserHovering] = useState<boolean>(false); // Tránh auto thay đổi khi người dùng hover

    useEffect(() => {
        if (isUserHovering) return;

        const interval = setInterval(() => {
            setSelectedCategory((prev) => {
                const currentIndex = categories.findIndex((c) => c.id === prev.id);
                return categories[(currentIndex + 1) % categories.length]; // Loop lại đầu khi đến cuối
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isUserHovering]);


    return (
        <div className="grid grid-cols-16 items-center justify-center gap-10 py-10 w-full h-full">
            {/* Danh mục bên trái */}
            <div
                className="col-span-6 flex flex-col justify-between h-full"
                onMouseEnter={() => setIsUserHovering(true)} // Dừng auto nếu hover
                onMouseLeave={() => setIsUserHovering(false)} // Tiếp tục auto khi rời chuột
            >
                {
                    categories.map((item) => (
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
                                        className="absolute left-0 top-1/2 w-10 h-[3px] bg-black rounded-full"
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
                }
            </div>

            {/* Hình ảnh bên phải */}
            <div className="relative col-span-10 aspect-2/1 h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory.id}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full h-full flex items-center justify-center"
                    >
                        <Image
                            src={selectedCategory.image}
                            alt={selectedCategory.title}
                            width={500}
                            height={300}
                            className="size-full rounded-3xl aspect-2/1 shadow-xl"
                        // style={{
                        //     boxShadow: "0px 1px 2px 0px #1018280D"
                        // }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectShowcase;
