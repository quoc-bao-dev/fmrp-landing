import CustomMap from '@/components/common/map/CustomMap'
import BgPaddingMarginSection from '@/components/layouts/sections/BgPaddingMarginSection'
import React from 'react'

type Props = {}

const MapContactSection = (props: Props) => {
    return (
        <BgPaddingMarginSection>
            <CustomMap lat={10.801356} lng={106.714447} />
        </BgPaddingMarginSection>
    )
}

export default MapContactSection