"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollbarStyle = () => {
    const pathname = usePathname();

    useEffect(() => {
        const root = document.documentElement;
        if (pathname === "/products/fmrp") {
            root.style.setProperty("--scrollbar-thumb-color", "#5599EC");
        } else {
            root.style.setProperty("--scrollbar-thumb-color", "#48DDAD");
        }
    }, [pathname]);

    return null;
};

export default ScrollbarStyle;
