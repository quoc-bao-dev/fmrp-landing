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
        <footer className='relative w-full overflow-hidden border-t border-[#DCDFE1] pt-12'>
            footer
        </footer >
    )
}

export default FooterContainer