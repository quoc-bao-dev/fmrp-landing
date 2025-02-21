import { motion, useAnimation, useMotionValue } from "framer-motion";
import { memo, useRef, useEffect, useState } from "react";
import AvatarCustom from "../avatar/AvatarCustom";
import { FeedbackItem } from "@/app/(client)/home/components/sections/CustomerFeedbackSection";

type MarqueeColumnProps = {
    feedbacks: FeedbackItem[];
    direction: "up" | "down";
};

const MarqueeColumn = memo(({ feedbacks, direction }: MarqueeColumnProps) => {
    const controls = useAnimation();
    const y = useMotionValue(0); // Theo dõi vị trí hiện tại của y
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(0);
    const speed = 10; // Thời gian của một vòng lặp animation

    useEffect(() => {
        if (containerRef.current) {
            setContainerHeight(containerRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (containerHeight === 0) return;

        // Xác định vị trí bắt đầu và kết thúc theo hướng đi
        const start = direction === "down" ? 0 : -0.5 * containerHeight;
        const end = direction === "down" ? -0.5 * containerHeight : 0;

        controls.start({
            y: [start, end],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
            },
        });
    }, [controls, direction]);

    const handleMouseEnter = () => {
        controls.stop(); // Dừng animation tại vị trí hiện tại
    };

    const handleMouseLeave = () => {
        const currentY = y.get(); // Lấy vị trí hiện tại của y
        const targetY = direction === "down" ? -0.5 * containerHeight : 0;

        // Tính toán khoảng cách còn lại
        const totalDistance = Math.abs(targetY - (direction === "down" ? 0 : -0.5 * containerHeight));
        const remainingDistance = Math.abs(targetY - currentY);
        const remainingTime = (remainingDistance / totalDistance) * speed;

        // Tiếp tục animation từ vị trí hiện tại
        controls.start({
            y: [currentY, targetY],
            transition: {
                duration: remainingTime,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-1/2 h-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="absolute flex flex-col gap-6"
                style={{ y, willChange: "transform", position: "absolute", top: 0 }}
                animate={controls}
            >
                {[...feedbacks, ...feedbacks].map((feedback, index) => (
                    <div
                        key={`${direction}-${index}`}
                        className="flex flex-col gap-2 justify-between h-full w-full p-6 rounded-3xl border border-[#09090B1A]"
                        style={{
                            background: "linear-gradient(180deg, rgba(9, 9, 11, 0.04) 0%, rgba(9, 9, 11, 0.02) 100%)",
                        }}
                    >
                        <div className="flex items-center space-x-4">
                            <AvatarCustom classNameContainer="size-12" avatar={feedback?.image} />
                            <div>
                                <p className="text-sm-default font-bold text-gray-800">{feedback.name}</p>
                                <p className="3xl:text-base text-sm text-[#667F93]">{feedback.position}</p>
                            </div>
                        </div>
                        <p className="text-sm-default text-[#667F93]">{feedback.message}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
});

export default MarqueeColumn;
