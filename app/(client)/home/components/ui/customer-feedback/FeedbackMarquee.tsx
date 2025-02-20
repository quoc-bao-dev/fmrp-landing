import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { FeedbackItem } from '../sections/CustomerFeedbackSection';

type FeedbackMarqueeProps = {
    feedbacks: FeedbackItem[];
};

const FeedbackMarquee: React.FC<FeedbackMarqueeProps> = ({ feedbacks }) => {
    const [marqueeSpeed, setMarqueeSpeed] = useState<number>(50);
    // Lấy 4 mục đầu cho dòng thứ nhất và 3 mục tiếp theo cho dòng thứ hai
    const firstColumn = feedbacks.slice(0, Math.ceil(feedbacks.length / 2));
    const secondColumn = feedbacks.slice(Math.ceil(feedbacks.length / 2));

    console.log('firstColumn', firstColumn);

    useEffect(() => {
        // Chỉ chạy mã này sau khi client đã render
        setMarqueeSpeed(50);
    }, []);

    return (
        <div className="flex h-[400px]">
            <Marquee
                direction="down"
                speed={marqueeSpeed}
                pauseOnHover
                gradient={true}
                gradientWidth={50}
                // className="w-full h-full leading-none" // Đảm bảo các phần tử dính sát nhau
                className="w-full h-full flex flex-col space-y-4" // ✅ Thêm flex
                autoFill
            >
                {
                    firstColumn.map((feedback, index) => {
                        console.log('feedback', feedback);

                        return (
                            <div
                                key={`feedback-${feedback.id}`}
                                className="w-full bg-white p-4 shadow-lg rounded-lg overflow-hidden inline-block align-top my-0"
                            >
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={feedback.image}
                                        alt={feedback.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800">{feedback.name}</p>
                                        <p className="text-gray-500 text-sm ">{feedback.position}</p>
                                    </div>
                                </div>
                                <p className=" text-gray-600 truncate whitespace-nowrap w-full">"{feedback.message}"</p>
                                {/* sdsa */}
                            </div>
                        )
                    })
                }
            </Marquee>

            <Marquee
                direction="up"
                speed={marqueeSpeed}
                pauseOnHover
                gradient={true}
                gradientWidth={50}
                className="w-full h-full" // Đảm bảo các phần tử dính sát nhau
                autoFill
            >
                {
                    secondColumn.map((feedback, index) => {
                        console.log('feedback', feedback);

                        return (
                            <div
                                key={`feedback-${feedback.id}`}
                                className="w-full bg-white p-4 shadow-lg rounded-lg overflow-hidden inline-block align-top"
                            >
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={feedback.image}
                                        alt={feedback.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800">{feedback.name}</p>
                                        <p className="text-gray-500 text-sm ">{feedback.position}</p>
                                    </div>
                                </div>
                                <p className=" text-gray-600 truncate whitespace-nowrap w-full">"{feedback.message}"</p>
                                {/* sdsa */}
                            </div>
                        )
                    })
                }
            </Marquee>
        </div>
    );
};

export default FeedbackMarquee;
