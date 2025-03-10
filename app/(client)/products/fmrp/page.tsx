'use client'

import React from 'react'
import HeroSection from './components/sections/HeroFmrpSection'
import HeroFmrpSection from './components/sections/HeroFmrpSection'

type Props = {}

const AboutUs = (props: Props) => {
    return (
        <main className='min-h-screen relative'>
            <HeroFmrpSection />
        </main>
    )
}

export default AboutUs

