import React from 'react'
import IntroContactSection from './components/sections/IntroContactSection'
import FormContactSection from './components/sections/FormContactSection'
import SupportContactSection from './components/sections/SupportContactSection'
import MapContactSection from './components/sections/MapContactSection'

type Props = {}

const ContactUs = (props: Props) => {
    return (
        <main className='min-h-screen'>
            <IntroContactSection />
            <FormContactSection />
            <MapContactSection />
            <SupportContactSection />
        </main>
    )
}

export default ContactUs