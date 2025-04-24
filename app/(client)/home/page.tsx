'use client'

import React from 'react'

import HeroSection from './components/sections/HeroSection'
import ServicePresentationSection from './components/sections/ServicePresentationSection'
import CustomerPartnerSection from './components/sections/CustomerPartnerSection'
import MediaCoverageSection from './components/sections/MediaCoverageSection'
import ContactUsNowSection from './components/sections/ContactUsNowSection'
import SolutionsSection from './components/sections/SolutionsSection';
import ServiceProcessSection from './components/sections/ServiceProcessSection'
import CustomerFeedbackSection from './components/sections/CustomerFeedbackSection';
import FosoPartnerSection from './components/sections/FosoPartnerSection'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='overflow-x-hidden'>
            <HeroSection />
            <ServiceProcessSection />
            <FosoPartnerSection />
            <SolutionsSection />
            <ServicePresentationSection />
            <CustomerFeedbackSection />
            <CustomerPartnerSection />
            <MediaCoverageSection />
            <ContactUsNowSection />
        </main>
    )
}

export default Home