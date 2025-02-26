import React from 'react'
import CoreValueStep from '../ui/core-value/CoreValueStep'
import { useResizeStore } from '@/stores/useResizeStore'
import BlurredBackground from '@/components/common/blur/BlurredBackground'

type Props = {}

const CoreValueSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-6 gap-4 relative'>
                {!isVisibleTablet && <BlurredBackground className='top-0 -right-[42%] z-[1]' />}

                <h2 className="text-title-section-small font-bold">
                    <span className="text-[#050505] font-extrabold capitalize">4-SO makes</span>
                    <span
                        className="text-transparent bg-clip-text font-extrabold capitalize pl-2"
                        style={{
                            backgroundImage: `
                                linear-gradient(90deg, #85EEB3 0%, #53B086 100%),
                                radial-gradient(20.78% 106.02% at 55% 32.91%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`
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

                <CoreValueStep />
            </div>
        </div>
    )
}

export default CoreValueSection