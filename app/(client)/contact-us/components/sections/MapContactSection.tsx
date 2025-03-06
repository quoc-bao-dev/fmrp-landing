import CustomMap from '@/components/common/map/CustomMap'
import BgPaddingMarginSection from '@/components/layouts/sections/BgPaddingMarginSection'
import React from 'react'

type Props = {}

const MapContactSection = (props: Props) => {
    return (
        <div className={`custom-padding-section`}>
            <div className={`lg:mx-16 md:mx-8 mx-4`}>
                <CustomMap lat={10.801356} lng={106.714447} />
            </div>
        </div>
    )
}

export default MapContactSection