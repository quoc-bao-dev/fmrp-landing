import ArchiveBoxIcon from '@/components/icons/fmrp/ArchiveBoxIcon';
import Image from 'next/image';
import { uuidv4 } from '@/lib/uuid';
import FactoryIcon from '@/components/icons/fmrp/FactoryIcon';
import WarehouseIcon from '@/components/icons/fmrp/WarehouseIcon';
import PackageIcon from '@/components/icons/fmrp/PackageIcon';
import NotepadIcon from '@/components/icons/fmrp/NotepadIcon';
import StorefrontIcon from '@/components/icons/fmrp/StorefrontIcon';
import { useStatePageFmrp } from '../../_state/useStatePageFmrp';
import React, { useEffect, useRef } from 'react';
import CaretDoubleRightIcon from '@/components/icons/fmrp/CaretDoubleRightIcon';
import { useResizeStore } from '@/stores/useResizeStore';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion'

type Props = {}

const dataTab = [
    {
        id: "32323",
        icon: FactoryIcon,
        name: "Sản Xuất",
        image: "/background/ui/fmrp/sx.png"
    },
    {
        id: "323232",
        icon: StorefrontIcon,
        name: "Bán Hàng",
        image: "/background/ui/fmrp/bh.svg"
    },
    {
        id: "4242424",
        icon: WarehouseIcon,
        name: "Kho Hàng",
        image: "/background/ui/fmrp/kh1.svg"
    },
    {
        id: "42141241",
        icon: PackageIcon,
        name: "Mua Hàng",
        image: "/background/ui/fmrp/mh1.png"
    },
    {
        id: "4214",
        icon: NotepadIcon,
        name: "Kế Hoạch",
        image: "/background/ui/fmrp/khsv.svg"
    },
    {
        id: "424243",
        icon: ArchiveBoxIcon,
        name: "Nhập Hàng",
        image: "/background/ui/fmrp/nh.svg"
    },
];

const FeatureManagementOverviewSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const { isStatePageFmrp, queryKeyIsStatePageFmrp } = useStatePageFmrp()
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const isHoverRef = useRef<boolean>(false);

    useEffect(() => {
        queryKeyIsStatePageFmrp({
            isActiveManagement: dataTab[0]
        })
    }, [dataTab])


    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current && isHoverRef.current) {
                requestAnimationFrame(() => {
                    cursorRef.current!.style.left = `${e.clientX - 48}px`;
                    cursorRef.current!.style.top = `${e.clientY - 48}px`;
                });
            }
        };

        document.addEventListener("mousemove", moveCursor);
        return () => document.removeEventListener("mousemove", moveCursor);
    }, []);


    return (
        <div className='custom-padding-section 3xl:space-y-12 space-y-8'>
            <div className="custom-container flex flex-col items-center justify-center 3xl:gap-6 gap-4">
                <div className='space-x-2 font-extrabold text-center'>
                    <span
                        className='text-title-section-small capitalize'
                        style={{
                            // background: "linear-gradient(79.84deg, #0375F3 6.37%, #036EEA 10.8%, #0267E1 15.24%, #0261D7 19.67%, #025ACE 24.11%, #0254C5 28.54%, #024EBC 32.98%, #0148B3 37.41%, #0142A9 41.85%, #013DA0 46.28%)",
                            background: "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Đa Dạng Tính Năng Quản Lý
                    </span>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>– Kiểm Soát Toàn Diện Quy Trình</span>
                </div>

                {
                    isVisibleTablet ?
                        <ScrollArea type="hover" className={`w-full overflow-auto`}>
                            <div className='flex items-center gap-2 py-4 w-full'>
                                {dataTab.map((item) => {
                                    const isActive = item === isStatePageFmrp.isActiveManagement;
                                    const IconComponent = item.icon;

                                    return (
                                        <div
                                            key={item.id}
                                            className={`w-full flex items-center gap-2 px-2 py-2 cursor-pointer ${isActive ? "border-[#D1D1D1] text-[#1A2025] bg-[#F3F4F6]" : "text-[#809FB8] border-transparent"} border rounded-lg transition-all duration-300 ease-in-out`}
                                            onClick={() => queryKeyIsStatePageFmrp({ isActiveManagement: item })}
                                        >
                                            <IconComponent
                                                className={`${isActive ? "" : "text-[#809FB8]"} size-5 shrink-0`}
                                                style={{
                                                    background: isActive ? "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)" : "", // Fix màu khi không active
                                                    WebkitBackgroundClip: isActive ? "text" : "none",
                                                    WebkitTextFillColor: isActive ? "transparent" : "inherit",
                                                }}
                                                color={isActive ? "none" : "#809FB8"} // Đảm bảo có đường viền khi không active
                                                isActive={isActive}
                                            />
                                            <span className='text-sm font-medium text-nowrap'>{item.name}</span>
                                        </div>
                                    );
                                })}
                                {/* Xem thêm */}
                                <div className="flex items-center gap-2 px-4 py-4 cursor-pointer border-l border-[#09090B]/10 text-[#4D5F6E] hover:text-[#0375F3] transition-all duration-300 ease-in-out group">
                                    <span className="text-sm font-medium text-nowrap">Xem thêm </span>
                                    <CaretDoubleRightIcon className="size-5 text-[#4D5F6E] group-hover:text-[#0375F3] transition-all duration-300 ease-in-out" />
                                </div>
                            </div>
                            <ScrollBar orientation='horizontal' />
                        </ScrollArea>
                        :
                        <div className='flex items-center justify-between gap-4 border border-[#09090B]/10 3xl:rounded-[40px] rounded-3xl 3xl:p-8 xl:p-6 p-4 w-full overflow-auto'>
                            {
                                dataTab.map((item) => {
                                    const IconComponent = item.icon;
                                    const isActive = item === isStatePageFmrp.isActiveManagement

                                    return (
                                        <div
                                            key={item.id}
                                            className={`${isActive ? "border-[#D1D1D1] text-[#1A2025]" : "border-transparent text-[#809FB8]"} 
                                    flex flex-col items-center 3xl:gap-2 gap-1 3xl:p-6 p-4  3xl:rounded-3xl rounded-2xl border  hover:shadow-md transition-all duration-300 cursor-pointer`}
                                            style={{
                                                background: isActive ? "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(204, 204, 204, 0.05) 0%, rgba(161, 161, 161, 0.1) 100.02%)" : "",
                                                boxShadow: isActive ? "-9px 20px 60px -24px #0000000D, 0px 4px 12px -48px #71717A1F, 0px -2.5px 0px 0px #D1D1D1 inset, 0px 2px 80px 0px #00000005 inset, 0px 4px 20px -5px #7772930D" : ""
                                            }}
                                            onClick={() => {
                                                queryKeyIsStatePageFmrp({
                                                    isActiveManagement: item
                                                })
                                            }}
                                        >
                                            <IconComponent
                                                className={`${isActive ? "" : "text-[#809FB8]"} 3xl:size-14 xxl:size-10 size-9`}
                                                style={{
                                                    background: isActive ? "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)" : "", // Fix màu khi không active
                                                    WebkitBackgroundClip: isActive ? "text" : "none",
                                                    WebkitTextFillColor: isActive ? "transparent" : "inherit",
                                                }}
                                                color={isActive ? "none" : "#809FB8"} // Đảm bảo có đường viền khi không active
                                                isActive={isActive}
                                            />
                                            <span className="3xl:text-[22px] xxl:text-[18px] text-base font-medium">
                                                {item.name}
                                            </span>
                                        </div>
                                    );
                                })
                            }

                            {/* Xem thêm */}
                            <div onClick={() => window.open("https://bom.so/mrpbeta")} className="flex items-center gap-2 xxl:px-10 px-6 py-4 cursor-pointer border-l border-[#09090B]/10 text-[#4D5F6E] hover:text-[#0375F3] transition-all duration-300 ease-in-out group">
                                <span className="text-button font-medium">Xem thêm </span>
                                <CaretDoubleRightIcon className="3xl:size-8 size-6 text-[#4D5F6E] group-hover:text-[#0375F3] transition-all duration-300 ease-in-out" />
                            </div>
                        </div>
                }
            </div>

            {
                isStatePageFmrp.isActiveManagement &&
                <div
                    className='relative group h-auto aspect-1.6/1 cursor-none 3xl:mx-32 lg:mx-12 mx-4'
                    onMouseEnter={() => {
                        isHoverRef.current = true;
                        if (cursorRef.current) {
                            cursorRef.current.style.opacity = "1"; // Hiện con trỏ khi hover
                        }
                    }}
                    onMouseLeave={() => {
                        isHoverRef.current = false;
                        if (cursorRef.current) {
                            cursorRef.current.style.opacity = "0"; // Ẩn con trỏ khi rời khỏi
                        }
                    }}
                    onClick={() => window.open("https://bom.so/mrpbeta")}
                >
                    <motion.div
                        key={isStatePageFmrp.isActiveManagement.image} // Đảm bảo Framer Motion biết khi nào ảnh thay đổi
                        initial={{ opacity: 0, scale: 0.95 }} // Bắt đầu mờ & nhỏ hơn
                        animate={{ opacity: 1, scale: 1 }} // Dần hiển thị và về kích thước bình thường
                        exit={{ opacity: 0, scale: 0.95 }} // Biến mất mềm mại
                        transition={{ duration: 0.5, ease: "easeOut" }} // Mượt hơn
                        className="w-full h-auto aspect-1.6/1"
                    >
                        <Image
                            width={1920}
                            height={1080}
                            alt="image"
                            src={isStatePageFmrp.isActiveManagement.image}
                            className="size-full object-contain aspect-1.6/1"
                        />
                    </motion.div>


                    {/* Con trỏ tùy chỉnh */}
                    <div
                        ref={cursorRef}
                        className="fixed 3xl:size-32 size-28 rounded-full bg-[#C7DFFB]/[65%] flex items-center justify-center 
                            text-[#025ACE] font-bold 3xl:text-lg size-base shadow-lg border border-[#92BFF7] pointer-events-none 
                            transition-opacity duration-300 opacity-0 backdrop-blur-[10px]"
                        style={{ position: "fixed", top: 0, left: 0, transform: "translate(-50%, -50%)" }}
                    >
                        Xem chi tiết
                    </div>
                </div>
            }
        </div>
    )
}

export default FeatureManagementOverviewSection