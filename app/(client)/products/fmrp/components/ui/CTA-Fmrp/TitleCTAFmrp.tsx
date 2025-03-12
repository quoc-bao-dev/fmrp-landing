"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TitleCTAFmrpProps {
    subtitle: string[];
    highlight: string;
}

const TitleCTAFmrp: React.FC<TitleCTAFmrpProps> = ({ subtitle, highlight }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Kiểm tra xem section có trong viewport không
    const { ref, inView } = useInView({
        threshold: 0.5, // 50% section nằm trong viewport thì kích hoạt
        triggerOnce: false, // Luôn kiểm tra khi vào viewport
    });

    // Hiệu ứng highlight từng dòng
    useEffect(() => {
        if (inView && activeIndex < subtitle.length) {
            const timeout = setTimeout(() => {
                setActiveIndex((prev) => prev + 1);
            }, 1000); // Delay giữa các chữ

            return () => clearTimeout(timeout);
        } else if (activeIndex === subtitle.length) {
            setTimeout(() => setIsComplete(true), 500); // Khi xong hết highlight, mở scroll
        }
    }, [inView, activeIndex, subtitle.length]);

    return (
        <section
            ref={ref}
            className={`relative min-h-screen flex flex-col items-center justify-center text-center transition-opacity duration-500 ${inView && !isComplete ? "sticky top-0 bg-white" : "relative"
                }`}
        >
            {/* Dòng kẻ xanh */}
            <motion.div
                className="w-12 h-1 bg-blue-500 mb-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Các dòng mô tả */}
            <motion.div className="text-lg font-semibold leading-relaxed">
                {subtitle.map((line, index) => (
                    <motion.p
                        key={index}
                        className={`${index <= activeIndex ? "text-blue-700 font-bold" : "text-gray-300"
                            } transition-all duration-500`}
                    >
                        {line}
                    </motion.p>
                ))}
            </motion.div>

            {/* Phần chữ nổi bật cuối cùng */}
            <motion.h2
                className="mt-2 text-xl md:text-2xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                animate={activeIndex === subtitle.length ? { opacity: 1, y: 0, color: "#1D4ED8" } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {highlight}
            </motion.h2>
        </section>
    );
};

export default TitleCTAFmrp;
