'use client'
import CircleQuestion from '@/components/icons/common/CircleQuestion'
import { IMAGES } from '@/constants/Images'
import { Check, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Dữ liệu gói pricing
const priceList = [
  {
    background: 'from-[#26AB5B] to-[#9BF763]',
    shadow: 'shadow-[5px_5px_20px_0px_#348B2440]',
    color: 'text-[#028B0B]',
    title: 'Standard',
    price: '90 Triệu',
    description: 'Tính năng App theo yêu cầu, thiết kế giao diện 15 - 20 Màn.',
  },
  {
    background: 'from-[#1282CC] to-[#3EA0FE59]',
    shadow: 'shadow-[5px_5px_20px_0px_#1566B840]',
    color: 'text-[#005294]',
    title: 'Professional',
    price: 'Từ 180 Triệu',
    description: 'Tính năng App theo yêu cầu, thiết kế giao diện 30 - 40 Màn.',
  },
  {
    background: 'from-[#29006D] to-[#C19CFFCC]',
    shadow: 'shadow-[5px_5px_20px_0px_#935CEF40]',
    color: 'text-[#4D2393]',
    title: 'Premium',
    price: 'Liên hệ',
    description: 'Tính năng App theo yêu cầu, thiết kế số lượng màn theo yêu cầu.',
  },
]

// Dữ liệu bảng so sánh - Điểm chung
const commonFeatures = [
  {
    title: 'Ngôn ngữ App',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'text', content: '1' },
      { type: 'text', content: '1' },
      { type: 'text', content: 'Đa ngôn ngữ', color: 'text-[#F23E2C]' }
    ]
  },
  {
    title: 'Nền tảng: IOS & Android',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' }
    ]
  },
  {
    title: 'Tính năng App theo yêu cầu',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' }
    ]
  },
  {
    title: 'Hỗ trợ up app lên Store',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' }
    ]
  },
  {
    title: 'Bàn giao Source code',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' }
    ]
  },
  {
    title: 'Web Admin (Trang quản trị)',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'check' },
      { type: 'check' },
      { type: 'check' }
    ]
  }
]

// Dữ liệu bảng so sánh - Điểm riêng
const uniqueFeatures = [
  {
    title: 'Thiết kế giao diện',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'text', content: '15 - 20 màn' },
      { type: 'text', content: '30 - 40 màn' },
      { type: 'text', content: 'Theo yêu cầu', color: 'text-[#F23E2C]' }
    ]
  },
  {
    title: 'Web giới thiệu cơ bản',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'dash' },
      { type: 'check' },
      { type: 'check' }
    ]
  },
  {
    title: 'Hỗ trợ kết nối API',
    icon: <CircleQuestion className='size-5' />,
    values: [
      { type: 'dash' },
      { type: 'check' },
      { type: 'check' }
    ]
  }
]

// Component để render giá trị trong ô
const FeatureValue = ({ value }: { value: any }) => {
  if (value.type === 'check') {
    return (
      <Image
        width={200}
        height={200}
        src={IMAGES.check}
        alt='check'
        className='w-11 h-11 object-cover'
      />
    )
  }

  if (value.type === 'dash') {
    return <span className='w-[17px] border-b-2 border-[#606060]'></span>
  }

  if (value.type === 'text') {
    return (
      <h3 className={`text-base-default font-medium text-center ${value.color || 'text-black'}`}>
        {value.content}
      </h3>
    )
  }

  return null
}


