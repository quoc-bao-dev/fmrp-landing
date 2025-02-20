import { animate, motionValue } from 'framer-motion';
import { RefObject, useCallback } from 'react';


// Khi reload page thì sử dụng hàm này để tự động chuyển lên đầu trang
const scrollToTop = () => {
    const scrollY = motionValue(window.scrollY); // Lưu giá trị hiện tại vào motionValue

    animate(scrollY, 0, {
        type: "keyframes",
        stiffness: 120,
        damping: 25,
        mass: 0.8,
        onUpdate: (value) => window.scrollTo(0, value),
    });
};


const scrollToSection = (idSection: number | string) => {
    const element = document.getElementById(String(idSection));
    if (element) {
        const yOffset = 0; // Khoảng cách muốn trừ đi
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        const scrollY = motionValue(window.scrollY); // Lưu giá trị cuộn hiện tại

        // Sử dụng framer-motion để cuộn đến vị trí tính toán
        animate(scrollY, y, {
            type: "keyframes",
            stiffness: 120,
            damping: 25,
            mass: 0.8,
            onUpdate: (value: number) => window.scrollTo(0, value),
        });
    }
};

export {
    scrollToTop,
    scrollToSection,
}