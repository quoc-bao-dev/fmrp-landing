"use client";
import BottomSectionIndicator from "@/components/common/scroll/BottomSectionIndicator";
import { useGetProjectDetail } from "@/managers/api/projects/useGetProjectDetail";
import { useParams } from "next/navigation";
import ContactUsNowSection from "../../home/components/sections/ContactUsNowSection";
import Banner from "./components/Banner";
import CustomerProblem from "./components/CustomerProblem";
import Interface from "./components/Interface";
import Introduce from "./components/Introduce";
import Related from "./components/Related";
import Summary from "./components/Summary";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { data: projectDetail, isLoading } = useGetProjectDetail(
    slug as string
  );

  return (
    <div className="flex flex-col gap-9 xl:gap-12">
      {/* Thanh tiêu đề section dưới cùng màn hình */}
      <BottomSectionIndicator
        startId="customer-problem"
        sections={[
          {
            id: "customer-problem",
            label: isLoading ? "" : projectDetail?.general?.title,
          },
          { id: "feature-interface", label: "Giao diện dự án" },
          { id: "summary", label: "Tổng kết" },
          { id: "related", label: "Dự án liên quan" },
          { id: "contact-us", label: "Liên hệ" },
        ]}
      />

      <div id="introduce">
        <Introduce
          isLoading={isLoading}
          data={projectDetail?.introduce}
          logo={projectDetail?.logo}
          name={projectDetail?.name}
          year={projectDetail?.year}
          field_detail={projectDetail?.field_detail}
          category={projectDetail?.category}
        />
      </div>

      <div id="customer-problem">
        <CustomerProblem isLoading={isLoading} data={projectDetail?.general} />
      </div>

      <Banner data={projectDetail?.derive} />

      <div id="feature-interface">
        <Interface data={projectDetail?.feature} />
      </div>

      <div id="summary">
        <Summary isLoading={isLoading} data={projectDetail?.summary} />
      </div>

      <div id="related">
        <Related slug={slug as string} />
      </div>

      <div id="contact-us">
        <ContactUsNowSection />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
