"use client";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion, AnimatePresence } from "framer-motion";

interface InterfaceProps {
  data: any;
  type_view: number;
}

const Interface = ({ data, type_view }: InterfaceProps) => {
  // State để quản lý tab đang được chọn
  const [activeTab, setActiveTab] = useState(0);

  // Ref để điều khiển Swiper
  const swiperRef = useRef<SwiperType | null>(null);

  // Lấy danh sách các tính năng từ data.item
  const features = data?.item || [];

  // Lấy hình ảnh của tính năng đang được chọn
  const currentImages = features[activeTab]?.img || [];

  // Lấy nội dung mô tả
  const content = data?.content || "";

  // useEffect để đảm bảo khi dữ liệu được load, tab đầu tiên sẽ được active
  useEffect(() => {
    if (features.length > 0 && activeTab === 0) {
      // Force re-render để hiển thị hình ảnh của tab đầu tiên
      setActiveTab(0);
    }
  }, [features, activeTab]);

  // useEffect để reset Swiper khi activeTab thay đổi
  useEffect(() => {
    if (swiperRef.current) {
      // Reset Swiper về slide đầu tiên khi chuyển tab
      swiperRef.current.slideTo(0);
      // Cập nhật Swiper để hiển thị hình ảnh mới
      swiperRef.current.update();
    }
  }, [activeTab, currentImages]);
  console.log(currentImages);
  return (
    <div className="relative xl:py-24 overflow-hidden">
      <div className="absolute w-[500px] h-auto aspect-square rounded-[40px] 2xl:translate-x-[40%] translate-x-[60%] top-10 right-0 pointer-events-none z-[-1]">
        <Image
          width={500}
          height={500}
          alt="green-blur"
          src="/background/blur/bg-green-v2.svg"
          className="size-full object-contain"
        />
      </div>
      <div className="custom-container px-1 xl:px-0 flex flex-col items-center gap-6 xl:gap-10">
        <div className="flex flex-col xl:flex-row gap-2 w-full">
          <h2 className="flex-1 text-green-700 text-title-section-medium font-extrabold capitalize">
            Giao diện dự án
          </h2>
          <p className="flex-1 text-base-default text-[#231F20] font-medium">
            {content}
          </p>
        </div>

        {/* Tab navigation - hiển thị danh sách các tính năng */}
        <div className="flex gap-3 border-b border-[#F1F5F7] overflow-x-scroll overflow-y-hidden scrollbar-hide">
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              className="relative py-3 px-4 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`whitespace-nowrap first-letter:uppercase text-title font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "text-green-700 font-bold"
                    : "text-light-600 hover:text-green-600"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {feature.title}
              </button>
              {/* Hiển thị gạch chân cho tab đang được chọn với animation */}
              <AnimatePresence>
                {activeTab === index && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-green-700 rounded-t-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Hiển thị hình ảnh của tính năng được chọn với fade transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="w-full px-10 xl:px-40 2xl:px-72 bg-gradient-to-r from-[#E0FFCC] to-[#CCFFEC] rounded-xl p-4 lg:p-10"
          >
            {type_view === 1 ? (
              <div className="relative">
                <Image
                  src={IMAGES.mokupTablet}
                  alt="mokupTablet"
                  width={1000}
                  height={1000}
                  className="w-full aspect-[924/658] object-cover relative z-[11]"
                />
                <div className="w-full aspect-[924/658] z-[10] object-cover absolute top-0 left-0 p-3 md:p-5 lg:p-7 rounded-xl lg:rounded-[50px]">
                  <div className="bg-gray-50 w-full h-full"></div>
                </div>
                <motion.div
                  className="w-full aspect-[924/658] z-[10] object-cover absolute top-0 left-0 p-3 md:p-5 lg:p-7 rounded-xl lg:rounded-[50px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Swiper
                    key={`swiper-${activeTab}-${currentImages.length}`}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
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
                    {currentImages.map((image: string, imageIndex: number) => (
                      <SwiperSlide key={`${activeTab}-${imageIndex}`}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: imageIndex * 0.1,
                          }}
                          className="h-full"
                        >
                          <Image
                            src={image}
                            alt={`Hình ảnh ${imageIndex + 1} của ${
                              features[activeTab]?.title
                            }`}
                            width={2000}
                            height={2000}
                            className="w-full h-full object-cover bg-gray-50"
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>
              </div>
            ) : (
              <div className="w-full flex gap-1 xl:gap-4 justify-center">
                {currentImages?.map((item: any, index: number) => (
                  <div key={index} className="relative w-[100px] md:w-[150px] xl:w-[293px]">
                    <Image
                      src={IMAGES.mokupPhone}
                      alt="mokupPhone"
                      width={1000}
                      height={1000}
                      className="w-full aspect-[435/891] object-cover z-[11] relative"
                    />
                    <Image
                      src={item || IMAGES.kanowMB}
                      alt="mokupPhone"
                      width={1000}
                      height={1000}
                      className="absolute top-0 bottom-0 aspect-[435/891] left-1/2 -translate-x-1/2  z-[10] p-1 xl:p-3 rounded-3xl md:rounded-3xl xl:rounded-[50px] object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Interface;
