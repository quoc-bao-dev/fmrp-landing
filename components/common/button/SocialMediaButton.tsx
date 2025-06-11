"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";


type TooltipPosition = "left" | "right" | "top" | "bottom";

type SocialMediaProps = {
    icon: React.ReactNode;
    info: React.ReactNode; // Nội dung hiển thị khi hover
    handleClick?: () => void;
    className?: string;
    tooltipPosition?: TooltipPosition; // <--- mới
};

const SocialMediaButton = ({
    icon,
    info,
    handleClick,
    className,
    tooltipPosition = "left" // mặc định là left
}: SocialMediaProps) => {
    const [isShow, setIsShow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const lastScrollY = useRef<number>(0);
    const ticking = useRef<boolean>(false);

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

    // ----------------------------
    // Xử lý vị trí tooltip
    // ----------------------------
    const getTooltipStyle = () => {
        switch (tooltipPosition) {
            case "left":
                return "right-[80px] top-1/2 -translate-y-1/2";
            case "right":
                return "left-[80px] top-1/2 -translate-y-1/2";
            case "top":
                return "bottom-[80px] left-1/2 -translate-x-1/2";
            case "bottom":
                return "top-[80px] left-1/2 -translate-x-1/2";
            default:
                return "right-[80px] top-1/2 -translate-y-1/2";
        }
    };

    const getArrowStyle = () => {
        switch (tooltipPosition) {
            case "left":
                return "absolute right-[-6px] top-1/2 -translate-y-1/2";
            case "right":
                return "absolute left-[-6px] top-1/2 -translate-y-1/2";
            case "top":
                return "absolute bottom-[-6px] left-1/2 -translate-x-1/2";
            case "bottom":
                return "absolute top-[-6px] left-1/2 -translate-x-1/2";
            default:
                return "absolute right-[-6px] top-1/2 -translate-y-1/2";
        }
    };


    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative flex flex-col justify-center items-center"
                >
                    {/* Nút chính */}
                    <motion.button
                        type="button"
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className={`${className} relative z-[1] size-12 rounded-full text-white flex flex-col justify-center items-center shadow-2xl`}
                    >
                        {icon}
                    </motion.button>

                    {/* Tooltip hiển thị bên trái */}
                    <AnimatePresence>
                        {isHovered && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.2 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="absolute right-[76px] z-50 bg-white rounded-xl shadow-2xl flex flex-col gap-2 min-w-fit max-w-[400px]"
                                >
                                    <div className='relative z-50 bg-white text-black px-4 py-3 rounded-xl flex flex-col gap-2 min-w-fit max-w-[400px]'>
                                        {info}
                                    </div>
                                    {/* Mũi tên */}
                                    <div className="absolute z-10 right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 "></div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SocialMediaButton;
