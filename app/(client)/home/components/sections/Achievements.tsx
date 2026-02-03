'use client'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { IMAGES } from '@/constants/Images'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useResizeStore } from '@/stores/useResizeStore'

type CountUpOnViewProps = {
  start: number
  end: number
  durationMs?: number
  decimals?: number
  prefix?: string
  suffix?: string
  startWhen: boolean
  className?: string
}

const CountUpOnView = ({
  start,
  end,
  durationMs = 3000,
  decimals = 0,
  prefix = '',
  suffix = '',
  startWhen,
  className,
}: CountUpOnViewProps) => {
  const [value, setValue] = useState(start)
  const startedRef = useRef(false)

  const formatted = useMemo(() => {
    const rounded = Number(value.toFixed(decimals))
    const display =
      decimals > 0
        ? rounded.toLocaleString('vi-VN', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : Math.round(rounded).toLocaleString('vi-VN')

    return `${prefix}${display}${suffix}`
  }, [value, decimals, prefix, suffix])

  useEffect(() => {
    if (!startWhen || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()
    const from = start
    const to = end
    const delta = to - from

    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setValue(from + delta * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setValue(to)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [startWhen, start, end, durationMs])

  return <span className={className}>{formatted}</span>
}

const Achievements = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.35 })
  const { isVisibleMobile } = useResizeStore()

  const outerOrbitLogos = [
    { src: IMAGES.logoSK, alt: 'sk', size: 100 },
    { src: IMAGES.logoToanphat, alt: 'toanphat', size: 92 },
    { src: IMAGES.logoAG, alt: 'ag', size: 97 },
    { src: IMAGES.logoHihi, alt: 'hihi', size: 74 },
    { src: IMAGES.logoPJ, alt: 'pj', size: 142 },
  ] as const

  const innerOrbitLogos = [
    { src: IMAGES.logoThanhTan, alt: 'thanhtan', size: 92 },
    { src: IMAGES.logoKKO, alt: 'kko', size: 96 },
    { src: IMAGES.logoSciko, alt: 'sciko', size: 117 },
    { src: IMAGES.logoThienan, alt: 'thienan', size: 99 },
    { src: IMAGES.logoTP, alt: 'tp', size: 108 },
  ] as const

  const outerDots = [
    { size: 16, color: '#FF8092' },
    { size: 20, color: '#38BDF8' },
    { size: 24, color: '#FFC4E3' },
    { size: 18, color: '#FF8092' },
  ] as const

  const innerDots = [
    { size: 20, color: '#38BDF8' },
    { size: 16, color: '#FFC4E3' },
    { size: 22, color: '#FF8092' },
    { size: 18, color: '#38BDF8' },
  ] as const

  return (
    <div className='flex flex-col gap-6'>
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
          – Thành tựu được chứng minh qua những con số
        </h2>
        <p className="text-base-default-feature text-[#33404A] font-medium text-center">
          Mỗi con số là một dấu mốc cho hành trình liên tục đổi mới và nâng cao chất lượng sản phẩm
        </p>
      </div>
      <div ref={sectionRef} className="relative h-[500px] xl:h-[750px] w-full overflow-hidden">
        <Image src={IMAGES.blurBlueGreen} alt="blurBlueGreen" width={1000} height={1000} className="absolute top-1/2 -translate-y-1/2 right-0 w-full xl:w-2/3 object-cover" />
        <Image src={IMAGES.blurOrangeLarge} alt="blurOrangeLarge" width={1000} height={1000} className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-0 w-1/2 object-cover" />
        <div className='absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-[2]'></div>
        <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-[2]'></div>

        <div className='absolute top-0 left-0 w-full h-full z-[3] flex flex-col gap-3 xl:gap-9 items-center justify-center'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='bg-gradient-to-r from-[#0375F3] to-[#013DA0] bg-clip-text text-transparent font-bold text-2xl xl:text-[40px]/[110%]'>
              <CountUpOnView start={0} end={300} prefix="+" startWhen={inView} />
            </h3>
            <p className='text-sm xl:text-lg text-[#33404A] font-bold'>Doanh nghiệp đồng hành</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='bg-gradient-to-r from-[#0375F3] to-[#013DA0] bg-clip-text text-transparent font-bold text-2xl xl:text-[40px]/[110%]'>
              <CountUpOnView start={0} end={89.99} decimals={2} suffix="%" startWhen={inView} />
            </h3>
            <p className='text-sm xl:text-lg text-[#33404A] font-bold'>Tỷ lệ vận hành thành công</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='bg-gradient-to-r from-[#0375F3] to-[#013DA0] bg-clip-text text-transparent font-bold text-2xl xl:text-[40px]/[110%]'>
              <CountUpOnView start={0} end={12} prefix="+" startWhen={inView} />
            </h3>
            <p className='text-sm xl:text-lg text-[#33404A] font-bold'>Phiên bản phát hành</p>
          </div>
        </div>
        <OrbitingCircles radius={isVisibleMobile ? 250 : 450} autoSize>
          {outerOrbitLogos.flatMap((item, idx) => {
            const dot = outerDots[idx]
            const size = isVisibleMobile ? item.size * 0.6 : item.size

            return [
              (
                <div
                  key={`outer-logo-${idx}`}
                  className="bg-white/20 rounded-full p-2 shadow-[0px_20px_80px_0px_#77729340]"
                >
                  <div className="size-full rounded-full object-cover overflow-hidden">
                    <Image
                      src={item.src}
                      width={size}
                      height={size}
                      alt={item.alt}
                      className="object-cover aspect-square"
                    />
                  </div>
                </div>
              ),
              dot && (
                <span
                  key={`outer-dot-${idx}`}
                  className="block rounded-full opacity-75"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    backgroundColor: dot.color,
                  }}
                />
              ),
            ]
          })}
        </OrbitingCircles>

        <OrbitingCircles radius={isVisibleMobile ? 150 : 300} reverse autoSize>
          {innerOrbitLogos.flatMap((item, idx) => {
            const dot = innerDots[idx]
            const size = isVisibleMobile ? item.size * 0.5 : item.size

            return [
              (
                <div
                  key={`inner-logo-${idx}`}
                  className="bg-white/20 rounded-full p-3 shadow-[0px_20px_80px_0px_#77729340]"
                >
                  <div className="size-full rounded-full object-cover overflow-hidden">
                    <Image
                      src={item.src}
                      width={size}
                      height={size}
                      alt={item.alt}
                      className="object-cover aspect-square"
                    />
                  </div>
                </div>
              ),
              dot && (
                <span
                  key={`inner-dot-${idx}`}
                  className="block rounded-full opacity-75"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    backgroundColor: dot.color,
                  }}
                />
              ),
            ]
          })}
        </OrbitingCircles>
      </div>
    </div>
  )
}

export default Achievements
