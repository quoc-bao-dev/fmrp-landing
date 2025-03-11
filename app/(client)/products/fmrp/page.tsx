'use client'

import React from 'react'
import HeroSection from './components/sections/HeroFmrpSection'
import HeroFmrpSection from './components/sections/HeroFmrpSection'
import BlurBackground from './components/ui/common/BlurBackgroundFixed'
import IntroductionFmrpSection from './components/sections/IntroductionFmrpSection'
import FeedbackFmrpSection from './components/sections/FeedbackFmrpSection'
import PartnerFmrpSection from './components/sections/PartnerFmrpSection'
import MediaCoverageFmrpSection from './components/sections/MediaCoverageFmrpSection'
import QuestionsFmrpSection from './components/sections/QuestionsFmrpSection'
import CommunityFmrpSection from './components/sections/CommunityFmrpSection'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <main className='min-h-screen relative'>
            <BlurBackground />
            <div className='relative z-[1] bg-white'>
                <HeroFmrpSection />
                <IntroductionFmrpSection />
                <FeedbackFmrpSection />
                <PartnerFmrpSection />
                <MediaCoverageFmrpSection />
                <QuestionsFmrpSection />
                <CommunityFmrpSection />
            </div>
        </main>
    )
}

export default AboutUs

