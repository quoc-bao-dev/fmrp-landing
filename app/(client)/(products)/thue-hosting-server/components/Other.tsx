"use client"
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

const otherCards = [
  {
    title: 'Thiết kế Web/App chuyên nghiệp',
    image: IMAGES.designWeb,
    link: 'https://thietkewebfoso.com/',
  },
  {
    title: 'FMRP - Dẫn đầu xu thế trong quản lý sản xuất',
    image: IMAGES.fmrp,
    link: '/phan-mem-quan-ly-san-xuat-fmrp',
  },
  {
    title: 'Thiết kế Mobile App chuyên nghiệp',
    image: IMAGES.designApp,
    link: '/thiet-ke-app-mobile',
  },
]

const Other = () => {
  const titlePart1 = useMemo(() => 'một số sản phẩm & dịch vụ khác tại '.split('').map((letter, i) => ({ id: i, letter })), [])
  const titlePart2 = useMemo(() => 'FOSO'.split('').map((letter, i) => ({ id: i + 100, letter })), [])
  return (
    <div className='custom-container-new flex flex-col gap-10 xl:gap-20'>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <h2 className='text-center lg:text-left text-title-section-medium-fit-leading font-extrabold text-[#050505] capitalize'>
          <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#050505]' heroPerTitle={titlePart1} delay={0.1} />
          <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#53B086]' heroPerTitle={titlePart2} delay={0.6} />
        </h2>
        <p className='text-center lg:text-left text-title-feature text-light-900 font-semibold'>Bảo trì & Bảo hành giúp Web/App chạy mượt mà, tối ưu hiệu năng để ổn định tài nguyên.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10'>
        {otherCards.map((card, index) => (
          <Link key={index} href={card.link} className='relative group cursor-pointer'>
            <div className='relative w-full aspect-[416/483] flex flex-col justify-between gap-3 rounded-[32px] bg-[#EEEFFE] group-hover:bg-[#5856D6] transition-colors duration-300 border border-white'
              style={{
                WebkitMaskImage: 'url(/server/maskServer.png)',
                maskImage: 'url(/server/maskServer.png)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}>
              <h3 className='px-9 md:px-4 lg:px-9 py-4 md:py-2 lg:py-4 border-b-2 border-[#BA90FF59] text-xl md:text-base xl:text-2xl font-bold text-[#58576B] group-hover:text-white transition-colors duration-300'>{card.title}</h3>
              <div className='relative w-full aspect-[416/342] overflow-hidden group-hover:translate-y-[-2px] group-hover:scale-[105%] transition-transform duration-300'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[90%] rounded-[32px] bg-[#BBBEFA]/50 group-hover:bg-[#999DF8]/50 transition-colors duration-300 z-[1]' />
                <div className='absolute top-5 md:top-3 lg:top-5 left-1/2 -translate-x-1/2 w-[90%] h-[90%] rounded-[32px] bg-[#999DF8] group-hover:bg-[#BBBEFA] transition-colors duration-300 z-[2]' />
                <Image src={card.image} alt='designWeb' width={1000} height={1000} className='absolute top-10 md:top-6 lg:top-10 left-1/2 -translate-x-1/2  w-full aspect-[416/307] rounded-[32px] object-cover z-[10]' />
              </div>
            </div>
            <div className="absolute z-[20] bottom-0 right-0 size-24 md:size-14 lg:size-20 xl:size-24 2xl:size-32 rounded-full p-5 md:p-3 lg:p-5 bg-[#1D2939] group-hover:bg-[#5856D6] transition-colors duration-300">
              <ArrowUpRightIcon className='text-white size-full' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Other
