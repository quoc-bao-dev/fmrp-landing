'use client'
import BlurImage from '@/components/common/blur/BlurImage'
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import { useResizeStore } from '@/stores/useResizeStore'
import { useSheetStores } from '@/stores/useSheetStores'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const CTASection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex lg:flex-row flex-col items-center gap-10'>
                <div className='3xl:space-y-8 space-y-6 w-full lg:max-w-[45%] max-w-full'>
                    <h2 className="text-title-section-small font-bold lg:text-start text-center">
                        <span className="text-[#050505] font-extrabold capitalize">Bạn tập trung kinh doanh</span>

                        {!isVisibleTablet && <br />}

                        <span
                            className="font-extrabold capitalize lg:pl-0 pl-2"
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
                        <span className="text-[#050505] font-extrabold capitalize pl-2">Lo công nghệ!</span>
                    </h2>

                    <div className='relative flex lg:justify-start justify-center'>
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
                            title="Đăng ký ngay"
                            onClick={() => {
                                setOpenSheetCustom(true)
                                setStatusSheet("contact")
                            }}
                            className='overflow-hidden border-gradient-button-foso flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                            style={{
                                background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                                border: "1px solid #A3EED6",
                                borderImageSource: "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",
                            }}
                            whileHover={{
                                background: [
                                    "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                                    "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                                    "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)"
                                ],
                                transition: {
                                    duration: 1.5,
                                    ease: [0.4, 0, 0.6, 1],
                                    repeat: Infinity
                                },
                                boxShadow: [
                                    "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                    "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                    "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                    "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                                ],
                            }}
                        />

                        <div className='absolute 3xl:-top-12 xl:-top-10 lg:-top-11 -top-6 3xl:left-44 xl:left-40 lg:left-36 md:left-[62%] left-[70%] flex flex-col lg:-space-y-4 space-y-2 -space-x-0'>
                            {/* Mũi tên với hiệu ứng nhấp nháy */}
                            {!isVisibleTablet ? (
                                <motion.div
                                    className='3xl:w-[120px] w-[100px] h-auto aspect-square shrink-0'
                                    animate={{
                                        scale: [1, 1.05, 1], // Giảm biên độ scale để tránh bị gắt
                                        opacity: [1, 0.85, 1], // Làm mờ nhẹ hơn để không bị quá "gắt"
                                    }}
                                    transition={{
                                        duration: 1.2, // Kéo dài thời gian để mềm mại hơn
                                        repeat: Infinity, // Lặp vô hạn
                                        repeatType: "mirror", // Chuyển động mượt mà hơn khi lặp lại
                                        ease: [0.25, 1, 0.5, 1] // Bezier curve giúp animation mềm mại hơn
                                    }}
                                >
                                    <Image
                                        src="/icons/common/arrow/arrow-long.webp"
                                        alt="icon"
                                        width={200}
                                        height={200}
                                        className='size-full object-contain'
                                    />
                                    {/* <ArrowLongIcon className='size-full' /> */}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className='w-[60px] h-auto'
                                    animate={{
                                        y: [0, -5, 0], // Nhảy lên xuống nhẹ
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image
                                        src="/icons/common/arrow/arrow-long2.svg"
                                        alt="icon"
                                        width={200}
                                        height={200}
                                        className='size-full object-contain'
                                    />
                                </motion.div>
                            )}

                            {/* Chữ có hiệu ứng rung nhẹ */}
                            <motion.div
                                className={`${playwrite_is_sans.className} -rotate-[5deg] 3xl:!text-lg xl:!text-base lg:!text-sm !text-sm !tracking-[1%] text-[#4D5F6E] font-normal`}
                                animate={{
                                    rotate: [-5, -3, -5], // Lắc nhẹ qua lại
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                để phát triển vượt trội
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[50%] max-w-full'>
                    <BlurImage
                        src={"/background/ui/about-us/jumbotron1.png"}
                        alt={"CEO FOSO"}
                        width={1920}
                        height={1080}
                        className="w-full h-auto aspect-1.36/1 object-contain"
                        classNameContainer='w-full aspect-1.36/1 relative z-0'
                        style={{ WebkitMaskImage: "linear-gradient(0deg, rgba(249, 251, 252, 0.00) 10%, #F9FBFC 30%)" }}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default CTASection