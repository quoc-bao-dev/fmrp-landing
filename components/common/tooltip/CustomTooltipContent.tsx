import LaptopIconLinear from "@/components/icons/linear/LaptopIconLinear";
import Image from "next/image";
import { memo, useCallback, useMemo, useState } from "react";
import BlurImage from "../blur/BlurImage";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CustomTooltipContentProps {
    subMenu: any;
}

const CustomTooltipContent = memo(({ subMenu }: CustomTooltipContentProps) => {
    const [activeTab, setActiveTab] = useState(subMenu.activeTab);

    // Memoized function để tránh re-render không cần thiết
    const handleTabClick = useCallback((tab: string) => {
        setActiveTab(tab);
    }, []);

    // Memoized content để tránh tính toán lại khi activeTab không thay đổi
    const activeContent = useMemo(() => subMenu.content[activeTab], [subMenu.content, activeTab]);

    return (
        <div className="flex gap-4 w-full xl:min-w-[800px] min-w-[680px]">
            {/* Sidebar Tabs */}
            <div className="xl:w-[180px] w-[160px] max-w-[20%] flex flex-col items-start">
                {
                    subMenu.tabs.map((tab: string) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`py-2 text-left text-default ${activeTab === tab ? "text-[#33404A] font-bold" : "text-[#667F93] hover:text-[#33404A] font-normal w-fit"} custom-transition`}
                        >
                            {tab}
                        </button>
                    ))
                }
            </div>

            {/* Main Content */}
            <div className="w-[80%] max-w-[80%] xl:min-w-[640px] min-w-[520px] flex flex-col gap-4">
                {/* Image Preview */}
                {/* <BlurImage
                    alt="image"
                    src={activeContent.image}
                    width={800}
                    height={300}
                    className='size-full object-cover aspect-2.57/1 rounded-3xl'
                    classNameContainer="h-[320px] w-full aspect-2.57/1 rounded-3xl"
                />

                <div className="grid grid-cols-2 gap-4">
                    {
                        activeContent?.items.map((item: any) => (
                            <div key={item.id} className="flex items-center gap-2">
                                <div className='flex items-center justify-center border border-[#99B2C6] rounded-xl size-12 p-0.5'>
                                    <div className='size-8'>
                                        {item.icon}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-default text-[#33404A] font-bold">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm-default text-[#667F93] font-normal">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div> */}

                {/* Image Preview */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="3xl:h-[320px] xl:h-[280px] h-[260px] w-full rounded-3xl aspect-2.57/1 overflow-hidden"
                    >
                        <BlurImage
                            alt="image"
                            src={activeContent.image}
                            width={1024}
                            height={800}
                            className="size-full object-cover aspect-2.57/1 object-top rounded-3xl"
                            classNameContainer="h-[320px] w-full aspect-2.57/1 rounded-3xl"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Content List */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab + "-items"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {activeContent?.items.map((item: any) => (
                            <Link key={item.id} href={item.link ?? "#"} className='grid-cols-1 w-fit'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="flex items-center gap-2 w-fit"
                                >
                                    <div className="flex items-center justify-center border border-[#99B2C6] rounded-xl xl:size-12 size-10 p-0.5">
                                        <div className="xl:size-8 size-6">{item.icon}</div>
                                    </div>

                                    <div>
                                        <h4 className="text-default text-[#33404A] font-bold">{item.name}</h4>
                                        <p className="text-sm-default text-[#667F93] font-normal">{item.description}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
});

export default CustomTooltipContent