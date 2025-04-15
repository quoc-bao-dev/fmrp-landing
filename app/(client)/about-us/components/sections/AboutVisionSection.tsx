import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal'
import BlurImage from '@/components/common/blur/BlurImage'
import React from 'react'

type Props = {}

const AboutVisionSection = (props: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className='custom-container'>
                <div className='xl:max-w-5xl lg:max-w-4xl mx-auto flex lg:flex-row flex-col lg:items-center 3xl:gap-16 gap-14 lg:px-6 '>
                    <div className='flex flex-col 3xl:gap-8 gap-6 lg:w-[45%] w-full'>
                        <h2 className="text-title-section-small font-bold space-x-2">
                            <span className="text-[#050505] font-extrabold capitalize">Tầm nhìn</span>
                            <span
                                className="font-extrabold"
                                style={{
                                    // backgroundImage: `linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)` /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
                                    // backgroundImage: `radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`
                                    backgroundImage: `linear-gradient(90deg, #85EEB3 0%, rgba(83, 176, 134, 0.99) 27.5%), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                FOSO
                            </span>
                        </h2>

                        <p className="text-default text-[#33404A] font-medium max-w-full">
                            FOSO định hướng phát triển trở thành đơn vị hàng đầu trong khu vực, cung cấp giải pháp công nghệ giúp doanh nghiệp tối ưu quy trình, nâng cao hiệu suất và phát triển bền vững.
                        </p>
                    </div>

                    <AnimatedReveal
                        // from="left"
                        effect='fade'
                        className={`lg:w-[42%] lg:max-w-[42%] w-full max-w-full flex relative`}
                    >
                        <BlurImage
                            src={"/background/ui/about-us/ceo-foso1.webp"}
                            alt={"CEO FOSO"}
                            width={1920}
                            height={1080}
                            className="w-full h-auto aspect-square object-contain"
                            classNameContainer='w-full aspect-square relative z-0'
                            style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 25%)" }}
                            loading="lazy"
                        />

                        <div
                            className='absolute bottom-4 left-0 z-0 w-full h-28 blur-3xl'
                            style={{
                                background: "linear-gradient(95.16deg, #E0FFCC 12.93%, #CCFFEC 65.56%)"
                            }}
                        />

                        <div className='absolute bottom-4 right-0 z-[5] flex flex-col gap-0.5 justify-end '>
                            <div
                                className='text-title capitalize font-extrabold'
                                style={{
                                    backgroundImage: `linear-gradient(0deg, #53B086, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Mr. An
                            </div>

                            <div className='text-default text-[#667F93] font-normal'>
                                Founder CEO FOSO
                            </div>
                        </div>
                    </AnimatedReveal>
                </div>
            </div>
        </div>
    )
}

export default AboutVisionSection