import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CaretRightIcon from "@/components/icons/common/CaretRightIcon";
import Image from 'next/image';
import { variantButtonPressZoom } from '@/utils/animations/variantsAnimation';

interface SubmenuTooltipProps {
    subMenu: any;
}

const SubmenuTooltip = memo(({ subMenu }: SubmenuTooltipProps) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const hoveredRef = useRef<string | null>(null);

    // Hàm xử lý hover, chỉ cập nhật state nếu giá trị thay đổi
    const handleMouseEnter = useCallback((id: string) => {
        if (hoveredRef.current !== id) {
            hoveredRef.current = id;
            setHoveredItem(id);
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (hoveredRef.current !== null) {
            hoveredRef.current = null;
            setHoveredItem(null);
        }
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 w-full 2xl:min-w-[880px] xl:min-w-[780px] min-w-[680px]">
            {
                Object.keys(subMenu.content).map((category) => (
                    <div key={category} className="col-span-1 space-y-3">
                        <h3 className="2xl:text-lg text-base font-normal text-[#667F93]">{category}</h3>

                        <div className="space-y-3">
                            {
                                subMenu.content[category].items.map((item: any) => (
                                    <motion.div key={`submenu-${item.id}`} whileTap={"press"} variants={variantButtonPressZoom} transition={{ duration: 0.2, ease: "easeOut" }}>
                                        <Link
                                            href={item.link}
                                            className="flex items-center 2xl:gap-3 gap-2.5 hover:bg-[#E8FBF5]/80 p-2 rounded-3xl relative custom-transition"
                                            onMouseEnter={() => handleMouseEnter(item.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {/* Icon */}
                                            <div className="2xl:size-12 size-11 flex items-center justify-center">
                                                <div className={`${item.typeIcon === "default" ? "2xl:size-8 size-7" : "size-full"}`}>
                                                    {
                                                        typeof item.icon === "string" ? (
                                                            <Image
                                                                src={item.icon}
                                                                alt="icon"
                                                                width={200}
                                                                height={200}
                                                                className='size-full object-contain'
                                                            />
                                                        ) :
                                                            (
                                                                <React.Fragment>
                                                                    {item.icon}
                                                                </React.Fragment>
                                                            )
                                                    }
                                                </div>
                                            </div>

                                            {/* Nội dung */}
                                            <div className="2xl:space-y-2 space-y-1.5 pr-8">
                                                <h4 className="2xl:text-lg text-base text-[#33404A] font-bold">{item.name}</h4>
                                                <p className="text-sm text-[#667F93] font-normal text-wrap">{item.description}</p>
                                            </div>

                                            {/* Mũi tên hiển thị khi hover */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{
                                                    opacity: hoveredItem === item.id ? 1 : 0,
                                                    x: hoveredItem === item.id ? 0 : -10,
                                                }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute right-3"
                                            >
                                                <CaretRightIcon className="2xl:size-6 size-5" color="#33404A" />
                                            </motion.div>
                                        </Link>
                                    </motion.div>

                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
});

export default SubmenuTooltip;
