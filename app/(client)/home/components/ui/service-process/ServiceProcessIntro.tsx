import React from "react";
import dynamic from "next/dynamic";

const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });

const ServiceProcessIntro: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 w-full">
            <AnimatedReveal
                from={"bottom"}
                effect="fade"
                duration={0.5}
                className="space-x-2 font-extrabold md:text-center text-start lg:max-w-[49%] md:max-w-[60%] max-w-full"
            >
                <span className="text-title-section-small text-[#1A2025] capitalize">
                    Tăng hiệu suất, giảm rủi ro cùng
                </span>
                <span
                    className="text-title-section-small uppercase"
                    style={{
                        background:
                            "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Foso
                </span>
                <span className="text-title-section-small text-[#1A2025] capitalize">
                    Vận hành tối ưu
                </span>
            </AnimatedReveal>

            <AnimatedReveal
                from={"bottom"}
                effect="fade"
                duration={1}
                className="3xl:!text-xl xl:!text-lg lg:!text-base !text-base text-[#33404A] font-medium md:text-center text-start 3xl:max-w-[52%] 2xl:max-w-[54%] xxl:max-w-[60%] lg:max-w-[66%] md:max-w-[95%] max-w-full"
            >
                <span>
                    Khát vọng nâng tầm doanh nghiệp nhỏ – FOSO đồng hành cùng SME Việt Nam. Giúp bạn quản trị hiệu quả, bứt phá kinh doanh. Mỗi giải pháp chúng tôi mang lại là cơ hội để bạn vươn xa hơn. Đồng hành cùng doanh nghiệp Việt.
                </span>
            </AnimatedReveal>
        </div>
    );
};

export default ServiceProcessIntro;
