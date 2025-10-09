'use client'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import { IMAGES } from '@/constants/Images';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    title: 'Lập kế hoạch dự án',
    description: 'Tiếp nhận thông tin dự án, trao đổi yêu cầu với khách hàng và lên lịch triển khai.',
    image: IMAGES.procedure1,
  },
  {
    title: 'Triển khai thiết kế',
    description: 'Bộ phận dự án sẽ tiến hành triển khai thiết kế giao diện UI/UX.',
    image: IMAGES.procedure2,
  },
  {
    title: 'Lập trình dự án',
    description: 'Sau khi thống nhất bản thiết kế dự án với khách hàng, bộ phận dự án bắt đầu lập trình dự án.',
    image: IMAGES.procedure3,
  },
  {
    title: 'Hoàn thiện dự án',
    description: 'Gửi dự án cho khách hàng, nhận feedback và tiến hành chỉnh sửa hoàn thiện dự án.',
    image: IMAGES.procedure4,
  },
  {
    title: 'Bảo trì/ bảo hành',
    description: 'Theo dõi vận hành sau bàn giao, nhận phản hồi và xử lý sự cố, bảo trì định kỳ để app luôn ổn định.',
    image: IMAGES.procedure5,
  },
]

const Procedure = () => {
  return (
    <div className='relative py-24 flex flex-col items-center gap-10'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-title-section-medium-fit-leading text-center text-[#050505] font-extrabold capitalize'>
          <span
            style={{
              background: "linear-gradient(to bottom, #F3654A 0%, #FFB9AC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Quy trình
          </span>{" "}
          thiết kế app</h2>
        <p className='text-base-default text-light-900 font-semibold'>Biến ý tưởng thành ứng dụng hoàn chỉnh với quy trình rõ ràng.</p>
      </div>

      <div className='relative px-24 grid grid-cols-5 justify-between items-center gap-12'>
        <div className='absolute bottom-[88px] 2xl:bottom-[103px] left-1/2 -translate-x-1/2 w-[70%] 2xl:w-[75%] h-[1px] border-b border-dashed border-[#F3654A] z-[-1]'></div>
        {steps.map((step, index) => (
          <div key={index} className='flex flex-col h-full gap-8 items-center'>
            <Image src={step.image} alt={step.title} width={1000} height={1000} className='size-[100px] object-contain' />
            <div className='flex flex-col gap-4 items-center flex-1'>
              <h3 className='text-title text-[#050505] font-bold capitalize'> {step.title}</h3>
              <p className='text-sm-default text-center text-light-900 font-semibold'>{step.description}</p>
            </div>
            <div className='size-8 bg-orange-200 rounded-full flex items-center justify-center'>
              <span className='size-4 rounded-full bg-gradient-to-r from-[#F3654A] to-[#FFB9AC]'></span>
            </div>
            <span className='text-orange-700 text-title-section-medium-fit-leading font-semibold'>0{index + 1}</span>
          </div>
        ))}
      </div>
      <ButtonAnimationNew
        title="Tư vấn ngay"
        icon={
          <div className="2xl:size-12 md:size-10 size-[22px] rounded-full capitalize flex items-center justify-center bg-white duration-500 transition-colors">
            <motion.div
              initial={{ x: 0, y: 0 }}
              // animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <ArrowUpRightIcon className="text-[#F3654A] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
              <ArrowUpRightLinearBlueIcon className="text-[#F3654A] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
            </motion.div>
          </div>
        }
        // onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
        // onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
        onClick={() => {
          window.open("https://zalo.me/2281264205827497572");
        }}
        reverse={true}
        className="border-gradient-orange xl:pl-6 xl:p-1 pl-3 p-2 text-white lg:mr-0 mr-1 flex items-center text-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium rounded-full w-full xl:w-fit"
        style={{
          boxShadow:
            "0px -1px 2px 0px #FFFFFF4D inset, 0px -2px 5px 1px #FFFFFF1F inset, 0px 1px 2px 0px #151A364D inset, 0px 2px 6px 0px #151A3626 inset, 0px -2px 14px 0px #FFFFFF26 inset, 0px 20px 26px -8px #0F163A26",
          background: "linear-gradient(90deg, #F3654A 0%, #FFB9AC 100%)",
          border: "1px solid #FAC1B7",
        }}
        whileHover={{
          background: [
            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #F3654A 10.03%, #FFB9AC 107.74%)",
            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #F3654A 10.03%, #FFB9AC 107.74%)",
            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #F3654A 10.03%, #FFB9AC 107.74%)",
          ],
          transition: {
            duration: 1.5,
            ease: [0.4, 0, 0.6, 1],
            repeat: Infinity,
          },
          boxShadow: [
            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)",
          ],
        }}
      />

      <Image src={IMAGES.blurOrange} alt="blurOrange" width={1000} height={1000} className='absolute -bottom-[50%] right-0 translate-x-[40%] w-[40%] object-cover z-[-1] pointer-events-none' />
    </div>
  )
}

export default Procedure
