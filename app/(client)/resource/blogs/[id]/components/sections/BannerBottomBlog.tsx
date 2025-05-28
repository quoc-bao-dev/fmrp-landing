import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import React from "react";
import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import Image from "next/image";

const BannerBottomBlog = () => {
  return (
    <div className=" w-full  md:gap-x-4 gap-x-1  flex items-end 3xl:px-60 xxl:px-40 xl:px-32 lg:px-10 md:px-8 px-3 py-1.5 md:py-0 justify-between h-fit ">
      <div className="md:w-fit md:my-1 lg:my-1.5 w-full flex justify-center md:px-0 px-2  3xl:mb-2">
        <ButtonAnimationNew
          title="Đăng ký trải nghiệm ngay"
          icon={
            <div className="3xl:size-7 2xl:size-5 md:size-5 size-8 rounded-full flex items-center justify-center bg-[#025FCA] text-white">
              <motion.div
                initial={{ x: 0, y: 0 }}
                variants={{
                  rest: { scale: 1 },
                  hover: { x: 2, y: -2 }, // Khi hover vào button, div cũng scale lớn hơn
                  press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowUpRightIcon className="2xl:size-3 md:size-3 size-4 3xl:size-4" />
              </motion.div>
            </div>
          }
          onClick={() => {
            window.open("https://bom.so/mrp");
          }}
          reverse={true}
          className=" relative bg-white border-gradient-button-fmrp-new !shadow-[0px_8px_16px_rgba(3,117,243,0.24)] flex items-center gap-1.5 3xl:!text-sm xl:!text-xs lg:!text-xs md:!text-[10px] text-sm font-bold !tracking-[1%] text-[#025FCA] 3xl:px-3 3xl:py-1.5 xl:px-2 xxl:py-1.5 lg:py-1.5 md:py-1.5 md:px-2.5 py-1.5 px-3 rounded-full md:w-fit w-full capitalize whitespace-nowrap text-nowrap"
        />
      </div>
      <div className="flex-1 hidden md:flex justify-end">
        <Image
          src="/logo/blog/bg_image3.webp"
          alt="bg-image"
          width={900}
          height={600}
          className="lg:w-[800px] xxl:w-[850px] 2xl:w-[970px] md:w-[800px] 3xl:w-[1100px] h-full object-cover "
          quality={100}
        />
      </div>
    </div>
  );
};

export default BannerBottomBlog;
