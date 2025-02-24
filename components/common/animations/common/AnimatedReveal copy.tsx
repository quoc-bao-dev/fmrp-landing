import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    from?: "left" | "right" | "top" | "bottom" | "center";
    effect?: "fade" | "zoom-in" | "zoom-out" | "rotate" | "flip" | "slide";
    once?: boolean;
    stagger?: number;
    blurEffect?: boolean;
    fadeOpacity?: number;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    autoPlay?: boolean; // 🔥 Thêm prop để chạy ngay lập tức khi render
}

const AnimatedReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    duration = 0.7,
    from = "center",
    effect = "fade",
    once = true,
    stagger = 0,
    blurEffect = false,
    fadeOpacity = 0.01,
    className = "",
    style,
    onClick,
    onMouseEnter,
    onMouseLeave,
    autoPlay = false, // Mặc định không auto play
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.33, once });

    // Nếu autoPlay = true, thì animation luôn hiển thị
    const [animate, setAnimate] = useState(autoPlay ? "visible" : "hidden");

    useEffect(() => {
        if (!autoPlay) {
            setAnimate(isInView ? "visible" : "hidden");
        }
    }, [isInView, autoPlay]);

    // Xác định hướng xuất hiện
    const xMove = from !== "center" ? (from === "left" ? -60 : from === "right" ? 60 : 0) : 0;
    const yMove = from !== "center" ? (from === "top" ? -60 : from === "bottom" ? 60 : 0) : 0;

    // Biến animation theo hiệu ứng
    const variants = {
        hidden: {
            opacity: effect === "fade" ? fadeOpacity : 1,
            x: xMove,
            y: yMove,
            scale: effect === "zoom-in" ? 0.6 : effect === "zoom-out" ? 1.15 : 1,
            rotate: effect === "rotate" ? -15 : 0,
            rotateY: effect === "flip" ? 90 : 0,
            filter: blurEffect ? "blur(15px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            rotateY: 0,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: [0.42, 0, 0.58, 1],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={animate} // 🔥 Điều khiển animation qua state
            variants={variants}
            className={className}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.div>
    );
};

export default React.memo(AnimatedReveal);
