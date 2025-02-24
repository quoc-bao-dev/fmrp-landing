import React from "react";
import { motion } from "framer-motion";

interface AnimatedCircleProps {
    active: boolean;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ active }) => {
    return (
        <div className="relative flex items-center justify-center">
            {active && (
                <>
                    {/* Hiệu ứng lan tỏa chính (mượt hơn, từ nhỏ -> lớn -> nhỏ lại) */}
                    <motion.div
                        className="absolute size-4 rounded-full bg-green-200 z-[1]"
                        initial={{ scale: 0.8 }}
                        animate={{
                            scale: [1, 3, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Hiệu ứng lan tỏa lớn hơn khi đạt cực đại */}
                    <motion.div
                        className="absolute size-9 rounded-full bg-green-100 z-0"
                        initial={{ scale: 1.2 }}
                        animate={{
                            scale: [1.2, 2, 1.2],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </>
            )}

            {/* Vòng tròn chính */}
            <div
                className="relative size-4 shrink-0 rounded-full flex items-center justify-center font-bold z-10"
                style={{
                    background: active
                        ? "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)"
                        : "#809FB8",
                }}
            />
        </div>
    );
};

export default AnimatedCircle;
