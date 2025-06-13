"use client";
import BlurImage from "@/components/common/blur/BlurImage";
import CustomBreadcrumb from "@/components/common/breadcrumb/CustomBreadcrumb";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import { useResizeStore } from "@/stores/useResizeStore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import BlurBackgroundFixed from "../ui/common/BlurBackgroundFixed";

type Props = {};

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giải pháp", href: "#" },
  { label: "Sản phẩm", href: "#" },
  { label: "FMRP" },
];

const IntroductionFmrpSection = (props: Props) => {
  const { isVisibleTablet } = useResizeStore();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="3xl:pt-32 xl:pt-28 pt-28 bg-transparent flex flex-col justify-center items-center relative"
      // style={{
      //   background:
      //     "linear-gradient(180deg, #FFFFFF 0%, #F0F8FF 12.04%, #F0F8FF 86.67%, #FFFFFF 100%)",
      // }}
    >
      <BlurBackgroundFixed />

      <CustomBreadcrumb items={breadcrumbItems} />
      <div className="3xl:ml-60 xxl:ml-40 xl:ml-32 lg:ml-10 lg:mr-0 4xl:px-[10%] flex lg:flex-row flex-col-reverse items-center lg:justify-normal justify-center overflow-x-hidden">
        <div className="px-4 xl:px-0 w-full xl:max-w-[34%] flex flex-col shrink-0 lg:items-start items-center lg:justify-normal justify-center lg:text-start text-center 3xl:gap-8 2xl:gap-6 gap-4">
          <div className="flex flex-col gap-1 xl:gap-4">
            <h2 className="text-title-section-medium text-[#1A2025] font-extrabold capitalize">
              Phần Mềm Quản Lý
              <br /> Xưởng{" "}
              <span
                style={{
                  background:
                    "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sản Xuất
              </span>
            </h2>
            <p className="text-sm-default text-[#33404A] font-semibold xl:w-[75%] text-justify">
              Theo dõi sản xuất, kiểm soát kho nguyên vật liệu, giao việc cho
              công nhân và quản lý tiến độ mọi lúc – mọi nơi.
            </p>
          </div>

          <div className="flex flex-col xxs:flex-row items-center gap-3 w-full">
            <ButtonAnimationNew
              title="Trải Nghiệm Miễn Phí"
              icon={
                <div className="2xl:size-12 md:size-10 size-[22px] rounded-full capitalize flex items-center justify-center bg-white duration-500 transition-colors">
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  >
                    <ArrowUpRightIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                    <ArrowUpRightLinearBlueIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                  </motion.div>
                </div>
              }
              onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
              onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
              onClick={() => {
                window.open("https://bom.so/mrpbeta");
              }}
              reverse={true}
              className="border-gradient-button-fmrp-active xl:pl-6 xl:p-1 pl-3 p-2 border-gradient-button-fmrp bg-[#206AFF] text-white lg:mr-0 mr-1 flex items-center text-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC] hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium rounded-full w-full xl:w-fit"
              //       className="h-full w-fit border-gradient-button-fmrp-new bg-white flex items-center gap-2 bg-red text-base font-bold text-[#25387A] !text-nowrap whitespace-nowrap capitalize border-none rounded-full px-[14px] py-2 transition-colors duration-300 ease-in-out
              // !shadow-[0px_2px_6px_rgba(3,117,243,0.15),-2px_-2px_16px_rgba(3,117,243,0.48)_inset,2px_2px_16px_-5px_rgba(31,197,131,0.48)_inset]"
              style={{
                boxShadow:
                  "0px -1px 2px 0px #FFFFFF4D inset, 0px -2px 5px 1px #FFFFFF1F inset, 0px 1px 2px 0px #151A364D inset, 0px 2px 6px 0px #151A3626 inset, 0px -2px 14px 0px #FFFFFF26 inset, 0px 20px 26px -8px #0F163A26",
                background: "#206AFF",
              }}
              whileHover={{
                background: [
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                ],
                transition: {
                  duration: 1.5,
                  ease: [0.4, 0, 0.6, 1],
                  repeat: Infinity,
                },
                boxShadow: [
                  "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                  "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                  "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                  "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)",
                ],
              }}
            />

            <Link
              href="/bang-gia-fmrp"
              className="w-full xl:w-fit whitespace-nowrap border-gradient-button-no-bg-fmrp-gray border-[#D9E1E7] bg-white hover:bg-[#F0F8FF] rounded-full px-5 py-2.5 md:py-4 xl:py-[13px] 2xl:py-[18px] text-sm font-medium shadow-[0px_1px_2px_0px_#B3ADAD0D,0px_4px_4px_0px_#B3ADAD0A,0px_9px_5px_0px_#B3ADAD08,0px_16px_6px_0px_#B3ADAD03,0px_25px_7px_0px_#B3ADAD00]"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
        {isVisibleTablet && (
          <div className="w-full mt-2">
            <div className="w-auto">
              <BlurImage
                src="/background/ui/fmrp/bg-fmrpMb.png"
                alt="bg-fmrp"
                width={1536}
                height={853}
                className="size-full object-cover relative"
                classNameContainer="w-full object-cover relative"
                loading="lazy"
              />
            </div>
          </div>
        )}
        {!isVisibleTablet && (
          <div className="w-full pointer-events-none select-none relative">
            <div className=" w-auto 3xl:h-[800px] 2xl:h-[760px] xxl:h-[720px] xl:h-[540px] h-fit aspect-1.6/1 relative">
              <BlurImage
                src="/background/ui/fmrp/bg-fmrp4.png"
                alt="bg-fmrp"
                width={1536}
                height={853}
                className="size-full object-contain aspect-1.6/1 relative"
                classNameContainer="w-full object-contain aspect-1.6/1 relative"
                loading="lazy"
              />
              {/* Mask Gradient chỉ nằm vùng 180px cuối */}
              {/* <div
                className="hidden xl:block absolute z-[999] xxl:bottom-8 xl:bottom-4 bottom-0 xxl:-right-32 -right-20 w-full xxl:h-[180px] h-[160px] pointer-events-none blur-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 40%)",
                }}
              /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroductionFmrpSection;
