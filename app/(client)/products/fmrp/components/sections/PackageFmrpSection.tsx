import FacebookOriginIcon from '@/components/icons/social-media/FacebookOriginIcon'
import FosoOriginIcon from '@/components/icons/social-media/FosoOriginIcon'
import TiktokOriginIcon from '@/components/icons/social-media/TiktokOriginIcon'
import YoutubeOriginIcon from '@/components/icons/social-media/YoutubeOriginIcon'
import { uuidv4 } from '@/lib/uuid'
import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { variantButtonScaleZoom, variantCardScaleZoom } from '@/utils/animations/variantsAnimation'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import { ArrowUpRightIcon } from 'lucide-react'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import Image from 'next/image'
import { useResizeStore } from '@/stores/useResizeStore'
import FosoOriginIcon2 from '../../../../../../components/icons/social-media/FosoOriginIcon2';
import PlanPackageCard from '@/components/common/card/plan/PlanPackageCard'

type Props = {}

const dataCommunity = [
    {
        id: uuidv4(),
        icon: <FacebookOriginIcon className='size-full text-[#0866FF]' />,
        name: "Fanpage",
        bg: "linear-gradient(135deg, #1877F2 0%, #4C8BF5 100%)", // Gradient xanh Facebook hiện đại
        link: "https://www.facebook.com/fososoftware",
    },
    {
        id: uuidv4(),
        icon: <FosoOriginIcon className='size-full' />,
        name: "Group",
        bg: "linear-gradient(90.1deg, #0375F3 0.09%, #119DBB 50%, #1FC583 99.92%)", // Xanh biển nổi bật
        // bg: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)", // Xanh biển nổi bật
        link: "https://www.facebook.com/groups/mrpvn",
    },
    {
        id: uuidv4(),
        icon: <YoutubeOriginIcon className='size-full text-[#E62117]' />,
        name: "Youtube",
        bg: "linear-gradient(135deg, #FF0000 0%, #FF6347 100%)", // Đỏ Youtube rực rỡ
        link: "https://www.youtube.com/@fososoft",
    },
    {
        id: uuidv4(),
        icon: <TiktokOriginIcon className='size-full text-[#010101]' />,
        name: "Tiktok",
        bg: "linear-gradient(95.03deg, #03EFE5 2.2%, #E41B5F 97.4%)", // Hiệu ứng gradient tím-hồng-cam,
        // bg: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)", // Hiệu ứng gradient tím-hồng-cam,
        link: "https://www.tiktok.com/@fososoftware"
    },
]

// Variants cho nền (trượt lên khi hover)
const bgVariants = {
    rest: { top: '100%' },
    hover: { top: '0%', transition: { duration: 0.5 } },
};

// Variants cho icon (Xoay 360° + đổi màu khi hover)
const iconVariants = {
    rest: (color: any) => ({
        rotateY: 0,
        color: color,
        // fill: color, // Giữ nguyên màu gradient
        filter: "brightness(1) invert(0)", // Giữ nguyên màu gradient
        transition: { duration: 0.6, ease: "easeInOut" }
    }),
    hover: {
        rotateY: 360,
        color: "#FFFFFF",
        // fill: "#FFFFFF", // Chuyển icon thành màu trắng khi hover
        filter: "brightness(0) invert(1)", // Chuyển icon sang trắng
        transition: { duration: 0.6, ease: "easeInOut" }
    }
};


// Variants cho text (đổi màu khi hover)
const textVariants = {
    rest: { color: "#1A2025" },
    hover: { color: "#FFFFFF", transition: { duration: 0.6 } }
};

const dataPackage = [
    {
        title: "Freemium",
        price: 0,
        expirationDate: "",
        brand: "1 chi nhánh",
        description: "Trải nghiệm thật, hiệu quả thật, Không giới hạn thời gian",
        type: "Cơ bản",
        buttonText: "Đăng ký ngay",
        variant: "freemium",
        className: "col-span-1 w-full",
        popular: false
    },
    {
        title: "Professional",
        price: 2860,
        expirationDate: "/ngày",
        brand: "1 chi nhánh",
        description: "Tối ưu sản xuất, tối thiểu lãng phí. Toàn quyền truy cập các tính năng chuyên nghiệp",
        type: "Chuyên sâu",
        buttonText: "Liên hệ",
        variant: "pro",
        className: "col-span-1 w-full",
        popular: true
    }
]

const PackageFmrpSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-10 gap-8'>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='space-x-2 font-extrabold'>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>Khám phá ngay</span>
                        <span
                            className='text-title-section-small capitalize'
                            style={{
                                background: "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                                // background: "linear-gradient(107.4deg, #0375F3 65.02%, #036EEA 67.88%, #0267E1 70.73%, #0261D7 73.59%, #025ACE 76.45%, #0254C5 79.31%, #024EBC 82.17%, #0148B3 85.03%, #0142A9 87.89%, #013DA0 90.75%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Các Gói FMRP
                        </span>
                    </div>

                    <div className='text-default text-[#33404A] font-medium md:text-center text-start max-w-full'>
                        <span>
                            Phí dịch vụ tốt nhất thị trường, dễ dàng đáp ứng mọi nhu cầu của xưởng
                        </span>
                    </div>
                </div>


                <div className="grid grid-cols-2 w-[65%] gap-5">
                    {dataPackage.map((plan, index) => (
                        <PlanPackageCard
                            key={`plan-${index}`}
                            {...plan}
                        />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default PackageFmrpSection