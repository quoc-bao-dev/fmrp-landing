import CustomMap from '@/components/common/map/CustomMap'
import { useLenis } from '@/contexts/LenisContext';
import React, { useEffect } from 'react'

type Props = {}

const MapContactSection = (props: Props) => {
    const { lenis } = useLenis(); // Sử dụng Lenis từ Context

    useEffect(() => {
        if (lenis) {
            setTimeout(() => lenis.start(), 200); // Chờ 200ms trước khi restart Lenis
        }
    }, [lenis]);

    return (
        <div className={`custom-padding-section lg:mx-16 md:mx-8 mx-4`}>
            <CustomMap lat={10.801356} lng={106.714447} />
        </div>
    )
}

export default MapContactSection