const PriceList = () => {
  const [activePlan, setActivePlan] = useState(0)

  return (
    <div className='relative'>
      <div className='custom-container-new flex flex-col gap-6 xl:gap-16'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h2 className='text-title-section-small text-center text-[#050505] font-extrabold capitalize'>
            <span className='text-title-section-medium-fit-leading'
              style={{
                background: "linear-gradient(to bottom, #F3654A 0%, #FFB9AC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              Bảng giá
            </span> {' '} thiết kế mobile app<br /> của{' '}
            <span className='text-title-section-medium-fit-leading'
              style={{
                background: "linear-gradient(to bottom, #85EEB3 0%, #53B086 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              FOSO
            </span></h2>
          <p className='text-base-default text-light-900 font-semibold'>Chọn gói hoàn hảo cho nhu cầu kinh doanh của bạn.</p>
        </div>
        <div className='xl:hidden flex items-center justify-center gap-2'>
          <button
            onClick={() => setActivePlan(0)}
            className={`py-2 px-5 rounded-full border-[1.5px] text-base font-bold ${activePlan === 0
              ? 'border-[#26AB5B] text-[#028B0B]'
              : ' text-[#667F93] border-[#D9E1E7]'
              }`}
          >
            Standard
          </button>
          <button
            onClick={() => setActivePlan(1)}
            className={`py-2 px-5 rounded-full border-[1.5px] text-base font-bold ${activePlan === 1
              ? 'border-[#1282CC] text-[#0E8CC0]'
              : ' text-[#667F93] border-[#D9E1E7]'
              }`}
          >
            Professional
          </button>
          <button
            onClick={() => setActivePlan(2)}
            className={`py-2 px-5 rounded-full border-[1.5px] text-base font-bold ${activePlan === 2
              ? 'border-[#29006D] text-[#634F92]'
              : ' text-[#667F93] border-[#D9E1E7]'
              }`}
          >
            Premium
          </button>
        </div>

        {/* Mobile: hiển thị card theo gói đã chọn */}
        <div className='xl:hidden px-6 pb-10'>
          {(() => {
            const item = priceList[activePlan]
            const index = activePlan
            return (
              <div className="relative">
                <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-r opacity-80 ${item.background}`}></div>
                <div className={`absolute top-4 left-4 w-full h-full rounded-[20px] border border-gray-200 bg-gradient-to-r from-white/20 to-white ${item.shadow} backdrop-blur-[15px]`}></div>
                <div className='flex flex-col gap-4 z-10 relative p-9'>
                  <div className='flex flex-col'>
                    <h3 className='text-title-section-small text-[#050505] font-extrabold'>{item.title}</h3>
                    <p className='text-[#606060] font-medium text-base-default'>{item.description}</p>
                  </div>
                  <div className='flex flex-col gap-5'>
                    <h4 className={`text-title-section-small ${item.color} font-extrabold`}>{item.price}{' '}
                      {index !== 2 && (
                        <span className='text-base-default-feature text-[#363636]'>
                          / App
                        </span>
                      )}
                    </h4>
                    {index !== 2 ? (
                      <button className='w-fit text-base-default font-bold bg-gradient-to-r from-[#F3654A] to-[#FFB9AC] hover:from-[#F3654A]/80 hover:to-[#FFB9AC]/80 transition-all duration-300 border border-orange-300 rounded-2xl py-2 px-4 text-white shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'>
                        Tham khảo ngay
                      </button>
                    ) : (
                      <button className='w-fit border-gradient-black text-base-default font-bold bg-gradient-to-tr from-[#2B2B4D] to-[#848498] hover:from-[#2B2B4D]/80 hover:to-[#FFFFFF]/80 transition-all duration-300 border border-orange-300 rounded-2xl py-2 px-5 text-white shadow-[0px_-1px_2px_0px_#B3ADAD0D,0px_-2px_5px_1px_#B3ADAD0A,0px_1px_2px_0px_#B3ADAD08,0px_2px_6px_0px_#B3ADAD05,0px_-2px_14px_0px_#B3ADAD00]'>
                        Liên hệ ngay
                      </button>
                    )}
                  </div>
                  <hr className='border-[#6C757D]' />
                  <div className='flex flex-col gap-1'>
                    {(() => {
                      const allFeatures = [...commonFeatures, ...uniqueFeatures]
                      const mobileOrder = [
                        'Tính năng App theo yêu cầu',
                        'Hỗ trợ up app lên Store',
                        'Ngôn ngữ App',
                        'Nền tảng: IOS & Android',
                        'Bàn giao Source code',
                        'Web Admin (Trang quản trị)',
                        'Thiết kế giao diện',
                        'Web giới thiệu cơ bản',
                        'Hỗ trợ kết nối API',
                      ]
                      const orderedFeatures = mobileOrder
                        .map(title => allFeatures.find(f => f.title === title))
                        .filter(Boolean) as typeof allFeatures

                      return orderedFeatures.map((feature, i) => {
                        const v = feature.values[activePlan]
                        const title = feature.title
                        const displayTitle = title === 'Hỗ trợ up app lên Store' ? 'Hỗ trợ up App lên Store' : title
                      if (!v) return null
                      if (v.type === 'check') {
                        return (
                          <div key={i} className='flex items-center gap-2.5'>
                            <Check className={`size-4 ${priceList[activePlan].color}`} />
                            <p className='text-xs/[24px] font-medium text-[#484848]'>{displayTitle}</p>
                          </div>
                        )
                      }
                      if (v.type === 'dash') {
                        return (
                          <div key={i} className='flex items-center gap-2.5'>
                            <X className='size-4 text-[#EA3A3D]' />
                            <p className='text-xs/[24px] font-medium text-[#484848]'>{displayTitle}</p>
                          </div>
                        )
                      }
                      if (v.type === 'text') {
                        // Dòng "Thiết kế giao diện ...": font semibold và màu theo tab hiện tại
                        if (title === 'Thiết kế giao diện') {
                          return (
                            <div key={i} className='flex items-center gap-2.5'>
                              <Check className={`size-4 ${priceList[activePlan].color}`} />
                              <p className={`text-xs/[24px] font-semibold ${priceList[activePlan].color}`}>
                                {title} {(v as any).content}
                              </p>
                            </div>
                          )
                        }
                        // Dòng "Ngôn ngữ App" -> hiển thị dạng "1 Ngôn ngữ" hoặc "Đa ngôn ngữ"
                        if (title === 'Ngôn ngữ App') {
                          const content = (v as any).content
                          const isNumeric = /^\d+$/g.test(String(content))
                          const label = isNumeric ? `${content} Ngôn ngữ` : content
                          return (
                            <div key={i} className='flex items-center gap-2.5'>
                              <Check className={`size-4 ${priceList[activePlan].color}`} />
                              <p className={`text-xs/[24px] ${isNumeric ? 'font-medium text-[#484848]' : `font-semibold ${priceList[activePlan].color}`}`}>
                                {label}
                              </p>
                            </div>
                          )
                        }
                        return (
                          <div key={i} className='flex items-center gap-2.5'>
                            <Check className={`size-4 ${priceList[activePlan].color}`} />
                            <p className='text-xs/[24px] font-medium text-[#484848]'>
                              {displayTitle}: <span className={`${(v as any).color || ''}`}>{(v as any).content}</span>
                            </p>
                          </div>
                        )
                      }
                      return null
                      })
                    })()}
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        <div className='hidden xl:grid grid-cols-3 gap-20'>
          {priceList.map((item, index) => (
            <div key={index} className="relative">
              <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-r opacity-80 ${item.background}`}></div>
              <div className={`absolute top-6 left-6 w-full h-full rounded-[20px] border border-gray-200 bg-gradient-to-r from-white/20 to-white ${item.shadow} backdrop-blur-[15px]`}></div>
              <div className='flex flex-col gap-6 z-10 relative p-11'>
                <div className='flex flex-col'>
                  <h3 className='text-title-section-small text-[#050505] font-extrabold'>{item.title}</h3>
                  <p className='text-[#606060] font-medium text-base-default'>{item.description}</p>
                </div>
                <div className='flex flex-col gap-5'>
                  <h4 className={`text-title-section-small ${item.color} font-extrabold`}>{item.price}{' '}
                    {index !== 2 && (
                      <span className='text-base-default-feature text-[#363636]'>
                        / App
                      </span>
                    )}
                  </h4>
                  {index !== 2 ? (
                    <button className='w-fit text-base-default font-bold bg-gradient-to-r from-[#F3654A] to-[#FFB9AC] hover:from-[#F3654A]/80 hover:to-[#FFB9AC]/80 transition-all duration-300 border border-orange-300 rounded-2xl py-2 px-4 text-white shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]'>
                      Tham khảo ngay
                    </button>
                  ) : (
                    <button className='w-fit border-gradient-black text-base-default font-bold bg-gradient-to-tr from-[#2B2B4D] to-[#848498] hover:from-[#2B2B4D]/80 hover:to-[#FFFFFF]/80 transition-all duration-300 border border-orange-300 rounded-2xl py-2 px-5 text-white shadow-[0px_-1px_2px_0px_#B3ADAD0D,0px_-2px_5px_1px_#B3ADAD0A,0px_1px_2px_0px_#B3ADAD08,0px_2px_6px_0px_#B3ADAD05,0px_-2px_14px_0px_#B3ADAD00]'>
                      Liên hệ ngay
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='hidden xl:flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            {/* Header của bảng */}
            <div className='flex justify-end gap-3'>
              {priceList.map((plan, index) => {
                // Xử lý màu gradient cho từng gói
                const getGradientStyle = (planIndex: number) => {
                  const gradients = [
                    'linear-gradient(220.53deg, #9BF763 0%, #26AB5B 76.95%)',
                    'linear-gradient(220.53deg, #3EA0FE 0%, #1282CC 76.95%)',
                    'linear-gradient(220.53deg, #C19CFF 0%, #29006D 76.95%)'
                  ]
                  return gradients[planIndex] || gradients[0]
                }

                return (
                  <div key={index} className='w-[22%] p-2.5 bg-[#F9F9F9]'>
                    <h3
                      className='text-title-section-feature font-extrabold text-center'
                      style={{
                        background: getGradientStyle(index),
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {plan.title}
                    </h3>
                  </div>
                )
              })}
            </div>

            {/* Điểm chung */}
            <div className='p-2.5 bg-[#F0F0F0] rounded-lg font-bold text-[#363636] text-title-feature'>
              Điểm chung
            </div>
            <div className='flex flex-col gap-2'>
              {commonFeatures.map((feature, index) => (
                <div key={index} className='flex justify-between w-full'>
                  <h4 className='py-2.5 flex items-center gap-2 text-base-default font-medium text-black'>
                    {feature.title} {feature.icon}
                  </h4>
                  <div className='flex gap-3 w-[calc(66%+24px)]'>
                    {feature.values.map((value, valueIndex) => (
                      <div key={valueIndex} className='w-1/3 h-[52px] p-2.5 bg-[#F9F9F9] flex items-center justify-center'>
                        <FeatureValue value={value} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Điểm riêng */}
            <div className='p-2.5 bg-[#F0F0F0] rounded-lg font-bold text-[#363636] text-title-feature'>
              Điểm riêng
            </div>
            <div className='flex flex-col gap-2'>
              {uniqueFeatures.map((feature, index) => (
                <div key={index} className='flex justify-between w-full'>
                  <h4 className='py-2.5 flex items-center gap-2 text-base-default font-medium text-black'>
                    {feature.title} {feature.icon}
                  </h4>
                  <div className='flex gap-3 w-[calc(66%+24px)]'>
                    {feature.values.map((value, valueIndex) => (
                      <div key={valueIndex} className='w-1/3 h-[52px] p-2.5 bg-[#F9F9F9] flex items-center justify-center'>
                        <FeatureValue value={value} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceList