"use client";

import AnimatedTitle from "@/components/common/animations/text/AnimatedTitle";
import { motion, type Easing, type RepeatType } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";

type Props = {};

const floatingTransition = {
  duration: 6,
  ease: "linear" as Easing,
  repeat: Infinity,
  repeatType: "mirror" as RepeatType,
};

const Tagline: React.FC<Props> = () => {
  const heroPerTitle = useMemo(
    () => "Dự Án".split("").map((letter, index) => ({ id: index, letter })),
    []
  );
  return (
    <section className="py-6 relative overflow-hidden ">
      {/* Decorative images for desktop */}
      <motion.div
        className="hidden lg:block absolute lg:top-[10%] top-1/2 left-0 lg:-translate-y-1/4 -translate-y-1/2 3xl:size-[260px] xl:h-[250px] lg:h-[250px] size-[250px] aspect-[0.78/1] pointer-events-none"
        // animate={{ y: [0, -12, 0] }}
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
        // animate={{ y: [0, -12, 0] }}
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
          <span className="relative flex justify-center">
            {/* Background trượt từ trái sang phải */}
            <motion.span
              className="absolute lg:bottom-[16%] bottom-[10%] bg-[#A3EED6] rounded-full h-[26%] lg:w-[38%] w-[37%]"
              initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
              animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Hiện dần ra
              transition={{
                duration: 2, // Làm chậm hiệu ứng để mượt hơn
                delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
              }}
            />

            <AnimatedTitle
              className="text-[#050505] relative z-10 font-extrabold"
              heroPerTitle={heroPerTitle}
            />
          </span>
          <AnimatedTitle
            className="mx-1 font-extrabold text-[#53B086]"
            heroPerTitle={["F", "O", "S", "O"].map((letter, index) => ({
              id: index,
              letter,
            }))}
            delay={0.5}
          />
          <AnimatedTitle
            className="font-normal"
            heroPerTitle={[
              "T",
              "r",
              "i",
              "ể",
              "n",
              " ",
              "K",
              "h",
              "a",
              "i",
            ].map((letter, index) => ({
              id: index,
              letter,
            }))}
            delay={1}
          />
        </h1>
        <p className="3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base !text-sm !tracking-[1%] text-[#33404A] font-medium text-center">
          Cùng nhìn lại những dự án thành công tại FOSO!
        </p>

        {/* Decorative images for mobile/tablet */}
        <div className="lg:hidden w-full flex items-center justify-between gap-4">
          <div className="size-[120px] md:size-[160px] h-auto aspect-square ">
            <Image
              src="/project/image-02.png"
              alt="Decor left mobile"
              width={300}
              height={300}
              className="size-full object-contain "
            />
          </div>
          <div className="size-[120px] md:size-[160px] h-auto aspect-square">
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
