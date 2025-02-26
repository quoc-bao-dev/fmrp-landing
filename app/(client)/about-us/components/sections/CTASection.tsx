import BlurImage from '@/components/common/blur/BlurImage'
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import { useResizeStore } from '@/stores/useResizeStore'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React from 'react'

type Props = {}

const CTASection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex lg:flex-row flex-col items-center gap-10'>
                <div className='3xl:space-y-8 space-y-6 w-full lg:max-w-[45%] max-w-full'>
                    <h2 className="text-title-section-small font-bold lg:text-start text-center">
                        <span className="text-[#050505] font-extrabold capitalize">Bạn tập trung kinh doanh</span>

                        {!isVisibleTablet && <br />}

                        <span
                            className="text-transparent bg-clip-text font-extrabold capitalize lg:pl-0 pl-2"
                            style={{
                                backgroundImage: `
                                linear-gradient(90deg, #85EEB3 0%, #53B086 100%),
                                radial-gradient(20.78% 106.02% at 55% 32.91%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`
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
                            className='flex items-center gap-2 text-sm-default text-[#052B1E] bg-[#1AD598] hover:bg-[#1AD598]/80 border border-[#A3EED6] font-bold capitalize border-none w-fit rounded-full px-4 py-2'
                        />

                        <div className='absolute 3xl:-top-14 xl:-top-10 lg:-top-11 -top-6 3xl:left-44 xl:left-40 lg:left-36 md:left-[62%] left-[70%] flex flex-col lg:-space-y-4 space-y-2 -space-x-14'>
                            {
                                !isVisibleTablet ?
                                    <div className='3xl:w-[120px] w-[100px] h-auto aspect-square'>
                                        <Image
                                            src="/icons/common/arrow/arrow-long.webp"
                                            alt="icon"
                                            width={200}
                                            height={200}
                                            className='size-full object-contain'
                                        />
                                    </div>
                                    :
                                    <div className='w-[60px] h-auto'>
                                        <Image
                                            src="/icons/common/arrow/arrow-long2.svg"
                                            alt="icon"
                                            width={200}
                                            height={200}
                                            className='size-full object-contain'
                                        />
                                    </div>
                            }

                            <div className={`${playwrite_is_sans.className} -rotate-[5deg] 3xl:!text-lg xl:!text-base lg:!text-sm !text-sm !tracking-[1%]; text-[#4D5F6E] font-normal`}>
                                để phát triển vượt trội
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:max-w-[50%] max-w-full'>
                    <BlurImage
                        src={"/background/ui/about-us/jumbotron.webp"}
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