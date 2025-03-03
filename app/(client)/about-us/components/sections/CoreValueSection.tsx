import React from 'react'
import CoreValueStep from '../ui/core-value/CoreValueStep'
import { useResizeStore } from '@/stores/useResizeStore'
import BlurredBackground from '@/components/common/blur/BlurredBackground'

type Props = {}

const CoreValueSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    return (
        <div className='custom-padding-section'>
            <div
                className='custom-container sticky top-0 z-10 2xl:pt-32 pt-28 3xl:pb-10 pb-8 bg-white flex flex-col items-center justify-center 3xl:gap-6 gap-4'
                style={{
                    WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 1%, #F9FBFC 10%)"
                }}
            >
                <h2 className="text-title-section-small font-bold">
                    <span className="text-[#050505] font-extrabold capitalize">4-SO makes</span>
                    <span
                        className="font-extrabold capitalize pl-2"
                        style={{
                            backgroundImage: `
                                linear-gradient(90deg, #85EEB3 0%, #53B086 100%),
                                radial-gradient(20.78% 106.02% at 55% 32.91%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        FOSO
                    </span>
                    <span className="text-[#050505] font-extrabold capitalize">!</span>
                </h2>

                <div className='space-x-2 text-default text-[#33404A] text-center'>
                    <span className='font-medium'>
                        Không chỉ là Slogan - đó là
                    </span>
                    <span className='font-bold'>
                        Giá trị cốt lõi
                    </span>
                    <span className='font-medium'>hình thành nên FOSO.</span>
                </div>
            </div>

            <CoreValueStep />
        </div >
    )
}

export default CoreValueSection