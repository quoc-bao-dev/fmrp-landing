import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { PiChatsFill, PiQrCodeFill, PiArrowUpRight } from "react-icons/pi";
import BlurBackgroundLinear from '../common/BlurBackgroundLinear';
import BlurredBackgroundLinear from '@/components/common/blur/BlurredBackgroundLinear';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';

type Props = {}

const FeatureFour = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className="grid md:grid-cols-2 3xl:gap-24 2xl:gap-20 lg:gap-16 gap-8 lg:mt-0 !mt-8 items-center h-full">
            {
                isVisibleTablet &&
                <h2 className="col-span-2 text-title-section-feature font-extrabold text-[#25387A]">Thảo Luận & Truy Xuất Lịch Sử</h2>
            }

            <div className="relative w-full h-full md:col-span-1 col-span-2">
                {/* <BlurredBackgroundLinear
                    className=" backdrop-blur-[290px] -z-0"
                    background="linear-gradient(90deg, #CCFFEC 0%, #CCE5FF 100%)"
                /> */}

                <AnimatedReveal
                    effect='fade'
                    className='relative z-10 w-full h-full'
                >
                    <Image
                        src="/background/ui/fmrp/features/test-6.png"
                        alt="Đa Biến Thể & LOT - DATE"
                        width={1920}
                        height={1080}
                        className="size-full object-contain [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.3))]"
                    />
                </AnimatedReveal>
            </div>

            <AnimatedReveal
                effect='fade'
                className="space-y-6 md:col-span-1 col-span-2"
            >
                {
                    !isVisibleTablet &&
                    <h2 className="text-title-section-feature font-extrabold text-[#25387A]">Thảo Luận & Truy Xuất Lịch Sử</h2>
                }

                <div className='grid grid-cols-2 3xl:gap-10 gap-8'>
                    <div className="flex items-start gap-2 lg:col-span-1 col-span-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiChatsFill className='size-full' />
                            </span>
                        </div>

                        <div className='space-y-3'>
                            <p className="text-title-feature text-[#33404A] font-bold">
                                Trao đổi ngay trên từng lệnh – không cần Zalo, không sợ thất lạc
                            </p>

                            <p className="text-base-default-feature font-medium text-[#33404A] max-w-full">
                                Gắn thẻ người phụ trách, đính kèm hình ảnh, lưu lại toàn bộ lịch sử trao đổi theo từng công đoạn – đảm bảo xử lý rõ ràng, minh bạch và đúng người, đúng việc.
                            </p>

                            <Link
                                href="https://bom.so/mrp"
                                className="inline-flex items-center justify-between gap-2 text-base-default-feature text-[#0375F3] max-w-full hover:text-[#0375F3]/80 custom-transition"
                            >
                                <div className='font-semibold lg:max-w-[85%] max-w-full'>
                                    Bắt đầu số hoá trao đổi – không còn sót việc, không còn nhầm người.
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
                                <PiQrCodeFill className='size-full' />
                            </span>
                        </div>
                        <div className='space-y-3'>
                            <p className="text-title-feature text-[#33404A] font-bold">
                                Từ lệnh đến tem – truy xuất gốc gác sản phẩm trong 1 lần quét
                            </p>

                            <p className="text-base-default-feature font-medium text-[#33404A] max-w-full">
                                In tem từ điện thoại, mỗi tem chứa mã QR để tra ngược thông tin sản xuất – từ nguyên liệu đến ai phụ trách. Hạn chế lỗi và hỗ trợ kiểm hàng cực nhanh.
                            </p>

                            <Link
                                href="https://bom.so/mrp"
                                className="inline-flex items-center gap-2 text-base-default-feature text-[#0375F3] hover:text-[#0375F3]/80 custom-transition"
                            >
                                <div className='font-semibold lg:max-w-[85%] max-w-full'>
                                    Khám phá cách FMRP giúp bạn truy vết sản xuất dễ như đọc chat nhóm
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

export default FeatureFour