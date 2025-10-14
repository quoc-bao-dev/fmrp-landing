'use client'
import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import { IMAGES } from '@/constants/Images';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp", href: "#" },
  { label: "Thuê Hosting & Server" },
];

const Hero = () => {
  return (
    <div className='relative'>
      <div className='custom-container-new h-full 3xl:pt-32 xl:pt-28 pt-28 flex flex-col justify-center items-center gap-6 py-12'>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className='flex gap-4 items-center justify-center'>
          <div className='flex flex-col gap-7'>
            <h2 className='text-title-section-1 font-extrabold text-[#58576B] capitalize whitespace-nowrap'>Dịch vụ <span className='text-[#2129C3]'>
              Thuê Server
            </span><br />
              & <span className='text-[#2129C3]'>F-Care+</span> (Bảo trì Web/App)</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-light-1000 text-title-section-medium-fit-leading font-semibold capitalize'>trọn gói dành cho doanh nghiệp</p>
              <p className='text-title text-light-1000 font-medium'>Đội ngũ FOSO đồng hành cùng bạn trên chặng đường kinh doanh với ba giá trị cốt lõi: Tốc độ - An toàn - Tiết kiệm</p>
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
                    <ArrowUpRightIcon className="text-[#5856D6] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                    <ArrowUpRightLinearBlueIcon className="text-[#5856D6] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                  </motion.div>
                </div>
              }
              // onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
              // onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
              onClick={() => {
                window.open("https://zalo.me/2281264205827497572");
              }}
              reverse={true}
              className="border-gradient-button-fmrp-active bg-[#5856D6] hover:bg-[#4a48bf] border border-[#DBCEFA] xl:pl-6 xl:p-1 pl-3 p-2 text-white lg:mr-0 mr-1 flex items-center text-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!backdrop-blur-[100px] hover:!backdrop-filter font-semibold rounded-full w-fit"
              style={{
                boxShadow:
                  "0px -1px 2px 0px #FFFFFF4D inset, 0px -2px 5px 1px #FFFFFF1F inset, 0px 1px 2px 0px #151A364D inset, 0px 2px 6px 0px #151A3626 inset, 0px -2px 14px 0px #FFFFFF26 inset, 0px 20px 26px -8px #0F163A26",
              }}
            />
          </div>
          <Image src={IMAGES.giftBanner} width={725} height={725} alt="giftBanner" className='w-[45%]' />
        </div>
      </div>
      <Image src={IMAGES.blurBlueGreen} alt="blurBlueGreen" width={1000} height={1000} className='absolute top-0 right-0 w-full h-full object-cover z-[-1] pointer-events-none' />
    </div>
  )
}

export default Hero
