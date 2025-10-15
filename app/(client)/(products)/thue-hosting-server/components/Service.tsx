'use client'
import AnimatedTitle from '@/components/common/animations/text/AnimatedTitle'
import { IMAGES } from '@/constants/Images'
import { useResizeStore } from '@/stores/useResizeStore'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

const services = [
  {
    title: 'Bảo trì & Bảo hành',
    description: 'Theo dõi hời gian hoạt động, lỗi và cảnh báo ngay khi có rủi ro.',
    icon: IMAGES.upTime,
  },
  {
    title: 'Bảo mật chủ động',
    description: 'Quản lý quyền truy cập chặt chẽ và chính sách bảo mật hệ thống.',
    icon: IMAGES.security,
  },
  {
    title: 'Bảo trì định kỳ',
    description: 'Cập nhật nền tảng, plug-in, framework, kiểm tra backup và cấu hình chuẩn.',
    icon: IMAGES.maintenance,
  },
  {
    title: 'Vận hành & Hỗ trợ',
    description: 'Tiếp nhận và xử lý lỗi hệ thống, hỗ trợ đào tạo nhân sự mới.',
    icon: IMAGES.operate,
  },
  {
    title: 'Lộ trình nâng cấp liên tục',
    description: 'Cung cấp báo cáo và đề xuất hiệu năng, bảo mật, chi phí.',
    icon: IMAGES.route,
  },
  {
    title: 'Tối ưu tốc độ tải trang',
    description: 'Tối ưu cơ sở dữ liệu và cấu hình máy chủ, tăng tốc hiển thị.',
    icon: IMAGES.speed,
  },
]

const procedures = [
  {
    step: 1,
    title: 'Tiếp nhận thông tin',
    description: 'Quý khách hàng cung cấp thông tin về dự án, yêu cầu và nhu cầu của mình.',
    descriptionMB: 'Thu thập mục tiêu, hiện trạng Web/App, hạ tầng.',
    position: 'top-[7%] left-1/3 md:top-0 md:left-0',
  },
  {
    step: 2,
    title: 'Tư vấn và báo giá',
    description: 'Đề xuất giải pháp tối ưu tốc độ, an toàn, chi phí đi kèm.',
    descriptionMB: 'Đề xuất giải pháp tối ưu tốc độ, an toàn, chi phí đi kèm.',
    position: 'top-[32%] right-[22%] md:top-0 md:-bottom-9 md:left-1/4 md:right-0',
  },
  {
    step: 3,
    title: 'Triển khai kế hoạch',
    description: 'Thực hiện các hạng mục ưu tiên',
    descriptionMB: 'Thực hiện các hạng mục ưu tiên',
    position: 'top-[58%] left-[21%] md:-top-6 md:left-1/2',
  },
  {
    step: 4,
    title: 'Vận hành và tối ưu',
    description: 'Cập nhật và tối ưu hiệu năng định kỳ',
    descriptionMB: 'Cập nhật và tối ưu hiệu năng định kỳ',
    position: 'top-[80%] right-[26%] md:top-[-40%] md:-bottom-10 md:right-0',
  },
]

