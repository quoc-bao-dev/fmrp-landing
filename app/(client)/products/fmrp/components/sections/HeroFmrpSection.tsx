import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { memo, useMemo, useRef, useState, useEffect } from 'react'
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle';
import { motion } from 'framer-motion'
import AnimatedTitleGradient from '@/components/common/animations/text/AnimatedTitleGradient';
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giải pháp", href: "#" },
    { label: "Sản phẩm" }
];

// CSS gradient tái sử dụng
const gradientStyle = {
    // background: `linear-gradient(to right, #0375F3, #013DA0)`,
    background: `linear-gradient(107deg, #0375F3 13.08%, #036EEA, #0267E1, #0261D7, #025ACE, #0254C5, #024EBC, #0148B3, #0142A9, #013DA0)`,
    // background: `linear-gradient(107deg, #0375F3 43.86%, #036EEA 45.1%, #0267E1 46.34%, #0261D7 47.57%, #025ACE 48.81%, #0254C5 50.05%, #024EBC 51.29%, #0148B3 52.52%, #0142A9 53.76%, #013DA0 55%)`
};

const HeroFmrpSection = memo((props: Props) => {
    const [position, setPosition] = useState({ x: 500, y: 500 });
    const [isDragging, setIsDragging] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && sectionRef.current) {
                const sectionRect = sectionRef.current.getBoundingClientRect();

                // Giữ icon trong section
                const newX = Math.max(0, Math.min(e.clientX - sectionRect.left, sectionRect.width - 85));
                const newY = Math.max(0, Math.min(e.clientY - sectionRect.top, sectionRect.height - 85));

                setPosition({ x: newX, y: newY });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    // 🛠 Xử lý `initial position` và `size` theo từng độ phân giải màn hình
    const updatePositionAndSize = () => {
        const screenWidth = window.innerWidth;

        let newPosition = { x: 50, y: 50 };

        if (screenWidth >= 1920) {
            newPosition = { x: 1105, y: 370 };
        } else if (screenWidth >= 1536) {
            newPosition = { x: 910, y: 270 };
        } else if (screenWidth >= 1440) {
            newPosition = { x: 860, y: 265 };
        } else if (screenWidth >= 1280) {
            newPosition = { x: 780, y: 260 };
        } else if (screenWidth >= 1024) {
            newPosition = { x: 640, y: 295 };
        } else if (screenWidth >= 768) {
            newPosition = { x: 430, y: 115 };
        } else {
            newPosition = { x: 260, y: 155 }; // Màn hình nhỏ hơn 768px
        }

        setPosition(newPosition);
    };

    // 🔥 Chạy khi component mount & khi resize màn hình
    useEffect(() => {
        updatePositionAndSize(); // Chạy lần đầu
        window.addEventListener("resize", updatePositionAndSize);
        return () => window.removeEventListener("resize", updatePositionAndSize);
    }, []);


    // ✅ Tạo danh sách chữ để hiển thị với hiệu ứng Animation
    const heroPerTitle1 = useMemo(
        () => "Tối Ưu".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const heroPerTitle2 = useMemo(
        () =>
            "Sản Xuất, "
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    const heroPerTitle3 = useMemo(
        () =>
            "Tối Đa"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle2.length, letter })),
        [heroPerTitle2]
    );

    const heroPerTitle4 = useMemo(
        () =>
            "Năng Suất,"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle3.length, letter })),
        [heroPerTitle3]
    );

    const heroPerTitle5 = useMemo(
        () =>
            "Tối Thiểu"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle4.length, letter })),
        [heroPerTitle4]
    );

    const heroPerTitle6 = useMemo(
        () =>
            "Lãng Phí"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle4.length, letter })),
        [heroPerTitle5]
    );

    return (
        <div ref={sectionRef} className='custom-padding-section lg:h-screen h-svh relative bg-transparent'>
            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2] pt-12'>
                <CustomBreadcrumb items={breadcrumbItems} />

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 md:pt-20 pt-28">
                    <motion.div
                        initial={false}
                        animate="rest"
                        whileTap="press"
                        variants={variantButtonScaleZoom}
                        className="3xl:w-[330px] w-[280px] h-auto aspect-2.57/1 cursor-default"
                    // onClick={() => { scrollToTop() }}
                    >
                        <Image
                            alt="logo"
                            src="/logo/fmrp/logo-fmrp.svg"
                            width={134}
                            height={55}
                            quality={100}
                            priority
                            className="size-full object-contain aspect-2.57/1"
                        />
                    </motion.div>

                    <h2 className="text-title-section text-center font-normal align-middle">
                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle1}
                            delay={0}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />
                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle2}
                            delay={0.4}
                        />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle3}
                            delay={0.8}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle4}
                            delay={1.2}
                        />
                        <br />

                        <AnimatedTitleGradient
                            className='font-extrabold pr-3'
                            heroPerTitle={heroPerTitle5}
                            delay={1.6}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                display: "inline-block", // Giữ inline nhưng vẫn áp dụng gradient toàn bộ
                            }}
                        />

                        <AnimatedTitle
                            className='text-[#050505] relative z-10 font-extrabold'
                            heroPerTitle={heroPerTitle6}
                            delay={2}
                        />
                        {/* <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle1} delay={0} /> */}
                        {/* <span className="relative inline-block">
                            <motion.span
                                className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"
                                initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
                                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Hiện dần ra
                                transition={{
                                    duration: 2, // Làm chậm hiệu ứng để mượt hơn
                                    delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                                    ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
                                }}
                            />

                            <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle2} delay={0.5} />
                        </span> */}
                        {/* <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle3} delay={1} />

                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle4} delay={1.5} />
                        <AnimatedTitleGradient
                            className='font-extrabold'
                            heroPerTitle={heroPerTitle5}
                            delay={1.6}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        />
                        <AnimatedTitleGradient
                            className='font-extrabold'
                            heroPerTitle={heroPerTitle6}
                            delay={1.6}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        /> */}
                    </h2>
                </div>
            </div>
        </div >
    )
})

// Đặt displayName để debug dễ hơn
HeroFmrpSection.displayName = 'HeroFmrpSection';

export default HeroFmrpSection