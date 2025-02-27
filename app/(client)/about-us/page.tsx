'use client'

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
        <main className='overflow-x-hidden'>
            <SolveSolutionSection />
            <WhyChooseFosoSection />
            <AboutVisionSection />
            <MissionAndActionSection />
            <CoreValueSection />
            <JourneySection />
            <CTASection />

            {/* <div className='size-[100px] aspect-square '
                style={{
                    background: `linear-gradient(0deg, #20376D, #20376D),
linear-gradient(250.94deg, #134FDB -11.28%, #A969F1 142.77%)`,
                    backgroundBlendMode: "screen", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
                }}
            />
            <div style={{
                background: `linear-gradient(0deg, #20376D, #20376D),
                linear-gradient(250.94deg, #134FDB -11.28%, #A969F1 142.77%)`,
                backgroundBlendMode: "overlay", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>Helo</div> */}
        </main >
    )
}

export default AboutUs