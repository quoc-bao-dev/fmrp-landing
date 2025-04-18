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
import VideoFmrpSection from './components/sections/VideoFmrpSection'
import SystemOverviewFmrpSection from './components/sections/SystemOverviewFmrpSection'
import AiBomFmrpSection from './components/sections/AiBomFmrpSection'
import FeatureManagementOverviewSection from './components/sections/FeatureManagementOverviewSection';
import ProcessOptimizationFmrpSection from './components/sections/ProcessOptimizationFmrpSection'
import BlurBackgroundFixed from './components/ui/common/BlurBackgroundFixed';
import PackageFmrpSection from './components/sections/PackageFmrpSection'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <main className='min-h-screen relative'>

            <div className='relative z-[1] overflow-x-hidden'>
                <HeroFmrpSection />
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

