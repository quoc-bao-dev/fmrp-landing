"use client";
import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import { IMAGES } from "@/constants/Images";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fieldsData = [
  {
    image: IMAGES.maymac,
    name: "May mặc",
  },
  {
    image: IMAGES.dienmay,
    name: "Điện máy",
  },
  {
    image: IMAGES.cokhi,
    name: "Cơ khí - chế tạo",
  },
  {
    image: IMAGES.thucpham,
    name: "Thực phẩm",
  },
  {
    image: IMAGES.nongnghiep,
    name: "Nông nghiệp",
  },
  {
    image: IMAGES.go,
    name: "Gỗ nội, ngoại thất",
  },
  {
    image: IMAGES.nhua,
    name: "Sản xuất nhựa",
  },
  {
    image: IMAGES.giay,
    name: "Sản xuất giấy",
  },
  {
    image: IMAGES.khac,
    name: "Khác",
  },
];
const ManufacturingFields = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section className="custom-padding-section px-2 xl:px-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_10.1%,#F0F8FF_90.89%,#FFFFFF_100.99%)]">
      <div className="custom-container flex flex-col gap-6 xl:gap-16 items-center justify-center">
        <AnimatedReveal className="text-title-section-small text-[#1A2025] font-extrabold text-center">
          Linh Hoạt Triển Khai Cho{" "}
          <span
            style={{
              background:
                "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mọi Ngành Sản Xuất
          </span>
        </AnimatedReveal>

        <AnimatedReveal className="grid grid-cols-3 gap-4 xl:hidden">
          {fieldsData.map((field, index) => (
            <div
              key={index}
              className="px-2 aspect-square shadow-[1px_-1px_20px_-5px_#0375F326_inset] rounded-2xl flex flex-col items-center justify-center bg-white"
            >
              <Image
                src={field.image}
                alt={field.name}
                width={500}
                height={500}
                className="size-10 object-cover"
              />
              <p className="text-sm-default font-semibold text-primary-new-02 text-center">
                {field.name}
              </p>
            </div>
          ))}
        </AnimatedReveal>

        <AnimatedReveal className="hidden xl:flex flex-col gap-7 items-center">
          <div className="grid grid-cols-4 gap-7">
            {fieldsData.slice(0, 4).map((field, index) => (
              <div
                key={index}
                className="size-[150px] shadow-[1px_-1px_20px_-5px_#0375F326_inset] rounded-2xl flex flex-col items-center justify-center bg-white"
              >
                <Image
                  src={field.image}
                  alt={field.name}
                  width={500}
                  height={500}
                  className="size-24 object-cover"
                />
                <p className="text-sm-default font-semibold text-primary-new-02">
                  {field.name}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-7">
            {fieldsData.slice(4).map((field, index) => (
              <div
                key={index}
                className="size-[150px] shadow-[1px_-1px_20px_-5px_#0375F326_inset] rounded-2xl flex flex-col items-center justify-center bg-white"
              >
                <Image
                  src={field.image}
                  alt={field.name}
                  width={500}
                  height={500}
                  className="size-24 object-cover"
                />
                <p className="text-sm-default font-semibold text-primary-new-02">
                  {field.name}
                </p>
              </div>
            ))}
          </div>
        </AnimatedReveal>
        <ButtonAnimationNew
          title="Trải Nghiệm Ngay"
          icon={
            <div className="2xl:size-12 md:size-10 size-9 rounded-full capitalize flex items-center justify-center group-hover:bg-[#024EBC] group-hover:text-white duration-500 transition-colors">
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {isHovered ? (
                  <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
                ) : (
                  <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4 text-[#036EEA]" />
                )}
              </motion.div>
            </div>
          }
          onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
          onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
          onClick={() => {
            window.open("https://bom.so/mrpbeta");
          }}
          reverse={true}
          className="border-gradient-button-no-bg-fmrp flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 rounded-[40px] lg:w-fit w-full"
          style={{
            background:
              "linear-gradient(77.74deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            WebkitBackdropFilter: "blur(15px)", // Safari
            boxShadow:
              "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
          }}
        />
      </div>
    </section>
  );
};

export default ManufacturingFields;
