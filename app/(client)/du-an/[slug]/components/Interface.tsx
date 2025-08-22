import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const Interface = () => {
  return (
    <div className="relative xl:py-24 overflow-hidden">
      <div className="absolute w-[500px] h-auto aspect-square rounded-[40px] 2xl:translate-x-[40%] translate-x-[60%] top-10 right-0 pointer-events-none z-[-1]">
        <Image
          width={500}
          height={500}
          alt="green-blur"
          src="/background/blur/bg-green-v2.svg"
          className="size-full object-contain"
        />
      </div>
      <div className="custom-container px-1 xl:px-0 flex flex-col items-center gap-6 xl:gap-12">
        <div className="flex flex-col xl:flex-row gap-2">
          <h2 className="flex-1 text-green-700 text-title-section-medium font-extrabold capitalize">
            Giao diện dự án
          </h2>
          <p className="flex-1 text-base-default text-[#231F20] font-medium">
            The design of their existing website lacked a modern aesthetic,
            failing to represent Yadea’s cutting-edge technologies & products.
            Beyond the outdated visuals, the website’s CMS proved
            user-unfriendly for the marketing team, hindering content updates.
            To top it off, the website wasn’t optimized for performance,
            potentially leading to slow loading times and a negative user
            experience for Vietnamese consumers.
          </p>
        </div>
        <div className="flex gap-3 border-b border-[#F1F5F7] overflow-x-auto">
          <div className="relative py-3 px-4">
            <button className="whitespace-nowrap text-title text-green-700 font-bold">
              Tính năng 1
            </button>
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"></span>
          </div>
          <div className="relative py-3 px-4">
            <button className="whitespace-nowrap text-title text-light-600 font-semibold">
              Tính năng 2
            </button>
            {/* <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"></span> */}
          </div>
          <div className="relative py-3 px-4">
            <button className="whitespace-nowrap text-title text-light-600 font-semibold">
              Tính năng 3
            </button>
            {/* <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"></span> */}
          </div>
          <div className="relative py-3 px-4">
            <button className="whitespace-nowrap text-title text-light-600 font-semibold">
              Tính năng 4
            </button>
            {/* <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"></span> */}
          </div>
          <div className="relative py-3 px-4">
            <button className="whitespace-nowrap text-title text-light-600 font-semibold">
              Tính năng 5
            </button>
            {/* <span className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"></span> */}
          </div>
        </div>
        <div className="w-full px-10 xl:px-40 bg-gradient-to-r from-[#E0FFCC] to-[#CCFFEC] rounded-xl p-4">
          <div className="relative">
            <Image
              src={IMAGES.mokupTablet}
              alt="mokupTablet"
              width={1000}
              height={1000}
              className="w-full aspect-[924/658] object-cover relative z-[11]"
            />
            <Image
              src={IMAGES.bannerKanow}
              alt="bannerKanow"
              width={1000}
              height={1000}
              className="w-full aspect-[924/658] z-[10] object-cover absolute top-0 left-0 p-3 xl:p-8 rounded-xl lg:rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
