'use client'
import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import BandwidthIcon from '@/components/icons/server/BandwidthIcon'
import CPUIcon from '@/components/icons/server/CPUIcon1'
import GiftIcon from '@/components/icons/server/GiftIcon'
import IPIcon from '@/components/icons/server/IPIcon'
import RAMIcon from '@/components/icons/server/RAMIcon'
import SSDIcon from '@/components/icons/server/SSDIcon1'
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/constants/Images'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { useInView } from 'react-intersection-observer'
import { useGetCloudServer } from '@/managers/api/products'
import { Skeleton } from '@/components/ui/skeleton'

const packages = [
  {
    id: 1,
    containerClass: 'from-[#8BFFD9] to-[#15AA7A]',
    title: 'Cloud Server #1',
    h4ColorClass: 'text-green-08',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#348B2440]',
    price36: '1.008.000 đ',
    price12: '1.134.000 đ',
    price24: '1.071.000 đ',
    cpu: 'Intel Xeon Silver [4] Cores',
    ssd: '120 GB',
    ramBase: '4 GB',
    ramFree: '2GB Free',
    ramFreeClass: 'text-[#10805B]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#10805B]',
    buttonColorClasses: 'bg-[#15AA7A] border-[#A3EED6]',
    arrowTextClass: 'text-[#10805B]',
  },
  {
    id: 2,
    containerClass: 'from-[#3EA0FE59] to-[#1282CC]',
    title: 'Cloud Server #2',
    h4ColorClass: 'text-[#0B6990]',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#0B699040]',
    price36: '1.000.000 đ',
    price12: '1.122.000 đ',
    price24: '1.100.000 đ',
    cpu: 'Intel Xeon Silver [2] Cores',
    ssd: '80 GB',
    ramBase: '2 GB',
    ramFree: '1GB Free',
    ramFreeClass: 'text-[#0B6990]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#0B6990]',
    buttonColorClasses: 'bg-[#0B6990] border-[#0B6990]',
    arrowTextClass: 'text-[#0B6990]',
  },
  {
    id: 3,
    containerClass: 'from-[#CB5695]/70 to-[#CB5695]',
    title: 'Cloud Server #3',
    h4ColorClass: 'text-[#CB5695]',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#CB569540]',
    price36: '1.000.000 đ',
    price12: '1.122.000 đ',
    price24: '1.100.000 đ',
    cpu: 'Intel Xeon Silver [2] Cores',
    ssd: '80 GB',
    ramBase: '2 GB',
    ramFree: '1GB Free',
    ramFreeClass: 'text-[#CB5695]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#CB5695]',
    buttonColorClasses: 'bg-[#CB5695] border-[#CB5695]',
    arrowTextClass: 'text-[#CB5695]',
  },
  {
    id: 4,
    containerClass: 'from-[#FFC3C6] to-[#E43E44]',
    title: 'Cloud Server #4',
    h4ColorClass: 'text-[#EA3A3D]',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#EA3A3D40]',
    price36: '1.000.000 đ',
    price12: '1.122.000 đ',
    price24: '1.100.000 đ',
    cpu: 'Intel Xeon Silver [2] Cores',
    ssd: '80 GB',
    ramBase: '2 GB',
    ramFree: '1GB Free',
    ramFreeClass: 'text-[#EA3A3D]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#EA3A3D]',
    buttonColorClasses: 'bg-[#E43E44] border-[#E43E44]',
    arrowTextClass: 'text-[#EA3A3D]',
  },
  {
    id: 5,
    containerClass: 'from-[#935CEF80] to-[#8237FF]',
    title: 'Cloud Server #5',
    h4ColorClass: 'text-[#634F92]',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#935CEF40]',
    price36: '1.000.000 đ',
    price12: '1.122.000 đ',
    price24: '1.100.000 đ',
    cpu: 'Intel Xeon Silver [2] Cores',
    ssd: '80 GB',
    ramBase: '2 GB',
    ramFree: '1GB Free',
    ramFreeClass: 'text-[#634F92]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#634F92]',
    buttonColorClasses: 'bg-[#846AC2] border-[#8237FF]',
    arrowTextClass: 'text-[#634F92]',
  },
  {
    id: 6,
    containerClass: 'from-[#FACA4A80] to-[#FACA4A]',
    title: 'Cloud Server #6',
    h4ColorClass: 'text-[#D09A03]',
    overlayShadowClass: 'shadow-[5px_5px_20px_0px_#FFF39C36]',
    price36: '1.000.000 đ',
    price12: '1.122.000 đ',
    price24: '1.100.000 đ',
    cpu: 'Intel Xeon Silver [2] Cores',
    ssd: '80 GB',
    ramBase: '2 GB',
    ramFree: '1GB Free',
    ramFreeClass: 'text-[#D09A03]',
    bandwidth: 'Unlimited',
    ip: '1',
    giftTextClass: 'text-[#D09A03]',
    buttonColorClasses: 'bg-[#FACA4A] border-[#FACA4A]',
    arrowTextClass: 'text-[#D09A03]',
  },
] as const

