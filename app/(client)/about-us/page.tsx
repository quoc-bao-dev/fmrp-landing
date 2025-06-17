import React from 'react'
import WhyChooseFosoSection from './components/sections/WhyChooseFosoSection'
import AboutVisionSection from './components/sections/AboutVisionSection'
import SolveSolutionSection from './components/sections/SolveSolutionSection'
import MissionAndActionSection from './components/sections/MissionAndActionSection'
import CoreValueSection from './components/sections/CoreValueSection'
import CTASection from './components/sections/CTASection'
import JourneySection from './components/sections/JourneySection'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <main>
            <SolveSolutionSection />
            <WhyChooseFosoSection />
            <AboutVisionSection />
            <MissionAndActionSection />
            <CoreValueSection />
            <JourneySection />
            <CTASection />
        </main >
    )
}

export default AboutUs

// animation: pulse 2scubic-bezier(.4,0,.6,1) infinite;