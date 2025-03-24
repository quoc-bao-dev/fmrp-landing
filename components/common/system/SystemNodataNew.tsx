'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

type Props = {
    type: string
    className?: string
    classNameTitle?: string
}

const imageByType: Record<string, string> = {
    'blog-list': '/background/system/no-data-amico.svg',
    // Các loại khác nếu cần
}

const titleByType: Record<string, string> = {
    'blog-list': 'Chưa có danh sách bài viết!',
    // Thêm key: value nếu dùng đa ngôn ngữ hoặc có title khác
}

const SystemNodataNew = ({ type, className, classNameTitle }: Props) => {
    const imageSrc = imageByType[type] || '/background/system/no-data-amico.svg'
    const title = titleByType[type] || ''

    const dynamicImageClass = cn(
        ['blog-list'].includes(type) && '3xl:h-[600px] xxl:h-[500px] h-[400px] w-auto aspect-square',
        ['history'].includes(type) && 'h-[120px] aspect-square'
    )

    return (
        <div className={cn("flex flex-col gap-2 items-center justify-center h-full", className)}>
            <Image
                src={imageSrc}
                alt='nodata'
                width={1280}
                height={1024}
                className={cn("mx-auto w-full object-contain", dynamicImageClass)}
                unoptimized
            />
            {title && (
                <h1 className={cn("3xl:text-xl text-lg font-bold text-[#15AA7A] leading-6", classNameTitle)}>
                    {title}
                </h1>
            )}
        </div>
    )
}

export default SystemNodataNew
