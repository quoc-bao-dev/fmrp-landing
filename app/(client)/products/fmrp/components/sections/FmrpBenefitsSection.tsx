import HoverEffect from '@/components/common/animations/hover-button/HoverEffectButton';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';
import WhyCard from '@/components/common/card/why/WhyCard';
import { useResizeStore } from '@/stores/useResizeStore';
import { BookOpen, Cat } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

import { variantsLinearShadow } from '@/utils/animations/variantsAnimation'
import { useSheetStores } from '@/stores/useSheetStores';

import ListMagnifyingGlassLinearIcon from '@/components/icons/fmrp/ListMagnifyingGlassLinearIcon';
import DevicesLinearIcon from '@/components/icons/fmrp/DevicesLinearIcon';
import HandCoinsLinearIcon from '@/components/icons/fmrp/HandCoinsLinearIcon';
import StarLinearIcon from '@/components/icons/fmrp/StarLinearIcon';
import ChatsTeardropLinearIcon from '@/components/icons/fmrp/ChatsTeardropLinearIcon';
import ChartLineUpLinearIcon from '@/components/icons/fmrp/ChartLineUpLinearIcon';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import BlurredBackgroundDynamic from '@/components/common/blur/BlurredBackgroundDynamic';

type Props = {}

const values = [
    {
        icon: <ListMagnifyingGlassLinearIcon className='size-full shrink-0' />,
        title: 'Tra soát nhanh',
        description: 'Theo dõi kịp tiến độ sản xuất, rà soát nhanh khâu sai sót',
    },
    {
        icon: <DevicesLinearIcon className='size-full shrink-0' />,
        title: 'Quản lý số hóa',
        description: 'Vận dụng công nghệ vào trong việc quản lý thay vì thủ công, excel, zalo...',
    },
    {
        icon: <ChatsTeardropLinearIcon className='size-full shrink-0' />,
        title: 'Phối hợp nhịp nhàng',
        description: 'Mang sự trao đổi rõ ràng, nhanh gọn giữa các phòng ban',
    },
    {
        icon: <HandCoinsLinearIcon className='size-full shrink-0' />,
        title: 'Giảm thiểu thất thoát hơn 40%',
        description: 'Thất thoát trong các khâu quản lý sản xuất',
    },
    {
        icon: <StarLinearIcon className='size-full shrink-0' />,
        title: 'Đánh giá năng suất',
        description: 'Sự tăng trưởng sản lượng, chi phí các nguồn lực trong xưởng và xí nghiệp',
    },
    {
        icon: <ChartLineUpLinearIcon className='size-full shrink-0' />,
        title: 'Gia tăng lợi nhuận',
        description: 'Nâng cao biên độ lợi nhuận cho xưởng',
    },
];

// CSS gradient tái sử dụng
const gradientStyle = {
    backgroundImage: `
    linear-gradient(90deg, #85EEB3, #53B086),
    radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
    // backgroundBlendMode: "hard-light", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
};

const FmrpBenefitsSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { isVisibleTablet, isVisibleMobile } = useResizeStore()
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const handleMouseMove = (event: MouseEvent) => {
            if (!sectionRef.current) return;

            const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
            const x = event.clientX - left - width / 2; // Căn giữa
            const y = event.clientY - top - height / 2; // Căn giữa

            setMousePosition({ x, y });
        };

        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 }); // Reset về trung tâm
        };

        sectionRef.current.addEventListener("mousemove", handleMouseMove);
        sectionRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
            sectionRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section className="custom-padding-section">
            <div className="custom-container flex lg:flex-row flex-col lg:items-center 3xl:gap-16 gap-12 ">
                <div className='w-full lg:max-w-[35%] max-w-full flex flex-col 3xl:gap-8 gap-6 overflow-hidden'>
                    <h2 className='space-x-2 font-extrabold'>
                        <span
                            className='text-title-section-small capitalize'
                            style={{
                                // background: "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                                background: "linear-gradient(-90deg, #0375F3 0%, #036EEA 11%, #0267E1 22%, #0261D7 33%, #025ACE 44%, #0254C5 56%, #024EBC 67%, #0148B3 78%, #0142A9 89%, #013DA0 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            FMRP
                        </span>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>Có Thể Giúp Gì Cho Các Nhà Sản Xuất?</span>
                    </h2>
                </div>

                {/* Nội dung các lợi ích */}
                <div
                    ref={sectionRef}
                    className='w-full lg:max-w-[60%] lg:p-2 max-w-full flex flex-col justify-center gap-4 relative overflow-hidden'
                >
                    {/* Lớp mask overlay để làm mờ viền */}
                    <div className="absolute inset-0 pointer-events-none mask-overlay"></div>

                    {/* Blur sẽ di chuyển theo con chuột */}
                    {!isVisibleMobile && (
                        <BlurredBackgroundDynamic
                            x={mousePosition.x}
                            y={mousePosition.y}
                            className="3xl:top-10 top-20 right-24"
                            background='linear-gradient(90deg, #CCFFEC 0%, #CCE5FF 100%)'
                        />
                    )}

                    <div className="w-full grid grid-cols-2 md:grid-cols-2 3xl:gap-x-8 xl:gap-x-6 md:gap-x-4 md:gap-y-0 gap-4 auto-rows-auto relative z-[10]">
                        {values.map((value, index) => (
                            <AnimatedReveal
                                key={index}
                                effect='fade'
                                once={false}
                                delay={index * 0.1} // ⬅️ Mỗi card trễ hơn card trước 0.2s
                                className={`relative ${index % 2 !== 1 ? "3xl:mt-8 xl:mt-6 md:mt-4" : "3xl:mb-8 xl:mb-6 md:mb-4" // Đẩy cột 2 xuống
                                    }`}
                            >
                                <WhyCard
                                className='lg:p-6 !p-4'
                                linearImageColor={"linear-gradient(270deg, rgba(3, 117, 243, 0) 0%, #0375F3 32%, #0375F3 61.5%, rgba(3, 117, 243, 0) 100%)"}
                                {...value} />
                            </AnimatedReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Đặt displayName để debug dễ hơn
FmrpBenefitsSection.displayName = 'FmrpBenefitsSection';

export default FmrpBenefitsSection