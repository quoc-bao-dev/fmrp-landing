'use client'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import { IMAGES } from '@/constants/Images';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    logo: IMAGES.logoKanow,
    name: 'Kanow',
    color: 'text-[#1EAAB1]',
    image: IMAGES.kanow,
    qr: IMAGES.qr,
  },
  {
    logo: IMAGES.logoSPMobile,
    name: 'Support Mobile',
    color: 'text-[#CC1A22]',
    image: IMAGES.supportMobile,
    qr: IMAGES.qr,
  },
  {
    logo: IMAGES.logoTheOM,
    name: 'The OM Lounge',
    color: 'text-[#98724F]',
    image: IMAGES.theOM,
    qr: IMAGES.qr,
  },
  {
    logo: IMAGES.logoFnb,
    name: 'FnB vn',
    color: 'text-[#FF5A1F]',
    image: IMAGES.fnb,
    qr: IMAGES.qr,
  },
  {
    logo: IMAGES.logoHomeCare,
    name: 'Home Care',
    color: 'text-[#086EB8]',
    image: IMAGES.homeCare,
    qr: IMAGES.qr,
  },
];

const Project = () => {

  return (
    <div className='relative flex flex-col gap-4 xl:gap-10'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-title-section-small text-center text-[#050505] font-extrabold capitalize'>
          Các {' '}
          <span className='text-title-section-medium-fit-leading'
            style={{
              background: "linear-gradient(to bottom, #F3654A 0%, #FFB9AC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            dự án
          </span> {' '} mobile app nổi bật
        </h2>
        <p className='text-base-default text-center text-light-900 font-semibold'>Với FOSO, bạn sẽ sở hữu ứng dụng chuyên nghiệp, đẹp mắt và tối ưu.</p>
      </div>
      <motion.div 
        className='flex overflow-x-auto xl:overflow-visible xl:grid grid-cols-3 gap-y-10 gap-x-2 xl:gap-x-[100px] xl:max-w-[1016px] mx-auto'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className='flex flex-col items-center'
            variants={{
              hidden: { 
                opacity: 0,
                y: 30
              },
              visible: { 
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut"
                }
              }
            }}
          >
            <div className='flex justify-center items-center w-fit gap-1.5 py-1.5 px-3 rounded-full bg-[#F9F9F9]'>
              <Image src={project.logo} alt='logo' width={1000} height={1000} className='w-4 xl:w-7 object-cover' />
              <span className={`text-base-default font-bold whitespace-nowrap ${project.color}`}>{project.name}</span>
            </div>
            <div>
              <Image src={project.image} alt='kanow' width={1000} height={1000} className='min-w-[114px] max-w-[114px] xl:min-w-[234px] xl:max-w-[234px] object-cover' />
            </div>
            <div className='flex flex-col gap-2 xl:gap-4 items-center justify-center'>
              <Link href='/du-an' className='text-xs border-gradient-button-no-bg-orange xl:text-base font-bold bg-gradient-to-r from-[#F3654A] to-[#FFB9AC] transition-all duration-300 border border-orange-300 rounded-full py-1 xl:py-2 px-4 text-white shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'>Xem chi tiết</Link>
              <Image src={project.qr} alt='qr' width={1000} height={1000} className='size-10 xl:size-[82px] rounded-2xl object-cover' />
            </div>
          </motion.div>
        ))}
        <motion.div 
          className='hidden xl:block py-3 px-6 my-auto mx-auto w-[80%] aspect-square rounded-[20px] bg-gradient-to-r from-white to-white/20 shadow-[5px_5px_20px_0px_#EB575740] relative'
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: projects.length * 0.2,
            ease: "easeOut"
          }}
        >
          <div className='absolute inset-0 rounded-[20px] bg-gradient-to-r from-[rgba(208,58,9,0.5)] to-[rgba(244,138,138,0.3)] p-[2px] pointer-events-none'>
            <div className='w-full h-full rounded-[18px] bg-gradient-to-r from-white to-white/20'></div>
          </div>
          <div className='h-full relative z-10 flex flex-col gap-5 items-center justify-center'>
            <p className='text-title font-extrabold capitalize text-[#050505] text-center'>Xem thêm các dự án khác</p>
            <Link href='/du-an' className='text-button border-gradient-button-no-bg-orange text-base-default text-[#25272A] font-semibold bg-white py-2 px-5 rounded-full border border-light-300 shadow-[0px_1px_2px_0px_#B3ADAD0D,0px_4px_4px_0px_#B3ADAD0A,0px_9px_5px_0px_#B3ADAD08,0px_16px_6px_0px_#B3ADAD03,0px_25px_7px_0px_#B3ADAD00]'>
              Xem thêm
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <Link href='/du-an' className='xl:hidden text-button w-fit mx-auto text-base-default text-[#25272A] font-semibold bg-white py-2 px-5 rounded-full border border-light-300 shadow-[0px_1px_2px_0px_#B3ADAD0D,0px_4px_4px_0px_#B3ADAD0A,0px_9px_5px_0px_#B3ADAD08,0px_16px_6px_0px_#B3ADAD03,0px_25px_7px_0px_#B3ADAD00]'>
        Xem thêm
      </Link>
    </div>
  )
}

export default Project
