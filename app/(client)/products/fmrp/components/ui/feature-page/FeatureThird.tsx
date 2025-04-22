import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import { PiPushPinFill, PiPrinterFill, PiArrowUpRight } from "react-icons/pi";
import BlurredBackgroundLinear from '@/components/common/blur/BlurredBackgroundLinear';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';

type Props = {}

const FeatureThird = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    return (
        <div className="flex lg:flex-row flex-col lg:items-center 3xl:gap-24 2xl:gap-20 lg:gap-16 gap-8 lg:mt-0 !mt-8 h-full">
            {
                isVisibleTablet &&
                <h2 className="text-title-section-feature font-extrabold text-[#25387A]">Lệnh Sản Xuất & In Lệnh Trực Tiếp</h2>
            }

            <AnimatedReveal
                effect='fade'
                className="space-y-6 lg:w-[55%] w-full md:col-span-1 col-span-2 lg:order-1 order-2"
            >
                {
                    !isVisibleTablet &&
                    <h2 className="text-title-section-feature font-extrabold text-[#25387A]">Lệnh Sản Xuất & In Lệnh Trực Tiếp</h2>
                }

                <div className='space-y-3'>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiPushPinFill className='size-full' />
                            </span>
                        </div>
                        <p className="text-title-feature text-[#33404A] font-bold">
                            Ghim lệnh sản xuất – theo sát tiến độ ngay trên ứng dụng
                        </p>
                    </div>

                    <p className="text-base-default font-medium text-[#33404A] lg:max-w-[92%] max-w-full pl-[26px]">
                        Không cần tìm kiếm phức tạp, mỗi lệnh sản xuất được ghim cố định theo từng đơn hàng. Bạn dễ dàng theo dõi trạng thái, cập nhật từng bước mà không bỏ sót bất kỳ công đoạn nào.
                    </p>
                </div>

                <div className='space-y-3'>
                    <div className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-1">
                            <span className="inline-flex items-center justify-center 3xl:size-6 size-5 text-[#10805B] rounded-sm">
                                <PiPrinterFill className='size-full' />
                            </span>
                        </div>
                        <p className="text-title-feature text-[#33404A] font-bold">
                            In lệnh ngay trên điện thoại – giao việc nhanh, rõ ràng, không chờ đợi
                        </p>
                    </div>

                    <p className="text-base-default font-medium text-[#33404A] lg:max-w-[92%] max-w-full pl-[26px]">
                        Lệnh sản xuất có mã QR riêng, dễ in – dễ đọc – dễ thực hiện. Nhân viên nhận việc nhanh, quản lý kiểm soát tốt, hạn chế truyền đạt sai thông tin.
                    </p>
                </div>

                <Link
                    href="https://bom.so/mrp"
                    className="inline-flex items-center gap-2 text-base-default text-[#0375F3] hover:text-[#0375F3]/80 custom-transition pl-[26px]"
                >
                    <div className='font-semibold'>
                        Khám phá cách theo dõi và in lệnh sản xuất nhanh gọn ngay
                    </div>
                    <div className='3xl:size-6 size-5 shrink-0'>
                        <PiArrowUpRight className='size-full' />
                    </div>
                </Link>
            </AnimatedReveal>

            <div className="relative lg:w-[44%] w-full md:col-span-1 col-span-2 h-full lg:order-2 order-1">
                <BlurredBackgroundLinear
                    className="backdrop-blur-[290px] -z-0"
                    background="linear-gradient(90deg, #CCFFEC 0%, #CCE5FF 100%)"
                />

                <AnimatedReveal
                    effect='fade'
                    className='relative z-10 w-full h-full max-w-[75%] mx-auto'
                >
                    <Image
                        src="/background/ui/fmrp/features/test-5.png"
                        alt="Lệnh Sản Xuất & In Lệnh Trực Tiếp"
                        width={1920}
                        height={1080}
                        className="size-full object-contain drop-shadow-2xl"
                    />
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default FeatureThird