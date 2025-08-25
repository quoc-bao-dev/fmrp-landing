"use client";

import BlurBackgroundFixed from "@/app/(client)/products/fmrp/components/ui/common/BlurBackgroundFixed";
import AnimatedTitle from "@/components/common/animations/text/AnimatedTitle";
import CustomBreadcrumb from "@/components/common/breadcrumb/CustomBreadcrumb";
import ButtonAnimation from "@/components/common/button/ButtonAnimation";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import { useMemo } from "react";

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Dự án", href: "/du-an" },
  { label: "Kanow" },
];

const Introduce = () => {
  const heroPerTitle = useMemo(
    () =>
      "KANOW – Nơi mỗi chuyến đi đều là một trải nghiệm trọn vẹn"
        .split("")
        .map((letter, index) => ({ id: index, letter })),
    []
  );
  
  return (
    <div className="relative flex flex-col gap-9 xl:gap-8 2xl:gap-12 pt-28 xl:pt-32">
      <BlurBackgroundFixed />
      <div className="block xl:hidden mx-auto">
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>
      <div className="z-10 flex flex-col-reverse xl:flex-row gap-20 xl:gap-32 2xl:gap-40">
        <div className="px-3 md:px-9 xl:px-0 w-full xl:w-[35%] 2xl:w-[30%] 3xl:ml-60 xxl:ml-40 xl:ml-32 flex flex-col gap-12">
          <div className="hidden xl:block">
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex flex-col gap-5">
            <Image
              src={IMAGES.logoKanow}
              alt="logo"
              width={1000}
              height={1000}
              className="w-[200px] h-auto"
            />
            {/* <h2 className="text-title-section-medium-fit-leading font-extrabold text-[#1A2025] capitalize">
              KANOW – Nơi mỗi chuyến đi đều là một trải nghiệm trọn vẹn
            </h2> */}
            <AnimatedTitle
              className="text-title-section-medium-fit-leading font-extrabold text-[#1A2025] capitalize"
              heroPerTitle={heroPerTitle}
              delay={0}
            />

            <p className="text-base-default text-[#33404A] font-medium">
              KANOW là dự án thiết kế website cho thuê xe kết hợp app mobile
              hiện đại, giúp khách hàng dễ dàng đặt xe, lựa chọn tài xế và theo
              dõi hành trình một cách minh bạch, thuận tiện.
            </p>
            <div className="hidden xl:block">
              <h4 className="text-sm-default text-[#33404A] font-medium">
                Công nghệ
              </h4>
              <div className="flex gap-7">
                <Image
                  src={IMAGES.logoReact}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[160px] h-auto"
                />
                <Image
                  src={IMAGES.logoNext}
                  alt="logo"
                  width={1000}
                  height={1000}
                  className="w-[160px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-14 md:ml-24 lg:ml-32 xl:ml-0 relative flex-1 h-fit pl-1 py-1 xl:pl-2 xl:py-2 rounded-l-lg xl:rounded-l-3xl bg-[#FFFFFF73] shadow-[-25.05px_25.05px_50.11px_0px_#257A2840] backdrop-blur-[31.317508697509766px]">
          <Image
            src={IMAGES.bannerKanow}
            alt="banner"
            width={1000}
            height={1000}
            className="w-full aspect-[915/652] object-cover rounded-l-lg xl:rounded-l-2xl bg-gray-50"
          />
          <div className="absolute w-[25%] bottom-4 left-0 -translate-x-1/2">
            <div className="relative">
              <Image
                src={IMAGES.mokupPhone}
                alt="mokupPhone"
                width={1000}
                height={1000}
                className="w-full aspect-[234/462] object-cover"
              />
              <div className="absolute bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[90%] h-[95%] rounded-3xl lg:rounded-[40px] aspect-[234/462] object-cover"></div>
              <Image
                src={IMAGES.kanowMB}
                alt="mokupPhone"
                width={1000}
                height={1000}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[90%] h-[94%] rounded-xl md:rounded-3xl lg:rounded-[40px] aspect-[234/462] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:grid w-full [grid-template-columns:1fr_1fr_1.4fr_1.7fr_3.6fr]">
        <div className="bg-green-02 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Khách hàng
          </h3>
          <p className="whitespace-nowrap text-button text-dark-primary font-bold">
            Kanow
          </p>
        </div>
        <div className="bg-green-03 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Thời gian
          </h3>
          <p className="whitespace-nowrap text-button text-dark-primary font-bold">
            2023
          </p>
        </div>
        <div className="bg-green-02 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Lĩnh vực
          </h3>
          <p className="whitespace-nowrap text-button text-dark-primary font-bold">
            Book xe & Vận chuyển
          </p>
        </div>
        <div className="bg-green-03 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Dịch vụ
          </h3>
          <p className="whitespace-nowrap text-button text-dark-primary font-bold">
            Thiết kế website
          </p>
        </div>
        <div className="bg-green-06 p-4 rounded-b-[20px] flex justify-center items-center">
          <h3 className="whitespace-nowrap text-button text-dark-primary font-bold">
            Truy cập website
          </h3>
        </div>
      </div>
      <div className="px-3 md:px-9 xl:px-0 flex flex-col gap-3 xl:hidden">
        <ButtonAnimation
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1OyCXhXv44M5BdbTXaUwruJ0KJEwofk6Z/view?usp=sharing",
              "_blank"
            )
          }
          icon={
            <div className="xl:size-6 size-5 flex-shrink-0">
              <Image
                width={100}
                height={100}
                alt="icon"
                src={"/icons/common/arrow-circle.svg"}
                className="size-full object-contain"
              />
            </div>
          }
          reverse={true}
          title="Truy cập website"
          className="mb-4 w-full overflow-hidden border-gradient-button-foso flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none rounded-full px-4 py-2 transition-colors duration-300 ease-in-out"
          style={{
            background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
            border: "1px solid #A3EED6",
            borderImageSource:
              "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",
          }}
          whileHover={{
            background: [
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
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
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h3 className="text-sm-default font-medium text-light-800">
              Khách hàng
            </h3>
            <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
              Kanow
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm-default font-medium text-light-800">
              Thời gian
            </h3>
            <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
              2023
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm-default font-medium text-light-800">
            Lĩnh vực
          </h3>
          <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
            Book xe & Vận chuyển
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm-default font-medium text-light-800">
            Dịch vụ
          </h3>
          <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
            Thiết kế website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
