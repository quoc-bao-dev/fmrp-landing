"use client"

import Image from "next/image";
import moment from "moment";
import { usePathname } from 'next/navigation';
import { memo, useMemo } from "react";
import Link from 'next/link';
import { dataFmrpPages } from "@/data/UrlHeaderFmrp";

type MediaCardProps = {
    media: {
        id: string;
        image: string;
        date: string;
        category: string;
        title: string;
        link?: string;
    };
};

const MediaCard = ({ media }: MediaCardProps) => {
    const pathname = usePathname()

    const formattedDate = useMemo(() => moment(media.date).format("DD/MM/YYYY"), [media.date])

    const categoryColorClass = useMemo(() => {
        return dataFmrpPages.includes(pathname)
            ? "text-[#0F4F9E] group-hover:text-[#0F4F9E]/80"
            : "text-[#10805B] group-hover:text-[#14A76C]"
    }, [pathname])


    return (
        <Link
            className="col-span-1 rounded-3xl group cursor-pointer h-full bg-white transition-all duration-300 ease-out"
            style={{
                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A",
            }}
            href={media.link ?? "#"}
            target="_blank"
        >
            <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
                <Image
                    width={500}
                    height={500}
                    alt="img"
                    src={media?.image ?? "/default/default.png"}
                    className="size-full object-cover rounded-t-2xl group-hover:scale-105 duration-300 transition-all ease-out aspect-square"
                />
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white rounded-b-3xl">
                <div className="flex items-center justify-between">
                    <div className="text-sm-default text-[#667F93] lg:max-w-[40%] max-w-[30%] truncate">
                    {formattedDate}
                    </div>

                    <div className={`${categoryColorClass} text-sm-default lg:max-w-[60%] max-w-[70%] custom-transition`}>
                        {media?.category}
                    </div>
                </div>

                <div className="text-base-default text-[#273552] group-hover:text-[#2C3E50] font-medium line-clamp-2 custom-transition">
                    {media?.title}
                </div>
            </div>
        </Link>
    );
};

MediaCard.displayName = 'MediaCard';

export default memo(MediaCard);
