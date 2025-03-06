"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

    const sizeRef = useRef<number>(12); // Kích thước mặc định
    const colorRef = useRef<string>("rgba(255, 255, 255, 0.9)");

    useEffect(() => {
        let animationFrame: number;

        const moveCursor = (e: MouseEvent) => {
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                mouseX.set(e.clientX - sizeRef.current / 2);
                mouseY.set(e.clientY - sizeRef.current / 2);
                if (cursorRef.current) {
                    cursorRef.current.style.width = `${sizeRef.current}px`;
                    cursorRef.current.style.height = `${sizeRef.current}px`;
                    cursorRef.current.style.backgroundColor = colorRef.current;
                }
            });
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            cancelAnimationFrame(animationFrame);
        };
    }, [mouseX, mouseY]);

    useEffect(() => {
        const handleHover = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.closest("header")) {
                sizeRef.current = 10; // Header - Zoom nhẹ
                colorRef.current = "rgba(255, 100, 100, 0.9)"; // Đỏ nhạt
            } else if (target.closest("footer")) {
                sizeRef.current = 60; // Footer - Zoom mạnh
                colorRef.current = "rgba(100, 255, 100, 0.9)"; // Xanh nhạt
            } else {
                sizeRef.current = 30; // Default hover vào button hoặc chữ
                colorRef.current = "rgba(255, 255, 255, 0.9)";
            }
        };

        const handleLeave = () => {
            sizeRef.current = 12; // Quay về kích thước mặc định khi rời đi
            colorRef.current = "rgba(255, 255, 255, 0.9)";
        };

        document.body.addEventListener("mouseenter", handleHover, true);
        document.body.addEventListener("mouseleave", handleLeave, true);

        return () => {
            document.body.removeEventListener("mouseenter", handleHover, true);
            document.body.removeEventListener("mouseleave", handleLeave, true);
        };
    }, []);

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none mix-blend-difference z-50"
            style={{
                x: smoothX,
                y: smoothY,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.3s ease-out",
            }}
        />
    );
};

export default CursorFollower;
