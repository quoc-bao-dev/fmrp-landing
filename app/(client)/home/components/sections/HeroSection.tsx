
import BabylonViewer from '@/components/common/3D/BabylonViewer';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion'
import { uuidv4 } from '@/lib/uuid';

type Props = {}

const HeroSection = (props: Props) => {
    const iconArrow = [
        {
            id: uuidv4(),
            icon: "/icons/common/arrow/arrow-1.svg"
        },
        {
            id: uuidv4(),
            icon: "/icons/common/arrow/arrow-2.svg"
        },
        {
            id: uuidv4(),
            icon: "/icons/common/arrow/arrow-3.svg"
        },
    ]

    // ✅ Hàm chặn scroll
    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    };

    // ✅ Hàm bật lại scroll
    const enableScroll = () => {
        document.body.style.overflow = "";
    };

    return (
        <div className='3xl:py-24 py-20 h-screen relative'>
            {/* background color linear */}
            <div
                className='absolute top-0 left-0 size-full blur-[772.7864379882812px]'
                style={{
                    background: "linear-gradient(95.16deg, #E0FFCC 12.93%, #CCFFEC 65.56%)",
                }}
            />

            {/* logo pattern */}
            <div className='absolute -top-8 -right-[12%] h-[800px] aspect-3/2'>
                <Image
                    alt="logo"
                    width={900}
                    height={900}
                    src="/logo/foso/logo-pattern.svg"
                    className="size-full object-contain opacity-35"
                />
            </div>



            <div className='mx-[128px] flex flex-wrap items-center justify-between gap-2 h-full relative z-[2]'>
                {/* button logo */}
                <div className='flex flex-col items-center justify-center gap-2 absolute bottom-4 left-0 z-[999] cursor-pointer group'>
                    <div className="flex flex-col items-center space-y-1">
                        {iconArrow.map((icon, index) => (
                            <motion.div
                                key={`ic-${icon.id}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.7, // Hiển thị từng mũi tên theo thứ tự
                                }}
                            >
                                <Image
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    src={icon?.icon}
                                    className="size-full object-contain"
                                    priority
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className='text-default font-medium text-[#17181A] group-hover:text-[#17181A]/80 custom-transition'>
                        Khám phá
                    </div>
                </div>

                {/* contetn left */}
                <div className='max-w-[55%]'>
                    <span className='text-[#050505] text-title-section font-extrabold'>Đồng Hành Cùng</span>
                    <span
                        className='text-[56px] font-extrabold text-white px-6 py-2 rounded-full uppercase ml-4'
                        style={{
                            background: "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)"
                        }}
                    >
                        Foso
                    </span>
                    <br />
                    <span className='text-[#050505] text-title-section font-extrabold'>trong kỷ nguyên số mới</span>
                </div>

                {/* Phần mô hình 3D bên phải */}
                <div
                    className="max-w-[45%] relative flex flex-col items-center justify-center w-full h-[600px] cursor-pointer"
                    onMouseEnter={disableScroll} // ✅ Chặn scroll khi hover vào
                    onMouseLeave={enableScroll} // ✅ Bật lại scroll khi rời chuột
                >
                    <BabylonViewer />
                </div>
            </div>

        </div>
    )
}

export default HeroSection

