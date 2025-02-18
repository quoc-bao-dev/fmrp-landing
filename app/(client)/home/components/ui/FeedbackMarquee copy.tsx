import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { FeedbackItem } from '../sections/CustomerProjectsSection';

import { motion } from 'framer-motion'

type FeedbackMarqueeProps = {
    feedbacks: FeedbackItem[];
};

const FeedbackMarquee: React.FC<FeedbackMarqueeProps> = ({ feedbacks }) => {
    // Lấy 4 mục đầu cho dòng thứ nhất và 3 mục tiếp theo cho dòng thứ hai
    const firstRowItems = feedbacks.slice(0, 4);
    const secondRowItems = feedbacks.slice(4, 7);

    return (
        <div className="overflow-hidden h-[400px] flex items-center gap-2"> {/* Tạo khoảng cách giữa hai dòng */}
            {/* Dòng thứ nhất với 4 mục */}
            <motion.div
                className=" top-full flex flex-col space-y-4"
                animate={{ y: ['-100%', '0%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {firstRowItems.map((feedback, index) => (
                    <div key={index} className="md:w-[380px] w-[320px] mx-auto flex flex-col bg-white p-4 shadow-lg rounded-lg">
                        <div className="flex items-center space-x-4">
                            <Image src={feedback.image} alt={feedback.name} width={50} height={50} className="rounded-full" />
                            <div>
                                <p className="font-bold text-gray-800">{feedback.name}</p>
                                <p className="text-gray-500 text-sm">{feedback.position}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">"{feedback.message}"</p>
                    </div>
                ))}
            </motion.div>
            <motion.div
                className=" top-full flex flex-col space-y-4"
                animate={{ y: ['100%', '-100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {secondRowItems.map((feedback, index) => (
                    <div key={index} className="md:w-[380px] w-[320px] mx-auto flex flex-col bg-white p-4 shadow-lg rounded-lg">
                        <div className="flex items-center space-x-4">
                            <Image src={feedback.image} alt={feedback.name} width={50} height={50} className="rounded-full" />
                            <div>
                                <p className="font-bold text-gray-800">{feedback.name}</p>
                                <p className="text-gray-500 text-sm">{feedback.position}</p>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">"{feedback.message}"</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default FeedbackMarquee;
