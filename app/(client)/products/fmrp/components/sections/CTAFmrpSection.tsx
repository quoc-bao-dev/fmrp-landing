import FloatingRotateAnimation from '@/components/common/animations/common/FloatingRotateAnimation'
import PulseGlowAnimation from '@/components/common/animations/common/PulseGlowAnimation'
import SalyAnimation from '@/components/common/animations/common/SalyAnimation'
import SwingBobAnimation from '@/components/common/animations/common/SwingBobAnimation'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDebouncedCallback } from 'use-debounce';

import { motion } from 'framer-motion'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import { useLenis } from '@/contexts/LenisContext'

type Props = {}

const subtitles: string[][] = [
    ["Tính Linh Hoạt", "Tuỳ Chỉnh Cao"],
    ["FMRP Giúp Doanh Nghiệp Tối Ưu Quy Trình"],
    ["Kiểm Soát Vận Hành, Nâng Cao Năng Suất"],
    ["Bất Kể Quy Mô, Ngành Nghề."]
];

const CTAFmrpSection = (props: Props) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { ref: inViewRef, inView } = useInView({ threshold: 0.8, triggerOnce: false });
    const { pauseLenis, resumeLenis } = useLenis(); // ✅ Gọi Lenis từ context

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); // Ngăn chặn scroll nhanh vượt viewport

    const [isFirstTime, setIsFirstTime] = useState<boolean>(true); // Kiểm tra lần đầu vào section

    // ✅ Gộp ref của useInView và useRef
    const setRefs = useCallback((node: HTMLDivElement | null) => {
        sectionRef.current = node;
        inViewRef(node);
    }, [inViewRef]);

    // ✅ Khi vào viewport, tự động cuộn vào giữa section
    useEffect(() => {
        if (inView && sectionRef.current) {
            pauseLenis();
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

                if (isFirstTime) {
                    // ✅ Nếu vào lần đầu, xác định activeIndex
                    const rect = sectionRef?.current?.getBoundingClientRect();
                    if (rect && rect.top > 0) {
                        setActiveIndex(0); // Cuộn từ trên xuống → Active phần tử đầu tiên
                    } else {
                        setActiveIndex(subtitles.length - 1); // Cuộn từ dưới lên → Active phần tử cuối
                    }
                    setIsFirstTime(false);
                }
            }, 300);
        } else {
            resumeLenis();
        }
    }, [inView, pauseLenis, resumeLenis, isFirstTime]);

    // ✅ Xử lý cuộn lên/xuống từng bước
    const handleScroll = useCallback(
        (event: WheelEvent | TouchEvent) => {
            event.preventDefault();
            if (isTransitioning) return;

            const isTouch = event instanceof TouchEvent;
            const scrollDirection = isTouch
                ? (event as TouchEvent).touches[0].clientY < window.innerHeight / 2
                    ? "down"
                    : "up"
                : (event as WheelEvent).deltaY > 0
                    ? "down"
                    : "up";

            setIsTransitioning(true);

            setActiveIndex((prevIndex) => {
                if (scrollDirection === "down") {
                    if (prevIndex < subtitles.length - 1) {
                        return prevIndex + 1; // ✅ Nếu chưa đến cuối → Active phần tử tiếp theo
                    } else {
                        resumeLenis(); // ✅ Nếu đã ở cuối → Cho phép cuộn tiếp ra ngoài
                        return prevIndex;
                    }
                } else {
                    if (prevIndex > 0) {
                        return prevIndex - 1; // ✅ Nếu chưa đến đầu → Active phần tử trước đó
                    } else {
                        resumeLenis(); // ✅ Nếu đã ở đầu → Cho phép cuộn tiếp ra ngoài
                        return prevIndex;
                    }
                }
            });

            setTimeout(() => {
                setIsTransitioning(false);
            }, 400);
        },
        [subtitles.length, isTransitioning]
    );


    // ✅ Lắng nghe sự kiện cuộn khi vào section (chỉ chạy khi inView)
    useEffect(() => {
        if (inView) {
            window.addEventListener("wheel", handleScroll, { passive: false });
            window.addEventListener("touchmove", handleScroll, { passive: false });

            return () => {
                window.removeEventListener("wheel", handleScroll);
                window.removeEventListener("touchmove", handleScroll);
            };
        }
    }, [inView, handleScroll]);

    return (
        <section ref={setRefs} className={`custom-padding-section h-screen relative z-10`}>
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
                    <div className='flex flex-col lg:items-center lg:justify-center items-center justify-center lg:text-center text-center 3xl:max-w-[54%] lg:max-w-[70%] max-w-full'>
                        {
                            subtitles.map((group, index) => (
                                <motion.div
                                    key={index}
                                    className="text-title-section-small font-extrabold text-gray-400"
                                    initial={{ opacity: 0 }}
                                    animate={index <= activeIndex ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {
                                        group.map((line, i) => (
                                            <span
                                                key={i}
                                                className={`transition-all duration-500 ${index === activeIndex ? "text-[#1760B9]" : ""}`}
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
                        onClick={() => { window.open("https://bom.so/mrpbeta") }}
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