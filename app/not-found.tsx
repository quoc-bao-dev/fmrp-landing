import Image from "next/image";
import ButtonAnimation from '@/components/common/button/ButtonAnimation';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className={`custom-container h-screen flex flex-col space-y-8 items-center justify-center`} >
            <div className="aspect-square 3xl:w-[32%] 2xl:w-[38%] xl:w-[38%] lg:w-[35%] md:w-[50%] w-[85%]">
                <Image
                    src="/background/system/404-error.webp"
                    width={500}
                    height={500}
                    alt="error"
                    className="size-full object-contain aspect-square"
                />
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-9">
                <div className="space-y-2">
                    <h1 className="3xl:text-[36px] 2xl:text-[32px] xxl:text-[30px] xl:text-[28px] md:text-[28px] text-[24px] 3xl:!leading-[56px] 2xl:!leading-[46px] xxl:!leading-[46px] xl:!leading-[42px] md:!leading-[38px] !leading-[34px] tracking-[-2%] font-bold text-[#15AA7A]">
                        Úi! Không tìm thấy trang
                    </h1>
                    <h5 className="3xl:!text-lg xl:!text-lg !text-lg !tracking-[1%] font-medium text-[#17181A]">
                        Trang bạn tìm kiếm đã bị gỡ hoặc không tồn tại.
                    </h5>
                </div>

                {/* <ButtonAnimation
                    type="button"
                    title="Xem tất cả"
                    reverse={true}
                    icon={
                        <div className='size-5'>
                            <GoArrowUpRight className='size-full' />
                        </div>
                    }
                    className="flex items-center gap-2 text-default text-[#10805B] hover:bg-[#A3EED6] hover:text-[#052B1E] font-medium px-8 py-2 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                    onClick={() => { }}
                /> */}

                <Link
                    href="/"
                    className="flex items-center justify-between gap-2 xl:!text-base text-sm !tracking-[1%] text-[#10805B] hover:bg-[#A3EED6] hover:text-[#052B1E] font-medium px-6 py-2 border border-[#10805B] rounded-[40px] lg:w-fit w-full">
                    <span>
                        Trở về trang chủ
                    </span>

                    <div className='size-5'>
                        <GoArrowUpRight className='size-full' />
                    </div>
                </Link>
            </div>
        </div>
    )
}