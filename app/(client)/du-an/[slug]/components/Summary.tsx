"use client";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Summary = () => {
  const images = [IMAGES.img, IMAGES.img2, IMAGES.img3];
  return (
    <div className="custom-container px-1 xl:px-0 flex flex-col xl:items-center gap-2 xl:gap-12 xl:py-24">
      <h2 className="text-green-700 font-extrabold capitalize text-title-section-small">Tổng kết dự án</h2>
      <div className="flex flex-col-reverse gap-6 xl:gap-12 xl:flex-row-reverse">
        <div className="flex-1 rounded-xl overflow-hidden">
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
            {images.map((image, imageIndex) => (
              <SwiperSlide key={imageIndex}>
                <Image
                  src={image}
                  alt={`Hình ảnh ${imageIndex + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full aspect-[696/330] object-cover bg-gray-50"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
            <Image
              src={IMAGES.sign}
              alt="sign"
              width={200}
              height={200}
              className="w-4 xl:w-14 h-fit object-contain"
            />
            <div className="flex flex-col gap-4 xl:gap-6">
              <p className="text-base-default text-[#384455] font-semibold">
                "Từ lúc hợp tác với FOSO, chúng tôi đã có một trang web hoàn hảo
                về cả mặt thiết kế lẫn tính năng. Đội ngũ luôn lắng nghe và giải
                quyết mọi vấn đề một cách nhanh chóng và hiệu quả."
              </p>
              <div className="flex flex-col gap-1">
                <h3 className="text-title-section-feature font-extrabold text-neutral-900">
                  John Doe
                </h3>
                <span className="text-base-default text-light-600 font-semibold">
                  CEO Kanow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
