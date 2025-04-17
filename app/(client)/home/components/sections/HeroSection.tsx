
import BabylonViewer from '@/components/common/3D/BabylonViewer';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import { uuidv4 } from '@/lib/uuid';
import { useScrollContext } from '@/contexts/ScrollContext';
import AnimatedArrows from '../ui/hero/AnimatedArrows';
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle';

import FadeInZoomSpan from '@/components/common/animations/fade/FadeInZoomSpan';
import FadeInZoomDiv from '@/components/common/animations/fade/FadeInZoomDiv';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';

type HeroSectionProps = {
}

const HeroSection: React.FC<HeroSectionProps> = ({ }) => {
    const { scrollToElementRef } = useScrollContext();

    // ✅ Tạo danh sách mũi tên với `useMemo` để tránh tạo lại mảng mỗi lần render
    const iconArrow = useMemo(
        () => [
            { id: uuidv4(), icon: "/icons/common/arrow/arrow-1.svg" },
            { id: uuidv4(), icon: "/icons/common/arrow/arrow-2.svg" },
            { id: uuidv4(), icon: "/icons/common/arrow/arrow-3.svg" },
        ],
        []
    );

    // ✅ Tạo hàm handleScroll với `useCallback` để tránh tạo lại hàm mỗi lần render
    // const handleScroll = useCallback((type: "enable" | "disable") => {
    //     document.body.style.overflow = type === "disable" ? "hidden" : "";
    // }, []);

    const preventScroll = (e: Event) => {
        e.preventDefault();
    };
    
    const handleScroll = useCallback((type: "enable" | "disable") => {
        if (type === "disable") {
            document.body.style.overflowY = "scroll"; // Hiển thị scrollbar
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            document.body.style.overflowY = "";
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
        }
    }, []);

    // ✅ Tạo danh sách chữ để hiển thị với hiệu ứng Animation
    const heroPerTitle1 = useMemo(
        () => "Đồng Hành Cùng".split("").map((letter, index) => ({ id: index, letter })),
        []
    );
    const heroPerTitle2 = useMemo(
        () =>
            "Trong Kỷ Nguyên Số Mới"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    return (
        <div className='custom-padding-section lg:h-screen h-svh relative'>
            {/* background color linear */}
            <div
                className='absolute top-0 left-0 size-full blur-[772.7864379882812px]'
                style={{
                    background: "linear-gradient(95.16deg, #E0FFCC 12.93%, #CCFFEC 65.56%)",
                    filter: "blur(386.3932189941406px)",
                    WebkitFilter: "blur(386px)", // 🧠 Safari-specific prefix
                    willChange: 'filter',
                }}
            />

            {/* logo pattern */}
            <div className='absolute xxl:-top-8 lg:-top-4 xl:-right-[12%] lg:-right-[15%] md:-right-[4%] -right-[18%]  3xl:h-[840px] 2xl:h-[680px] xxl:h-[640px] xl:h-[580px] lg:h-[500px] md:h-[550px] h-[360px] aspect-3/2'>
                <Image
                    alt="logo"
                    width={900}
                    height={900}
                    src="/logo/foso/logo-pattern.webp"
                    className="size-full object-contain opacity-15"
                />
            </div>

            <div className='3xl:mx-[128px] 2xl:mx-[98px] xl:mx-[88px] md:mx-[60px] flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-center gap-2 h-full relative z-[2]'>
                {/* button arrow */}

                <AnimatedArrows onClick={() => scrollToElementRef("serviceProcess")} iconArrow={iconArrow} />

                {/* contetn left */}
                <div className='xxl:max-w-[55%] xl:max-w-[60%] lg:max-w-[70%] max-w-full text-start'>
                    <AnimatedTitle className='text-[#050505] text-title-section font-extrabold' heroPerTitle={heroPerTitle1} delay={0.5} />

                    <FadeInZoomSpan
                        delay={0.7} // ⬅️ Xuất hiện sau heroPerTitle1
                        className="3xl:text-[56px] 2xl:text-[46px] xxl:text-[44px] xl:text-[40px] 
                        lg:text-[36px] md:text-[32px] text-[20px] font-extrabold 
                        text-white md:px-6 px-4 py-2 rounded-full uppercase xl:ml-4 ml-2"
                        style={{
                            background: "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)"
                        }}
                    >
                        Foso
                    </FadeInZoomSpan>
                    <br />

                    <AnimatedTitle className='text-[#050505] text-title-section font-extrabold' heroPerTitle={heroPerTitle2} delay={2} />
                </div>

                {/* Phần mô hình 3D bên phải */}
                <div className="xxl:max-w-[40%] xl:max-w-[38%] md:max-w-[30%] max-w-full w-full flex flex-col justify-center lg:items-end items-center">
                    <FadeInZoomDiv
                        delay={0.1}
                        duration={0.7}
                        className="relative cursor-pointer rounded-xl 3xl:h-[600px] xxl:h-[480px] xl:h-[420px] lg:h-[340px] md:h-[300px] h-[350px] aspect-square"
                        onMouseEnter={() => handleScroll("disable")} // ✅ Chặn scroll khi hover vào
                        onMouseLeave={() => handleScroll("enable")} // ✅ Bật lại scroll khi rời chuột
                    >
                        <BabylonViewer />
                    </FadeInZoomDiv>
                </div>
            </div>

        </div>
    )
}

export default HeroSection