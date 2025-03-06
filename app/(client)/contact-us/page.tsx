'use client'

import React from 'react'
import IntroContactSection from './components/sections/IntroContactSection'
import FormContactSection from './components/sections/FormContactSection'
import SupportContactSection from './components/sections/SupportContactSection'
import MapContactSection from './components/sections/MapContactSection'
import { useTheme } from 'next-themes'

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <main>
            <IntroContactSection />
            <FormContactSection />
            <MapContactSection />
            <SupportContactSection />
        </main>
    )
}

export default ContactUs