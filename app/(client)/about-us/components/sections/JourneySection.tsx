import { uuidv4 } from '@/lib/uuid'
import { useResizeStore } from '@/stores/useResizeStore'
import { playwrite_is_sans } from '@/utils/fonts/fontUtils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

type Props = {}

const dataImage = [
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example1.webp"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example2.webp"
    },
    {
        id: uuidv4(),
        image: "/background/ui/about-us/example/example3.webp"
    },
]

const JourneySection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    return (
        <div className='custom-padding-section'>
            <div className='custom-container-no-right relative'>
                <div className='absolute lg:-top-8 -top-20 xl:-left-[108px] lg:-left-24 left-0 flex lg:-space-x-14 lg:-space-y-10 space-x-2 space-y-8'>
                    {
                        !isVisibleTablet ?
                            <div className='w-[120px] h-auto aspect-square lg:-rotate-[135deg]'>
                                <Image
                                    src="/icons/common/arrow/arrow-long.webp"
                                    alt="icon"
                                    width={200}
                                    height={200}
                                    className='size-full object-contain'
                                />
                            </div>
                            :
                            <div className='relative xl:w-[50px] w-11 h-auto aspect-1/2 left-4'>
                                <Image
                                    src="/background/ui/about-us/arrow-right-down.webp"
                                    alt="Mission Icon"
                                    width={200}
                                    height={200}
                                    className='size-full object-contain aspect-1/2'
                                    loading="lazy"
                                />
                            </div>
                    }

                    <div className={`${playwrite_is_sans.className} capitalize -rotate-[3deg] 3xl:!text-lg xl:!text-base lg:!text-sm !text-sm !tracking-[1%] text-[#4D5F6E] font-normal`}>
                        Chặng đường khởi tạo nên FOSO
                    </div>
                </div>

                <Marquee
                    speed={30}
                    pauseOnHover
                    autoFill
                    gradient={false}
                    className='rounded-l-xl'
                >
                    {dataImage.map((item, index) => (
                        <div key={`item-${index}`} className="3xl:w-[600px] xl:w-[480px] w-[380px] h-auto aspect-3/2 3xl:px-4 xl:px-3 px-2 flex items-center rounded-xl">
                            <Image
                                src={item.image}
                                alt={`item-${index}`}
                                width={800}
                                height={600}
                                className="size-full object-cover aspect-3/2 rounded-xl"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default JourneySection