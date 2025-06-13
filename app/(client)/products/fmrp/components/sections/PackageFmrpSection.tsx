"use client";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import PlanPackageCard from "@/components/common/card/plan/PlanPackageCard";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import FacebookOriginIcon from "@/components/icons/social-media/FacebookOriginIcon";
import FosoOriginIcon from "@/components/icons/social-media/FosoOriginIcon";
import TiktokOriginIcon from "@/components/icons/social-media/TiktokOriginIcon";
import YoutubeOriginIcon from "@/components/icons/social-media/YoutubeOriginIcon";
import { uuidv4 } from "@/lib/uuid";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const dataCommunity = [
  {
    id: uuidv4(),
    icon: <FacebookOriginIcon className="size-full text-[#0866FF]" />,
    name: "Fanpage",
    bg: "linear-gradient(135deg, #1877F2 0%, #4C8BF5 100%)", // Gradient xanh Facebook hiện đại
    link: "https://www.facebook.com/fososoftware",
  },
  {
    id: uuidv4(),
    icon: <FosoOriginIcon className="size-full" />,
    name: "Group",
    bg: "linear-gradient(90.1deg, #0375F3 0.09%, #119DBB 50%, #1FC583 99.92%)", // Xanh biển nổi bật
    // bg: "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)", // Xanh biển nổi bật
    link: "https://www.facebook.com/groups/mrpvn",
  },
  {
    id: uuidv4(),
    icon: <YoutubeOriginIcon className="size-full text-[#E62117]" />,
    name: "Youtube",
    bg: "linear-gradient(135deg, #FF0000 0%, #FF6347 100%)", // Đỏ Youtube rực rỡ
    link: "https://www.youtube.com/@fososoft",
  },
  {
    id: uuidv4(),
    icon: <TiktokOriginIcon className="size-full text-[#010101]" />,
    name: "Tiktok",
    bg: "linear-gradient(95.03deg, #03EFE5 2.2%, #E41B5F 97.4%)", // Hiệu ứng gradient tím-hồng-cam,
    // bg: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)", // Hiệu ứng gradient tím-hồng-cam,
    link: "https://www.tiktok.com/@fososoftware",
  },
];

// Variants cho nền (trượt lên khi hover)
const bgVariants = {
  rest: { top: "100%" },
  hover: { top: "0%", transition: { duration: 0.5 } },
};

// Variants cho icon (Xoay 360° + đổi màu khi hover)
const iconVariants = {
  rest: (color: any) => ({
    rotateY: 0,
    color: color,
    // fill: color, // Giữ nguyên màu gradient
    filter: "brightness(1) invert(0)", // Giữ nguyên màu gradient
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
  hover: {
    rotateY: 360,
    color: "#FFFFFF",
    // fill: "#FFFFFF", // Chuyển icon thành màu trắng khi hover
    filter: "brightness(0) invert(1)", // Chuyển icon sang trắng
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Variants cho text (đổi màu khi hover)
const textVariants = {
  rest: { color: "#1A2025" },
  hover: { color: "#FFFFFF", transition: { duration: 0.6 } },
};

const dataPackage = [
  {
    title: "Freemium",
    price: 0,
    expirationDate: "",
    brand: "1 chi nhánh",
    description: "Trải nghiệm thật, hiệu quả thật, Không giới hạn thời gian",
    type: "Cơ bản",
    buttonText: "Đăng ký ngay",
    variant: "freemium",
    className: "lg:col-span-1 col-span-2",
    popular: false,
    blurImageColor: "/background/blur/blur-orange.png",
    linearImageColor:
      "linear-gradient(to right, rgba(255, 214, 102, 0), rgba(255, 214, 102, 0.6), rgba(255, 214, 102, 0))",
  },
  {
    title: "Professional",
    price: 2860,
    expirationDate: "/ngày",
    brand: "1 chi nhánh",
    description:
      "Tối ưu sản xuất, tối thiểu lãng phí. Toàn quyền truy cập các tính năng chuyên nghiệp",
    type: "Chuyên sâu",
    buttonText: "Liên hệ",
    variant: "pro",
    className: "lg:col-span-1 col-span-2",
    popular: true,
    blurImageColor: "/background/blur/blur-blue.png",
    linearImageColor:
      "linear-gradient(to right, rgba(22, 119, 247, 0), rgba(22, 119, 247, 0.6), rgba(22, 119, 247, 0))",
  },
];

const PackageFmrpSection = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="custom-padding-section2 px-2 xl:px-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_10.1%,#F0F8FF_90.89%,#FFFFFF_100.99%)]">
      <div className="custom-container flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col lg:items-center items-start justify-center gap-2">
          <div className="space-x-2 font-extrabold text-center w-full">
            <span className="text-title-section-small text-[#1A2025] capitalize">
              Khám phá ngay
            </span>
            <span
              className="text-title-section-small capitalize"
              style={{
                background:
                  "linear-gradient(107.4deg, #0375F3 0%, #013DA0 100%)",
                // background: "linear-gradient(107.4deg, #0375F3 65.02%, #036EEA 67.88%, #0267E1 70.73%, #0261D7 73.59%, #025ACE 76.45%, #0254C5 79.31%, #024EBC 82.17%, #0148B3 85.03%, #0142A9 87.89%, #013DA0 90.75%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Các Gói FMRP
            </span>
          </div>

          <div className="text-base-default text-[#33404A] font-medium text-center lg:text-start max-w-full">
            <span>
              Phí dịch vụ tốt nhất thị trường, dễ dàng đáp ứng mọi nhu cầu của
              xưởng
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 2xl:w-[65%] lg:w-[80%] w-full gap-5">
          {dataPackage &&
            dataPackage?.map((plan, index) => (
              <Link
                key={`plan-${index}`}
                href="/products/bang-gia-fmrp"
                className="lg:col-span-1 col-span-2 h-full"
              >
                <PlanPackageCard {...plan} />
              </Link>
            ))}
        </div>
        <ButtonAnimationNew
          title="Xem Chi Tiết"
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
                  <ArrowUpRightLinearBlueIcon className="2xl:size-6 md:size-5 size-4" />
                )}
              </motion.div>
            </div>
          }
          onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
          onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
          onClick={() => {
            window.open("/bang-gia-fmrp");
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
    </div>
  );
};

export default PackageFmrpSection;
