"use client"
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle'
import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const reasons = [
  {
    title: '9+',
    description: 'Năm kinh nghiệm',
    icon: IMAGES.experience,
  },
  {
    title: '1000+',
    description: 'Khách hàng tin tưởng',
    icon: IMAGES.client,
  },
  {
    title: '100+',
    description: 'Dự án nổi bật',
    icon: IMAGES.project,
  },
  {
    title: '24/7',
    description: 'Đội ngủ hỗ trợ',
    icon: IMAGES.team,
  },
]

const Why = () => {
  const titlePart1 = useMemo(() => 'Lý do lựa chọn đồng hành cùng '.split('').map((letter, i) => ({ id: i, letter })), [])
  const titlePart2 = useMemo(() => 'FOSO'.split('').map((letter, i) => ({ id: i + 100, letter })), [])
  return (
    <div className='relative w-full'>
      <div className='px-4 lg:px-10 grid grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-10'>
        <div className='col-span-2 lg:col-span-1 lg:row-span-2 flex justify-center items-center'>
          <h2 className='text-center text-title-section-medium text-light-1000 font-extrabold capitalize'>
            <AnimatedTitle className='text-title-section-medium text-light-1000 font-extrabold' heroPerTitle={titlePart1} delay={0.1} />
            <AnimatedTitle className='text-title-section-medium font-extrabold text-[#10805B]' heroPerTitle={titlePart2} delay={0.6} />
          </h2>
        </div>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className='p-2 lg:p-6 flex gap-2 lg:gap-6 items-center rounded-2xl xl:rounded-3xl 2xl:rounded-[32px] bg-white border border-[#DAD8D8] cursor-pointer'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
            whileHover={{ y: -4, scale: 1.01, boxShadow: '0px 10px 24px rgba(15,22,58,0.18)' }}
            style={{ willChange: 'transform, box-shadow' }}
          >
            <Image src={reason.icon} alt='experience' width={1000} height={1000} className='w-[32px] xl:w-[92px] object-cover' />
            <div className='flex flex-col'>
              <h3 className='text-[#58576B] font-semibold text-base lg:text-2xl xl:text-3xl 2xl:text-5xl'>{reason.title} </h3>
              <p className='text-sm lg:text-base xl:text-xl 2xl:text-3xl text-[#424150] font-medium'>{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute top-[-10%] left-0 -translate-x-[40%] w-full xl:w-1/3 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.blurBlueGreen} alt="blurBlueGreen" width={1000} height={1000} className='absolute top-[-20%] right-0 w-full xl:w-1/2 object-cover z-[-1] pointer-events-none' />
    </div>
  )
}

export default Why
