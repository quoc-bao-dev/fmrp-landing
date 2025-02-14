import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { usePathname, useRouter } from 'next/navigation'

import { motion } from 'framer-motion'
import { uuidv4 } from '@/lib/uuid'

import {
    FaInstagram,
    FaFacebook,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";
import { scrollToSection, scrollToTop } from '@/utils/scroll/scrollUtils'
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation'
import { LineSeparator } from '../separator/LineSeparator'
import PhoneLink from '../contact-links/PhoneLink'
import { FormatPhoneNumberCountry } from '@/utils/format/FormatNumber'

type Props = {}

const socialMedia = [
    {
        id: uuidv4(),
        icon: <FaInstagram className='text-xl text-[#B4B8C5] hover:scale-105 transition-colors duration-200 ease-in-out cursor-pointer' />,
        link: '#'
    },
    {
        id: uuidv4(),
        icon: <FaFacebook className='text-xl text-[#B4B8C5] hover:scale-105 transition-colors duration-200 ease-in-out cursor-pointer' />,
        link: '#'
    },
    {
        id: uuidv4(),
        icon: <FaLinkedinIn className='text-xl text-[#B4B8C5] hover:scale-105 transition-colors duration-200 ease-in-out cursor-pointer' />,
        link: '#'
    },
    {
        id: uuidv4(),
        icon: <FaTwitter className='text-xl text-[#B4B8C5] hover:scale-105 transition-colors duration-200 ease-in-out cursor-pointer' />,
        link: '#'
    },
]

const FooterContainer = (props: Props) => {
    const router = useRouter()

    const pathname = usePathname()

    const handleMoveHome = () => {
        // Sử dụng framer-motion để cuộn đến vị trí tính toán
        scrollToTop()

        if (pathname !== "/") {
            router.push('/')
        }
    };

    // Hàm cuộn đến phần tử với hiệu ứng framer-motion
    const handleMoveSectionId = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: number | string, link: string) => {
        // Điều hướng đến đường dẫn mới nếu khác đường dẫn hiện tại
        e.preventDefault()
        if (pathname !== link) {
            router.push(`${link}?sectionId=${sectionId}`)
        } else {
            scrollToSection(sectionId)
        }

    };

    return (
        <footer className='relative w-full overflow-hidden bg-[#052B1E]'>
            <div className="w-full h-6 bg-white rounded-b-3xl" />

            <div className='custom-container flex flex-col 3xl:gap-8 gap-6 pt-16 pb-10'>
                <div className='flex items-center justify-between'>
                    <div className='max-w-[45%] text-title-section-small text-white font-semibold'>
                        Bạn có ý tưởng, FOSO có Giải pháp. Hãy cùng nhau tạo nên thành công!
                    </div>

                    <motion.div
                        initial={false}
                        animate="rest"
                        whileTap="press"
                        variants={variantButtonScaleZoom}
                        className='aspect-square 3xl:w-36 xxl:w-32 w-32 gap-2 cursor-pointer'
                        onClick={handleMoveHome}
                    >
                        <Image
                            alt='logo'
                            src="/logo/logo-single.svg"
                            width={400}
                            height={400}
                            quality={100}
                            priority
                            className='size-full object-contain aspect-square'
                        />
                    </motion.div>
                </div>

                <LineSeparator color='#4D5F6E' />

                <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-4 max-w-[50%]'>
                        <div className='text-default font-bold text-[#F1F5F7]'>
                            CÔNG TY TNHH CÔNG NGHỆ FOSO
                        </div>

                        <div className='space-y-2 text-[#B3C5D4]'>
                            <div className='space-x-0.5'>
                                <span>MST: </span>
                                <span>031405287</span>
                            </div>
                            <div className='space-x-0.5'>
                                <span>Hotline:</span>
                                <PhoneLink phoneNumber='0901136968'>
                                    {FormatPhoneNumberCountry("0901136968", "VN")}
                                </PhoneLink>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end max-w-[50%]'>
                        heelo
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default FooterContainer