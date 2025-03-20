import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';

const reactions = [
    {
        id: "useful",
        label: "Hữu ích",
        icon: "/icons/svg/reaction/thumbs-up.webp",
    },
    {
        id: "love",
        label: "Yêu thích",
        icon: "/icons/svg/reaction/green-heart.webp",
    },
    {
        id: "funny",
        label: "Thú vị",
        icon: "/icons/svg/reaction/star-struck.webp",
    },
    {
        id: "surprised",
        label: "Bất ngờ",
        icon: "/icons/svg/reaction/hushed-face.webp",
    },
    {
        id: "boring",
        label: "Nhàm chán",
        icon: "/icons/svg/reaction/yawning-face.webp",
    },
    {
        id: "angry",
        label: "Tức giận",
        icon: "/icons/svg/reaction/pouting-face.webp",
    }
];

// Tạo variants để kiểm soát animation theo trạng thái hover
const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const iconVariants = {
    rest: { rotate: 0 },
    hover: {
        rotate: [0, -10, 10, -10, 10, 0], // Lắc qua lại
        transition: { duration: 0.6, repeat: Infinity }
    }
};
export default function ReactionBox() {
    const { isVisibleMobile } = useResizeStore()
    const [selected, setSelected] = useState<string | null>(null);
    const [counts, setCounts] = useState<{ [key: string]: number }>({ useful: 1, love: 2, funny: 0, surprised: 1, boring: 0, angry: 0 });

    const handleReaction = (id: string) => {
        if (selected === id) {
            return; // Nếu đã chọn reaction này rồi thì không tăng số lượng nữa
        }

        setSelected(id);
        setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    return (
        <div
            className="py-6 flex flex-col items-center justify-center 3xl:gap-8 gap-6 bg-white md:rounded-3xl md:shadow-lg w-full"
            style={{
                boxShadow: isVisibleMobile ? "" : "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
            }}
        >
            <div className="flex flex-col items-center justify-center 2xl:gap-2 gap-1">
                <h3 className="text-center text-button text-[#33404A] font-extrabold">
                    Bạn thấy bài viết như thế nào?
                </h3>
                <p className="text-center 3xl:text-base text-sm ">
                    {Object.values(counts).reduce((a, b) => a + b, 0)} phản hồi
                </p>
            </div>

            <div className="flex flex-row items-center justify-center 3xl:gap-6 md:gap-3 gap-1">
                {
                    reactions.map((reaction) => (
                        <motion.button
                            key={reaction.id}
                            onClick={() => handleReaction(reaction.id)}
                            className={`${selected === reaction.id ? "border-[#10805B]" : "border-transparent hover:border-[#10805B]"} border flex flex-col items-center justify-center 2xl:min-w-[110px] xl:min-w-[100px] gap-2 w-full md:px-4 px-2 py-0.5 rounded-[4px] custom-transition`}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={buttonVariants}
                        >
                            <motion.div
                                className="xxl:size-12 md:size-10 size-8"
                                // whileHover="hover"
                                variants={iconVariants} // Nhận animation từ `whileHover` của cha
                            >
                                <Image
                                    width={200}
                                    height={200}
                                    alt="icon"
                                    src={reaction.icon}
                                    className="size-full object-contain"
                                />
                            </motion.div>
                            <div className='flex flex-col gap-0.5'>
                                <span className={`${selected === reaction.id ? "text-[#10805B]" : "text-[#33404A]"} text-default font-bold`}>
                                    {counts[reaction.id]}
                                </span>
                                <span className={`${selected === reaction.id ? "text-[#10805B]" : "text-[#33404A]"} text-sm font-medium md:text-nowrap`}>
                                    {reaction.label}
                                </span>
                            </div>
                        </motion.button>
                    ))
                }
            </div>
        </div >
    );
}
