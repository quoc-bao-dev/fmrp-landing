'use client'

import React from 'react'
import HeroSection from './components/sections/HeroSection'
import MessageOneSection from './components/sections/MessageOneSection'
import MessageTwoSection from './components/sections/MessageTwoSection'
import ServicePresentationSection from './components/sections/ServicePresentationSection'
import CustomerProjectsSection from './components/sections/CustomerProjectsSection'
import CustomerFeedbackSection from './components/sections/CustomerFeedbackSection'
import MediaCoverageSection from './components/sections/MediaCoverageSection'
import ContactUsNow from './components/sections/ContactUsNow'

type Props = {}

const Home = (props: Props) => {
    return (
        <main>
            <HeroSection />
            <MessageOneSection />
            <MessageTwoSection />
            <ServicePresentationSection />
            <CustomerProjectsSection />
            <CustomerFeedbackSection />
            <MediaCoverageSection />
            <ContactUsNow />
        </main>
    )
}

export default Home