import DevicesLinearIcon from "@/components/icons/fmrp/DevicesLinearIcon";
import HandCoinsLinearIcon from "@/components/icons/fmrp/HandCoinsLinearIcon";
import ListMagnifyingGlassLinearIcon from "@/components/icons/fmrp/ListMagnifyingGlassLinearIcon";
import React from "react";

const FmrpBenefits = () => {
  return (
    <section className="custom-padding-section">
      <div className="custom-container flex flex-col gap-12 justify-center items-center">
        <h2 className="text-title-section-small text-[#1A2025] font-extrabold">
          <span
            style={{
              background:
                "linear-gradient(107.37deg, #0375F3 30.28%, #036EEA 30.78%, #0267E1 31.29%, #0261D7 31.8%, #025ACE 32.31%, #0254C5 32.82%, #024EBC 33.33%, #0148B3 33.84%, #0142A9 34.34%, #013DA0 34.85%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FMRP
          </span>{" "}
          Giúp Xưởng Vận Hành Dễ Dàng Và Kiểm Soát Hiệu Quả
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="p-6 flex flex-col gap-6 rounded-3xl bg-white shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]">
            <div className="size-[72px] rounded-[20px] p-3 bg-gradient-to-b from-[#0375F3] to-[#013DA0]">
              <ListMagnifyingGlassLinearIcon className="size-full shrink-0 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-title text-[#33404A] font-extrabold">
                Tra soát nhanh
              </h3>
              <p className="text-base-default text-[#33404A] font-medium">
                Theo dõi kịp tiến độ sản xuất, rà soát nhanh khâu sai sót
              </p>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-6 rounded-3xl bg-white shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]">
            <div className="size-[72px] rounded-[20px] p-3 bg-gradient-to-b from-[#0375F3] to-[#013DA0]">
              <DevicesLinearIcon className="size-full shrink-0 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-title text-[#33404A] font-extrabold">
                Quản lý số hóa
              </h3>
              <p className="text-base-default text-[#33404A] font-medium">
                Vận dụng công nghệ vào trong việc quản lý thay vì thủ công,
                excel, zalo...
              </p>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-6 rounded-3xl bg-white shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D]">
            <div className="size-[72px] rounded-[20px] p-3 bg-gradient-to-b from-[#0375F3] to-[#013DA0]">
              <HandCoinsLinearIcon className="size-full shrink-0 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-title text-[#33404A] font-extrabold">
                Giảm thiểu thất thoát
              </h3>
              <p className="text-base-default text-[#33404A] font-medium">
                Cắt giảm thất thoát hơn 40% trong các khâu quản lý sản xuất,
                tiết kiệm chi phí vận hành.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FmrpBenefits;
