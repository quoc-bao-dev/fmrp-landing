import { FC } from "react";
import Link from "next/link";
import ButtonAnimation from "../../button/ButtonAnimation";
import { GoArrowUpRight } from "react-icons/go";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, link, linkText }) => {
    return (
        <Link
            className="bg-white hover:bg-white/80 rounded-3xl p-6 flex flex-col items-start justify-between 3xl:gap-8 gap-6 hover:!shadow-lg transition-all duration-500 ease-in-out group"
            style={{
                boxShadow: "2px 2px 8px 2px rgba(119, 114, 147, 0.05), 2px 2px 8px 2px rgba(119, 114, 147, 0.05)"
            }}
            href={link}
        >
            <div className="space-y-6">
                {/* Icon */}
                <div className="xl:size-16 size-14">
                    {icon}
                </div>

                <div className='space-y-2'>
                    {/* Title */}
                    <h3 className="text-title font-bold text-[#33404A] line-clamp-2">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-default text-[#33404A] font-medium line-clamp-4">
                        {description}
                    </p>
                </div>
            </div>
            

            {/* CTA Button */}
            <ButtonAnimation
                type="button"
                title={linkText}
                reverse={true}
                icon={
                    <div className='size-5'>
                        <GoArrowUpRight className='size-full' />
                    </div>
                }
                className="flex items-center gap-2 text-default text-[#10805B] group-hover:bg-[#A3EED6] group-hover:text-[#052B1E] font-medium px-6 py-2 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                onClick={() => { }}
            />
        </Link>
    );
};

export default FeatureCard;
