'use client'
import StickerHighlight from '@/components/common/animations/common/StickerHighlight';
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle';
import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb';
import { useResizeStore } from '@/stores/useResizeStore';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useMemo } from 'react';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "...", href: "/" },
    { label: "FMRP", href: "/products/phan-mem-quan-ly-san-xuat-fmrp" },
    { label: "Bảng giá" }
];

const IntroPricingFmrpSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    // ✅ Dùng `useMotionValue` để tránh re-render
    const scrollY = useMotionValue(0);
    const yLeft = useTransform(scrollY, [0, 500], [0, 100]); // ✅ Điều chỉnh phạm vi trượt
    const yRight = useTransform(scrollY, [0, 500], [0, 100]);

    const heroPerTitle1 = useMemo(
        () => "Bảng Giá".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const { theme, setTheme } = useTheme();

    return (
        <div className='custom-padding-section lg:h-full h-[80svh] relative'>
            {
                !isVisibleTablet &&
                <React.Fragment>
                    {/* Hình nền trái - Tối ưu lazy loading */}
                    <StickerHighlight
                        className="absolute lg:top-1/4 top-[80%] left-6 lg:-translate-y-1/4 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none z-[1]"
                        shadowColor='rgba(3, 117, 243, 0.01)'
                    >
                        <Image
                            alt="Logo Left"
                            width={600}
                            height={400}
                            src="/background/ui/fmrp/pricing/intro-2.png"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 200px, 270px" // Responsive sizes
                            priority
                        />
                    </StickerHighlight>
                    <StickerHighlight
                        className="absolute lg:top-1/4 top-[80%] right-6 lg:-translate-y-1/4 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none z-[1]"
                        shadowColor='rgba(3, 117, 243, 0.01)'
                    >
                        <Image
                            alt="Logo Right"
                            width={600}
                            height={400}
                            src="/background/ui/fmrp/pricing/intro-1.png"
                            className="size-full object-contain"
                            sizes="(max-width: 1024px) 200px, 270px" // Responsive sizes
                            priority
                        />
                    </StickerHighlight>
                </React.Fragment>
            }

            {/* {
                !isVisibleTablet &&
                <div className='absolute w-[500px] h-auto aspect-square rounded-[40px] 2xl:-translate-x-[40%] -translate-x-[60%] -bottom-72 pointer-events-none'>
                    <Image
                        width={500}
                        height={500}
                        alt="green-blur"
                        src="/background/blur/bg-green-v2.svg"
                        className="size-full object-contain"
                    />
                </div>
            } */}

            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2]'>
                <div className='lg:pt-12 pt-20 3xl:pb-16 lg:pb-10'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>

                {/* Nội dung chính */}
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pt-0 md:pt-20 pt-28">
                    <h2 className="text-title-section font-normal space-x-2">
                        <span className="relative flex justify-center">
                            {/* Background trượt từ trái sang phải */}
                            <motion.span
                                className="absolute bottom-[12%] bg-[#D0EFFC] rounded-full h-[26%] w-[99%]"
                                initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
                                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Hiện dần ra
                                transition={{
                                    duration: 2, // Làm chậm hiệu ứng để mượt hơn
                                    delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                                    ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
                                }}
                            />

                            <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle1} />
                        </span>
                    </h2>

                    <p className='text-base-default text-[#33404A] font-medium text-center'>
                        Chọn gói phù hợp với quy mô doanh nghiệp của bạn
                    </p>
                    {
                        isVisibleTablet &&
                        <StickerHighlight
                            className="w-full h-auto aspect-square pointer-events-none"
                            shadowColor='rgba(3, 117, 243, 0.01)'
                        >
                            <Image
                                width={400}
                                height={400}
                                alt="saly"
                                src="/background/ui/fmrp/pricing/intro-3.png"
                                className="size-full object-contain"
                            />
                        </StickerHighlight>
                    }
                </div>
            </div>
        </div>
    )
}

export default IntroPricingFmrpSection