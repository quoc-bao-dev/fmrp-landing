import NailIcon from '@/components/icons/design-app/NailIcon'
import SellIcon from '@/components/icons/design-app/SellIcon'
import ServiceIcon from '@/components/icons/design-app/ServiceIcon'
import SocialIcon from '@/components/icons/design-app/SocialIcon'
import SystemIcon from '@/components/icons/design-app/SystemIcon'
import Image from 'next/image'
import React from 'react'

const solution = [
  {
    icon: <SellIcon />,
    title: 'Bán hàng',
    description: 'Bán hàng',
  },
  {
    icon: <ServiceIcon />,
    title: 'Dịch vụ',
    description: 'Dịch vụ',
  },
  {
    icon: <NailIcon />,
    title: 'Nail & Spa',
    description: 'Nail & Spa',
  },
  {
    icon: <SocialIcon />,
    title: 'Mạng xã hội',
    description: 'Mạng xã hội',
  },
  {
    icon: <SystemIcon />,
    title: 'Hệ thống nội bộ',
    description: 'Hệ thống nội bộ',
  },
]

const Solution = () => {
  return (
    <div className='relative'>
      <div className='custom-container-new flex flex-col items-center justify-center 3xl:gap-11 xl:gap-10 lg:gap-8 gap-4'>
        <div className='flex flex-col gap-3 xl:gap-10 justify-center items-center'>
          <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-title-section-medium-fit-leading text-center text-[#050505] font-extrabold capitalize'>
              <span
                style={{
                  background: "linear-gradient(to bottom, #F3654A 0%, #FFB9AC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                giải pháp
              </span>{" "}
              toàn diện cho đa ngành nghề</h2>
            <p className='text-base-default text-center xl:text-left text-light-900 font-semibold'>Chuyển đổi linh hoạt, thiết kế riêng cho mỗi mô hình kinh doanh.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-y-0 gap-9'>
            <button className='py-2 xl:py-3 border-b border-orange-700 flex gap-4 items-center'>
              <SellIcon className='size-4 xl:size-6 text-orange-700 flex-shrink-0' />
              <span className='text-base-default text-orange-700 font-semibold whitespace-nowrap'>Bán hàng</span>
            </button>
            <button className='py-2 xl:py-3 border-b border-transparent flex gap-4 items-center'>
              <ServiceIcon className='size-4 xl:size-6 text-light-700 flex-shrink-0' />
              <span className='text-base-default text-light-700 font-semibold whitespace-nowrap'>Dịch vụ</span>
            </button>
            <button className='py-2 xl:py-3 border-b border-transparent flex gap-4 items-center'>
              <NailIcon className='size-4 xl:size-6 text-light-700 flex-shrink-0' />
              <span className='text-base-default text-light-700 font-semibold whitespace-nowrap'>Nail & Spa</span>
            </button>
            <button className='py-2 xl:py-3 border-b border-transparent flex gap-4 items-center'>
              <SocialIcon className='size-4 xl:size-6 text-light-700 flex-shrink-0' />
              <span className='text-base-default text-light-700 font-semibold whitespace-nowrap'>Mạng xã hội</span>
            </button>
            <button className='py-2 xl:py-3 border-b border-transparent flex gap-4 items-center'>
              <SystemIcon className='size-4 xl:size-6 text-light-700 flex-shrink-0' />
              <span className='text-base-default text-light-700 font-semibold whitespace-nowrap'>Hệ thống nội bộ</span>
            </button>
          </div>
          <Image src="/design-app/solutionBanner.png" alt='solution' width={2000} height={2000} className='w-full rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Solution
