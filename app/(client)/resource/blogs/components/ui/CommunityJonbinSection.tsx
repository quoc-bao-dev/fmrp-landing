"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { useResizeStore } from "@/stores/useResizeStore";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";

const CommunityJoinSection = () => {
    const { isVisibleTablet } = useResizeStore();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative rounded-[40px] 3xl:p-16 xl:p-12 lg:p-8 py-8 w-full overflow-hidden"
            style={{
                background:
                    "linear-gradient(77.74deg, #013DA0 11.85%, #0142A9 20.65%, #0148B3 29.45%, #024EBC 38.25%, #0254C5 47.05%, #025ACE 55.84%, #0261D7 64.64%, #0267E1 73.44%, #036EEA 82.24%, #0375F3 91.04%)",
            }}
        >
            {/* Ảnh hiển thị trên Tablet */}
            {
                isVisibleTablet && (
                    <div className="flex items-center justify-center">
                        <div className="md:w-[460px] w-[520px] h-auto aspect-1.92/1">
                            <Image
                                alt="community"
                                src="/background/ui/fmrp/bg-community.webp"
                                width={500}
                                height={450}
                                className="size-full object-contain"
                            />
                        </div>
                    </div>
                )
            }

            {/* Nội dung */}
            <div className="flex flex-col 3xl:gap-8 gap-6 lg:mt-0 mt-6 md:px-0 px-6">
                {/* Hiệu ứng chuyển động chữ */}
                <motion.div
                    className="3xl:max-w-[40%] 2xl:max-w-[48%] xl:max-w-[52%] lg:max-w-[55%] max-w-full text-white font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%]"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        Gia nhập cộng đồng{" "}
                    </motion.span>
                    <motion.span
                        className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%]"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                    >
                        FMRP
                    </motion.span>
                    <motion.span
                        className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[32px] xl:text-[28px] md:text-[28px] text-[20px] leading-tight tracking-[-2%]"
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.4,
                        }}
                    >
                        {" "}
                        – Kết nối, chia sẻ, cùng phát triển!
                    </motion.span>
                </motion.div>

                {/* Button */}
                <ButtonAnimationNew
                    title="Tham Gia Ngay"
                    icon={
                        <div className="2xl:size-10 md:size-9 size-8 rounded-full capitalize flex items-center justify-center group-hover:bg-white group-hover:text-gray-400 duration-500 transition-colors">
                            <motion.div
                                initial={{ x: 0, y: 0 }}
                                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                {/* <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4 text-white" /> */}
                                {isHovered ? <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" /> : <ArrowUpRightIcon className="md:size-5 size-4" />}
                            </motion.div>
                        </div>
                    }
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => {
                        window.open("https://www.facebook.com/groups/mrpvn");
                    }}
                    reverse={true}
                    className="border border-white flex items-center 3xl:gap-8 gap-6 3xl:!text-base lg:!text-sm md:!text-base text-sm tracking-[1%] group text-white hover:!bg-[#FFFFFF]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
                    style={{
                        WebkitBackdropFilter: "blur(15px)",
                        boxShadow:
                            "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
                    }}
                />
            </div>

            {/* Ảnh hiển thị trên Desktop */}
            {
                !isVisibleTablet && (
                    <div className='absolute -z-0 xxl:right-8 right-4 xxl:-bottom-20 xl:-bottom-14 -bottom-10'>
                        <motion.div
                            className="3xl:w-[440px] 2xl:w-[420px] xxl:w-[380px] xl:w-[340px] w-[300px] h-auto aspect-1.92/1 relative"
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image
                                alt="community"
                                src="/animation/contact/main-blog.png"
                                width={500}
                                height={450}
                                className="size-full object-contain relative z-[3]"
                            />

                            {/* animation mây */}
                            <motion.div
                                className="absolute  top-0 right-0 xxl:w-[260px] xl:w-[220px] w-[200px] h-auto aspect-1.92/1 z-[2]"
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: ["0%", "-10%", "10%", "0%"], // Di chuyển qua lại
                                }}
                                transition={{
                                    duration: 6, // Tổng thời gian cho một chu kỳ
                                    ease: "linear",
                                    repeat: Infinity, // Lặp vô hạn
                                    repeatType: "mirror", // Đảo chiều để không bị reset animation
                                }}
                            >
                                <Image
                                    alt="community"
                                    src="/animation/contact/deco-cloud.png"
                                    width={500}
                                    height={450}
                                    className="size-full object-contain"
                                />
                            </motion.div>

                            {/* animation contact */}
                            <motion.div
                                className="absolute xxl:top-20 top-16 xxl:right-8 right-6 3xl:w-[300px] xxl:w-[280px] xl:w-[240px] w-[220px] h-auto aspect-1.92/1 z-[3]"
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: ["0%", "-10%", "10%", "0%"], // Di chuyển qua lại
                                }}
                                transition={{
                                    duration: 6, // Tổng thời gian cho một chu kỳ
                                    ease: "linear",
                                    repeat: Infinity, // Lặp vô hạn
                                    repeatType: "mirror", // Đảo chiều để không bị reset animation
                                }}
                            >
                                <Image
                                    alt="community"
                                    src="/animation/contact/deco-blog-2.png"
                                    width={500}
                                    height={450}
                                    className="size-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                )
            }
        </div>
    );
};

export default CommunityJoinSection;
