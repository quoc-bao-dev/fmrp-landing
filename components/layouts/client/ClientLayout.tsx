'use client'

import { usePathname } from 'next/navigation'

import React, { useCallback, useEffect, useRef, useState } from 'react'


// import HeaderContainerClient from '../header/HeaderContainerClient'
// import FooterContainer from '../footer/FooterContainer'

import { useDialogStore } from '@/stores/useDialogStores'
import { useAlertDialogStore } from '@/stores/useAlertDialogStore'
import ProviderLayout from '../provider/ProviderLayout'
import FosoHeaderContainer from '@/components/layouts/header/header-foso/FosoHeaderContainer'
import FooterContainer from '@/components/layouts/footer/FooterContainer'
import { useTheme } from 'next-themes';
import FmrpHeaderContainer from '../header/header-fmrp/FmrpHeaderContainer'
import { DynamicSheet } from '../../common/sheet/DynamicSheet';
import { useSheetStores } from '../../../stores/useSheetStores';
import { dataFmrpPages } from '@/data/UrlHeaderFmrp'
import WidgetButton from '@/components/common/button/WidgetButton'

const ClientLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { openDialogCustom } = useDialogStore()
    const { openSheetCustom } = useSheetStores()
    const { openAlertDialog } = useAlertDialogStore()
    const { theme } = useTheme()
    const pathname = usePathname()

    return (
        <>
            {/* header */}
            {dataFmrpPages.includes(pathname) && <FmrpHeaderContainer />}
            <FosoHeaderContainer />

            {children}

            {/* footer */}
            <FooterContainer />

            <WidgetButton />

            {openSheetCustom && <DynamicSheet />}
            {/* {openDialogCustom && <DialogCustom />} */}
            {/* {openAlertDialog && <AlertDialogCustom />} */}
        </>
    )
}

export default ClientLayout