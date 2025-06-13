// 'use client'
import EnhancedPrinterSection from './components/sections/EnhancedPrinterSection'
import IntroPricingFmrpSection from './components/sections/IntroPricingFmrpSection'
import MembershipPlansSection from './components/sections/MembershipPlansSection'
import PriceTableSection from './components/sections/PriceTableSection'

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