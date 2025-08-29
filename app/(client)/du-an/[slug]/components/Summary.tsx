"use client";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "@/components/ui/skeleton";

interface SummaryProps {
  data: any;
  isLoading?: boolean;
}

const Summary = ({ data, isLoading = false }: SummaryProps) => {
  const images = data?.img;
  return (
    <div className="custom-container px-1 xl:px-0 flex flex-col lg:items-center gap-2 lg:gap-6 xl:gap-12 xl:py-24">
      <h2 className="text-green-700 font-extrabold capitalize text-title-section-small">
        Tổng kết dự án
      </h2>
      <div className="flex flex-col gap-6 xl:gap-12 lg:flex-row w-full">
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex flex-col lg:flex-row gap-2 xl:gap-8">
            <Image
              src={IMAGES.sign}
              alt="sign"
              width={200}
              height={200}
              className="w-4 xl:w-14 h-fit object-contain"
            />
            <div className="flex flex-col gap-4 xl:gap-6 flex-1">
              {isLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-11/12" />
                  <Skeleton className="h-5 w-10/12" />
                </div>
              ) : (
                <p className="text-base-default text-[#384455] font-semibold">
                  {data?.content}
                </p>
              )}
              <div className="flex flex-col gap-1">
                {isLoading ? (
                  <>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-40" />
                  </>
                ) : (
                  <>
                    <h3 className="text-title-section-feature font-extrabold text-neutral-900">
                      {data?.people_feel}
                    </h3>
                    <span className="text-base-default text-light-600 font-semibold">
                      {data?.position}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden">
          {isLoading ? (
            <Skeleton className="w-full aspect-video" />
          ) : (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={false}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="w-full h-full custom-swiper-project"
            >
              {images?.map((image: string, imageIndex: number) => (
                <SwiperSlide key={imageIndex}>
                  <Image
                    src={image}
                    alt={`Hình ảnh ${imageIndex + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full aspect-[1578:1052] object-cover bg-gray-50"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
