"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    from?: "left" | "right" | "top" | "bottom" | "center"; // Mặc định "center" sẽ không di chuyển
    effect?: "fade" | "zoom-in" | "zoom-out" | "rotate" | "flip" | "slide";
    once?: boolean;
    stagger?: number;
    blurEffect?: boolean;
    fadeOpacity?: number; // Độ mờ ban đầu
    className?: string;
    style?: React.CSSProperties;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    delay = 0,
    duration = 1, // ⬅️ Tăng thời gian giúp hiệu ứng chậm hơn
    from = "center", // ⬅️ Mặc định không di chuyển
    effect = "fade",
    once = false,
    stagger = 0,
    blurEffect = false,
    fadeOpacity = 0.01, // ⬅️ Tăng độ mờ mạnh hơn
    className = "",
    style,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.33  , once });

    // Xác định hướng xuất hiện (Mặc định "center" sẽ không di chuyển)
    const xMove = from !== "center" ? (from === "left" ? -60 : from === "right" ? 60 : 0) : 0;
    const yMove = from !== "center" ? (from === "top" ? -60 : from === "bottom" ? 60 : 0) : 0;

    // Biến animation theo hiệu ứng được chọn
    const variants = {
        hidden: {
            opacity: effect === "fade" ? fadeOpacity : 1, // ⬅️ Đảm bảo fade có độ mờ ban đầu
            x: xMove,
            y: yMove,
            scale: effect === "zoom-in" ? 0.85 : effect === "zoom-out" ? 1.15 : 1,
            rotate: effect === "rotate" ? -15 : 0,
            rotateY: effect === "flip" ? 90 : 0,
            filter: blurEffect ? "blur(15px)" : "blur(0px)", // ⬅️ Tăng độ mờ nếu bật blurEffect
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
                ease: [0.42, 0, 0.58, 1], // ⬅️ Làm hiệu ứng mềm mại hơn
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
