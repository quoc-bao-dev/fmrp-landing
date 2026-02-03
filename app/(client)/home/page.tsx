import Achievements from "./components/sections/Achievements";
import CommunityFmrpSection from "./components/sections/CommunityFmrpSection";
import FmrpApp from "./components/sections/FmrpApp";
import FmrpBenefits from "./components/sections/FmrpBenefits";
import FmrpCoreModules from "./components/sections/FmrpCoreModules";
import FmrpHighlightFeatures from "./components/sections/FmrpHighlightFeatures";
import FMRPSolutions from "./components/sections/FMRPSolutions";
import IntroductionFmrpSection from "./components/sections/IntroductionFmrpSection";
import ManufacturingFields from "./components/sections/ManufacturingFields";
import MediaCoverageFmrpSection from "./components/sections/MediaCoverageFmrpSection";
import PackageFmrpSection from "./components/sections/PackageFmrpSection";
import PartnerFmrpSection from "./components/sections/PartnerFmrpSection";
import ProductionControl from "./components/sections/ProductionControl";
import ProgressPath from "./components/sections/ProgressPath";
import QuestionsFmrpSection from "./components/sections/QuestionsFmrpSection";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <main className="min-h-screen relative">
      <div className="relative z-[1] overflow-x-hidden flex flex-col xl:gap-24 gap-8">
        {/* <HeroFmrpSection /> */}
        {/* <ProgressPath />  */}

        <IntroductionFmrpSection />
        <ProductionControl />
        <ManufacturingFields />
        <FmrpBenefits />
        <FmrpCoreModules />
        {/* <FmrpHighlightFeatures /> */}
        <FMRPSolutions />
        <Achievements/>
        <PackageFmrpSection />
        <PartnerFmrpSection />
        <MediaCoverageFmrpSection />
        <QuestionsFmrpSection />
        <CommunityFmrpSection />
        <FmrpApp />
        {/* <ModelSection /> */}
        {/* <FeaturePageSection /> */}
        {/* <SupportedIndustriesSection /> */}
        {/* <FmrpBenefitsSection /> */}
        {/* <FeedbackFmrpSection /> */}
        {/* <CTAFmrpSection /> */}
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