const Service = () => {
  const { isVisibleMobile } = useResizeStore()
  const title1Part1 = useMemo(() => 'dịch vụ '.split('').map((letter, i) => ({ id: i, letter })), [])
  const title1Part2 = useMemo(() => 'F-Care+'.split('').map((letter, i) => ({ id: i + 100, letter })), [])
  const title1Part3 = useMemo(() => ' (Bảo trì Web/App) tại '.split('').map((letter, i) => ({ id: i + 200, letter })), [])
  const title1Part4 = useMemo(() => 'FOSO'.split('').map((letter, i) => ({ id: i + 300, letter })), [])

  const title2Part1 = useMemo(() => 'Quy trình '.split('').map((letter, i) => ({ id: i, letter })), [])
  const title2Part2 = useMemo(() => 'F-Care+'.split('').map((letter, i) => ({ id: i + 100, letter })), [])

  return (
    <div className='relative mb-20'>
      <div className='custom-container-new flex flex-col gap-6 xl:gap-20'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h2 className='text-center lg:text-left text-title-section-medium-fit-leading font-extrabold text-[#050505] capitalize'>
            <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#050505]' heroPerTitle={title1Part1} delay={0.1} />
            <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#2129C3]' heroPerTitle={title1Part2} delay={0.35} />
            <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#050505]' heroPerTitle={title1Part3} delay={0.6} />
            <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#53B086]' heroPerTitle={title1Part4} delay={0.85} />
          </h2>
          <p className='text-center lg:text-left text-title-feature text-light-900 font-semibold'>Bảo trì & Bảo hành giúp Web/App chạy mượt mà, tối ưu hiệu năng để ổn định tài nguyên.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4 xl:gap-y-32 gap-x-2 xl:gap-x-14'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col gap-2 lg:gap-4 xl:gap-6 items-center justify-center'>
              <div className='w-[53px] h-[48px] xl:w-[140px] xl:h-[126px] shrink-0 rounded-xl xl:rounded-[20px] p-2 xl:p-5 bg-[#2129C31A]'>
                <Image src={service.icon} alt='maintenance' width={1000} height={1000} className='w-full h-full object-contain' />
              </div>
              <div className='flex flex-col gap-2 lg:gap-3 items-center justify-center'>
                <h3 className='text-title-section-feature text-center font-semibold text-[#424150]'>{service.title}</h3>
                <p className='w-full lg:w-[70%] text-sm-default !text-xs text-center font-semibold text-[#424150]'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-16 items-center justify-center mt-10'>
          <div className='flex flex-col gap-2 lg:gap-3 items-center justify-center'>
            <h2 className='text-title-section-medium-fit-leading font-extrabold text-[#050505] capitalize'>
              <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#050505]' heroPerTitle={title2Part1} delay={0.1} />
              <AnimatedTitle className='text-title-section-medium-fit-leading font-extrabold text-[#2129C3]' heroPerTitle={title2Part2} delay={0.45} />
            </h2>
            <p className='text-center lg:text-left text-title-feature text-light-900 font-semibold'>Quy trình tinh gọn, đảm bảo đáp ứng nhu cầu của Quý khách hàng.</p>
          </div>
          <div className='relative w-full h-full'>
            <Image src={IMAGES.lineProceduce} alt='lineProceduce' width={1000} height={1000} className='hidden md:block w-full h-full object-cover' />
            <Image src={IMAGES.lineProceduceMB} alt='lineProceduce' width={1000} height={1000} className='md:hidden w-[50%] mx-auto h-full object-cover' />
            {procedures.map((procedure, index) => (
              <motion.div
                key={index}
                className={`w-2/3 md:w-1/4 absolute ${procedure.position} flex md:flex-col gap-2 md:gap-3 justify-center items-center`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                style={{ willChange: 'transform, opacity' }}
              >
                {procedure.step % 2 === 1 && (
                  <div className='flex items-center justify-center size-10 md:size-12 lg:size-[54px] aspect-square flex-shrink-0 rounded-full bg-[#3EA0FE] border border-[#8CB4EF] backdrop-blur-[24px] text-white text-title-section-small font-bold'>
                    {procedure.step}
                  </div>
                )}
                <div className='flex flex-col justify-center items-center gap-2'>
                  <h3 className='text-title text-center font-semibold text-[#424150]'>{procedure.title}</h3>
                  <p className='w-full lg:w-[70%] text-sm-default text-center font-semibold text-light-900'>{isVisibleMobile ? procedure.descriptionMB : procedure.description}</p>
                </div>
                {procedure.step % 2 === 0 && (
                  <div className='flex items-center justify-center size-10 md:size-12 lg:size-[54px] aspect-square flex-shrink-0 rounded-full bg-[#3EA0FE] border border-[#8CB4EF] backdrop-blur-[24px] text-white text-title-section-small font-bold'>
                    {procedure.step}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Image src={IMAGES.blurBlueGreen} alt="blurBlueGreen" width={1000} height={1000} className='absolute top-[10%] left-0 -translate-x-[50%] w-full xl:w-2/3 object-cover z-[-1] pointer-events-none' />
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute bottom-[-10%] right-0 translate-x-[40%] w-full xl:w-1/3 z-[-1] object-cover pointer-events-none' />
    </div>
  )
}

export default Service
