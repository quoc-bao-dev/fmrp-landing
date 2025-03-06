'use client';

import { motion } from 'framer-motion';

interface HoverEffectProps {
    title?: string;
    hoverTitle?: string;
    icon?: React.ReactNode;
    colorHover?: string;
    reverse?: boolean;
    className?: string;
}

const staggeredVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -50, opacity: 0 },
};

const staggeredVariantsHover = {
    initial: { y: 50, opacity: 0 },
    hover: { y: 0, opacity: 1 },
};

export default function HoverEffect({
    title = "Book Cat 1",
    icon,
    hoverTitle = "Book Cat 2",
    colorHover = "",
    reverse = false,
    className = "",
}: HoverEffectProps) {
    return (
        <motion.div
            className={`${className}`}
            whileHover="hover"
            initial="initial"
            animate="initial"
            variants={{ hover: { backgroundColor: colorHover } }}
        >
            {/* Nội dung ban đầu */}
            <motion.span
                className="absolute flex items-center gap-2"
                variants={staggeredVariants}
                transition={{ duration: 0.4 }}
            >
                {icon && reverse ? icon : null}
                {title}
                {icon && !reverse ? icon : null}
            </motion.span>

            {/* Nội dung khi hover */}
            <motion.span
                className="absolute flex items-center gap-2"
                variants={staggeredVariantsHover}
                transition={{ duration: 0.4 }}
            >
                {icon && reverse ? icon : null}
                {hoverTitle}
                {icon && !reverse ? icon : null}
            </motion.span>
        </motion.div>
    );
}
