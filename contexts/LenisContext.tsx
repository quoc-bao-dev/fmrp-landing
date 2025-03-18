"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// 1️⃣ Tạo context cho Lenis
const LenisContext = createContext<{ lenis: Lenis | null; pauseLenis: () => void; resumeLenis: () => void } | undefined>(undefined);

// 2️⃣ Provider cho Lenis
export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            orientation: "vertical",
            gestureOrientation: "vertical",
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        setLenis(lenisInstance);

        return () => lenisInstance.destroy();
    }, []);

    // 3️⃣ Hàm tạm dừng Lenis
    const pauseLenis = () => {
        if (lenis) lenis.stop();
    };

    // 4️⃣ Hàm kích hoạt lại Lenis
    const resumeLenis = () => {
        if (lenis) lenis.start();
    };

    return <LenisContext.Provider value={{ lenis, pauseLenis, resumeLenis }}>{children}</LenisContext.Provider>;
};

// 5️⃣ Custom hook để sử dụng Lenis trong component khác
export const useLenis = () => {
    const context = useContext(LenisContext);
    if (!context) {
        throw new Error("useLenis must be used within a LenisProvider");
    }
    return context;
};
