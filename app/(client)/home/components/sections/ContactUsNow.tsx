import BlurredBackground from '@/components/common/blur/BlurredBackground'
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import Image from 'next/image'
import React from 'react'

type Props = {}

const ContactUsNow = (props: Props) => {
    return (
        <div className="3xl:py-32 py-16">
            <div className="custom-container grid lg:grid-cols-2 grid-cols-1 items-center gap-8">
                {/* Left Content */}
                <div className="flex flex-col 3xl:gap-8 gap-6 col-span-1">
                    <h2 className="text-title-section-small font-extrabold text-[#1A2025]">
                        Có Dự Án Cần Thực Hiện?
                    </h2>
                    <ButtonAnimation
                        icon={
                            <div className='xl:size-6 size-5 flex-shrink-0'>
                                <Image
                                    width={100}
                                    height={100}
                                    alt='icon'
                                    src={"/icons/common/arrow-circle.svg"}
                                    className='size-full object-contain'
                                />
                            </div>
                        }
                        reverse={true}
                        title="Gọi ngay cho chúng tôi"
                        className='flex items-center gap-2 text-sm-default text-[#052B1E] bg-[#1AD598] hover:bg-[#1AD598]/80 font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                    />
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center col-span-1 relative">
                    <BlurredBackground />
                    
                    <div className='h-[456px] aspect-0.715/1 relative z-0'>
                        <Image
                            src="/background/robot/robot-hand-search.svg"
                            alt="Robot AI"
                            width={400}
                            height={400}
                            className="size-full object-contain aspect-0.715/1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsNow