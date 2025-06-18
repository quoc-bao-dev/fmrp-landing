import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import CommunityFmrpSection from "./components/sections/CommunityFmrpSection";
import FmrpApp from "./components/sections/FmrpApp";
import FmrpBenefits from "./components/sections/FmrpBenefits";
import FmrpCoreModules from "./components/sections/FmrpCoreModules";
import FmrpHighlightFeatures from "./components/sections/FmrpHighlightFeatures";
import IntroductionFmrpSection from "./components/sections/IntroductionFmrpSection";
import ManufacturingFields from "./components/sections/ManufacturingFields";
import MediaCoverageFmrpSection from "./components/sections/MediaCoverageFmrpSection";
import PackageFmrpSection from "./components/sections/PackageFmrpSection";
import PartnerFmrpSection from "./components/sections/PartnerFmrpSection";
import QuestionsFmrpSection from "./components/sections/QuestionsFmrpSection";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <main className="min-h-screen relative">
      <div className="relative z-[1] overflow-x-hidden flex flex-col xl:gap-24 gap-8">
        {/* <HeroFmrpSection /> */}
        <Image
          src={IMAGES.banner}
          alt="fmrp"
          width={1920}
          height={1080}
          priority
          quality={100}
          className="w-full h-auto"
        />
        <IntroductionFmrpSection />
        <ManufacturingFields />
        <FmrpBenefits />
        <FmrpCoreModules />
        <FmrpHighlightFeatures />
        {/* <ModelSection /> */}
        {/* <FeaturePageSection /> */}
        {/* <SupportedIndustriesSection /> */}
        {/* <FmrpBenefitsSection /> */}
        <PackageFmrpSection />
        {/* <FeedbackFmrpSection /> */}
        {/* <CTAFmrpSection /> */}
        <PartnerFmrpSection />
        <MediaCoverageFmrpSection />
        <QuestionsFmrpSection />
        <CommunityFmrpSection />
        <FmrpApp />
        {/* <VideoFmrpSection /> */}
        {/* <SystemOverviewFmrpSection /> */}
        {/* <FeatureManagementOverviewSection /> */}
        {/* <AiBomFmrpSection /> */}
        {/* <ProcessOptimizationFmrpSection /> */}
      </div>
    </main>
  );
};

export default AboutUs;
