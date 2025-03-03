'use client'

import React from 'react'
import IntroContactSection from './components/sections/IntroContactSection'
import FormContactSection from './components/sections/FormContactSection'

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <main>
            <IntroContactSection />
            <FormContactSection />
        </main>
    )
}

export default ContactUs