import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
type AnimatedArrowsProps = {
    onClick: () => void;
    iconArrow: { id: string; icon: string }[]; // Mảng icon truyền từ parent
};

const AnimatedArrows: React.FC<AnimatedArrowsProps> = ({ onClick, iconArrow }) => {
    return (
        <div
            className="flex flex-col items-center justify-center gap-2 lg:absolute lg:bottom-4 lg:left-0 z-[999] cursor-pointer group"
            onClick={onClick}
        >
            {/* Icon động */}
            <div className="flex flex-col items-center space-y-1 h-[50px]">
                {iconArrow.map((icon, index) => (
                    <motion.div
                        key={`ic-${icon.id}`}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5, // Hiển thị từng mũi tên theo thứ tự
                        }}
                        className='3xl:w-7 w-6 aspect-2/1'
                    >
                        <Image
                            alt="arrow"
                            width={80}
                            height={80}
                            src={icon.icon}
                            className="size-full object-contain aspect-2/1"
                            priority
                        />
                    </motion.div>
                ))}
            </div>

            {/* Văn bản */}
            <div className="text-default font-medium text-[#17181A] group-hover:text-[#17181A]/80 custom-transition">
                Khám phá
            </div>
        </div>
    );
};

export default AnimatedArrows;
