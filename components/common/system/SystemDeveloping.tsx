'use client'
import Image from 'next/image'
import React from 'react'
import { cn } from "@/lib/utils";
import { useTranslate } from '@/contexts/TranslateContext';

type DevelopingProps = {
    classNameParent?: string
}

const SystemDeveloping = ({ classNameParent }: DevelopingProps) => {
    // const { dataLang } = useTranslate()
    return (
        <div className={cn('w-full h-screen flex flex-col gap-8 items-center justify-center', classNameParent)}>
            <div className="aspect-video md:h-[50%] h-[25%]">
                <Image
                    src={'/background/system/503-development.svg'}
                    width={1280}
                    height={1024}
                    alt="develop"
                    className="size-full object-contain"
                />
            </div>
            <div className="text-center flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-[#272727] leading-6">
                    {/* {dataLang?.h_feature_in_development ?? "h_feature_in_development"} */}
                </h1>
                <h5 className="text-[#272727]/40 italic text-sm leading-5 font-light">
                    {/* {dataLang?.h_feature_in_development_sub ?? "h_feature_in_development_sub"} */}
                </h5>
            </div>
        </div>
    )
}

export default SystemDeveloping