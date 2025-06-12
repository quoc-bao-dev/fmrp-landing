"use client";

import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { dataFmrpPages } from "@/data/UrlHeaderFmrp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import PhoneLink from "../contact-links/PhoneLink";
import SocialMediaButton from "./SocialMediaButton";
import ButtonToTop from "./ButtonToTop";

// Danh sách các button mạng xã hội với `handleClick` riêng
const socialButtons = [
  {
    icon: "/icons/social-media/whiteZalo.svg",
    background_animation:
      "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
    info: (
      <div className="flex flex-col items-center gap-2 !text-nowrap">
        <p className="text-sm text-nowrap">Quét mã QR Zalo: </p>
        <div className="3xl:size-24 size-20 flex items-center justify-center">
          <Image
            width={400}
            height={400}
            src="/icons/qr/zalo-qr.png"
            alt="Zalo QR"
            className="size-full object-cover rounded aspect-square"
          />
        </div>
      </div>
    ),
    handleClick: () => {
      window.open("https://zalo.me/2281264205827497572");
    },
  },
  {
    icon: "/icons/social-media/whiteMess.svg",
    background_animation:
      "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
    info: (
      <p className="flex flex-col items-center justify-center text-center text-sm space-y-1 text-gray-500 !text-nowrap">
        <span className="text-nowrap">Nhắn tin qua Messenger:</span>
        <ButtonAnimationNew
          icon={
            <div className="size-4 aspect-square shrink-0">
              <Image
                width={100}
                height={100}
                alt="icon"
                src="/icons/social-media/live-chat.png"
                className="size-full object-contain aspect-square"
              />
            </div>
          }
          onClick={() => {
            window.open("https://m.me/fososoftware");
          }}
          title="Chat Ngay!"
          className="flex items-center gap-2 border rounded-lg px-2 py-1"
        />
      </p>
    ),
    handleClick: () => {
      window.open("https://m.me/fososoftware");
    },
  },
  {
    icon: "/icons/social-media/whiteCall.svg",
    background_animation: "linear-gradient(90deg, #53B086 0%, #53B086 100%)",
    info: (
      <p className="text-sm text-nowrap space-x-1 text-gray-500">
        <span className="text-nowrap">Gọi ngay:</span>
        <PhoneLink
          phoneNumber="0901136968"
          className="text-gray-500 font-semibold !text-nowrap"
        >
          0901 136 968
        </PhoneLink>
      </p>
    ),
    handleClick: () => {
      window.location.href = `tel:0901136968`;
    },
  },
];

// Function kiểm tra xem có phải trang blog chi tiết không
const isBlogDetailPage = (pathname: string) => {
  return /^\/blogs\/[^\/]+$/.test(pathname);
};

const WidgetButton: React.FC = () => {
  const pathname = usePathname();

  // Xác định vị trí của các nút dựa trên pathname
  const positionClass = isBlogDetailPage(pathname)
    ? "bottom-1/2 translate-y-1/2 right-3 " // Vị trí bottom cho trang blog chi tiết
    : "bottom-1/2 translate-y-1/2 right-3 "; // Vị trí mặc định

  return (
    <div className={`flex flex-col fixed z-40  ${positionClass}`}>
      {socialButtons.map((button, index) => (
        <SocialMediaButton
          key={index}
          info={button.info}
          handleClick={button.handleClick}
          // Thay đổi vị trí tooltip nếu là trang blog chi tiết
          tooltipPosition={isBlogDetailPage(pathname) ? "top" : "left"}
          icon={
            <div
              className={`${
                dataFmrpPages.includes(pathname)
                  ? "hover:bg-[#166846]/80"
                  : "hover:scale-[1.04]"
              } 
              ${index === 0 && "rounded-t-xl"}
              ${index === socialButtons.length - 1 && "rounded-b-xl"}
              bg-[#166846] border border-[#00AA5980] xl:size-12 size-10 custom-transition flex justify-center items-center`}
              style={{
                boxShadow:
                  "0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A",
              }}
            >
              <Image
                width={100}
                height={100}
                alt="social-media"
                className={`${
                  index == 1 ? "size-8" : "size-7"
                } aspect-square object-cover flex-shrink-0`}
                src={button.icon}
              />
            </div>
          }
        />
      ))}

      {/* <ButtonToTop /> */}
    </div>
  );
};

export default React.memo(WidgetButton);
