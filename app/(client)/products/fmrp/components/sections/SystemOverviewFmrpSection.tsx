import Image from 'next/image'
import React from 'react'

type Props = {}

const SystemOverviewFmrpSection = (props: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className="mx-12 flex flex-col items-center justify-center 3xl:gap-10 gap-8">
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Quy Trình Tổng Quan Các Phân Hệ</span>
                </div>

                <div
                    className='size-full inset-0 p-12 rounded-[40px]'
                    style={{
                        background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(204, 204, 204, 0.05) 0%, rgba(161, 161, 161, 0.1) 100.02%)",
                        boxShadow: "0px 1px 2px 0px #1018280D, 5.11px 5.11px 76.61px 0px #6C718080"
                    }}
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
    )
}

export default SystemOverviewFmrpSection