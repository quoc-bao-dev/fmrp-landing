"use client";

import BlurBackgroundFixed from "@/app/(client)/products/fmrp/components/ui/common/BlurBackgroundFixed";
import AnimatedTitle from "@/components/common/animations/text/AnimatedTitle";
import BlurImage from "@/components/common/blur/BlurImage";
import CustomBreadcrumb from "@/components/common/breadcrumb/CustomBreadcrumb";
import ButtonAnimation from "@/components/common/button/ButtonAnimation";
import { Skeleton } from "@/components/ui/skeleton";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface IntroduceProps {
  data: any;
  logo: string;
  name: string;
  year: string;
  field_detail: any;
  category: any;
  isLoading?: boolean;
  type_view: number;
}

const Introduce = ({
  data,
  logo,
  name,
  year,
  field_detail,
  category,
  isLoading = false,
  type_view,
}: IntroduceProps) => {
  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Dự án", href: "/du-an" },
    { label: name || "" },
  ];

  const heroPerTitle = useMemo(
    () =>
      data?.title
        .split("")
        .map((letter: string, index: number) => ({ id: index, letter })),
    [data?.title]
  );

  return (
    <div
      className={`relative flex flex-col pt-28 xl:pt-32 gap-9 ${
        type_view === 2 ? "xl:gap-0" : "xl:gap-20"
      }`}
    >
      <BlurBackgroundFixed />
      <div className="block xl:hidden mx-auto">
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>
      <div
        className={`z-10 flex flex-col-reverse xl:flex-row ${
          type_view === 2
            ? "gap-9 xl:gap-0 xl:pr-20 2xl:pr-0"
            : "gap-20 xl:gap-32 2xl:gap-40"
        }`}
      >
        <div
          className={`px-3 md:px-9 xl:px-0 w-full 3xl:ml-60 xxl:ml-40 xl:ml-32 flex flex-col gap-8 2xl:gap-12 xl:pb-5 ${
            type_view === 2 ? "xl:w-[30%]" : "xl:w-[27%] 2xl:w-[25%]"
          }`}
        >
          <div className="hidden xl:block">
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex flex-col gap-5">
            {!isLoading && logo ? (
              <Image
                src={data?.technology?.left || IMAGES.img}
                alt="logo"
                width={1000}
                height={1000}
                className="h-10 object-contain w-fit"
              />
            ) : (
              <Skeleton className="h-10 w-40" />
            )}

            {!isLoading && data?.title ? (
              <AnimatedTitle
                className="text-title-section-medium-fit-leading font-extrabold text-[#1A2025] capitalize"
                heroPerTitle={heroPerTitle || []}
                delay={0.5}
              />
            ) : (
              <Skeleton className="h-20 w-3/4" />
            )}

            {!isLoading ? (
              <p className="text-base-default text-[#33404A] font-medium">
                {data?.content_one}
              </p>
            ) : (
              <div className="space-y-1">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-11/12" />
                <Skeleton className="h-6 w-10/12" />
              </div>
            )}
            {type_view === 2 || type_view === 3 ? (
              <div className="hidden xl:flex gap-3">
                <div className="flex flex-col gap-3">
                  <Image
                    src={IMAGES.appstore}
                    alt="appstore"
                    width={1000}
                    height={1000}
                    className="w-[200px] h-auto"
                  />
                  <Image
                    src={IMAGES.googleplay}
                    alt="googleplay"
                    width={1000}
                    height={1000}
                    className="w-[200px] h-auto"
                  />
                </div>
                <div className="w-[130px] aspect-square flex-shrink-0 border border-[#0000000F] rounded-lg overflow-hidden">
                  <Image
                    src={data?.technology?.right || IMAGES.img}
                    alt="googleplay"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
        {type_view === 2 ? (
          <div className="overflow-hidden px-10 xl:pr-0 w-full flex-1">
            <div className="relative rotate-[15deg] flex-1 flex items-center justify-center w-full -translate-x-[10%] -mb-[20%] 2xl:-mb-[18%] 3xl:-mb-[12%]">
              <div className="w-[40%] relative translate-x-1/3 translate-y-[15%]">
                <Image
                  src={IMAGES.mokupPhone}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="w-full aspect-[435/891] object-cover "
                />
                <Image
                  src={data?.img?.left || IMAGES.kanowMB}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] p-1 lg:p-3 rounded-2xl md:rounded-[40px] lg:rounded-[60px] xl:rounded-[40px] 2xl:rounded-[60px] 3xl:rounded-[90px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black rounded-l-lg xl:rounded-l-2xl"></div>
              </div>
              <div className="w-[40%] relative z-10">
                <Image
                  src={IMAGES.mokupPhone}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="w-full aspect-[435/891] object-cover"
                />
                <Image
                  src={data?.img?.right || IMAGES.kanowMB}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-[-1] p-1 lg:p-3 rounded-2xl md:rounded-[40px] lg:rounded-[60px] xl:rounded-[40px] 2xl:rounded-[60px] 3xl:rounded-[90px] object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="ml-14 md:ml-24 lg:ml-32 xl:ml-0 relative flex-1 h-fit pl-1 py-1 xl:pl-2 xl:py-2 rounded-l-lg xl:rounded-l-3xl bg-[#FFFFFF73] shadow-[-25.05px_25.05px_50.11px_0px_#257A2840] backdrop-blur-[31.317508697509766px]">
            <div className="rounded-l-lg xl:rounded-l-2xl">
              <BlurImage
                src={data?.img?.right || IMAGES.img}
                alt="banner"
                width={1000}
                height={1000}
                loading="lazy"
                className="w-full aspect-[1280/800] object-cover rounded-l-lg xl:rounded-l-2xl bg-gray-50"
              />
            </div>

            <div className="absolute w-[22.5%] bottom-4 left-0 -translate-x-1/2">
              <div className="relative">
                <Image
                  src={IMAGES.mokupPhone}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="w-full aspect-[435/891] object-cover"
                />
                <div className="absolute bg-gray-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-[90%] h-[95%] rounded-3xl aspect-[435/891] object-cover"></div>
                <Image
                  src={data?.img?.left || IMAGES.img}
                  alt="mokupPhone"
                  width={1000}
                  height={1000}
                  className="absolute aspect-[435/891] top-0 bottom-0 left-1/2 -translate-x-1/2 z-[-1] p-0.5 md:p-2 rounded-xl md:rounded-3xl lg:rounded-[35px] xl:rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden xl:grid w-full [grid-template-columns:1fr_1fr_1.4fr_1.7fr_3.6fr]">
        <div className="bg-green-02 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="whitespace-nowrap text-sm-default font-medium text-light-800">
            Khách hàng
          </h3>
          {!isLoading && name ? (
            <p className="whitespace-nowrap text-button text-dark-primary font-bold">
              {name}
            </p>
          ) : (
            <Skeleton className="h-6 w-14" />
          )}
        </div>
        <div className="bg-green-03 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="whitespace-nowrap text-sm-default font-medium text-light-800">
            Thời gian
          </h3>
          {!isLoading && year ? (
            <p className="whitespace-nowrap text-button text-dark-primary font-bold">
              {year}
            </p>
          ) : (
            <Skeleton className="h-6 w-16" />
          )}
        </div>
        <div className="bg-green-02 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Lĩnh vực
          </h3>
          {!isLoading && (Array.isArray(field_detail) || field_detail?.name) ? (
            <p className="whitespace-nowrap text-button text-dark-primary font-bold">
              {Array.isArray(field_detail)
                ? field_detail
                    .map((item: any) => item?.name)
                    .filter(Boolean)
                    .join(", ")
                : field_detail?.name || ""}
            </p>
          ) : (
            <Skeleton className="h-6 w-40" />
          )}
        </div>
        <div className="bg-green-03 p-4 rounded-b-[20px] px-10 pt-12 pb-4 flex flex-col justify-center items-center">
          <h3 className="text-sm-default font-medium text-light-800">
            Dịch vụ
          </h3>
          {!isLoading && category ? (
            <>
              {category?.name ? (
                <p className="whitespace-nowrap text-button text-dark-primary font-bold">
                  {category?.name}
                </p>
              ) : (
                <p className="whitespace-nowrap text-button text-dark-primary font-bold">
                  {category
                    .map((item: any) => item?.name)
                    .filter(Boolean)
                    .join(" & ")}
                </p>
              )}
            </>
          ) : (
            <Skeleton className="h-6 w-28" />
          )}
        </div>
        <Link
          href={data?.link_button || ""}
          target="_blank"
          className="bg-green-06 p-4 rounded-b-[20px] flex justify-center items-center"
        >
          <h3 className="whitespace-nowrap text-button text-dark-primary font-bold">
            {data?.title_button || ""}
          </h3>
        </Link>
      </div>
      <div className="px-3 md:px-9 xl:px-0 flex flex-col gap-3 xl:hidden">
        <ButtonAnimation
          onClick={() => window.open(data?.link_button, "_blank")}
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
          title={data?.title_button || ""}
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
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%) , linear-gradient(0deg, #1AD598, #1AD598)",
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
            {!isLoading && name ? (
              <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
                {name}
              </p>
            ) : (
              <Skeleton className="h-6 w-24" />
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm-default font-medium text-light-800">
              Thời gian
            </h3>
            {!isLoading && year ? (
              <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
                {year}
              </p>
            ) : (
              <Skeleton className="h-6 w-16" />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm-default font-medium text-light-800">
            Lĩnh vực
          </h3>
          {!isLoading && (Array.isArray(field_detail) || field_detail?.name) ? (
            <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
              {Array.isArray(field_detail)
                ? field_detail
                    .map((item: any) => item?.name)
                    .filter(Boolean)
                    .join(", ")
                : field_detail?.name || ""}
            </p>
          ) : (
            <Skeleton className="h-6 w-40" />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm-default font-medium text-light-800">
            Dịch vụ
          </h3>
          {!isLoading && category?.name ? (
            <p className="whitespace-nowrap text-title-feature text-dark-primary font-bold">
              {category?.name}
            </p>
          ) : (
            <Skeleton className="h-6 w-28" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Introduce;
