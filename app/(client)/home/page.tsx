'use client'

import React from 'react'
import HeroSection from './components/sections/HeroSection'
import PartnerWithFoso from './components/sections/PartnerWithFoso'
import ServicePresentationSection from './components/sections/ServicePresentationSection'
import CustomerProjectsSection from './components/sections/CustomerProjectsSection'
import CustomerFeedbackSection from './components/sections/CustomerFeedbackSection'
import MediaCoverageSection from './components/sections/MediaCoverageSection'
import ContactUsNowSection from './components/sections/ContactUsNowSection'
import SolutionsSection from './components/sections/SolutionsSection';
import ServiceProcessSection from './components/sections/ServiceProcessSection'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='overflow-x-hidden'>
            <HeroSection />
            <ServiceProcessSection />
            <PartnerWithFoso />
            <SolutionsSection />
            <ServicePresentationSection />
            <CustomerProjectsSection />
            <CustomerFeedbackSection />
            <MediaCoverageSection />
            <ContactUsNowSection />
        </main>
    )
}

export default Home