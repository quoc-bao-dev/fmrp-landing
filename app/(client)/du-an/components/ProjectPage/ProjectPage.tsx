"use client";

import CTASection from "@/app/(client)/about-us/components/sections/CTASection";
import ProjectBreadcrumb from "./ProjectBreadcrumb";
import ProjectSection from "./ProjectSection";
import Tagline from "./Tagline";
import CustomerPartnerSection from "@/app/(client)/home/components/sections/CustomerPartnerSection";

const ProjectPage = () => {
  return (
    <main>
      <div className="custom-padding-section relative">
        {/* Spacing từ header */}
        <ProjectBreadcrumb />
        <div className="pt-[72px]" />

        {/* Tagline Section - Tiêu đề chính và giới thiệu */}
        <Tagline />
        <div className="hidden md:block pt-[192px]"></div>

        <ProjectSection />
        <div className="hidden md:block pt-[144px]"></div>
        <CustomerPartnerSection />
        {/* CTA Section - Call to action cuối trang */}
        <CTASection />
      </div>
    </main>
  );
};

export default ProjectPage;
