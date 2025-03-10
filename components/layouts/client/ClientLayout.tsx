'use client'

import { usePathname } from 'next/navigation'

import React, { useCallback, useEffect, useRef, useState } from 'react'


// import HeaderContainerClient from '../header/HeaderContainerClient'
// import FooterContainer from '../footer/FooterContainer'

import WidgetButton from '@/components/common/button/WidgetButton'

import { useDialogStore } from '@/stores/useDialogStores'
import { useAlertDialogStore } from '@/stores/useAlertDialogStore'
import ProviderLayout from '../provider/ProviderLayout'
import FosoHeaderContainer from '@/components/layouts/header/header-foso/FosoHeaderContainer'
import FooterContainer from '@/components/layouts/footer/FooterContainer'
import { useTheme } from 'next-themes';
import FmrpHeaderContainer from '../header/header-fmrp/FmrpHeaderContainer'

const ClientLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { openDialogCustom } = useDialogStore()
    const { openAlertDialog } = useAlertDialogStore()
    const { theme } = useTheme()
    const pathname = usePathname()

    console.log('theme theme: ', theme);


    return (
        <>
            {/* header */}
            {pathname === "/products/fmrp" && <FmrpHeaderContainer />}
            <FosoHeaderContainer />

            {children}

            {/* footer */}
            <FooterContainer />

            {/* {!pathName.startsWith("/auth") && <WidgetButton />} */}

            {/* {openDialogCustom && <DialogCustom />} */}
            {/* {openAlertDialog && <AlertDialogCustom />} */}
        </>
    )
}

export default ClientLayout