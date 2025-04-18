import CheckIconLinear from "@/components/icons/fmrp/CheckIconLinear";
import FireIcon from "@/components/icons/fmrp/FireIcon";
import LockIcon from "@/components/icons/fmrp/LockIcon";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FormatNumberToCommanDecimal } from "@/utils/format/FormatNumber";
import Image from "next/image";

import { motion } from 'framer-motion'
import { playwrite_is_sans } from "@/utils/fonts/fontUtils";


const PlanPackageCard = ({ className, title, price, popular, brand, description, type, features, buttonText, variant, expirationDate }: any) => (
    <Card
        className={`${cn(`w-full max-w-full rounded-2xl relative border-none hover:!drop-shadow-lg custom-transition`, className)}`}
        // className={`${cn(`w-full 3xl:max-w-xl max-w-lg rounded-2xl relative border-none hover:!drop-shadow-lg custom-transition`, className)}`}
        // className={`${cn(`w-full max-w-lg rounded-2xl ${popular ? "border-gradient-professional-price-list" : "border-gradient-freemium-price-list"}`, className)}`}
        style={{
            boxShadow: "0px 4px 6px -2px #1212170D, 0px 10px 15px -3px #12121714",
            background: popular ? "linear-gradient(180deg, rgba(3, 117, 243, 0.25) -0.03%, rgba(3, 117, 243, 0) 21.87%), linear-gradient(0deg, #FFFFFF, #FFFFFF)" : "#FFFFFF"
        }}
    >
        <div className={`${popular ? "border-gradient-professional-price-list" : "border-gradient-freemium-price-list"} h-2 rounded-2xl border-3 absolute top-0 left-0 w-[98%] mx-auto`} />

        <CardContent className="px-4 pb-4 pt-2 flex flex-col gap-4">
            <div className='space-y-2'>
                <div className="flex items-center gap-3">
                    <h2 className="text-title font-bold text-[#33404A]">
                        {title}
                    </h2>
                    {
                        popular &&
                        <span className="flex items-center gap-1 text-sxs-default text-[#64511E] bg-[#FACA4A] font-semibold rounded-full pl-1 pr-2.5 py-1">
                            <FireIcon className='size-3.5' /> Phổ biến
                        </span>
                    }
                </div>

                <div className="space-x-2 relative w-full">
                    <span className='text-title-section-small text-[#003DA0] font-bold'>
                        {FormatNumberToCommanDecimal(price, 3)}
                    </span>

                    <span className='text-title-section-small text-[#003DA0] font-bold underline decoration-2 underline-offset-4'>
                        đ
                    </span>

                    <span className='relative'>
                        <span className="text-xs-default font-bold text-[#667F93] -translate-y-2">
                            {expirationDate}
                        </span>
                        {
                            popular &&
                            <span className='flex items-center absolute bottom-0 right-0 w-full'>
                                {/* Mũi tên và chữ đều có chung hiệu ứng lắc nhẹ theo hướng */}
                                <motion.span
                                    className='relative xl:w-[60px] w-11 h-auto aspect-1/2 -rotate-4 pointer-events-none flex-shrink-0'
                                    animate={{
                                        y: [0, -3, 0], // Nhảy lên xuống nhẹ
                                        rotate: [-8, 0, -8], // Lắc nhẹ để nhấn mạnh hướng
                                    }}
                                    transition={{
                                        duration: 1, // Đồng bộ với chữ
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/background/ui/fmrp/arrow-thin.svg"
                                        alt="Mission Icon"
                                        width={200}
                                        height={200}
                                        className='size-full object-contain'
                                        loading="lazy"
                                    />
                                </motion.span>

                                {/* Chữ "sứ mệnh" lắc nhẹ đồng bộ với mũi tên */}
                                <motion.span
                                    className={`${playwrite_is_sans.className} relative 3xl:!text-sm xl:!text-sm lg:!text-sm md:!text-sm !text-sm text-nowrap font-normal text-[#4D5F6E] -bottom-1 right-2 -rotate-6 pointer-events-none`}
                                // animate={{
                                //     rotate: [-8, 0, -8], // Lắc cùng hướng với mũi tên
                                //     x: [-2, 0, -2], // Nhẹ nhàng đẩy qua lại
                                // }}
                                // transition={{
                                //     duration: 1, // Đồng bộ với mũi tên
                                //     repeat: Infinity,
                                //     ease: "easeInOut"
                                // }}
                                >
                                    chỉ từ
                                </motion.span>
                            </span>
                        }
                    </span>

                </div>
            </div>

            <p className='text-default text-[#33404A] font-medium align-middle'>
                {description}
            </p>
        </CardContent>
    </Card>
);

export default PlanPackageCard