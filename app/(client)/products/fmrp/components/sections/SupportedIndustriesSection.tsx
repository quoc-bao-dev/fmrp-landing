import React from 'react'
import BlurImage from '@/components/common/blur/BlurImage';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../stores/useResizeStore';

type Props = {}

const SupportedIndustriesSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className="custom-padding-section">
            <div className='custom-container'>
                <AnimatedReveal
                    effect='fade'
                    className={`lg:min-h-[100vh] h-full -space-y-10  flex flex-col items-center justify-start gap-10 w-full max-w-full relative`}
                >
                    <div className='flex flex-col lg:items-center items-start justify-center gap-2'>
                        <span className="font-extrabold text-title-section-small text-[#1A2025] capitalize space-x-2 lg:text-center text-center">
                            <span className="lg:order-1">Ứng dụng cho</span>
                            <span className="lg:order-2" style={{
                                background: "linear-gradient(107.37deg, #0375F3 30.15%, #036EEA 32.4%, #0267E1 34.65%, #0261D7 36.89%, #025ACE 39.14%, #0254C5 41.39%, #024EBC 43.63%, #0148B3 45.88%, #0142A9 48.13%, #013DA0 50.38%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                                Mọi ngành nghề
                            </span>
                        </span>

                        <div className='text-base-default text-[#33404A] font-medium md:text-center text-start 3xl:max-w-[52%] lg:max-w-[70%] max-w-full'>
                            <span>
                                Giải pháp toàn diện, phù hợp với nhiều lĩnh vực khác nhau như sản xuất, bán lẻ, thương mại điện tử, dược phẩm, may mặc, thực phẩm & đồ uống,...
                            </span>
                        </div>
                    </div>

                    {/* <div className='w-full h-full max-w-full relative'>
                                       <ProcessComponent />
                                   </div> */}
                    <div className={`w-full max-w-full flex items-center justify-center`}>
                        <BlurImage
                            src={(isVisibleTablet ? "/background/ui/fmrp/process/bg-10.webp" : "/background/ui/fmrp/process/bg-10.webp")}
                            alt={"image"}
                            width={1920}
                            height={1080}
                            className=" w-full h-auto aspect-video object-contain relativee z-0"
                            classNameContainer='w-full h-auto aspect-video relativee z-0'
                            // style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                            loading="lazy"
                        />
                    </div>

                    {/* <div className='space-y-2 w-full 2xl:max-w-[50%] lg:max-w-[55%] max-w-full lg:order-2 order-1'>
                                       <div className='relative w-fit '>
                                           <h3 className="3xl:!text-2xl xl:!text-2xl lg:!text-xl !text-2xl font-extrabold text-[#33404A] relative z-[1]">
                                               {step.title}
                                           </h3>
                                           <div className='absolute 2xl:-top-10 xl:-top-11 lg:-top-10 -top-12 left-0 z-0'>
                                               <h2
                                                   className='3xl:text-[54px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[52px] text-[52px] font-bold uppercase w-fit'
                                                   style={{
                                                       // backgroundImage: "linear-gradient(420deg, #FFFFFF 10%, #B3B3B3 80%, #FFFFFF 100%)"
                                                       background: "linear-gradient(218.75deg, #CDCDCE 43.55%, #FFFFFF 80.72%)",
                                                       WebkitBackgroundClip: "text",
                                                       WebkitTextFillColor: "transparent",
                                                   }}
                                               >
   
                                                   {step.word}
                                               </h2>
                                           </div>
                                       </div>
   
                                       <p className="3xl:!text-xl xl:!text-lg lg:!text-base !text-base text-[#33404A] font-medium">{step.description}</p>
                                   </div> */}
                </AnimatedReveal>
            </div>
        </div>

    )
}

export default SupportedIndustriesSection