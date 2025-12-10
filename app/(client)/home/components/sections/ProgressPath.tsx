"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/Images';
import { useResizeStore } from '@/stores/useResizeStore';
import AnimatedProgressPath from './AnimatedProgressPath';

// Types
interface Step {
  id: number;
  name: string;
  active: boolean | number;
  order_by: number;
  is_mobile: string;
}

// Dữ liệu cứng cho 4 bước
const stepsData: Step[] = [
  {
    id: 1,
    name: 'Chuẩn Hóa Dữ Liệu Nền Tảng',
    active: true,
    order_by: 1,
    is_mobile: '0',
  },
  {
    id: 2,
    name: 'Hoạch Định & Lập Kế Hoạch',
    active: true,
    order_by: 2,
    is_mobile: '0',
  },
  {
    id: 3,
    name: 'Thực Thi Sản Xuất & Quản Lý Kho',
    active: true,
    order_by: 3,
    is_mobile: '1',
  },
  {
    id: 4,
    name: 'Giao Hàng',
    active: true,
    order_by: 4,
    is_mobile: '0',
  },
];

const ProgressPath = () => {
  const [pathHeight, setPathHeight] = useState(240);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const { isVisibleMobile, isVisibleTablet } = useResizeStore()

  // Load trạng thái từ localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('progressPathCollapsed');
      if (savedState !== null) {
        setIsCollapsed(JSON.parse(savedState));
      }
    }
  }, []);

  useEffect(() => {
    if (isVisibleMobile) {
      setPathHeight(120);
    } else {
      setPathHeight(350);
    }
  }, [isVisibleMobile, isVisibleTablet]);
  // useEffect(() => {
  //   if (typeof window === 'undefined') return;

  //   const mediaQuery = window.matchMedia('(min-width: 1536px)');

  //   const updateHeight = (event?: MediaQueryListEvent | MediaQueryList) => {
  //     const matches = event?.matches ?? mediaQuery.matches;
  //     setPathHeight(matches ? 350 : 240);
  //   };

  //   updateHeight(mediaQuery);

  //   if (mediaQuery.addEventListener) {
  //     mediaQuery.addEventListener('change', updateHeight);
  //   } else {
  //     mediaQuery.addListener(updateHeight);
  //   }

  //   return () => {
  //     if (mediaQuery.removeEventListener) {
  //       mediaQuery.removeEventListener('change', updateHeight);
  //     } else {
  //       mediaQuery.removeListener(updateHeight);
  //     }
  //   };
  // }, []);

  // Xác định step nào active dựa trên currentProgress
  // 0-25% = step 1, 25-50% = step 2, 50-75% = step 3, 75-100% = step 4
  const getIsStepActive = (stepIndex: number): boolean => {
    const progressThresholds = [0, 25, 50, 75, 100];
    return currentProgress >= progressThresholds[stepIndex];
  };

  // Luôn set về 100% để animation chạy từ 0 đến 100 khi mount
  const snappedPercentage = 100;
  const displayPercentage = 100;

  // Callback để nhận progress từ AnimatedProgressPath
  const handleProgressChange = (progress: number) => {
    setCurrentProgress(progress);
  };

  return (
    <div>
      <div className='relative w-full pt-12 lg:pt-0 overflow-hidden'>
        <div className='w-full flex flex-col items-center justify-center relative z-10 transition-all duration-500'>
          <div className={`w-full transition-all duration-500 easse-in-out ${isCollapsed ? 'mb-[-24px]' : 'pb-4'}`}>
            <h2 className="capitalize text-title-section-small text-[#1A2025] font-extrabold text-center">
              <span
                style={{
                  background:
                    "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tiến trình{" "}
              </span>  hoàn thiện<br className='lg:hidden' /> vận hành <span
                style={{
                  background:
                    "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              > xưởng sản xuất </span>
            </h2>
          </div>

          <div className='w-full flex-1 flex items-center justify-center -mt-[3%] 2xl:-mt-[4%] pointer-events-none'>
            <AnimatedProgressPath
              percentage={snappedPercentage}
              displayPercentage={displayPercentage}
              height={pathHeight}
              onProgressChange={handleProgressChange}
            />
          </div>

          <div className='flex flex-col lg:flex-row justify-around gap-1 lg:gap-4 w-full -mt-[3%] px-4'>
            {stepsData.map((step, index) => {
              const isActive = getIsStepActive(index);
              const numberColor = isActive ? '#FFDBCC' : '#E1E1E1';
              const titleColor = isActive ? '#FE4C00' : '#696969';
              const isPhone = Number(step.order_by) >= 3 || step.is_mobile === '1';

              return (
                <div key={step.id || index} className='flex gap-2 items-center text-left'>
                  <span className={`font-medium transition-all duration-500 ease-in-out text-lg lg:text-3xl leading-[80%]`} style={{ color: numberColor }}>
                    {index + 1}
                  </span>
                  <div className='flex items-center'>
                    <h3 className='inline font-bold text-sm lg:text-lg capitalize transition-all duration-500 ease-in-out' style={{ color: titleColor }}>
                      {step.name}
                    </h3>
                    {isPhone && <Image src={IMAGES.mobileIcon} alt='mobile-icon' width={24} height={24} className='size-4 lg:size-7 flex-shrink-0 ml-1' />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPath;
