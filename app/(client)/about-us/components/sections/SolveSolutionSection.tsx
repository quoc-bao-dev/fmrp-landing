import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React, { memo, useMemo, useRef, useState } from 'react'
import AnimatedTitle from '../../../../../components/common/animations/text/AnimatedTitle';
import { motion } from 'framer-motion'
import AnimatedTitleGradient from '../../../../../components/common/animations/text/AnimatedTitleGradient';

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
    const sectionRef = useRef<HTMLDivElement>(null); // Giới hạn vùng kéo
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

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

    console.log('position', position);


    return (
        <div ref={sectionRef} className='custom-padding-section lg:h-screen h-svh relative'>
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
                    <div className="absolute flex items-center justify-center gap-2 3xl:top-[28%] xl:top-[18%] lg:top-[25%] md:top-0 top-[5%] lg:left-[47%] md:left-[35%] left-[25%] ">
                        <div className='flex items-center relative top-4'>
                            {/* Mũi tên và chữ đều có chung hiệu ứng lắc nhẹ theo hướng */}
                            <motion.div
                                className='relative xl:w-[50px] w-11 h-auto aspect-1/2 left-4 pointer-events-none'
                                animate={{
                                    y: [0, -3, 0], // Nhảy lên xuống nhẹ
                                    rotate: [-8, 0, -8], // Lắc nhẹ để nhấn mạnh hướng
                                }}
                                transition={{
                                    duration: 1, // Đồng bộ với chữ
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Image
                                    src="/background/ui/about-us/arrow-right-down.webp"
                                    alt="Mission Icon"
                                    width={200}
                                    height={200}
                                    className='size-full object-contain aspect-1/2'
                                    loading="lazy"
                                />
                            </motion.div>

                            {/* Chữ "sứ mệnh" lắc nhẹ đồng bộ với mũi tên */}
                            <motion.div
                                className={`${playwrite_is_sans.className} 3xl:!text-xl xl:!text-lg lg:!text-base md:!text-xl !text-lg italic font-normal text-[#4D5F6E] -rotate-3 pointer-events-none`}
                                animate={{
                                    rotate: [-8, 0, -8], // Lắc cùng hướng với mũi tên
                                    x: [-2, 0, -2], // Nhẹ nhàng đẩy qua lại
                                }}
                                transition={{
                                    duration: 1, // Đồng bộ với mũi tên
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                sứ mệnh
                            </motion.div>
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

                        {/* Phần tử có thể kéo thả */}
                        {/* <motion.div
                            className='xl:w-[85px] w-16 h-auto aspect-square cursor-grab active:cursor-grabbing absolute'
                            drag
                            dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }} // Cho phép kéo xa hơn
                            dragElastic={0.2} // Giảm độ đàn hồi khi kéo
                            initial={{ x: position.x, y: position.y }} // Giữ vị trí sau khi render lại
                            onDragEnd={(event, info) => {
                                setPosition({ x: info.point.x, y: info.point.y }); // Lưu vị trí khi thả ra
                            }}
                        >
                            <Image
                                src="/background/ui/about-us/target-dynamic.webp"
                                alt="Mission Icon"
                                width={150}
                                height={150}
                                className='size-full object-contain aspect-square'
                            />
                        </motion.div> */}

                    </div>

                    <h2 className="text-title-section font-normal space-x-2">
                        {/* <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle1} delay={0} /> */}
                        {/* <span className="relative inline-block">
                            <span className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"></span>
                            <AnimatedTitle className='text-[#050505] relative z-10 font-extrabold' heroPerTitle={heroPerTitle2} delay={0.5} />
                        </span> */}

                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle1} delay={0} />
                        <span className="relative inline-block">
                            {/* <span className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"></span> */}
                            {/* Background trượt từ trái sang phải */}
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
                        </span>
                        <AnimatedTitle className='text-[#050505]' heroPerTitle={heroPerTitle3} delay={1} />
                        <br />
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