import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import React from 'react'

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
  return (
    <div className='relative px-10 grid grid-cols-1 md:grid-cols-3 gap-10'>
      <div className='row-span-2 flex justify-center items-center'>
        <h2 className='text-center text-title-section-medium text-light-1000 font-extrabold capitalize'>
          Lý do lựa chọn đồng hành cùng{' '}
          <span className='text-[#10805B]'>
            FOSO
          </span>
        </h2>
      </div>
      {reasons.map((reason, index) => (
        <div key={index} className='p-6 flex gap-6 items-center rounded-[32px] bg-white border border-[#DAD8D8]'>
          <Image src={reason.icon} alt='experience' width={1000} height={1000} className='w-[92px] object-cover' />
          <div className='flex flex-col'>
            <h3 className='text-[#58576B] font-semibold text-title-section-medium-fit-leading'>{reason.title} </h3>
            <p className='text-title-section-feature text-[#424150] font-medium'>{reason.description}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Why
