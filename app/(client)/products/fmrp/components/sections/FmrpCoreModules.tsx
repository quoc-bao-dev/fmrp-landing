"use client";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import { IMAGES } from "@/constants/Images";
import { useResizeStore } from "@/stores/useResizeStore";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const modules = [
  { icon: IMAGES.nguyenVatLieu, title: "Quản lý nguyên vật liệu, thành phẩm", mobileTitle: "Quản lý NVL & TP" },
  { icon: IMAGES.baoCao, title: "Báo cáo & Thống kê", mobileTitle: "Báo cáo & Thống kê" },
  { icon: IMAGES.banHang, title: "Quản lý bán hàng", mobileTitle: "Quản lý bán hàng" },
  { icon: IMAGES.nhaCungCap, title: "Quản lý nhà cung cấp", mobileTitle: "Quản lý nhà cung cấp" },
  { icon: IMAGES.sanXuat, title: "Quản lý sản xuất", mobileTitle: "Quản lý sản xuất" },
  { icon: IMAGES.khoHang, title: "Quản lý kho hàng", mobileTitle: "Quản lý kho hàng" },
  { icon: IMAGES.muaHang, title: "Quản lý mua hàng", mobileTitle: "Quản lý mua hàng" },
  { icon: IMAGES.nhanSu, title: "Quản lý nhân sự", mobileTitle: "Quản lý nhân sự" },
  { icon: IMAGES.khachHang, title: "Quản lý khách hàng", mobileTitle: "Quản lý khách hàng" },
];
const FmrpCoreModules = () => {
  const radius = 450; // tăng bán kính để vòng tròn rộng hơn
  const centerY = 450;
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { isVisibleTablet } = useResizeStore();

  return (
    <section className="w-full py-12 xl:pt-24 xl:pb-0 px-2 xl:px-0 overflow-hidden relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_10.1%,#F0F8FF_90.89%,#FFFFFF_100.99%)] overflow-x-hidden">
      <div className="custom-container flex flex-col gap-6 xl:gap-12 justify-center items-center">
        <div className="text-title-section-small text-[#1A2025] font-extrabold text-center capitalize">
          Các Phân Hệ Cốt Lõi Trong phần mềm{" "}
          <span
            style={{
              background:
                "linear-gradient(125deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FMRP
          </span>
        </div>
        <div className="flex flex-col-reverse xl:flex-col gap-6 xl:gap-0 w-full">
          <div
            className="relative w-full max-w-[1440px] xl:h-[620px] mx-auto grid grid-cols-3 gap-3 xl:gap-0 xl:block"
          >
            {modules.map((m, i) => {
              const total = modules.length;
              const angle = 180 - (180 / (total - 1)) * i;
              const rad = (angle * Math.PI) / 180;
              const x = radius * Math.cos(rad) * 1.3;
              const y = radius * Math.sin(rad);

              return (
                <div
                  key={i}
                  className={`xl:absolute flex flex-col gap-3 xl:justify-center items-center max-w-[160px] flex-shrink-0
                    ${i === 3 && "2xl:w-[140px] xl:w-[120px]"}
                    `}
                  style={{
                    top: isVisibleTablet ? "" : `${centerY - y + 0}px`,
                    left: isVisibleTablet ? "" : `50%`,
                    transform: isVisibleTablet ? "" : `translateX(${x - 65}px)`,
                  }}
                >
                  <div className="hover:shadow-[0px_4px_20px_-5px_#0375F340,0px_4px_20px_-5px_#0375F340] custom-transition p-3 xl:p-4 !flex-shrink-0 bg-white rounded-2xl xl:rounded-[28px] border border-[#D9E1E7] shadow-[1px_-1px_20px_-5px_#0375F326]">
                    <Image
                      src={m.icon}
                      width={100}
                      height={100}
                      alt={m.title}
                      className="size-9 xl:size-16 !flex-shrink-0 object-cover"
                    />
                  </div>
                  <p className="text-base-default text-[#33404A] font-bold text-center w-[90%] xxs:w-[75%] md:w-full">
                    {isVisibleTablet ? m.mobileTitle : m.title}
                  </p>
                </div>
              );
            })}

            {/* Semi-circle border (wrapper with overflow hidden) */}
            <div
              className="hidden xl:block absolute left-1/2 -translate-x-1/2 overflow-hidden"
              style={{
                width: `${radius * 2}px`,
                height: `${radius}px`, // Chiều cao hiển thị của cung tròn
                top: `${centerY - radius / 1.7}px`, // Đặt phần tử này ở vị trí bắt đầu của hình tròn đầy đủ
              }}
            >
              {/* Đường tròn đầy đủ với viền gradient */}
              <div
                className="rounded-full relative"
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  top: `0px`,
                  background: `linear-gradient(180deg, #0375F3, #013DA0, rgba(255,255,255,0.8), #ffffff, #ffffff)`,
                  backgroundSize: "400% 400%",
                  padding: "12px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="w-full h-full bg-white rounded-full relative overflow-hidden"
                  style={{
                    boxShadow:
                      "inset 0 0 20px rgba(3, 117, 243, 0.3), inset 0 0 60px rgba(3, 117, 243, 0.1)",
                  }}
                ></div>
                <div className="absolute bottom-1/2 left-0 right-0 w-full h-20 bg-gradient-to-t from-white via-white/[99%] to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Trung tâm dưới nửa vòng tròn */}
          <div className="xl:absolute xl:bottom-8 xl:left-1/2 xl:-translate-x-1/2 text-center xl:max-w-[512px] flex flex-col justify-center items-center gap-6">
            <h3 className="text-base xl:text-[32px] leading-[150%] font-extrabold text-[#25387A] w-full capitalize">
              Tích Hợp – Quản Lý Toàn Diện{" "}
              <br className="hidden xl:block" />
              Cho Mọi Hoạt Động Sản Xuất
            </h3>
            <p className="text-title text-[#33404A] font-medium">
              Quản lý chặt chẽ từ mua – bán đến kho hàng và nhà cung cấp. Kết
              nối xuyên suốt, nâng cao hiệu quả quản lý xưởng của bạn.
            </p>
            <ButtonAnimationNew
              title="Trải Nghiệm Miễn Phí"
              icon={
                <div className="2xl:size-12 md:size-10 size-8 rounded-full capitalize flex items-center justify-center bg-white duration-500 transition-colors">
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                    }}
                  >
                    <ArrowUpRightIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                    <ArrowUpRightLinearBlueIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                  </motion.div>
                </div>
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                window.open("https://bom.so/mrpbeta");
              }}
              reverse={true}
              className="hidden xl:flex border-gradient-button-fmrp bg-[#206AFF] text-white lg:mr-0 mr-1 items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC] hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] lg:w-fit w-full"
              style={{
                boxShadow:
                  "0px -1px 2px 0px #FFFFFF4D inset, 0px -2px 5px 1px #FFFFFF1F inset, 0px 1px 2px 0px #151A364D inset, 0px 2px 6px 0px #151A3626 inset, 0px -2px 14px 0px #FFFFFF26 inset, 0px 20px 26px -8px #0F163A26",
                  background: "#206AFF"
              
                }}
              whileHover={{
                background: [
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
                  "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
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
          </div>
        </div>

        <ButtonAnimationNew
          title="Trải Nghiệm Miễn Phí"
          icon={
            <div className="2xl:size-12 md:size-10 size-8 rounded-full capitalize flex items-center justify-center bg-white duration-500 transition-colors">
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <ArrowUpRightIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                <ArrowUpRightLinearBlueIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
              </motion.div>
            </div>
          }
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            window.open("https://bom.so/mrpbeta");
          }}
          reverse={true}
          className="flex xl:hidden border-gradient-button-fmrp bg-[#206AFF] text-white lg:mr-0 mr-1 items-center gap-2 md:!text-base text-sm !tracking-[1%] group hover:!bg-[#024EBC] hover:!backdrop-blur-[100px] hover:!backdrop-filter font-medium pl-6 pr-1 py-1 ml-1 rounded-[40px] w-fit"
          style={{
            boxShadow:
              "0px -1px 2px 0px #FFFFFF4D inset, 0px -2px 5px 1px #FFFFFF1F inset, 0px 1px 2px 0px #151A364D inset, 0px 2px 6px 0px #151A3626 inset, 0px -2px 14px 0px #FFFFFF26 inset, 0px 20px 26px -8px #0F163A26",
          }}
          whileHover={{
            background: [
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
              "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #0375F3 10.03%, #013DA0 107.74%)",
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
      </div>
    </section>
  );
};

export default FmrpCoreModules;
