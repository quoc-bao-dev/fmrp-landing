"use client";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import { IMAGES } from "@/constants/Images";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CustomerProblem = () => {
  // Tạo mảng dữ liệu cho nhiều phần tử
  const problemData = [
    {
      id: 1,
      title: "Vấn đề vướng phải",
      description:
        "The design of their existing website lacked a modern aesthetic, failing to represent Yadea's cutting-edge technologies & products. Beyond the outdated visuals, the website's CMS proved user-unfriendly for the marketing team, hindering content updates. To top it off, the website wasn't optimized for performance, potentially leading to slow loading times and a negative user experience for Vietnamese consumers.",
      images: [IMAGES.img, IMAGES.img2, IMAGES.img3],
    },
    {
      id: 2,
      title: "FOSO đưa ra giải pháp",
      description:
        "The design of their existing website lacked a modern aesthetic, failing to represent Yadea’s cutting-edge technologies & products. Beyond the outdated visuals, the website’s CMS proved user-unfriendly for the marketing team, hindering content updates. To top it off, the website wasn’t optimized for performance, potentially leading to slow loading times and a negative user experience for Vietnamese consumers.",
      images: [IMAGES.img],
    },
    {
      id: 3,
      title: "FOSO đưa ra giải pháp",
      description:
        "The design of their existing website lacked a modern aesthetic, failing to represent Yadea’s cutting-edge technologies & products. Beyond the outdated visuals, the website’s CMS proved user-unfriendly for the marketing team, hindering content updates. To top it off, the website wasn’t optimized for performance, potentially leading to slow loading times and a negative user experience for Vietnamese consumers.",
      images: [IMAGES.img, IMAGES.img2, IMAGES.img3],
    },
  ];

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
            "Cái bắt tay" của Kanow & FOSO
          </h2>
          <p className="xl:text-center font-medium max-w-5xl mx-auto text-base-default text-[#231F20]">
            The design of their existing website lacked a modern aesthetic,
            failing to represent Yadea's cutting-edge technologies & products.
            Beyond the outdated visuals, the website's CMS proved
            user-unfriendly for the marketing team, hindering content updates.{" "}
          </p>
        </div>
        {/* Map dữ liệu ra nhiều phần tử với layout so le */}
        {problemData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col xl:flex-row gap-6 xl:gap-12 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
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
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full custom-swiper-project"
              >
                {item.images.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex}>
                    <Image
                      src={image}
                      alt={`${item.title} - Hình ảnh ${imageIndex + 1}`}
                      width={1000}
                      height={1000}
                      className="w-full aspect-[696/330] object-cover bg-gray-50"
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
                {item.description}
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
        // onClick={() => {}}
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
