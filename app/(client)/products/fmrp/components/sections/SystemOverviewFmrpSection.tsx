import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ImagePreviewPortal } from '../ui/system-overview-fmrp/ImagePreviewPortal';

type Props = {}

const SystemOverviewFmrpSection = (props: Props) => {
    const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false)
    const imageSrc = "/background/ui/fmrp/system-overview.webp"

    useEffect(() => {
        if (isPreviewOpen) {
            document.body.style.overflow = 'hidden' // Khóa scroll
        } else {
            document.body.style.overflow = 'auto'   // Mở lại scroll
        }

        // Cleanup khi component unmount hoặc state thay đổi
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isPreviewOpen])

    return (
        <React.Fragment>
            <div className='custom-padding-section relative'>
                <div className="3xl:mx-12 xl:mx-16 lg:mx-12 mx-4 flex flex-col items-center justify-center 3xl:gap-10 gap-8">
                    <div className='space-x-2 font-extrabold text-center'>
                        <span className='text-title-section-small text-[#1A2025] capitalize'>Quy Trình Tổng Quan Các Phân Hệ</span>
                    </div>

                    <div
                        className='size-full inset-0 xxl:p-12 lg:p-10 p-2 lg:rounded-[40px] rounded-lg'
                        style={{
                            background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(204, 204, 204, 0.05) 0%, rgba(161, 161, 161, 0.1) 100.02%)",
                            boxShadow: "0px 1px 2px 0px #1018280D, 5.11px 5.11px 76.61px 0px #6C718080"
                        }}
                        onClick={() => setIsPreviewOpen(true)}
                    >
                        <Image
                            alt="process"
                            src="/background/ui/fmrp/system-overview.webp"
                            width={1920}
                            height={1080}
                            className='size-full object-contain aspect-1.43/1'
                        />
                    </div>
                </div>
            </div>

            {/* Image Preview Component */}
            <ImagePreviewPortal
                open={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                imageSrc={imageSrc}
                imageAlt="Quy Trình Tổng Quan Các Phân Hệ"
            />
        </React.Fragment>
    )
}

export default SystemOverviewFmrpSection