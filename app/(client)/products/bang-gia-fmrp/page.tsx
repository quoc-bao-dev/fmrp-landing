'use client'

import React from 'react'
import IntroPricingFmrpSection from './components/sections/IntroPricingFmrpSection'
import MembershipPlansSection from './components/sections/MembershipPlansSection'
import PriceTableSection from './components/sections/PriceTableSection'
import EnhancedPrinterSection from './components/sections/EnhancedPrinterSection'

type Props = {}

const PricingFmrpPage = (props: Props) => {
    return (
        <main className='min-h-screen'>
            <IntroPricingFmrpSection />
            <MembershipPlansSection />
            <PriceTableSection />
            <EnhancedPrinterSection />
        </main>
    )
}

export default PricingFmrpPage