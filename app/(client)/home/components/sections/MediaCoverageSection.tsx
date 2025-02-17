import BlurredBackground from '@/components/common/blur/BlurredBackground'
import React from 'react'
import Image from 'next/image';
import moment from 'moment';

type Props = {}

const MediaCoverageSection = (props: Props) => {
    return (
        <div className='relative 3xl:py-20 py-16 '>
            <BlurredBackground className='-top-[10%] -left-[250px] -z-0' />

            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-8 gap-6 relative z-[1]'>
                <div className='space-x-2 font-extrabold'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>Báo chí nói về</span>
                    <span
                        className='text-title-section-small uppercase'
                        style={{
                            background: "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Foso
                    </span>
                </div>

                <div className='grid grid-cols-3 3xl:gap-6 gap-4 w-full'>
                    <div
                        className='col-span-1 rounded-2xl'
                        style={{
                            boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                        }}
                    >
                        <div className='aspect-3/2 w-full'>
                            <Image
                                width={500}
                                height={400}
                                alt="img"
                                src="/example/blog/example1.svg"
                                className='size-full object-cover rounded-t-2xl'
                            />
                        </div>
                        <div className='flex flex-col gap-2 p-4 bg-white rounded-b-2xl'>
                            <div className='flex items-center justify-between'>
                                <div className='text-sm-default text-[#667F93]'>
                                    14/08/2024
                                    {/* {moment('14/08/2024').format('DD/MM/YYYY')} */}
                                </div>

                                <div className='text-sm-default text-[#10805B]'>
                                    Doanh nhân Sài Gòn online
                                </div>
                            </div>

                            <div className="text-default text-[#273552] font-medium">
                                Doanh nghiệp chuyển đổi số mạnh mẽ cùng giải pháp phần mềm FMRP
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-span-1 '>
                        <div className='aspect-3/2 w-full'>
                            <Image
                                width={500}
                                height={400}
                                alt="img"
                                src="/background/robot/robot-hand-search.svg"
                                className='size-full object-cover'
                            />
                        </div>
                    </div>
                    <div className='col-span-1 '>
                        <div className='aspect-3/2 w-full'>
                            <Image
                                width={500}
                                height={400}
                                alt="img"
                                src="/background/robot/robot-hand-search.svg"
                                className='size-full object-cover'
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default MediaCoverageSection