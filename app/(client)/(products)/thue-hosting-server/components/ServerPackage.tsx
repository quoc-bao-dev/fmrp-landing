import ArrowUpRightIcon from '@/components/icons/common/ArrowUpRightIcon'
import BandwidthIcon from '@/components/icons/server/BandwidthIcon'
import CPUIcon from '@/components/icons/server/CPUIcon1'
import GiftIcon from '@/components/icons/server/GiftIcon'
import IPIcon from '@/components/icons/server/IPIcon'
import RAMIcon from '@/components/icons/server/RAMIcon'
import SSDIcon from '@/components/icons/server/SSDIcon1'
import React from 'react'

const ServerPackage = () => {
  const packages = [
    {
      id: 1,
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#8BFFD9] to-[#15AA7A]',
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
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#3EA0FE59] to-[#1282CC]',
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
      buttonColorClasses: 'bg-[#0E8CC0] border-[#A0DFF9]',
      arrowTextClass: 'text-[#0B6990]',
    },
    {
      id: 3,
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#E0549D59] to-[#E0549D]',
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
      buttonColorClasses: 'bg-[#E0549D] border-[#E0549D]',
      arrowTextClass: 'text-[#CB5695]',
    },
    {
      id: 4,
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#FFC3C6] to-[#E43E44]',
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
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#935CEF80] to-[#8237FF]',
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
      containerClass: 'w-full rounded-[20px] pb-4 bg-gradient-to-b from-[#FACA4A80] to-[#FACA4A]',
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

  return (
    <div className='custom-container-new flex flex-col items-center gap-11'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='text-title-section-medium-fit-leading font-extrabold text-[#050505] capitalize'>
          tham khảo các{' '}
          <span className='text-[#2129C3]'>
            gói server
          </span>{' '}
          tại {' '}
          <span className='text-[#53B086]'>
            FOSO
          </span>
        </h2>
        <p className='text-title-feature text-light-900 font-semibold'>
          An toàn, tăng tốc độ App và Web với các gói server chất lượng.
        </p>
      </div>
      <div className='flex p-2 gap-1 rounded-full border-[0.5px] border-[#DBCEFA] bg-gradient-to-r from-[#D4D4FF] to-[#F6F6F6] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'>
        <button className='w-36 rounded-full border-[0.5px] border-[#BBBEFA] bg-[#5856D6] p-2 font-extrabold text-white text-title-feature shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'>
          Server Pro
        </button>
        <button className='w-36 rounded-full border-[0.5px] border-transparent bg-transparent p-2 font-extrabold text-[#A2A3A3] text-title-feature'>
          Server Basic
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 w-full'>
        {packages.map((pkg) => (
          <div key={pkg.id} className={pkg.containerClass}>
            <h3 className='py-2 text-title-section-feature text-center font-semibold text-[#424150]'>{pkg.title}</h3>
            <div className='relative flex flex-col items-center justify-center gap-10 pb-4'>
              <div className='pt-4 flex flex-col items-center justify-center gap-6 w-full z-[2]'>
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-[-1] rounded-[20px] scale-x-110 w-full h-full bg-gradient-to-r from-white/20 to-white backdrop-blur-[15px] pointer-events-none ${pkg.overlayShadowClass}`} />
                <div className='flex gap-2 items-center'>
                  <h4 className={`w-1/2 whitespace-nowrap text-title-section-feature font-bold ${pkg.h4ColorClass}`}>
                    {pkg.price36} <br />
                    x 36 tháng
                  </h4>
                  <span className='border-r border-[#747474] w-[1px] h-14' />
                  <div className='w-1/2 flex flex-col gap-1'>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{pkg.price12} x 12 tháng</p>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium whitespace-nowrap'>{pkg.price24} x 24 tháng</p>
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
                    <p className='text-sm 2xl:text-base text-light-900 font-medium'>{pkg.cpu}</p>
                  </div>
                  <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2.5 items-center'>
                      <SSDIcon className='size-5 shrink-0' />
                      <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                        SSD
                      </span>
                    </div>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium'>{pkg.ssd}</p>
                  </div>
                  <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2.5 items-center'>
                      <RAMIcon className='size-5 shrink-0' />
                      <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                        RAM
                      </span>
                    </div>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium'>
                      {pkg.ramBase} + <span className={`${pkg.ramFreeClass} font-semibold`}>{pkg.ramFree}</span>
                    </p>
                  </div>
                  <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2.5 items-center'>
                      <BandwidthIcon className='size-5 shrink-0' />
                      <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                        Bandwidth
                      </span>
                    </div>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium'>{pkg.bandwidth}</p>
                  </div>
                  <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2.5 items-center'>
                      <IPIcon className='size-5 shrink-0' />
                      <span className='text-sm 2xl:text-base text-light-900 font-semibold'>
                        IP Riêng
                      </span>
                    </div>
                    <p className='text-sm 2xl:text-base text-light-900 font-medium'>{pkg.ip}</p>
                  </div>
                  <div className='flex gap-2.5 items-center'>
                    <GiftIcon className='size-5 shrink-0' />
                    <span className={`text-sm 2xl:text-base font-semibold whitespace-nowrap ${pkg.giftTextClass}`}>Tặng RAM khi đăng ký ít nhất 12 tháng</span>
                  </div>
                </div>
              </div>
              <button className={`z-[2] flex items-center gap-2 text-base-default font-bold rounded-full w-fit text-white p-2 pl-4 border-[0.5px] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26] ${pkg.buttonColorClasses}`}>
                Đăng ký
                <div className='p-2 rounded-full bg-white'>
                  <ArrowUpRightIcon className={`size-4 shrink-0 ${pkg.arrowTextClass}`} />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServerPackage
