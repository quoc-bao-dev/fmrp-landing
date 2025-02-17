"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

type SocialMediaProps = {
    children: React.ReactNode;
    handleClick?: () => void;
    className?: string;
    background_animation: string;
};

const SocialMediaButton = ({
    children,
    handleClick,
    className,
    background_animation
}: SocialMediaProps) => {
    const [isShow, setIsShow] = useState(false);
    const lastScrollY = useRef<number>(0); // Lưu vị trí cuộn cuối cùng
    const ticking = useRef<boolean>(false); // Ngăn cập nhật state liên tục

    // Hàm xử lý cuộn
    const handleNavigation = useCallback(() => {
        const scrollY = window.scrollY;
        const heightScreen = window.innerHeight;

        if (!ticking.current) {
            requestAnimationFrame(() => {
                if (scrollY > heightScreen && lastScrollY.current <= heightScreen) {
                    setIsShow(true);
                } else if (scrollY <= heightScreen && lastScrollY.current > heightScreen) {
                    setIsShow(false);
                }

                lastScrollY.current = scrollY;
                ticking.current = false;
            });

            ticking.current = true;
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    console.log('check baby');


    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative flex flex-col justify-center items-center"
                    style={{ willChange: "transform, opacity" }} // Tối ưu hiệu suất
                >
                    <motion.button
                        type="button"
                        onClick={handleClick}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`${className} relative z-[1] size-12 rounded-full text-white flex flex-col justify-center items-center shadow-2xl`}
                    >
                        {children}
                    </motion.button>

                    <div
                        className="size-10 rounded-full absolute animate-ping z-0"
                        style={{
                            background: background_animation,
                            zIndex: 0,
                            pointerEvents: "none"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SocialMediaButton;
