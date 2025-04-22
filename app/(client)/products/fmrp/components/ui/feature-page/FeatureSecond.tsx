import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { PiNoteFill, PiCalculatorFill, PiArrowUpRight } from "react-icons/pi";
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';

type Props = {}

const FeatureSecond = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className="grid md:grid-cols-2 3xl:gap-24 2xl:gap-20 lg:gap-16 gap-8 lg:mt-0 !mt-8 items-center h-full">
            {
                isVisibleTablet &&
                <h2 className="col-span-2 text-title-section-feature font-extrabold text-[#25387A]">Định mức BOM & Kế hoạch NVL</h2>
            }
            <div className="relative w-full h-full md:col-span-1 col-span-2">
                <AnimatedReveal
                    effect='fade'
                    className='relative z-10 w-full h-full'
                >
                    <Image
                        src="/background/ui/fmrp/features/test-4.png"
                        alt="Đa Biến Thể & LOT - DATE"
                        width={1920}
                        height={1080}
                        className="size-full object-contain [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))]"
                    />
                </AnimatedReveal>
            </div>

            <AnimatedReveal
                effect='fade'
                className="space-y-6 md:col-span-1 col-span-2"
            >
                {
                    !isVisibleTablet &&
                    <h2 className="text-title-section-feature font-extrabold text-[#25387A]">Định mức BOM & Kế hoạch NVL</h2>
                }

                <div className='grid grid-cols-2 3xl:gap-14 gap-12'>
                    <div className="flex items-start gap-2 lg:col-span-1 col-span-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiNoteFill className='size-full' />
                            </span>
                        </div>

                        <div className='space-y-3'>
                            <p className="text-title-feature text-[#33404A] font-bold">
                                Bạn đang lập BOM theo cách thủ công?
                            </p>

                            <p className="text-base-default-feature font-medium text-[#33404A] max-w-full">
                                Chuẩn hoá từng công đoạn, gợi ý định mức và phân bổ nguyên liệu tự động – càng nhiều biến thể, càng nhẹ đầu.
                            </p>

                            <Link
                                href="https://bom.so/mrp"
                                className="inline-flex items-center justify-between gap-2 text-base-default-feature text-[#0375F3] max-w-full hover:text-[#0375F3]/80 custom-transition"
                            >
                                <div className='font-semibold lg:max-w-[85%] max-w-full'>
                                    Khám phá cách lập BOM nhanh – đúng – đủ ngay
                                </div>
                                <div className='3xl:size-6 size-5 shrink-0'>
                                    <PiArrowUpRight className='size-full' />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 lg:col-span-1 col-span-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiCalculatorFill className='size-full' />
                            </span>
                        </div>
                        <div className='space-y-3'>
                            <p className="text-title-feature text-[#33404A] font-bold">
                                Lập kế hoạch không cần kiểm tra lại nhiều lần
                            </p>

                            <p className="text-base-default-feature font-medium text-[#33404A] lg:max-w-[95%] max-w-full">
                                Tự động tính toán theo BOM, liên kết trực tiếp với kho – không còn sợ thiếu, trùng, hoặc lệch kế hoạch.
                            </p>

                            <Link
                                href="https://bom.so/mrp"
                                className="inline-flex items-center gap-2 text-base-default-feature text-[#0375F3] hover:text-[#0375F3]/80 custom-transition"
                            >
                                <div className='font-semibold lg:max-w-[85%] max-w-full'>
                                    Trải nghiệm việc tự động hóa ngay hôm nay
                                </div>
                                <div className='3xl:size-6 size-5 shrink-0'>
                                    <PiArrowUpRight className='size-full' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedReveal>
        </div>
    )
}

export default FeatureSecond