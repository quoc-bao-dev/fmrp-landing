"use client";
import ArrowUpRightIcon from "@/components/icons/common/ArrowUpRightIcon";
import ArrowUpRightLinearBlueIcon from "@/components/icons/common/ArrowUpRightLinearBlueIcon";
import { IMAGES } from "@/constants/Images";
import { motion } from "framer-motion";
import Image from "next/image";

const modules = [
  { icon: IMAGES.nguyenVatLieu, title: "Quản lý nguyên vật liệu, thành phẩm" },
  { icon: IMAGES.baoCao, title: "Báo cáo & Thống kê" },
  { icon: IMAGES.banHang, title: "Quản lý bán hàng" },
  { icon: IMAGES.nhaCungCap, title: "Quản lý nhà cung cấp" },
  { icon: IMAGES.sanXuat, title: "Quản lý sản xuất" },
  { icon: IMAGES.khoHang, title: "Quản lý kho hàng" },
  { icon: IMAGES.muaHang, title: "Quản lý mua hàng" },
  { icon: IMAGES.nhanSu, title: "Quản lý nhân sự" },
  { icon: IMAGES.khachHang, title: "Quản lý khách hàng" },
];
const FmrpCoreModules = () => {
  const radius = 450; // tăng bán kính để vòng tròn rộng hơn
  const centerY = 450;
  return (
    <section className="w-full pt-20 overflow-hidden relative bg-[linear-gradient(180deg,#FFFFFF_0%,#F0F8FF_10.1%,#F0F8FF_90.89%,#FFFFFF_100.99%)] overflow-x-hidden">
      <div className="custom-container flex flex-col gap-12 justify-center items-center">
        <h2 className="text-title-section-small text-[#1A2025] font-extrabold">
          Các Phân Hệ Cốt Lõi Trong phần mềm{" "}
          <span
            style={{
              background:
                "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FMRP
          </span>
        </h2>
        <div className="relative w-full max-w-[1440px] h-[620px] mx-auto">
          {modules.map((m, i) => {
            const total = modules.length;
            const angle = 180 - (180 / (total - 1)) * i;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad) * 1.3;
            const y = radius * Math.sin(rad);

            return (
              <div
                key={i}
                className="absolute flex flex-col gap-3 justify-center items-center max-w-[170px]"
                style={{
                  top: `${centerY - y + 0}px`,
                  left: `50%`,
                  transform: `translateX(${x - 65}px)`,
                }}
              >
                <div className="p-4 bg-white rounded-xl border border-[#D9E1E7] shadow-[1px_-1px_20px_-5px_#0375F326]">
                  <Image
                    src={m.icon}
                    width={100}
                    height={100}
                    alt=""
                    className="size-16"
                  />
                </div>
                <p className="text-base-default text-[#33404A] font-bold text-center">
                  {m.title}
                </p>
              </div>
            );
          })}

          {/* Semi-circle border (wrapper with overflow hidden) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
            style={{
              width: `${radius * 2}px`,
              height: `${radius}px`, // Chiều cao hiển thị của cung tròn
              top: `${centerY - radius / 1.7}px`, // Đặt phần tử này ở vị trí bắt đầu của hình tròn đầy đủ
            }}
          >
            {/* Đường tròn đầy đủ với viền gradient */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`, // Kích thước của một hình tròn đầy đủ
                top: `0px`, // Đặt nó ở phía trên cùng của phần tử cha (wrapper)
                background: `linear-gradient(to bottom, #0375F3, #013DA0, #ffffff, #ffffff, #ffffff)`,
                padding: "12px",
                boxSizing: "border-box",
              }}
            >
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>
          </div>

          {/* Trung tâm dưới nửa vòng tròn */}
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 text-center max-w-[512px] flex flex-col justify-center items-center gap-6">
            <h3 className="text-title-section-feature font-extrabold text-[#25387A]">
              Tích Hợp – Quản Lý Toàn Diện
              <br />
              Cho Mọi Hoạt Động Sản Xuất
            </h3>
            <p className="text-title text-[#33404A] font-medium">
              Quản lý chặt chẽ từ mua – bán đến kho hàng và nhà cung cấp. Kết
              nối xuyên suốt, nâng cao hiệu quả quản lý xưởng của bạn.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 group w-fit p-2 rounded-full bg-[#206AFF] border border-[#899CFD] shadow-[0px_-1px_2px_0px_#FFFFFF4D_inset,0px_-2px_5px_1px_#FFFFFF1F_inset,0px_1px_2px_0px_#151A364D_inset,0px_2px_6px_0px_#151A3626_inset,0px_-2px_14px_0px_#FFFFFF26_inset,0px_20px_26px_-8px_#0F163A26]"
            >
              <p className=" text-base-default text-white font-semibold">
                Trải nghiệm miễn phí
              </p>
              <div className="2xl:size-12 md:size-10 size-8 rounded-full capitalize flex items-center justify-center bg-white duration-500 transition-colors">
                <motion.div
                  initial={{ x: 0, y: 0 }}
                  // animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <ArrowUpRightIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 hidden group-hover:block" />
                  <ArrowUpRightLinearBlueIcon className="text-[#206AFF] 2xl:size-6 md:size-5 size-4 group-hover:hidden" />
                </motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FmrpCoreModules;
