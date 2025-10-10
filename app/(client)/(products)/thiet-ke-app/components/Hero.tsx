'use client'
import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightLinearBlueIcon from '@/components/icons/common/ArrowUpRightLinearBlueIcon';
import { IMAGES } from '@/constants/Images';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp", href: "#" },
  { label: "Thiết kế app mobile" },
];

const Hero = () => {
  // Mảng hình ảnh để chuyển đổi
  const mockupImages = [
    IMAGES.mockupApp,
    "/design-app/mockup1.png", // Thêm các hình khác nếu có
    "/design-app/mockup1.png", // Có thể thay bằng hình khác
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Mặc định phải
  const [isAnimating, setIsAnimating] = useState(false);
  const panelCount = mockupImages.length;
  const angle = 360 / panelCount;
  const [rotation, setRotation] = useState(0); // độ xoay hiện tại của trụ 3D

  const nextImage = () => {
    if (isAnimating) return; // Đang animate thì không cho bấm
    setIsAnimating(true);
    setDirection(1); // Phải
    setRotation((prev) => prev - angle);
    setCurrentImageIndex((prev) => (prev + 1) % mockupImages.length);
  };

  const prevImage = () => {
    if (isAnimating) return; // Đang animate thì không cho bấm
    setIsAnimating(true);
    setDirection(-1); // Trái
    setRotation((prev) => prev + angle);
    setCurrentImageIndex((prev) => (prev - 1 + mockupImages.length) % mockupImages.length);
  };

  return (
    <div className='relative'>
      <div className='custom-container-new h-full 3xl:pt-32 xl:pt-28 pt-28 flex flex-col justify-center items-center gap-6 py-12'>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className='flex flex-col-reverse xl:flex-row gap-9 xl:gap-20 2xl:gap-24 items-center w-full h-full'>
          <div className='flex flex-col gap-9 w-full xl:w-[40%]'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col justify-center items-center xl:items-start'>
                <h2 className='capitalize text-title-section-2 font-extrabold whitespace-nowrap'>
                  Giải pháp <span className='text-[#F3654A]'>mobile app </span><br />
                </h2>
                <h2 className='capitalize text-title-section-2 font-extrabold whitespace-nowrap'>
                  toàn diện cho doanh nghiệp </h2>
              </div>
              <p className='text-base-default w-full xl:w-[90%] text-center xl:text-left font-semibold text-light-900'>FOSO không chỉ thiết kế app, mà còn giúp bạn kể câu chuyện thương hiệu qua từng cú chạm – độc đáo, tinh tế và đậm chất riêng.</p>
            </div>
            <div className="flex flex-col xxs:flex-row items-center justify-center xl:justify-start gap-3 w-full">
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
                className="border-gradient-orange xl:pl-6 xl:p-1 pl-3 p-2 text-white lg:mr-0 mr-1 flex items-center text-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium rounded-full w-fit"
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

              <Link
                href="/du-an"
                className="w-fit whitespace-nowrap border-gradient-button-no-bg-orange border-[#FAC1B7] bg-white rounded-full px-5 py-2.5 md:py-4 xl:py-[13px] 2xl:py-[18px] text-sm font-medium shadow-[0px_1px_2px_0px_#B3ADAD0D,0px_4px_4px_0px_#B3ADAD0A,0px_9px_5px_0px_#B3ADAD08,0px_16px_6px_0px_#B3ADAD03,0px_25px_7px_0px_#B3ADAD00]"
              >
                Xem chi tiết dự án
              </Link>
            </div>
          </div>
          <div className='relative w-full xl:w-[60%] h-full'>
            <div className='relative w-1/2 ml-[37.5%] mr-[12.5%]'>
              <div className='relative w-full aspect-[10/25] 2xl:aspect-[10/18]'>
                {/* Scene 3D với perspective để tạo cảm giác trụ */}
                <div className='absolute inset-0 flex items-center justify-center' style={{ perspective: '1200px' }}>
                  <motion.div
                    className='relative w-full h-full'
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: rotation }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    onAnimationComplete={() => setIsAnimating(false)}
                  >
                    {mockupImages.map((src, index) => {
                      const radius = 260; // bán kính trụ (px)
                      return (
                        <div
                          key={index}
                          className='absolute inset-0 flex items-center justify-center'
                          style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${index * angle}deg) translateZ(${radius}px)`,
                            backfaceVisibility: 'hidden',
                          }}
                        >
                          <Image
                            src={src}
                            alt={`mockup-${index}`}
                            priority={index === currentImageIndex}
                            width={1000}
                            height={1000}
                            className='w-[88%] 2xl:w-[80%] h-auto bg-transparent'
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>

              <div className='absolute top-1/2 -translate-y-1/2 -left-[30%] size-[50px] 2xl:size-[60px] rounded-full bg-[#E96C6C40] hover:bg-[#E96C6C60] cursor-pointer transition-all duration-500 flex items-center justify-center p-3.5 2xl:p-4 border border-white/60'
                onClick={prevImage}>
                <Image src={IMAGES.arrowRightOrange} alt="arrowRightOrange" width={1000} height={1000} className='size-full rotate-180 shrink-0 object-contain' />
              </div>
              <div className='absolute top-1/2 -translate-y-1/2 -right-[30%] size-[50px] 2xl:size-[60px] rounded-full bg-[#E96C6C40] hover:bg-[#E96C6C60] cursor-pointer transition-all duration-500 flex items-center justify-center p-3.5 2xl:p-4 border border-white/60'
                onClick={nextImage}>
                <Image src={IMAGES.arrowRightOrange} alt="arrowRightOrange" width={1000} height={1000} className='size-full shrink-0 object-contain' />
              </div>
            </div>
            <div className='absolute bottom-10 left-0 p-3 xl:p-4 pb-6 bg-orange-100 rounded-[20px] xl:rounded-[40px] w-[65%] xl:w-[55%] 2xl:w-1/2 h-fit' style={{ boxShadow: '0px 1px 3px -1px #0000004D, 0px 6px 10px -1px #32325D40' }}>
              <div className='flex gap-2 items-center p-2 pr-4 bg-gradient-to-r from-[#F3654A] to-[#FFB9AC] rounded-full w-full h-fit'>
                <Image src="/design-app/avt.png" alt="logo" width={1000} height={1000} className='size-[43px] xl:size-[50px] 2xl:size-[60px] rounded-full object-cover' />
                <div className='flex flex-col'>
                  <p className='text-title font-semibold text-white'>Mrs. Nguyên</p>
                  <p className='text-sxs-default text-white'>Giám Đốc NPCare Việt Nam</p>
                </div>
              </div>
              <p className='text-sm-table-default text-light-900 mt-3'>
                “Chúng tôi hài lòng về chất lượng dịch vụ App mà FOSO đã triển khai. Bên phía FOSO đã tư vấn chúng tôi nhiệt tình, tận tâm trong quá trình hoàn thành dự án.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 right-[40%] translate-x-1/2 w-[60%] z-[-1] pointer-events-none'>
        <div className='relative w-full h-full'>
          <div
            className='absolute top-0 right-0 w-10 h-full bg-gradient-to-r from-transparent to-white'
          >

          </div>
          <Image src={IMAGES.blurOrangeLarge} alt="blurOrange" width={1000} height={1000} className=' object-cover ' />
        </div>
      </div>
    </div>

  )
}

export default Hero
