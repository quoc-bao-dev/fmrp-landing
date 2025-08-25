import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const Banner = ({ data }: { data: any }) => {
  return (
    <div className="relative w-full aspect-[1920/768]">
      <Image
        src={data?.img || IMAGES.img}
        alt="banner"
        width={3000}
        height={2000}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
