import { JSX } from "react";
import Link from "next/link"; // Nếu dùng Next.js, có thể dùng Link

interface InfoSectionProps {
    title?: string;
    items: { name?: string; label?: string; value?: JSX.Element | string; link?: string }[];
}

const InfoSection = ({ title, items }: InfoSectionProps) => (
    <div className="flex flex-col 3xl:gap-8 lg:gap-6 gap-4">
        {title && <div className="text-default font-bold text-[#F1F5F7] uppercase">{title}</div>}

        <div className="text-sm-default space-y-4 text-[#B3C5D4]">
            {
                items.map((item, index) => (
                    <div key={index} className="space-x-1">
                        {item.label && <span>{item.label}</span>}
                        {
                            item.value ?
                                (
                                    <span>{item.value}</span>
                                )
                                :
                                (
                                    item.name &&
                                    (
                                        item.link ?
                                            (
                                                <Link href={item.link} className="hover:text-[#F1F5F7] transition-colors duration-200 ease-in-out cursor-pointer">
                                                    {item.name}
                                                </Link>
                                            )
                                            :
                                            (
                                                <span className="hover:text-[#F1F5F7] transition-colors duration-200 ease-in-out">
                                                    {item.name}
                                                </span>
                                            )
                                    )
                                )}
                    </div>
                ))
            }
        </div>
    </div>
);

export default InfoSection;
