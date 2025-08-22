"use client";

import Image from "next/image";
import React from "react";
import { motion, type RepeatType, type Easing } from "framer-motion";

type Props = {};

const floatingTransition = {
  duration: 6,
  ease: "linear" as Easing,
  repeat: Infinity,
  repeatType: "mirror" as RepeatType,
};

const Tagline: React.FC<Props> = () => {
  return (
    <section className="custom-padding-section relative overflow-hidden">
      {/* Decorative images for desktop */}
      <motion.div
        className="hidden lg:block absolute lg:top-[10%] top-1/2 left-0 lg:-translate-y-1/4 -translate-y-1/2 3xl:size-[260px] xl:h-[250px] lg:h-[250px] size-[250px] aspect-[0.78/1] pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={floatingTransition}
      >
        <Image
          src="/project/image-02.png"
          alt="Decor left"
          width={600}
          height={600}
          className="size-full object-contain"
          priority
        />
      </motion.div>

      <motion.div
        className="hidden lg:block absolute lg:top-[10%] top-1/2 right-0 lg:-translate-y-1/4 -translate-y-1/2 3xl:size-[260px] xl:h-[250px] lg:h-[250px] size-[250px] aspect-[0.78/1] pointer-events-none"
        animate={{ y: [0, -12, 0] }}
        transition={floatingTransition}
      >
        <Image
          src="/project/image-01.png"
          alt="Decor right"
          width={600}
          height={600}
          className="size-full object-contain"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 relative z-[1]">
        <h1 className="text-center font-normal tracking-normal 3xl:text-[64px] 2xl:text-[54px] xxl:text-[52px] xl:text-[48px] lg:text-[40px] md:text-[38px] text-[27px] 3xl:!leading-[94px] 2xl:!leading-[84px] xxl:!leading-[80px] xl:!leading-[80px] lg:!leading-[70px] md:!leading-[60px] !leading-[40px]">
          <span className="relative mr-2 font-extrabold">
            <span className="relative z-10">Dự Án</span>
            <span className="absolute left-0 w-full -bottom-0 md:bottom-0 h-[16px] md:h-[24px] rounded-full bg-[#A3EED6] -z-0" />
          </span>
          <span className="mx-1 font-extrabold text-[#53B086]">FOSO</span>
          <span className="font-normal">Triển Khai</span>
        </h1>
        <p className="3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base !text-sm !tracking-[1%] text-[#33404A] font-medium text-center">
          Cùng nhìn lại những dự án thành công tại FOSO!
        </p>

        {/* Decorative images for mobile/tablet */}
        <div className="lg:hidden w-full flex items-center justify-between gap-4">
          <div className="size-[150px] md:size-[160px] h-auto aspect-square ">
            <Image
              src="/project/image-02.png"
              alt="Decor left mobile"
              width={300}
              height={300}
              className="size-full object-contain "
            />
          </div>
          <div className="size-[150px] md:size-[160px] h-auto aspect-square">
            <Image
              src="/project/image-01.png"
              alt="Decor right mobile"
              width={300}
              height={300}
              className="size-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tagline;
