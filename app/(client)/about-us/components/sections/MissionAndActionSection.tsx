import BlurredBackground from '@/components/common/blur/BlurredBackground'
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import { useResizeStore } from '@/stores/useResizeStore'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion'
import SalyAnimation from '@/components/common/animations/common/SalyAnimation'

type Props = {}

const MissionAndActionSection = (props: Props) => {
    const router = useRouter()
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col lg:items-center lg:justify-center items-start justify-start relative'>
                {/* blur */}
                {!isVisibleTablet && <BlurredBackground className='top-[20%] -left-[40%] z-[1]' />}

                {/* <div className='w-[200px] h-auto aspect-square'>
                    <Image
                        width={400}
                        height={400}
                        alt="saly"
                        src="/background/ui/about-us/saly.webp"
                        className='size-full object-contain'
                    />
                </div> */}

                <SalyAnimation className="w-[200px] h-auto aspect-square">
                    <Image
                        width={400}
                        height={400}
                        alt="saly"
                        src="/background/ui/about-us/saly.webp"
                        className="size-full object-contain"
                    />
                </SalyAnimation>

                <div className='flex flex-col lg:items-center lg:justify-center items-start justify-start 3xl:gap-6 gap-4 3xl:max-w-[54%] lg:max-w-[70%] max-w-full lg:text-center text-start'>
                    <h2 className="text-title-section-small font-bold space-x-2">
                        <span className="text-[#050505] font-extrabold capitalize">Tôn chỉ và</span>
                        <span
                            className="font-extrabold capitalize"
                            style={{
                                backgroundImage: `
                                linear-gradient(-90deg, #85EEB3, #53B086),
                                radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Hành động
                        </span>
                    </h2>

                    <p className='text-default font-normal text-[#33404A]'>
                        Xây dựng văn hóa kinh doanh dựa trên phương châm “Lấy khách hàng làm trọng tâm”, mọi hoạt động của Công ty và nhân viên đều hướng tới mục tiêu cao nhất là đáp ứng nhu cầu của khách hàng, luôn đặt mình vào vị trí của khách hàng để thấu hiểu và giải quyết mọi vấn đề.
                    </p>

                    <ButtonAnimation
                        onClick={() => window.open("https://drive.google.com/file/d/1P8QvtBg86RtHE5bW0UZ8GSHJd0bO4crt/view", "_blank")}
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
                        title="Hồ sơ năng lực"
                        className='flex items-center gap-2 text-sm-default text-[#052B1E] border border-[#A3EED6] font-bold capitalize border-none lg:w-fit w-full rounded-full px-4 py-2'
                        style={{
                            background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                            border: "1px solid #A3EED6",
                            borderImageSource: "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",

                        }}
                        whileHover={{
                            background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                            border: "1px solid rgba(255, 255, 255, 0.00)",
                            transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MissionAndActionSection