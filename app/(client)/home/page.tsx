'use client'

import React, { useRef, useCallback } from 'react'
import HeroSection from './components/sections/HeroSection'
import PartnerWithFoso from './components/sections/PartnerWithFoso'
import ServicePresentationSection from './components/sections/ServicePresentationSection'
import CustomerPartnerSection from './components/sections/CustomerPartnerSection'
import MediaCoverageSection from './components/sections/MediaCoverageSection'
import ContactUsNowSection from './components/sections/ContactUsNowSection'
import SolutionsSection from './components/sections/SolutionsSection';
import ServiceProcessSection from './components/sections/ServiceProcessSection'
import CustomerFeedbackSection from './components/sections/CustomerFeedbackSection';
type Props = {}

const Home = (props: Props) => {
    // ✅ Tạo ref để trỏ đến `ServiceProcessSection`
    const serviceProcessRef = useRef<HTMLDivElement>(null);

    // ✅ Hàm cuộn đến `ServiceProcessSection`
    const scrollToServiceProcess = useCallback(() => {
        serviceProcessRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);


    return (
        <main className='overflow-x-hidden'>
            <HeroSection scrollToServiceProcess={scrollToServiceProcess} />
            <ServiceProcessSection ref={serviceProcessRef} />
            <PartnerWithFoso />
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