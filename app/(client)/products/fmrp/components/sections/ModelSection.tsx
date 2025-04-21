import React from 'react'
import BlurImage from '@/components/common/blur/BlurImage';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../stores/useResizeStore';

type Props = {}

const ModelSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className="custom-padding-section">
            <div className='custom-container'>
                <div className={`lg:min-h-[100vh] h-full flex flex-col items-center justify-start gap-20 w-full max-w-full relative`}>
                    <AnimatedReveal
                        effect='fade'
                        className='flex flex-col items-center justify-center gap-2'
                    >
                        <span className="font-extrabold text-title-section-small text-[#1A2025] capitalize space-x-2 text-center">
                            <span className="lg:order-1">Mô Hình</span>
                            <span className="lg:order-2" style={{
                                background: "linear-gradient(107.37deg, #0375F3 30.15%, #036EEA 32.4%, #0267E1 34.65%, #0261D7 36.89%, #025ACE 39.14%, #0254C5 41.39%, #024EBC 43.63%, #0148B3 45.88%, #0142A9 48.13%, #013DA0 50.38%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                                Ứng dụng thực tế
                            </span>
                        </span>
                    </AnimatedReveal>

                    <AnimatedReveal
                        effect='fade'
                        className={`w-full max-w-full flex items-center justify-center`}
                    >
                        <BlurImage
                            src={(isVisibleTablet ? "/background/ui/fmrp/model.svg" : "/background/ui/fmrp/model.svg")}
                            alt={"image"}
                            width={1920}
                            height={1080}
                            className=" w-full h-auto aspect-video object-contain relativee z-0"
                            classNameContainer='w-full h-auto aspect-video relativee z-0'
                            // style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                            loading="lazy"
                        />
                    </AnimatedReveal>
                </div>
            </div>
        </div>

    )
}

export default ModelSection