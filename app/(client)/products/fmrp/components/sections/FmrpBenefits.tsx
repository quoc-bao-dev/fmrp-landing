import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import DevicesLinearIcon from "@/components/icons/fmrp/DevicesLinearIcon";
import HandCoinsLinearIcon from "@/components/icons/fmrp/HandCoinsLinearIcon";
import ListMagnifyingGlassLinearIcon from "@/components/icons/fmrp/ListMagnifyingGlassLinearIcon";

const benefitsData = [
  {
    icon: ListMagnifyingGlassLinearIcon,
    title: "Tra soát nhanh",
    description: "Theo dõi kịp tiến độ sản xuất, rà soát nhanh khâu sai sót"
  },
  {
    icon: DevicesLinearIcon,
    title: "Quản lý số hóa", 
    description: "Vận dụng công nghệ vào trong việc quản lý thay vì thủ công, excel, zalo..."
  },
  {
    icon: HandCoinsLinearIcon,
    title: "Giảm thiểu thất thoát",
    description: "Cắt giảm thất thoát hơn 40% trong các khâu quản lý sản xuất, tiết kiệm chi phí vận hành."
  }
];

const FmrpBenefits = () => {
  return (
    <section className="xl:custom-padding-section">
      <div className="custom-container px-2 pl:mx-0 flex flex-col gap-6 xl:gap-12 justify-center items-center">
        <div className="text-title-section-small text-[#1A2025] font-extrabold text-center">
          <span className="text-[#0375F3]"
            // style={{
            //   background:
            //     "linear-gradient(180deg, #0375F3 30.28%, #036EEA 30.78%, #0267E1 31.29%, #0261D7 31.8%, #025ACE 32.31%, #0254C5 32.82%, #024EBC 33.33%, #0148B3 33.84%, #0142A9 34.34%, #013DA0 34.85%)",
            //   backgroundClip: "text",
            //   WebkitBackgroundClip: "text", 
            //   WebkitTextFillColor: "transparent",
            // }}
          >
            FMRP
          </span>{" "}
          Giúp Xưởng Vận Hành Dễ Dàng Và Kiểm Soát Hiệu Quả
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="p-6 flex xl:flex-col flex-row gap-6 rounded-3xl bg-white shadow-[0px_0px_20px_-5px_#0375F326,0px_4px_20px_-5px_#7772930D] hover:shadow-[0px_4px_20px_-5px_#0375F340,0px_4px_20px_-5px_#0375F340] 
            custom-transition">
              <div className="size-[60px] xl:size-[72px] flex-shrink-0 rounded-[20px] p-3 bg-gradient-to-b from-[#0375F3] to-[#013DA0]">
                <benefit.icon className="size-full shrink-0 text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-title text-[#33404A] font-extrabold">
                  {benefit.title}
                </h3>
                <p className="text-base-default text-[#33404A] font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FmrpBenefits;
