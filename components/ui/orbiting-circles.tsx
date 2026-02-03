import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  /** Nếu true, không ép kích thước item; size do từng child tự quyết định (w/h). */
  autoSize?: boolean
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  autoSize = false,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                top: "50%",
                left: "50%",
                // Dùng biến có đơn vị để tránh `calc()` với phép nhân (*),
                // vốn không tương thích tốt trên một số browser (đặc biệt Safari).
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
                "--angle-negative": `${-angle}deg`,
                ...(autoSize ? {} : { "--icon-size": `${iconSize}px` }),
                animation: "orbit var(--duration) linear infinite",
                animationDirection: reverse ? "reverse" : "normal",
              } as React.CSSProperties
            }
            className={cn(
              cn(
                "absolute flex transform-gpu items-center justify-center rounded-full",
                autoSize ? "" : "size-[var(--icon-size)]"
              ),
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
