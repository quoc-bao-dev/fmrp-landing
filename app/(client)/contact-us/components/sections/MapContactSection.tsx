import CustomMap from '@/components/common/map/CustomMap'
import { useLenis } from '@/contexts/LenisContext';
import React, { useEffect } from 'react'

type Props = {}

const MapContactSection = (props: Props) => {

    return (
        <div className={`custom-padding-section lg:mx-16 md:mx-8 mx-4`}>
            <CustomMap lat={10.801356} lng={106.714447} />
        </div>
    )
}

export default MapContactSection