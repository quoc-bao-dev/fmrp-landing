import React, { JSX } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { uuidv4 } from '@/lib/uuid'

import {
    FaInstagram,
    FaFacebook,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";
import { scrollToSection, scrollToTop } from '@/utils/scroll/scrollUtils'
import { LineSeparator } from '../../common/separator/LineSeparator'
import PhoneLink from '../../common/contact-links/PhoneLink'
import { FormatPhoneNumberCountry } from '@/utils/format/FormatNumber'

import FooterSocial from './elements/SocialSection'
import EmailLink from '../../common/contact-links/EmailLink';
import FooterBottom from './sections/FooterBottom';
import FooterLogo from './sections/FooterLogo';
import FooterContent from './sections/FooterContent';

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
            <div className="custom-container flex flex-col 3xl:gap-8 gap-6 pt-16 pb-12">
                {/* Phần Logo & Slogan */}
                <div className="flex items-center justify-between">
                    <div className="max-w-[45%] text-title-section-small text-white font-semibold">
                        Bạn có ý tưởng, FOSO có Giải pháp. Hãy cùng nhau tạo nên thành công!
                    </div>
                    <FooterLogo />
                </div>

                <LineSeparator color="#4D5F6E" />

                {/* Phần nội dung chính */}
                <FooterContent />

                <LineSeparator color="#4D5F6E" />

                {/* Phần mạng xã hội */}
                <FooterBottom />
            </div>
        </footer >
    )
}

export default FooterContainer