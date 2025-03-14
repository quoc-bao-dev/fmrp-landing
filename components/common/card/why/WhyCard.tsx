import { memo } from "react";

import { motion } from 'framer-motion'

type WhyCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const WhyCard = memo(({ icon, title, description }: WhyCardProps) => (
    <motion.div
        initial={{ scale: 1 }}
        className="bg-white rounded-3xl shadow-sm p-6 hover:shadow-md h-full transition-all duration-200 border border-gray-100"
        whileHover={{
            scale: 1.02,
            // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.02)", // Shadow mạnh hơn khi hover
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
        <div className="flex flex-col items-start 3xl:gap-6 gap-4">
            <div className="3xl:size-16 xl:size-14 size-12 flex items-center justify-center bg-inherit">
                {icon}
            </div>
            <div className='space-y-2'>
                <h3 className="text-title text-[#33404A] font-extrabold">{title}</h3>
                <p className="text-default text-[#33404A] font-medium">{description}</p>
            </div>
        </div>
    </motion.div>
));

export default WhyCard