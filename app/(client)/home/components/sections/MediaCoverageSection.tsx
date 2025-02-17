import BlurredBackground from '@/components/common/blur/BlurredBackground'
import React from 'react'

type Props = {}

const MediaCoverageSection = (props: Props) => {
    return (
        <div className='relative 3xl:py-20 py-16 '>
            <BlurredBackground className='-top-[10%] -left-[250px]' />

            <div className='custom-container flex flex-col items-center justify-center'>
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Báo chí nói về</span>
                    <span
                        className='text-title-section-small uppercase'
                        style={{
                            //  background_animation="linear-gradient(90deg, #E0FFCC 0%, #CCFFEC 100%)"
                            background: `linear-gradient(to right, #E0FFCC 0%, #53B086 100%), 
                            radial-gradient(219.3% 1471.82% at 24.6% -30.56%, 
                            rgba(84, 171, 177, 0) 0%, 
                            rgba(84, 171, 177, 0.409141) 34.37%, 
                            rgba(133, 238, 179, 0.71) 51.52%, 
                            rgba(84, 171, 177, 0) 100%)`,
                            // background: "linear-gradient(to left, #53B086 0%, #53B086 100%), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Foso
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MediaCoverageSection