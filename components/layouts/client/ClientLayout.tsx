'use client'

import { usePathname } from 'next/navigation'

import React, { useCallback, useEffect, useRef, useState } from 'react'


// import HeaderContainerClient from '../header/HeaderContainerClient'
// import FooterContainer from '../footer/FooterContainer'

import WidgetButton from '@/components/common/button/WidgetButton'

import { useDialogStore } from '@/stores/useDialogStores'
import { useAlertDialogStore } from '@/stores/useAlertDialogStore'
import ProviderLayout from '../provider/ProviderLayout'
import HeaderContainer from '@/components/layouts/header/HeaderContainer'
import FooterContainer from '@/components/layouts/footer/FooterContainer'

const ClientLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { openDialogCustom } = useDialogStore()
    const { openAlertDialog } = useAlertDialogStore()

    return (
        <>
            {/* header */}
            <HeaderContainer />

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