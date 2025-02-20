import Image from "next/image";
import moment from "moment";
import { motion } from "framer-motion";
import ButtonAnimation from "../../button/ButtonAnimation";
import { BsArrowUpRight } from "react-icons/bs";

type MediaCardProps = {
    media: {
        id: string;
        image: string;
        date: string;
        category: string;
        title: string;
    };
};

const MediaCard = ({ media }: MediaCardProps) => {
    return (
        <div
            className="col-span-1 rounded-2xl group cursor-pointer bg-white transition-all duration-300 ease-out hover:bg-[#F3F4F6]"
            style={{
                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A",
            }}
        >
            <div className="aspect-3/2 w-full overflow-hidden rounded-t-2xl">
                <Image
                    width={500}
                    height={400}
                    alt="img"
                    src={media?.image ?? "/default/default.png"}
                    className="size-full object-cover rounded-t-2xl group-hover:scale-105 duration-300 transition-all ease-out"
                />
            </div>

            <div className="flex flex-col gap-2 p-4 bg-white rounded-b-2xl">
                <div className="flex items-center justify-between">
                    <div className="text-sm-default text-[#667F93] lg:max-w-[40%] max-w-[30%]">
                        {moment(media?.date).format("DD/MM/YYYY")}
                    </div>

                    <div className="text-sm-default text-[#10805B] group-hover:text-[#14A76C] lg:max-w-[60%] max-w-[70%] custom-transition">
                        {media?.category}
                    </div>
                </div>

                <div className="text-default text-[#273552] group-hover:text-[#2C3E50] font-medium line-clamp-2 custom-transition">
                    {media?.title}
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
