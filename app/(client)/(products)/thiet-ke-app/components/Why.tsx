import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import React from 'react'

const Why = () => {
  const reasons = [
    {
      title: '1. Dày dặn kinh nghiệm',
      description:
        'Với hơn +9 năm kinh nghiệm thiết kế app, FOSO tự tin đáp ứng mọi nhu cầu của doanh nghiệp',
      icon: IMAGES.medal,
      positionClass: 'absolute top-[10%] right-[68%]',
      size: 'size-[53px] 2xl:size-[60px]',
      align: 'right' as const,
    },
    {
      title: '2. Quy trình rõ ràng',
      description:
        'Minh bạch bước lập kế hoạch dự án, triển khai thiết kế, lập trình cho đến khi hoàn thiện',
      icon: IMAGES.markerTick,
      positionClass: 'absolute top-[45%] right-[77%]',
      size: 'size-[53px] 2xl:size-[60px]',
      align: 'right' as const,
    },
    {
      title: '3. Chi phí hợp lý',
      description:
        'Bảng thông tin báo giá được cập nhật phù hợp nhất so với nhu cầu của từng doanh nghiệp',
      icon: IMAGES.handCoin,
      positionClass: 'absolute top-[80%] right-[72%]',
      size: 'size-[53px] 2xl:size-[60px]',
      align: 'right' as const,
    },
    {
      title: '4. Ngành nghề triển khai đa dạng',
      description:
        'Đội ngũ giàu kinh nghiệm chuyên môn, đáp ứng đa dạng mọi dự án',
      icon: IMAGES.bag,
      positionClass: 'absolute top-[10%] left-[68%]',
      size: 'size-[53px] 2xl:size-[60px]',
      align: 'left' as const,
    },
    {
      title: '5. Thấu hiểu khách hàng',
      description:
        'Tiếp nhận và giải quyết nhu cầu khách hàng nhanh chóng và kịp thời',
      icon: IMAGES.humanResources,
      positionClass: 'absolute top-[45%] left-[77%]',
      size: 'size-[48px] 2xl:size-[53px]',
      align: 'left' as const,
    },
    {
      title: '6. Hỗ trợ vận hành',
      description:
        'Hỗ trợ quá trình vận hành và các hoạt động triển khai ngoài thực tế',
      icon: IMAGES.rivet,
      positionClass: 'absolute top-[80%] left-[72%]',
      size: 'size-[48px] 2xl:size-[53px]',
      align: 'left' as const,
    },
  ]

  return (
    <div className='relative'>
      <div className='custom-container py-24'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h2 className='text-title-section-small text-center text-[#050505] font-extrabold capitalize'>
            Tại sao {' '}
            <span className='text-title-section-medium-fit-leading'
              style={{
                background: "linear-gradient(to bottom, #F3654A 0%, #FFB9AC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Doanh nghiệp
            </span> {' '} nên Thiết kế<br /> Mobile App tại{' '}
            <span className='text-title-section-medium-fit-leading'
              style={{
                background: "linear-gradient(to bottom, #85EEB3 0%, #53B086 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              FOSO
            </span></h2>
          <p className='text-base-default text-light-900 font-semibold'>Tại FOSO, chúng tôi biến mục tiêu kinh doanh của bạn thành trải nghiệm di động mượt mà.</p>
        </div>
        <div className='relative mt-4 flex flex-col gap-4 justify-center items-center'>
          <Image src={IMAGES.whyBanner} alt='whyBanner' width={1000} height={1000} className='w-[50%]' />

          {reasons.map((reason) => (
            <div key={reason.title} className={`${reason.positionClass} flex gap-2`}>
              {reason.align === 'left' && (
                <Image src={reason.icon} alt='bag' width={1000} height={1000} className={reason.size} />
              )}
              <div className={`flex flex-col gap-2 ${reason.align === 'right' ? 'items-end' : 'items-start'}`}>
                <h3 className='text-button text-orange-700 font-bold whitespace-nowrap'>{reason.title}</h3>
                <p className={`text-sm-default ${reason.align === 'right' ? 'text-right' : 'text-left'} text-light-900 font-semibold`}>{reason.description}</p>
              </div>
              {reason.align === 'right' && (
                <Image src={reason.icon} alt='bag' width={1000} height={1000} className={reason.size} />
              )}
            </div>
          ))}
        </div>
      </div>
      <Image src={IMAGES.blurOrange} alt="blurOrange" width={1000} height={1000} className='absolute -bottom-[35%] left-0 -translate-x-[30%] w-[50%] object-cover z-[-1] pointer-events-none' />
    </div>
  )
}

export default Why
