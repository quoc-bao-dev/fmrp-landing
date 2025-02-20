"use client";

import { motion } from "framer-motion";
import React from "react";

interface FadeInZoomProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const FadeIn: React.FC<FadeInZoomProps> = ({
    children,
    delay = 0,
    duration = 1,
    className = "",
    style,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: [0.6, 1.1, 1] }}
            transition={{
                duration,
                delay,
                ease: [0.33, 1, 0.68, 1],
            }}
            viewport={{ once: true, amount: 0.2 }} // Chỉ chạy một lần khi xuất hiện 20% trong viewport
            className={className}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
