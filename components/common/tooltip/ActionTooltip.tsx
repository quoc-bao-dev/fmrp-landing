'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react";

interface ActionTooltipProps {
    label: React.ReactNode;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left"
    align?: "start" | "center" | "end"
    classNameContent?: string;
    classNameArrow?: string
    onArrow?: boolean;
    sideOffset?: number
    styleContent?: any
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align,
    classNameContent,
    onArrow = true,
    sideOffset = 10,
    classNameArrow,
    styleContent = {}
}: ActionTooltipProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const StyledArrow = TooltipPrimitive.Arrow

    // Variants animation cho Tooltip
    const variants = {
        hidden: {
            opacity: 0,
            scale: 0.95,
            y: 5, // Dịch xuống nhẹ trước khi hiện
            transition: { duration: 0.2, ease: "easeInOut" }
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -5, // Nhẹ nhàng dịch lên khi ẩn đi
            filter: "blur(2px)", // Hiệu ứng mờ dần
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };


    return (
        <TooltipPrimitive.TooltipProvider>
            <TooltipPrimitive.Tooltip open={open} onOpenChange={setOpen} delayDuration={50} >
                <TooltipPrimitive.TooltipTrigger asChild>
                    {children}
                </TooltipPrimitive.TooltipTrigger>

                {/* Bọc trong AnimatePresence để quản lý exit animation */}
                <AnimatePresence>
                    {
                        open && (
                            <TooltipPrimitive.TooltipContent
                                side={side}
                                align={align}
                                sideOffset={sideOffset}
                                arrowPadding={10}
                                asChild
                                forceMount // ⚡ Giữ Tooltip trong DOM để chạy exit animation
                            >
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit" // Đúng với variants
                                    variants={variants}
                                    className={`${classNameContent} w-fit shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade`}
                                    style={{
                                        ...styleContent
                                    }}
                                >
                                    <span>
                                        {label}
                                    </span>
                                    {
                                        onArrow &&
                                        <TooltipPrimitive.TooltipArrow
                                            width={14}
                                            height={10}
                                            className={`${classNameArrow}`}
                                        />
                                    }
                                </motion.div>
                            </TooltipPrimitive.TooltipContent>
                        )
                    }
                </AnimatePresence>
            </TooltipPrimitive.Tooltip>
        </TooltipPrimitive.TooltipProvider>
    )
}