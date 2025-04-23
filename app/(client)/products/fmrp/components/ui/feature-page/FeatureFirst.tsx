import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { PiSquaresFourFill, PiPenFill, PiArrowUpRight } from "react-icons/pi";
import BlurBackgroundLinear from '../common/BlurBackgroundLinear';
import BlurredBackgroundLinear from '@/components/common/blur/BlurredBackgroundLinear';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';

type Props = {}

const FeatureFirst = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    return (
        <div className="grid md:grid-cols-2 3xl:gap-24 2xl:gap-20 lg:gap-16 gap-8 lg:mt-0 !mt-8 items-center h-full">
            {
                isVisibleTablet &&
                <h2 className="col-span-2 text-title-section-feature font-extrabold text-[#25387A] text-center">Đa Biến Thể & LOT - DATE</h2>
            }
            <AnimatedReveal
                effect='fade'
                className="space-y-6 md:col-span-1 col-span-2 lg:order-1 order-2"
            >
                {
                    !isVisibleTablet &&
                    <h2 className="text-title-section-feature font-extrabold text-[#25387A]">Đa Biến Thể & LOT - DATE</h2>
                }

                <div className='space-y-3'>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiSquaresFourFill className='size-full' />
                            </span>
                        </div>
                        <p className="text-title-feature text-[#33404A] font-bold">
                            Làm sao kiểm soát hạn dùng của nguyên liệu & thành phẩm?
                        </p>
                    </div>

                    <p className="text-base-default-feature font-medium text-[#33404A] lg:max-w-[92%] max-w-full lg:pl-0 pl-[26px]">
                        Phân biệt dễ dàng biến thể - sử dụng chung một mã. Dễ nhập, dễ xuất, không nhầm lẫn giữa các phiên bản
                    </p>
                </div>

                <div className='space-y-3'>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiPenFill className='size-full' />
                            </span>
                        </div>
                        <p className="text-title-feature text-[#33404A] font-bold">
                            Làm sao kiểm soát hạn dùng của nguyên liệu & thành phẩm?
                        </p>
                    </div>

                    <p className="text-base-default-feature font-medium text-[#33404A] lg:max-w-[92%] max-w-full lg:pl-0 pl-[26px]">
                        Tự động theo dõi và cảnh báo khi vật tư sắp hết hạn. Đảm bảo chất lượng đầu ra – tránh tồn kho lỗi, giảm rủi ro ngay từ đầu.
                    </p>
                </div>

                <Link
                    href="https://bom.so/mrp"
                    target='_blank'
                    className="inline-flex items-center gap-2 text-base-default-feature text-[#0375F3] hover:text-[#0375F3]/80 custom-transition lg:pl-0 pl-[26px]"
                >
                    <div className='font-semibold'>
                        Khám phá cách kiểm soát hạn sử dụng ngay từ khâu nhập kho
                    </div>
                    <div className='3xl:size-6 size-5 shrink-0'>
                        <PiArrowUpRight className='size-full' />
                    </div>
                </Link>
            </AnimatedReveal>

            <div className="relative w-full h-full md:col-span-1 col-span-2 lg:order-2 order-1">
                {/* <BlurredBackgroundLinear
                    className="backdrop-blur-[290px] -z-0"
                    background="linear-gradient(90deg, #CCFFEC 0%, #CCE5FF 100%)"
                /> */}

                <AnimatedReveal
                    effect='fade'
                    className='relative z-10 w-full h-full'
                >
                    <Image
                        src="/background/ui/fmrp/features/test-2.png"
                        alt="Đa Biến Thể & LOT - DATE"
                        width={1920}
                        height={1080}
                        className="size-full object-contain [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))]"
                    />
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default FeatureFirst