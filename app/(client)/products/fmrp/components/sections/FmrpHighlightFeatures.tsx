"use client";
import UnderlineCurveLinearSvg2 from "@/components/icons/underline/UnderlineCurveLinearSvg2";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import {
  PiCalendarFill,
  PiChatsFill,
  PiClockCounterClockwiseFill,
  PiShapesFill,
} from "react-icons/pi";

const FmrpHighlightFeatures = () => {
  return (
    <section className="xl:custom-padding-section custom-container px-2 xl:px-0 flex flex-col gap-8 xl:gap-24 justify-center items-center">
      <div className="flex flex-col gap-3">
        <h2 className="block xl:hidden text-title-section-small text-[#1A2025] font-extrabold text-center">
          Các Tính Năng{" "}
          <span
            style={{
              background:
                "linear-gradient(78deg, #0375F3 11.85%, #036EEA 20.65%, #0267E1 29.45%, #0261D7 38.25%, #025ACE 47.05%, #0254C5 55.84%, #024EBC 64.64%, #0148B3 73.44%, #0142A9 82.24%, #013DA0 91.04%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Nổi Bật
          </span>
        </h2>
        <h2 className="hidden xl:block text-title-section-small text-[#1A2025] font-extrabold text-center capitalize">
          Các Tính Năng Nổi Bật trong{" "}
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
        <p className="text-title text-[#33404A] font-medium text-center">
          Hỗ trợ thực chiến – giúp xưởng vận hành dễ hơn, không còn bị động
        </p>
      </div>

      <div className="flex flex-col-reverse xl:flex-row items-center gap-6 xl:gap-10 w-full">
        <div className="flex flex-col gap-6 xl:w-1/2">
          <div className="hidden xl:flex items-center gap-3">
            <Image
              width={100}
              height={100}
              src="/icons/fmrp/dizzy.svg"
              className="object-contain 3xl:size-9 size-7"
              alt="dizzy"
            />
            <h2 className="text-title-section-feature text-[#25387A] font-extrabold capitalize whitespace-nowrap">
              Fimo AI –{" "}
              <span className="relative inline-block w-fit px-2">
                <UnderlineCurveLinearSvg2
                  inView={true}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 !w-full h-[14px] pointer-events-none !opacity-100"
                />
                <span className="relative z-10">Trợ lý sản xuất </span>
              </span>
              thông minh
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                width={48}
                height={48}
                src={IMAGES.glass}
                alt=""
                className="size-6"
              />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Tự động phân tích sản phẩm thực tế
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Fimo quét mẫu sản phẩm, đề xuất cấu trúc BOM và công đoạn phù hợp.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                width={48}
                height={48}
                src={IMAGES.star}
                alt=""
                className="size-6 "
              />
              <h3 className="text-title-feature font-bold text-[#33404A]">
                Gợi ý định mức – tiết kiệm thời gian set up
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Tối ưu quy trình từ đầu – rút ngắn 80% thời gian thiết lập sản
              phẩm mới.
            </p>
          </div>
        </div>
        <div className="xl:w-1/2">
          <Image
            src={IMAGES.fimo}
            width={700}
            height={700}
            alt=""
            className="size-full object-cover [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))]"
          />
        </div>
        <div className="flex flex-col xl:hidden">
          <div className="flex gap-3 items-center">
            <Image
              width={100}
              height={100}
              src="/icons/fmrp/dizzy.svg"
              className="object-cover size-5"
              alt="dizzy"
            />
            <h2 className="text-title-section-feature text-[#25387A] font-extrabold capitalize w-fit flex">
              Fimo AI –{" "}
              <span className="relative inline-block w-fit px-2">
                <UnderlineCurveLinearSvg2
                  inView={true}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 !w-full h-[14px] pointer-events-none !opacity-100"
                />
                <span className="relative z-10">Trợ lý sản xuất </span>
              </span>
            </h2>
          </div>
          <h2 className="text-title-section-feature text-[#25387A] font-extrabold capitalize w-full text-center">
            thông minh
          </h2>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-[72px] w-full">
        <div className="xl:hidden text-title-section-feature font-extrabold text-[#25387A] text-center capitalize">
          Thảo luận trong Lệnh sản xuất
        </div>
        <div className="xl:w-1/2">
          <Image
            src={IMAGES.lenhSanXuat}
            width={700}
            height={700}
            alt=""
            className="size-full object-cover [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))]"
          />
        </div>
        <div className="xl:w-1/2 flex flex-col gap-6">
          <h2 className="hidden xl:block text-title-section-feature font-extrabold text-[#25387A] capitalize">
            Thảo luận trong Lệnh sản xuất
          </h2>
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-9">
            <div className="flex gap-3">
              <PiChatsFill className="size-6 text-[#10805B] flex-shrink-0" />
              <div className="flex flex-col gap-3">
                <h3 className="text-title-feature text-[#33404A] font-bold">
                  Trao đổi dễ dàng, không cần gọi – nhắn Zalo
                </h3>
                <p className="hidden xl:block text-base-default-feature text-[#33404A] font-medium">
                  Mỗi lệnh sản xuất có thể gắn ghi chú, hình ảnh, trao đổi trực
                  tiếp đến từng người.
                </p>
                <p className="xl:hidden text-base-default-feature text-[#33404A] font-medium">
                  Gắn thẻ người phụ trách, đính kèm hình ảnh, lưu lại toàn bộ
                  lịch sử trao đổi theo từng công đoạn – đảm bảo xử lý rõ ràng,
                  minh bạch và đúng người, đúng việc.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <PiClockCounterClockwiseFill className="size-6 text-[#10805B] flex-shrink-0" />
              <div className="flex flex-col gap-3">
                <h3 className="text-title-feature text-[#33404A] font-bold">
                  Tra soát đầy đủ – truy xuất lịch sử thao tác{" "}
                </h3>
                <p className="text-base-default-feature text-[#33404A] font-medium">
                  Toàn bộ tiến trình, trao đổi, cập nhật đều được lưu lại –
                  không sợ mất thông tin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse xl:flex-row items-center gap-6 xl:gap-[72px] w-full">
        <div className="flex flex-col gap-6 xl:w-1/2">
          <h2 className="hidden xl:block text-title-section-feature text-[#25387A] font-extrabold capitalize">
            Quản lý Đa Biến Thể & LOT – DATE
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex xl:items-center gap-3">
              <PiShapesFill className="size-6 flex-shrink-0 text-[#15AA7A]" />

              <h3 className="text-title-feature font-bold text-[#33404A]">
                Phân biệt từng phiên bản sản phẩm dễ dàng
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Tự động quản lý sản phẩm có nhiều màu, size, biến thể – không lo
              nhầm lẫn phiên bản.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex xl:items-center gap-3">
              <PiCalendarFill className="size-6 flex-shrink-0 text-[#15AA7A]" />

              <h3 className="text-title-feature font-bold text-[#33404A]">
                Kiểm soát hạn dùng chặt chẽ
              </h3>
            </div>
            <p className="ml-9 xl:ml-0 text-base-default-feature text-[#33404A] font-medium">
              Hệ thống cảnh báo vật tư gần hết hạn – tránh tồn kho lỗi, giảm rủi
              ro đầu ra.
            </p>
          </div>
        </div>
        <div className="xl:w-1/2">
          <Image
            src={IMAGES.lotDate}
            width={700}
            height={700}
            alt=""
            className="size-full object-cover [filter:drop-shadow(0_25px_25px_rgba(170,255,230,0.2))]"
          />
        </div>
        <div className="xl:hidden text-title-section-feature text-[#25387A] font-extrabold capitalize text-center">
          Quản lý Đa Biến Thể & LOT – DATE
        </div>
      </div>
    </section>
  );
};

export default FmrpHighlightFeatures;
