import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    useEffect(() => {
        if (router.pathname.startsWith("/products/fmrp")) {
            setTheme("fmrp");
        } else {
            setTheme("default");
        }
    }, [router.pathname, setTheme]); // Chỉ re-run khi pathname thay đổi

    return null; // Không cần render gì cả, chỉ cần chạy useEffect
};

export default ThemeSwitcher;
