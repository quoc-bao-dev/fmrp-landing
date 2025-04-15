"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

const CursorFollower = () => {
    const pathname = usePathname()
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

    const sizeRef = useRef<number>(12); // Kích thước mặc định
    const colorRef = useRef<string>("rgba(26, 213, 152, 1)");

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
            // if (target.closest("header")) {
            //     sizeRef.current = 10; // Header - Zoom nhẹ
            //     colorRef.current = "rgba(255, 100, 100, 0.9)"; // Đỏ nhạt
            //     cursorRef.current?.classList.add("mix-blend-difference");
            // } else if (target.closest("footer")) {
            //     sizeRef.current = 60; // Footer - Zoom mạnh
            //     colorRef.current = "rgba(255, 255, 255, 0.9)"; // Xanh nhạt
            //     cursorRef.current?.classList.add("mix-blend-difference");
            // } else if (target.closest("button") || /^H[1-6]$/i.test(target.tagName) || target.closest("a") || target.closest("p") || target.closest("span")) {
            //     sizeRef.current = 60;
            //     colorRef.current = "rgba(255, 255, 255, 0.9)";
            //     cursorRef.current?.classList.add("mix-blend-difference");
            // }

            if (target.closest("footer, footer *")) {
                sizeRef.current = 60;
                colorRef.current = "rgba(255, 255, 255, 0.9)";
                cursorRef.current?.classList.add("mix-blend-difference");
            }
        };

        const handleLeave = () => {
            sizeRef.current = 16; // Quay về kích thước mặc định khi rời đi
            colorRef.current = !pathname.includes("/products/phan-mem-quan-ly-san-xuat-fmrp") ? "rgba(26, 213, 152, 1)" : "rgba(3, 117, 243, 1)";
            cursorRef.current?.classList.remove("mix-blend-difference");
        };

        document.body.addEventListener("mouseenter", handleHover, true);
        document.body.addEventListener("mouseleave", handleLeave, true);

        return () => {
            document.body.removeEventListener("mouseenter", handleHover, true);
            document.body.removeEventListener("mouseleave", handleLeave, true);
        };
    }, [pathname]);

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-50"
            style={{
                x: smoothX,
                y: smoothY,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: !pathname.includes("/products/phan-mem-quan-ly-san-xuat-fmrp") ? "rgba(26, 213, 152, 1)" : "rgba(3, 117, 243, 1)",
                transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.3s ease-out",
                boxShadow: !pathname.includes("/products/phan-mem-quan-ly-san-xuat-fmrp") ? "4px 8px 25px 4px rgba(26, 213, 152, 0.45)" : " 4px 8px 25px 4px rgba(3, 117, 243, 0.45)"
            }}
        />
    );
};

export default CursorFollower;
