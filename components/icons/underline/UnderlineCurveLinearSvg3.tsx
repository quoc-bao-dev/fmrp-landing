import { motion } from "framer-motion";
import React from "react";

interface UnderlineCurveLinearSvgProps {
    className?: string;
    inView: boolean;
    delay?: number
}

const UnderlineCurveLinearSvg3: React.FC<UnderlineCurveLinearSvgProps> = ({ className = "", inView, delay = 0.4 }) => {
    return (
        <motion.svg
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[211px] h-[19px] pointer-events-none ${className}`}
            viewBox="0 0 241 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{
                duration: 4,
                delay: delay,
                ease: [0.25, 1, 0.5, 1],
            }}
        >
            {/* <svg width="241" height="19" viewBox="0 0 241 19" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
                <path d="M239 9.35152C201.57 2.99269 101 -7.6487 1.5 16.8511" stroke="url(#paint0_linear_7506_5148)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                    <linearGradient id="paint0_linear_7506_5148" x1="120.25" y1="1.5" x2="120.25" y2="16.8512" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9DFFB3" />
                        <stop offset="1" stopColor="#1AA37A" />
                    </linearGradient>
                </defs>
            {/* </svg> */}

        </motion.svg>
    );
};

export default UnderlineCurveLinearSvg3;
