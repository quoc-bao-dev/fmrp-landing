"use client"
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew'
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon'
import { IMAGES } from '@/constants/Images'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const FMRPSolutions = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="xl:custom-padding-section custom-container px-2 xl:px-0 flex flex-col gap-8 xl:gap-24 justify-center items-center">
      <div className='flex flex-col gap-6 xl:gap-12 py-12 xl:py-24 items-center'>
        <div className='flex flex-col items-center gap-3'>
          <h2 className="text-title-section-small text-[#1A2025] font-extrabold text-center capitalize">
            <span
              style={{
                background:
                  "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ứng dụng FMRP
            </span> {" "}
            – Tối ưu vận hành, gia tăng hiệu suất
          </h2>
          <p className="text-base-default-feature text-[#33404A] font-medium">
            Mỗi ứng dụng phù hợp với nhu cầu của từng doanh nghiệp
          </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-6'>
          <div className='flex gap-6 bg-[#E4EFFF] p-4 rounded-xl'>
            <Image src={IMAGES.appLuongSanLuong} width={200} height={200} alt="app-luong-san-luong" className='size-[100px] object-cover' />
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold text-[#1C252E] capitalize'>Lương sản lượng</h3>
              <p className='text-sm text-[#141522]/80'>
                Thống kê lương và giờ làm của công nhân dựa trên sản lượng thực tế.
              </p>
            </div>
          </div>
          <div className='flex gap-6 bg-[#E4EFFF] p-4 rounded-xl'>
            <Image src={IMAGES.appGiaCongNgoai} width={200} height={200} alt="app-luong-san-luong" className='size-[100px] object-cover' />
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold text-[#1C252E] capitalize'>Gia công ngoài</h3>
              <p className='text-sm text-[#141522]/80'>
                Quản lý đơn gia công, theo dõi sản lượng và chi phí gia công theo từng đối tác
              </p>
            </div>
          </div>
          <div className='flex gap-6 bg-[#E4EFFF] p-4 rounded-xl'>
            <Image src={IMAGES.appAPIMisa} width={200} height={200} alt="app-luong-san-luong" className='size-[100px] object-cover' />
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold text-[#1C252E] capitalize'>API phần mềm kế toán Misa</h3>
              <p className='text-sm text-[#141522]/80'>
                Kết nối hệ thống, đồng bộ dữ liệu nhanh chóng và chính xác.
              </p>
            </div>
          </div>
        </div>
        <ButtonAnimationNew
          title="Xem tất cả ứng dụng"
          icon={
            <div className="2xl:size-12 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {isHovered ? (
                  <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
                ) : (
                  <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4 text-[#036EEA]" />
                )}
              </motion.div>
            </div>
          }
          onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
          onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
          onClick={() => {
            window.open("https://bom.so/mrpbeta");
          }}
          reverse={true}
          className="border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
          style={{
            background:
              "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            WebkitBackdropFilter: "blur(15px)", // Safari
            boxShadow:
              "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
          }}
        />
      </div>

      <div className='flex flex-col gap-10 py-12 xl:py-24 items-center w-full relative'>
        <Image src={IMAGES.blurBlueGreen} width={1000} height={1000} alt="rocket-boy" className='w-[120%] absolute top-1/2 -right-1/3 -translate-y-1/2 -translate-x-1/2' />
        <Image src={IMAGES.blurBlueGreen} width={1000} height={1000} alt="rocket-boy" className='w-[120%] absolute top-1/2 -right-2/3 -translate-y-1/2 -translate-x-1/2' />
        <div className='flex flex-col items-center gap-3'>
          <h2 className="text-title-section-small text-[#1A2025] font-extrabold text-center capitalize">
            Giải pháp số hóa sản xuất từ{" "}
            <span
              style={{
                background:
                  "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FMRP
            </span>
          </h2>
          <p className="text-base-default-feature text-[#33404A] font-medium">
            Tối ưu sản xuất từ kế hoạch đến vận hành
          </p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-3 xl:gap-7 2xl:px-[6%]'>
          <div className='flex flex-col gap-4 bg-white p-3 xl:p-6 rounded-xl row-span-3 z-[3] shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]'>
            <h3 className='text-2xl font-bold text-[#33404A]'>Kết nối kinh doanh và sản xuất</h3>
            <p className='text-lg font-medium text-[#33404A] text-justify'>FMRP giúp liên kết dữ liệu giữa bán hàng, kế hoạch và xưởng sản xuất, đảm bảo mọi quyết định kinh doanh đều bám sát năng lực sản xuất thực tế, hạn chế sai lệch và tồn kho dư thừa.</p>
            <div className='relative'>
              <Image src={IMAGES.dashboard} width={1000} height={1000} alt="dashboard" className='w-full object-cover' />
              <Image src={IMAGES.rocketBoy} width={1000} height={1000} alt="rocket-boy" className='w-1/2 absolute bottom-0 -right-[15%] object-cover' />
            </div>
          </div>
          <div className='flex flex-col gap-4 bg-white p-3 xl:p-6 rounded-xl z-[2] shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]'>
            <h3 className='text-2xl font-bold text-[#33404A]'>Tự động hóa & tích hợp thiết bị</h3>
            <p className='text-lg font-medium text-[#33404A] text-justify'>Kết nối với máy quét mã vạch, thiết bị sản xuất và các hệ thống liên quan, giúp tự động ghi nhận dữ liệu, giảm thao tác thủ công và tăng độ chính xác trong vận hành.</p>
          </div>
          <div className='flex flex-col gap-4 bg-white p-3 xl:p-6 rounded-xl z-[2] shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]'>
            <h3 className='text-2xl font-bold text-[#33404A]'>Tối ưu nguyên vật liệu & phụ phẩm</h3>
            <p className='text-lg font-medium text-[#33404A] text-justify'>FMRP hỗ trợ quản lý định mức và tận dụng phụ phẩm trong sản xuất, giúp giảm thất thoát, tối ưu chi phí và nâng cao hiệu quả sử dụng nguyên vật liệu.</p>
          </div>
          <div className='flex flex-col gap-4 bg-white p-3 xl:p-6 rounded-xl z-[2] shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]'>
            <h3 className='text-2xl font-bold text-[#33404A]'>Tích hợp trợ lý AI</h3>
            <p className='text-lg font-medium text-[#33404A] text-justify'>Fimo AI phân tích sản phẩm, đề xuất BOM và kế hoạch sản xuất tối ưu, giúp rút ngắn đến 80% thời gian setup và nâng cao hiệu suất.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FMRPSolutions
