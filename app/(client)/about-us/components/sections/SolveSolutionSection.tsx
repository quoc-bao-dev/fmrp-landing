import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { memo, useMemo } from 'react'
import AnimatedTitle from '../../../../../components/common/animations/AnimatedTitle';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi" }
];

// CSS gradient tái sử dụng
const gradientStyle = {
    backgroundImage: `linear-gradient(to right, #53B086 0%, #53B086 50%, #85EEB3 100%), 
    radial-gradient(219.3% 1471.82% at 24.6% -30.56%, 
    rgba(84, 171, 177, 0) 0%, 
    rgba(84, 171, 177, 0.409141) 34.37%, 
    rgba(133, 238, 179, 0.71) 51.52%, 
    rgba(84, 171, 177, 0) 100%)`,
};

const SolveSolutionSection = memo((props: Props) => {
    // ✅ Tạo danh sách chữ để hiển thị với hiệu ứng Animation
    const heroPerTitle1 = useMemo(
        () => "Giải Quyết".split("").map((letter, index) => ({ id: index, letter })),
        []
    );

    const heroPerTitle2 = useMemo(
        () =>
            "Vấn đề"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle1.length, letter })),
        [heroPerTitle1]
    );

    const heroPerTitle3 = useMemo(
        () =>
            "Và"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle2.length, letter })),
        [heroPerTitle2]
    );

    const heroPerTitle4 = useMemo(
        () =>
            "Mang đến"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle3.length, letter })),
        [heroPerTitle3]
    );

    
    const heroPerTitle5 = useMemo(
        () =>
            "Giải Pháp"
                .split("")
                .map((letter, index) => ({ id: index + heroPerTitle4.length, letter })),
        [heroPerTitle4]
    );

    return (
        <div className='custom-padding-section lg:h-screen h-svh relative'>
            {/* Hình nền trái - Tối ưu lazy loading */}
            <div className='absolute lg:top-1/2 top-[80%] left-0 lg:-translate-y-1/2 -translate-y-[80%] 3xl:h-[270px] xl:h-[250px] lg:h-[200px] md:h-[300px] h-[200px] aspect-square pointer-events-none'>
                <Image
                    alt="Logo Left"
                    width={270}
                    height={270}
                    src="/background/ui/about-us/misstion-left.webp"
                    loading="lazy"
                    className="size-full object-contain"
                    sizes="(max-width: 1024px) 200px, 270px" // Responsive sizes
                />
            </div>

            {/* Hình nền phải - Tối ưu lazy loading */}
            <div className='absolute lg:top-1/2 top-[80%] -right-0.5 lg:-translate-y-1/2 -translate-y-[80%] 3xl:h-[250px] xl:h-[220px] lg:h-[170px] md:h-[270px] h-[170px] aspect-0.78/1 pointer-events-none'>
                <Image
                    alt="Logo Right"
                    width={195}
                    height={250}
                    src="/background/ui/about-us/misstion-right.webp"
                    className="size-full object-contain"
                    loading="lazy"
                    sizes="(max-width: 1024px) 150px, 195px"
                />
            </div>

            {/* Container chính */}
            <div className='custom-container flex flex-col items-center justify-between gap-2 h-full relative z-[2] pt-4'>
                <CustomBreadcrumb items={breadcrumbItems} />

                {/* Nội dung chính */}
                <div className="flex lg:items-center items-start justify-center w-full h-full relative lg:pt-0 md:pt-20 pt-28">
                    <div className="absolute flex items-center justify-center gap-2 3xl:top-[25%] xl:top-[18%] lg:top-[25%] md:top-0 top-[5%] lg:left-[47%] md:left-[35%] left-[25%] pointer-events-none">
                        <div className='flex items-center relative top-4'>
                            <div className='relative xl:w-[50px] w-11 h-auto aspect-1/2 left-4'>
                                <Image
                                    src="/background/ui/about-us/arrow-right-down.webp"
                                    alt="Mission Icon"
                                    width={200}
                                    height={200}
                                    className='size-full object-contain aspect-1/2'
                                    loading="lazy"
                                />
                            </div>
                            <span className={`${playwrite_is_sans.className} 3xl:!text-xl xl:!text-lg lg:!text-base md:!text-xl !text-lg italic font-normal text-[#4D5F6E] -rotate-3`}>
                                sứ mệnh
                            </span>
                        </div>
                        <div className='xl:w-[85px] w-16 h-auto aspect-square'>
                            <Image
                                src="/background/ui/about-us/target-dynamic.webp"
                                alt="Mission Icon"
                                width={150}
                                height={150}
                                className='size-full object-contain aspect-square'
                            />
                        </div>
                    </div>

                    <h2 className="text-title-section font-normal space-x-2">
                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle1} delay={0} />
                        <span className="relative inline-block">
                            <span className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"></span>
                            <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle2} delay={0.5} />
                        </span>
                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle3} delay={1} />
                        <br />
                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle4} delay={1.5} />
                        <AnimatedTitle
                            className='font-extrabold'
                            heroPerTitle={heroPerTitle5}
                            delay={0}
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        />
                        {/* <span>Giải Quyết</span>
                        <span className="relative inline-block">
                            <span className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"></span>
                            <span className="relative z-10 font-extrabold">Vấn Đề</span>
                        </span>
                        <span>Và</span>
                        <br />
                        <span>Mang Đến</span>
                        <span
                            className="font-extrabold"
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Giải Pháp
                        </span> */}
                    </h2>
                </div>
            </div>
        </div >
    )
})

// Đặt displayName để debug dễ hơn
SolveSolutionSection.displayName = 'SolveSolutionSection';

export default SolveSolutionSection