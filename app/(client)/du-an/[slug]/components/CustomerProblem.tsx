"use client";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSheetStores } from "@/stores/useSheetStores";

interface CustomerProblemProps {
  data: any;
  isLoading?: boolean;
}

const CustomerProblem = ({ data, isLoading }: CustomerProblemProps) => {
  const { setStatusSheet, setOpenSheetCustom } = useSheetStores()
  // Tạo mảng dữ liệu cho nhiều phần tử
  const problemData = data?.item;

  return (
    <div className="relative xl:py-24">
      <div className="absolute w-[500px] h-auto aspect-square rounded-[40px] 2xl:-translate-x-[40%] -translate-x-[60%] top-1/2 -translate-y-1/2 pointer-events-none z-[-1]">
        <Image
          width={500}
          height={500}
          alt="green-blur"
          src="/background/blur/bg-green-v2.svg"
          className="size-full object-contain"
        />
      </div>
      <div className="custom-container px-1 xl:px-0 flex flex-col items-center gap-6 xl:gap-12">
        <div className="flex flex-col gap-2.5 xl:items-center">
          <h2 className="text-green-700 font-extrabold text-title-section-small">
            {isLoading ? <Skeleton className="h-8 w-64" /> : data?.title}
          </h2>
          {isLoading ? (
            <div className="space-y-1 w-full flex flex-col items-center">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-11/12 text-center" />
              <Skeleton className="h-6 w-10/12 text-center" />
            </div>
          ) : (
            <div className="xl:text-center font-medium max-w-5xl mx-auto text-base-default text-[#231F20]">
              <p>{data?.content}</p>
            </div>
          )}
        </div>
        {/* Map dữ liệu ra nhiều phần tử với layout so le */}
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) => (
              <div
                key={`sk-${index}`}
                className={`flex flex-col xl:flex-row gap-6 xl:gap-12 w-full ${
                  index % 2 === 1 ? "xl:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 rounded-xl overflow-hidden">
                  <Skeleton className="w-full aspect-video" />
                </div>
                <div className="flex-1 flex flex-col gap-3 justify-center">
                  <Skeleton className="h-7 w-3/5" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>
              </div>
            ))
          : problemData?.map((item: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col xl:flex-row gap-6 xl:gap-12 ${
                  index % 2 === 1 ? "xl:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 rounded-xl overflow-hidden">
                  {/* Swiper Carousel */}
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full custom-swiper-project"
                  >
                    {item?.img?.map((image: string, imageIndex: number) => (
                      <SwiperSlide key={imageIndex}>
                        <Image
                          src={image}
                          alt={`${item.title} - Hình ảnh ${imageIndex + 1}`}
                          width={1000}
                          height={1000}
                          className="w-full aspect-video object-cover bg-gray-50"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex-1 flex flex-col gap-2.5 justify-center">
                  <h3 className="text-title-section-feature font-extrabold text-light-1000">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#231F20] font-medium">
                    {item.content_short}
                  </p>
                </div>
              </div>
            ))}
        <ButtonAnimationNew
          title="Chuyển đổi số ngay hôm nay"
          icon={
            <div className="2xl:size-12 md:size-10 size-9 rounded-full flex items-center justify-center group-hover:bg-[#10805B] group-hover:text-white duration-500 transition-colors">
              <motion.div
                initial={{ x: 0, y: 0 }}
                variants={{
                  rest: { scale: 1 },
                  hover: { x: 2, y: -2 },
                  press: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
              </motion.div>
            </div>
          }
          onClick={() => {
            setOpenSheetCustom(true)
            setStatusSheet("contact")
        }}
          reverse={true}
          className="border-gradient-button-no-bg-foso flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-[#10805B] hover:bg-[#A3EED6]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter hover:text-[#10805B] font-medium pl-6 pr-1 py-1 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
          style={{
            WebkitBackdropFilter: "blur(15px)",
            boxShadow:
              "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
          }}
        />
      </div>
    </div>
  );
};

export default CustomerProblem;
