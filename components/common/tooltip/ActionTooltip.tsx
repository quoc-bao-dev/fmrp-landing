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
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align,
    classNameContent,
    onArrow = true,
    sideOffset = 10,
    classNameArrow
}: ActionTooltipProps) => {
    const StyledArrow = TooltipPrimitive.Arrow
    return (
        <TooltipProvider >
            <Tooltip delayDuration={50} >
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    className={`${classNameContent} w-fit`}
                    arrowPadding={10}
                >
                    <span>
                        {label}
                    </span>
                    {
                        onArrow &&
                        <TooltipPrimitive.Arrow
                            width={14}
                            height={10}
                            className={`${classNameArrow} custom-transition`}
                        />
                    }
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}