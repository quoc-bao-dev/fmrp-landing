'use client'

import React from 'react'
import HeroSection from './components/sections/HeroSection'
import MessageOneSection from './components/sections/MessageOneSection'
import MessageTwoSection from './components/sections/MessageTwoSection'
import ServicePresentationSection from './components/sections/ServicePresentationSection'
import CustomerProjectsSection from './components/sections/CustomerProjectsSection'
import CustomerFeedbackSection from './components/sections/CustomerFeedbackSection'
import MediaCoverageSection from './components/sections/MediaCoverageSection'
import ContactUsNowSection from './components/sections/ContactUsNowSection'

type Props = {}

const Home = (props: Props) => {
    return (
        <main className='overflow-x-hidden'>
            <HeroSection />
            <MessageOneSection />
            <MessageTwoSection />
            <ServicePresentationSection />
            <CustomerProjectsSection />
            <CustomerFeedbackSection />
            <MediaCoverageSection />
            <ContactUsNowSection />
        </main>
    )
}

export default Home