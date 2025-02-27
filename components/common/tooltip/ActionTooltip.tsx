'use client'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip";

import * as TooltipPrimitive from "@radix-ui/react-tooltip"

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
    styleContent
}: ActionTooltipProps) => {
    const StyledArrow = TooltipPrimitive.Arrow
    return (
        <TooltipPrimitive.TooltipProvider>
            <TooltipPrimitive.Tooltip delayDuration={50} >
                <TooltipPrimitive.TooltipTrigger asChild>
                    {children}
                </TooltipPrimitive.TooltipTrigger>
                <TooltipPrimitive.TooltipContent
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    className={`${classNameContent} w-fit shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade`}
                    arrowPadding={10}
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
                </TooltipPrimitive.TooltipContent>
            </TooltipPrimitive.Tooltip>
        </TooltipPrimitive.TooltipProvider>
    )
}