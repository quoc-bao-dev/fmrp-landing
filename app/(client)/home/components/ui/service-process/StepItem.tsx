import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal"
import AnimatedCircle from "@/components/common/animations/ui/AnimatedCircle"
import BlurImage from "@/components/common/blur/BlurImage"
import React from "react"

const StepItem = React.memo(({
    step,
    index,
    isVisibleTablet,
    stepRefs,
    imagesLoaded,
    activeStep,
    handleImageLoad,
}: {
    step: any,
    index: number,
    isVisibleTablet: boolean,
    stepRefs: React.MutableRefObject<(HTMLElement | null)[]>,
    imagesLoaded: boolean[],
    activeStep: number,
    handleImageLoad: (index: number) => void
}) => {
    return (
        <div
            key={`step-${step.id}`}
            ref={(el) => { stepRefs.current[index] = el }}
            className={`${!isVisibleTablet ? index % 2 === 0 ? "flex-row" : "flex-row-reverse" : ""} relative flex items-center gap-20 justify-between`}
        >
            {/* Hình ảnh hiển thị từ desktop */}
            {
                !isVisibleTablet &&
                <AnimatedReveal
                    effect='fade'
                    className={`${index % 2 === 0 ? "justify-end" : "justify-start"} w-1/2 max-w-[50%] flex`}
                    enabled={imagesLoaded[index]}
                >
                    <BlurImage
                        src={step.image}
                        alt={step.title}
                        width={1920}
                        height={1080}
                        className="size-full h-auto aspect-square object-contain"
                        classNameContainer='3xl:w-full xxl:w-[90%] xl:w-[85%] w-[90%] aspect-square relative z-0'
                        style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                        loading="lazy"
                        onLoad={() => handleImageLoad(index)}
                    />
                </AnimatedReveal>
            }

            {/* Nội dung */}
            <AnimatedReveal
                effect='fade'
                className={`lg:w-1/2 w-full lg:max-w-[50%] max-w-full md:pl-10 pl-6 space-y-2`}
            >
                <div className='relative w-fit '>
                    <h3 className="3xl:!text-2xl xl:!text-xl lg:!text-lg !text-lg font-bold text-[#33404A] relative z-[1]">
                        {step.title}
                    </h3>
                    <div className='absolute 3xl:-top-14 xl:-top-12 md:-top-10 -top-10 3xl:-right-12 xl:-right-10 md:-right-7 -right-7 z-0'>
                        <h3
                            className='3xl:text-[64px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[52px] text-[52px] font-extrabold '
                            style={{
                                background: "linear-gradient(209deg, #09090B -58.41%, #FFF 69.81%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {index < 10 && 0}{index + 1}
                        </h3>
                    </div>
                </div>

                <p className="3xl:!text-xl xl:!text-lg lg:!text-base !text-base text-[#33404A] font-medium">{step.description}</p>

                {/* Hình ảnh hiển thị ở giao diện tablet */}
                {
                    isVisibleTablet &&
                    <div className={`w-full flex justify-center`}>
                        <BlurImage
                            src={step.image}
                            alt={step.title}
                            width={1920}
                            height={1080}
                            className="size-full aspect-square object-contain relativee z-0"
                            classNameContainer='md:w-1/2 w-full aspect-square relativee z-0'
                            style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                            loading="lazy"
                        />
                    </div>
                }
            </AnimatedReveal>

            {/* Thanh timeline */}
            <div className={`${index !== step.length - 1 ? "items-center justify-center" : "items-center justify-start"} flex flex-col gap-8 h-full absolute top-0 lg:left-1/2 left-0 transform -translate-x-1/2`}>
                <AnimatedCircle active={activeStep === index} />
                {
                    index !== step.length - 1 && (
                        <div className="w-[1px] h-full bg-[#D9E1E7]"></div>
                    )
                }
            </div>
        </div>
    )
})

export default StepItem