const formatPriceVND = (value?: number | null) => {
  if (!value && value !== 0) return ''
  try {
    return `${value.toLocaleString('vi-VN')} đ`
  } catch {
    return `${value} đ`
  }
}


const ServerPackage = () => {
  const [activeTab, setActiveTab] = useState<'pro' | 'basic'>('pro')
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const { ref: swiperInViewRef, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -20% 0px' })

  const { data: cloudServer, isLoading } = useGetCloudServer();

  // Chọn dữ liệu theo tab
  const selectedItems = useMemo(() => {
    if (!cloudServer || !Array.isArray(cloudServer)) return [] as any[]
    const proGroup = cloudServer.find((g: any) => String(g?.name ?? '').toLowerCase().includes('pro'))
    const basicGroup = cloudServer.find((g: any) => String(g?.name ?? '').toLowerCase().includes('basic'))
    const items = activeTab === 'pro' ? proGroup?.data : basicGroup?.data
    if (!Array.isArray(items)) return [] as any[]
    return items
  }, [cloudServer, activeTab])

  useEffect(() => {
    if (inView && swiperInstance) {
      try {
        // Start autoplay only when in view
        swiperInstance.autoplay?.start?.()
      } catch { }
    }
  }, [inView, swiperInstance])

  return (
    <div className='relative w-full'>
      <div className='flex flex-col items-center gap-11 w-full'>
        <div className='custom-container-new flex flex-col items-center justify-center gap-3'>
          <h2 className='text-center xl:text-left text-title-section-medium-fit-leading font-extrabold text-[#050505] capitalize'>
            tham khảo các{' '}
            <span className='text-[#2129C3]'>
              gói server
            </span>{' '}
            tại {' '}
            <span className='text-[#53B086]'>
              FOSO
            </span>
          </h2>
          <p className='text-center xl:text-left text-title-feature text-light-900 font-semibold'>
            An toàn, tăng tốc độ App và Web với các gói server chất lượng.
          </p>
        </div>
        <div className={`relative flex p-2 gap-1 rounded-full border-[0.5px] bg-gradient-to-r shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]
         ${activeTab === 'pro'
            ? 'border-[#DBCEFA] from-[#D4D4FF] to-[#F6F6F6]'
            : 'border-[#FDE0DB] from-[#E5FFF7] to-[#F6F6F6]'}
        `}>
          <motion.div
            className={`pointer-events-none absolute top-2 bottom-2 left-2 w-36 rounded-full border-[0.5px]
            ${activeTab === 'pro'
                ? 'border-[#BBBEFA] bg-[#5856D6] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'
                : 'border-[#FDE0DB] bg-[#15AA7A] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A3626_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'}
            `}
            animate={{ x: activeTab === 'pro' ? 0 : 148 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-hidden
          />
          <button
            type='button'
            onClick={() => setActiveTab((prev) => (prev === 'pro' ? 'basic' : 'pro'))}
            className={`z-10 w-36 rounded-full border-[0.5px] border-transparent bg-transparent p-2 font-extrabold text-title-feature transition-colors ${activeTab === 'pro' ? 'text-white' : 'text-[#A2A3A3]'}`}
          >
            Server Pro
          </button>
          <button
            type='button'
            onClick={() => setActiveTab((prev) => (prev === 'basic' ? 'pro' : 'basic'))}
            className={`z-10 w-36 rounded-full border-[0.5px] border-transparent bg-transparent p-2 font-extrabold text-title-feature transition-colors ${activeTab === 'basic' ? 'text-white' : 'text-[#A2A3A3]'}`}
          >
            Server Basic
          </button>
        </div>
        {/* Mobile Swiper */}
        <div ref={swiperInViewRef} className='md:hidden w-full'>
          {isLoading ? (
            <div className='flex gap-4 px-6 overflow-hidden'>
              {[1, 2, 3].map((i) => (
                <div key={`sk-m-${i}`} className='min-w-[80%]'>
                  <Skeleton className='h-[450px] w-full rounded-[20px]' />
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={false}
              loop
              autoplay={false}
              speed={1500}
              modules={[Autoplay]}
              onSwiper={(s) => setSwiperInstance(s)}
              className='w-full'
            >
              {selectedItems.map((item: any) => (
                <SwiperSlide key={`m-${item.id}`}>
                  <div className="px-6">
                    <div className={`w-full rounded-[20px] pb-4 cursor-pointer`} style={{ background: `linear-gradient(to bottom, ${item?.background}, ${item?.color})` }}>
                      <h3 className='py-1 text-title-section-feature text-center font-semibold text-[#424150]'>{item?.name}</h3>
                      <div className='relative flex flex-col items-center justify-center gap-5 pb-4'>
                        <div className='pt-4 flex flex-col items-center justify-center gap-6 w-full z-[2]'>
                          <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-[-1] rounded-[20px] scale-x-110 w-full h-full bg-gradient-to-r from-white/20 to-white backdrop-blur-[15px] pointer-events-none`}
                            style={{ boxShadow: `5px 5px 20px 0px ${item?.color}40` }}
                          />
                          <div className='flex gap-2 items-center'>
                            <h4 className={`w-1/2 whitespace-nowrap text-title-section-feature font-bold`} style={{ color: item?.color }}>
                              {formatPriceVND(item?.price_three_year)} <br />
                              x 36 tháng
                            </h4>
                            <span className='border-r border-[#747474] w-[1px] h-14' />
                            <div className='w-1/2 flex flex-col gap-1'>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{formatPriceVND(item?.price_one_year)} x 12 tháng</p>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{formatPriceVND(item?.price_two_year)} x 24 tháng</p>
                            </div>
                          </div>
                          <hr className='border-[#747474] w-[90%]' />
                          <div className='flex flex-col gap-2 px-4'>
                            <div className='flex gap-2 items-center justify-between'>
                              <div className='flex gap-2.5 items-center'>
                                <CPUIcon className='size-5 shrink-0' />
                                <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                                  CPU
                                </span>
                              </div>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.cpu}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                              <div className='flex gap-2.5 items-center'>
                                <SSDIcon className='size-5 shrink-0' />
                                <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                                  SSD
                                </span>
                              </div>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.ssd}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                              <div className='flex gap-2.5 items-center'>
                                <RAMIcon className='size-5 shrink-0' />
                                <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                                  RAM
                                </span>
                              </div>
                              {item?.ram_append ? (
                                <p className='text-sm 2xl:text-base text-light-900 font-medium'>
                                  {item?.ram} + <span className='font-semibold' style={{ color: item?.color }}>{item?.ram_append}</span>
                                </p>
                              ) : (
                                <p className='text-sm 2xl:text-base text-light-900 font-medium'>
                                  {item?.ram}
                                </p>
                              )}
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                              <div className='flex gap-2.5 items-center'>
                                <BandwidthIcon className='size-5 shrink-0' />
                                <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                                  Bandwidth
                                </span>
                              </div>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.band_width}</p>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                              <div className='flex gap-2.5 items-center'>
                                <IPIcon className='size-5 shrink-0' />
                                <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                                  IP Riêng
                                </span>
                              </div>
                              <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.ip_private}</p>
                            </div>
                            <div className='flex gap-2.5'>
                              <GiftIcon className='size-5 shrink-0' />
                              <span className={`text-sm 2xl:text-base font-semibold`} style={{ color: item?.color }}>{item?.gift}</span>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ y: -2, scale: 1.03, boxShadow: '0px 14px 30px rgba(15, 22, 58, 0.28)' }}
                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                          className={`z-[2] flex items-center gap-2 text-base-default font-bold rounded-full w-fit text-white p-2 pl-4 border-[0.5px] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]`}
                          style={{ willChange: 'transform, box-shadow', background: item?.color, borderColor: item?.color }}
                          onClick={() => window.open("https://zalo.me/2281264205827497572")}
                        >
                          Đăng ký
                          <motion.div className='p-2 rounded-full bg-white' style={{ color: item?.color }} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                            <ArrowUpRightIcon className={`size-4 shrink-0`} />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Desktop Grid */}
        <div className='hidden md:block w-full'>
          <div className='custom-container-new grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-20 2xl:gap-24'>
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <Skeleton key={`sk-d-${i}`} className='h-[450px] w-full rounded-[20px]' />
              ))
            ) : (
              selectedItems.map((item: any, index: number) => (
                <motion.div
                  key={item.id}
                  className={`w-full rounded-[20px] pb-4 cursor-pointer`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.01, boxShadow: '0px 12px 28px rgba(15, 22, 58, 0.25)' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  style={{ willChange: 'transform, box-shadow', background: `linear-gradient(to bottom, ${item?.background}, ${item?.color})` }}
                >
                  <h3 className='py-2 text-title-section-feature text-center font-semibold text-[#424150]'>{item?.name}</h3>
                  <div className='relative flex flex-col items-center justify-center gap-10 pb-4'>
                    <div className='pt-4 flex flex-col items-center justify-center gap-6 w-full z-[2]'>
                      <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-[-1] rounded-[20px] scale-x-110 w-full h-full bg-gradient-to-r from-white/20 to-white backdrop-blur-[15px] pointer-events-none`}
                        style={{ boxShadow: `5px 5px 20px 0px ${item?.color}40` }}
                      />
                      <div className='flex gap-2 items-center'>
                        <h4 className={`tracking-tight whitespace-nowrap text-title-section-feature font-bold`} style={{ color: item?.color }}>
                          {formatPriceVND(item?.price_three_year)} <br />
                          x 36 tháng
                        </h4>
                        <span className='border-r border-[#747474] w-[1px] h-14' />
                        <div className='w-1/2 flex flex-col gap-1'>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{formatPriceVND(item?.price_one_year)} x 12 tháng</p>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{formatPriceVND(item?.price_two_year)} x 24 tháng</p>
                        </div>
                      </div>
                      <hr className='border-[#747474] w-[90%]' />
                      <div className='flex flex-col gap-2 px-4'>
                        <div className='flex gap-2 items-center justify-between'>
                          <div className='flex gap-2.5 items-center'>
                            <CPUIcon className='size-5 shrink-0' />
                            <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                              CPU
                            </span>
                          </div>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.cpu}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                          <div className='flex gap-2.5 items-center'>
                            <SSDIcon className='size-5 shrink-0' />
                            <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                              SSD
                            </span>
                          </div>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.ssd}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                          <div className='flex gap-2.5 items-center'>
                            <RAMIcon className='size-5 shrink-0' />
                            <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                              RAM
                            </span>
                          </div>
                          {item?.ram_append ? (
                            <p className='text-sm 2xl:text-base text-light-900 font-medium'>
                              {item?.ram} + <span className='font-semibold' style={{ color: item?.color }}>{item?.ram_append}</span>
                            </p>
                          ) : (
                            <p className='text-sm 2xl:text-base text-light-900 font-medium'>
                              {item?.ram}
                            </p>
                          )}
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                          <div className='flex gap-2.5 items-center'>
                            <BandwidthIcon className='size-5 shrink-0' />
                            <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                              Bandwidth
                            </span>
                          </div>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.band_width}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                          <div className='flex gap-2.5 items-center'>
                            <IPIcon className='size-5 shrink-0' />
                            <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                              IP Riêng
                            </span>
                          </div>
                          <p className='text-sm 2xl:text-base text-light-900 font-medium'>{item?.ip_private}</p>
                        </div>
                        <div className='flex gap-2.5'>
                          <GiftIcon className='size-5 shrink-0' />
                          <span className={`text-sm 2xl:text-base font-semibold`} style={{ color: item?.color }}>{item?.gift}</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ y: -2, scale: 1.03, boxShadow: '0px 14px 30px rgba(15, 22, 58, 0.28)' }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className={`z-[2] flex items-center gap-2 text-base-default font-bold rounded-full w-fit text-white p-2 pl-4 border-[0.5px] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]`}
                      style={{ willChange: 'transform, box-shadow', background: item?.color, borderColor: item?.color }}
                      onClick={() => window.open("https://zalo.me/2281264205827497572")}
                    >
                      Đăng ký
                      <motion.div className='p-2 rounded-full bg-white' style={{ color: item?.color }} whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                        <ArrowUpRightIcon className={`size-4 shrink-0`} />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

      </div>
      <Image src={IMAGES.monitorGraph} alt='monitorGraph' width={1000} height={1000} className='hidden xl:block absolute top-[-5%] left-0 w-full lg:w-52 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.spiralUp} alt='spiralUp' width={1000} height={1000} className='hidden xl:block absolute top-[-5%] right-[12%] w-full lg:w-56 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute top-0 left-0 -translate-x-[40%] w-full xl:w-1/3 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute top-[-10%] right-0 translate-x-[40%] w-full xl:w-1/3 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute bottom-[-10%] left-0 -translate-x-[40%] w-full xl:w-1/3 z-[-1] object-cover pointer-events-none' />
      <Image src={IMAGES.blurPupple} alt='blurPupple' width={1000} height={1000} className='absolute bottom-[-10%] right-0 translate-x-[40%] w-full xl:w-1/2 z-[-1] object-cover pointer-events-none' />
    </div>

  )
}

export default ServerPackage
