'use client'

import React from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { LineSeparator } from '../../common/separator/LineSeparator'
import FooterLogo from './sections/FooterLogo';
import FooterContent from './sections/FooterContent';
import FooterBottom from './sections/FooterBottom';

type Props = {}

const FooterContainer = (props: Props) => {
    const router = useRouter()

    const pathname = usePathname()

    return (
        <footer className='relative w-full overflow-hidden bg-[#052B1E]'>
            <div className="w-full h-6 bg-white rounded-b-3xl" />

            <div className="custom-container flex flex-col 3xl:gap-8 gap-6 pt-16 pb-12">
                {/* Phần Logo & Slogan */}
                <div className="flex items-center justify-between">
                    <div className="2xl:max-w-[45%] xxl:max-w-[50%] md:max-w-[50%] max-w-[70%] text-title-section-small text-white font-semibold">
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