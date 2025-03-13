import ArchiveBoxIcon from '@/components/icons/fmrp/ArchiveBoxIcon';
import Image from 'next/image';
import { uuidv4 } from '@/lib/uuid';
import FactoryIcon from '@/components/icons/fmrp/FactoryIcon';
import WarehouseIcon from '@/components/icons/fmrp/WarehouseIcon';
import PackageIcon from '@/components/icons/fmrp/PackageIcon';
import NotepadIcon from '@/components/icons/fmrp/NotepadIcon';
import StorefrontIcon from '@/components/icons/fmrp/StorefrontIcon';
import { useStatePageFmrp } from '../../_state/useStatePageFmrp';
import React, { useEffect } from 'react';
import CaretDoubleRightIcon from '@/components/icons/fmrp/CaretDoubleRightIcon';

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
        image: "/background/ui/fmrp/kh1.png"
    },
    {
        id: "42141241",
        icon: PackageIcon,
        name: "Mua Hàng",
        image: "/background/ui/fmrp/mh.png"
    },
    {
        id: "4214",
        icon: NotepadIcon,
        name: "Kế Hoạch",
        image: "/background/ui/fmrp/kh2.png"
    },
    {
        id: "424243",
        icon: ArchiveBoxIcon,
        name: "Nhập Hàng",
        image: "/background/ui/fmrp/nh.png"
    },
];

const FeatureManagementOverviewSection = (props: Props) => {
    const { isStatePageFmrp, queryKeyIsStatePageFmrp } = useStatePageFmrp()

    useEffect(() => {
        queryKeyIsStatePageFmrp({
            isActiveManagement: dataTab[0]
        })
    }, [dataTab])


    return (
        <div className='custom-padding-section space-y-16'>
            <div className="custom-container flex flex-col items-center justify-center 3xl:gap-10 gap-8">
                <div className='space-x-2 font-extrabold'>
                    <span
                        className='text-title-section-small capitalize'
                        style={{
                            background: "linear-gradient(79.84deg, #0375F3 6.37%, #036EEA 10.8%, #0267E1 15.24%, #0261D7 19.67%, #025ACE 24.11%, #0254C5 28.54%, #024EBC 32.98%, #0148B3 37.41%, #0142A9 41.85%, #013DA0 46.28%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Đa Dạng Tính Năng Quản Lý
                    </span>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>– Kiểm Soát Toàn Diện Quy Trình</span>
                </div>

                <div className='flex items-center justify-between gap-4 border border-[#09090B]/10 rounded-[40px] p-12 w-full'>
                    {
                        dataTab.map((item) => {
                            const IconComponent = item.icon;
                            const isActive = item === isStatePageFmrp.isActiveManagement

                            return (
                                <div
                                    key={item.id}
                                    className={`${isActive ? "border-[#D1D1D1] text-[#1A2025]" : "border-transparent text-[#809FB8]"} 
                                    flex flex-col items-center gap-2 p-6  rounded-3xl border  hover:shadow-md transition-all duration-300 cursor-pointer`}
                                    style={{
                                        background: isActive ? "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(204, 204, 204, 0.05) 0%, rgba(161, 161, 161, 0.1) 100.02%)" : "",
                                        boxShadow: isActive ? "-9px 20px 60px -24px #0000000D, 0px 4px 12px -48px #71717A1F, 0px 2px 80px 0px #00000005 inset, 0px 4px 20px -5px #7772930D, 0px 4px 20px -5px #7772930D" : ""
                                    }}
                                    onClick={() => {
                                        queryKeyIsStatePageFmrp({
                                            isActiveManagement: item
                                        })
                                    }}
                                >
                                    <IconComponent
                                        className={`${isActive ? "" : "text-[#809FB8]"} size-16`}
                                        // style={{
                                        //     background: isActive ? "" : "",
                                        //     WebkitBackgroundClip: "text",
                                        //     WebkitTextFillColor: "transparent",
                                        // }}
                                        style={{
                                            background: isActive ? "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)" : "", // Fix màu khi không active
                                            WebkitBackgroundClip: isActive ? "text" : "none",
                                            WebkitTextFillColor: isActive ? "transparent" : "inherit",
                                        }}
                                        color={isActive ? "none" : "#809FB8"} // Đảm bảo có đường viền khi không active
                                        isActive={isActive}
                                    />
                                    <span className="text-[24px] font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })
                    }

                    {/* Xem thêm */}
                    <div className="flex items-center gap-2 px-10 py-4 cursor-pointer border-l border-[#09090B]/10 text-[#4D5F6E] hover:text-[#0375F3] transition-all duration-300 ease-in-out group">
                        <span className="text-button font-medium">Xem thêm </span>
                        <CaretDoubleRightIcon className="size-8 text-[#4D5F6E] group-hover:text-[#0375F3] transition-all duration-300 ease-in-out" />
                    </div>
                </div>
            </div>

            {
                isStatePageFmrp.isActiveManagement &&
                <div className='mx-12'>
                    <div className='w-full h-auto aspect-1.6/1'>
                        <Image
                            width={1920}
                            height={1080}
                            alt="image"
                            src={isStatePageFmrp.isActiveManagement.image}
                            className="size-full object-contain aspect-1.6/1"
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default FeatureManagementOverviewSection