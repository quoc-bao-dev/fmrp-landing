import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CaretRightIcon from "@/components/icons/common/CaretRightIcon";

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
        <div className="grid grid-cols-2 gap-4 w-full xl:min-w-[800px] min-w-[680px]">
            {/* Hiển thị tất cả nội dung */}
            {Object.keys(subMenu.content).map((category) => (
                <div key={category} className="col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">{category}</h3>

                    <div className="space-y-3">
                        {subMenu.content[category].items.map((item: any) => (
                            <Link
                                key={item.id}
                                href={item.link}
                                className="flex items-center gap-3 hover:bg-[#E8FBF5]/50 p-2 rounded-3xl relative custom-transition"
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Icon */}
                                <div className="size-12 flex items-center justify-center">
                                    <div className="size-8">{item.icon}</div>
                                </div>

                                {/* Nội dung */}
                                <div className="space-y-2">
                                    <h4 className="xl:text-lg text-base text-[#33404A] font-bold">{item.name}</h4>
                                    <p className="xl:text-sm text-xs text-[#667F93] font-normal">{item.description}</p>
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
                                    <CaretRightIcon className="size-6" color="#33404A" />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
});

export default SubmenuTooltip;
