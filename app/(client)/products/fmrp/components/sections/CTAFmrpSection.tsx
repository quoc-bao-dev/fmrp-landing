import FloatingRotateAnimation from '@/components/common/animations/common/FloatingRotateAnimation'
import PulseGlowAnimation from '@/components/common/animations/common/PulseGlowAnimation'
import SalyAnimation from '@/components/common/animations/common/SalyAnimation'
import SwingBobAnimation from '@/components/common/animations/common/SwingBobAnimation'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDebouncedCallback } from 'use-debounce';

import { motion } from 'framer-motion'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'

type Props = {}

const subtitles: string[][] = [
    ["Tính Linh Hoạt", "Tuỳ Chỉnh Cao"],
    ["FMRP Giúp Doanh Nghiệp Tối Ưu Quy Trình"],
    ["Kiểm Soát Vận Hành, Nâng Cao Năng Suất"],
    ["Bất Kể Quy Mô, Ngành Nghề."]
];

const CTAFmrpSection = (props: Props) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { ref: inViewRef, inView } = useInView({ threshold: 0.5, triggerOnce: false });

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isLocked, setIsLocked] = useState<boolean>(true);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Ngăn chặn scroll nhanh vượt viewport

    // Hợp nhất ref của useInView và useRef để track vị trí section
    const setRefs = (node: HTMLDivElement | null) => {
        sectionRef.current = node;
        inViewRef(node);
    };

    // Khi vào viewport, đảm bảo section luôn ở giữa màn hình
    useEffect(() => {
        if (inView && sectionRef.current) {
            document.body.style.overflow = "hidden"; // Khoá scroll
            sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [inView]);

    // Kiểm soát scroll, ngăn vượt viewport
    const handleScroll = useDebouncedCallback((event: WheelEvent) => {
        if (isTransitioning) return; // Ngăn chặn nhiều sự kiện scroll cùng lúc
        setIsTransitioning(true);

        const scrollDirection = event.deltaY > 0 ? "down" : "up";

        if (scrollDirection === "down" && activeIndex < subtitles.length - 1) {
            setActiveIndex((prev) => prev + 1);
        } else if (scrollDirection === "up" && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }

        // Kiểm soát khóa/mở scroll
        if (activeIndex === subtitles.length - 1 && scrollDirection === "down") {
            setTimeout(() => {
                document.body.style.overflow = "auto";              // Mở khóa scroll khi highlight xong
                setIsLocked(false);
                setIsTransitioning(false);
            }, 800);
        } else if (activeIndex === 0 && scrollDirection === "up") {
            setTimeout(() => {
                document.body.style.overflow = "auto";
                setIsLocked(false);
                setIsTransitioning(false);
            }, 800);
        } else {
            document.body.style.overflow = "hidden"; // Giữ khóa khi chưa highlight hết
            setIsLocked(true);
            setTimeout(() => setIsTransitioning(false), 400);
        }
    }, 250); // Giảm debounce xuống 250ms để phản hồi nhanh hơn

    useEffect(() => {
        if (inView) {
            window.addEventListener("wheel", handleScroll);
            return () => window.removeEventListener("wheel", handleScroll);
        }
    }, [inView, activeIndex, handleScroll]);

    console.log('inView', inView);
    console.log('setRefs', setRefs);

    return (
        <section ref={setRefs} className={`custom-padding-section h-screen`}>
            <div className='custom-container h-full flex flex-col items-center justify-center'>
                <FloatingRotateAnimation className="w-[200px] h-auto aspect-square">
                    <Image
                        width={400}
                        height={400}
                        alt="saly"
                        src="/background/ui/fmrp/checklist.webp"
                        className="size-full object-contain"
                    />
                </FloatingRotateAnimation>

                <div className="flex flex-col w-full items-center justify-center gap-6">
                    <div className='flex flex-col lg:items-center lg:justify-center items-start justify-start 3xl:max-w-[54%] lg:max-w-[70%] max-w-full lg:text-center text-start'>
                        {
                            subtitles.map((group, index) => (
                                <motion.div
                                    key={index}
                                    className="text-title-section-small font-bold"
                                    initial={{ opacity: 0 }}
                                    animate={index <= activeIndex ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {
                                        group.map((line, i) => (
                                            <span
                                                key={i}
                                                className={`transition-all duration-500 ${index === activeIndex ? "text-blue-700 font-bold" : "text-gray-300"}`}
                                            >
                                                {line}{i !== group.length - 1 && ", "}
                                            </span>
                                        ))
                                    }
                                </motion.div>
                            ))
                        }
                    </div>

                    <ButtonAnimationNew
                        icon={
                            <div className='xl:size-6 size-5 flex-shrink-0 flex items-center justify-center bg-[#000000] rounded-full'>
                                <Image
                                    width={100}
                                    height={100}
                                    alt='icon'
                                    src={"/icons/common/arrow/ArrowUpRight.svg"}
                                    className='size-4 object-contain'
                                />
                            </div>
                        }
                        reverse={true}
                        title="Dùng thử miễn phí"
                        onClick={() => { }}
                        className='border-gradient-button-fmrp flex items-center gap-2 text-sm text-white font-semibold capitalize !shadow-none border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                        style={{
                            background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(118.21deg, #0375F3 10.03%, #013DA0 107.74%)",
                        }}
                        whileHover={{
                            background: [
                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                                "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)"
                            ],
                            transition: {
                                duration: 1.5,
                                ease: [0.4, 0, 0.6, 1],
                                repeat: Infinity
                            },
                            boxShadow: [
                                "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                            ],
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default CTAFmrpSection