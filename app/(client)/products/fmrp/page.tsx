'use client'

import React from 'react'
import HeroFmrpSection from './components/sections/HeroFmrpSection'
import IntroductionFmrpSection from './components/sections/IntroductionFmrpSection'
import FeedbackFmrpSection from './components/sections/FeedbackFmrpSection'
import PartnerFmrpSection from './components/sections/PartnerFmrpSection'
import MediaCoverageFmrpSection from './components/sections/MediaCoverageFmrpSection'
import QuestionsFmrpSection from './components/sections/QuestionsFmrpSection'
import CommunityFmrpSection from './components/sections/CommunityFmrpSection'
import CTAFmrpSection from './components/sections/CTAFmrpSection'
import PackageFmrpSection from './components/sections/PackageFmrpSection'
import FmrpBenefitsSection from './components/sections/FmrpBenefitsSection'
import SupportedIndustriesSection from './components/sections/SupportedIndustriesSection';
import ModelSection from './components/sections/ModelSection';
import FeaturePageSection from './components/sections/FeaturePageSection';

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <main className='min-h-screen relative'>
            <div className='relative z-[1] overflow-x-hidden'>
                <HeroFmrpSection />
                <ModelSection />
                <FeaturePageSection />
                <SupportedIndustriesSection />
                <FmrpBenefitsSection />
                <PackageFmrpSection />
                <FeedbackFmrpSection />
                <CTAFmrpSection />
                <PartnerFmrpSection />
                <MediaCoverageFmrpSection />
                <QuestionsFmrpSection />
                <CommunityFmrpSection />
                <IntroductionFmrpSection />
                {/* <VideoFmrpSection /> */}
                {/* <SystemOverviewFmrpSection /> */}
                {/* <FeatureManagementOverviewSection /> */}
                {/* <AiBomFmrpSection /> */}
                {/* <ProcessOptimizationFmrpSection /> */}
            </div>
        </main>
    )
}

export default AboutUs

