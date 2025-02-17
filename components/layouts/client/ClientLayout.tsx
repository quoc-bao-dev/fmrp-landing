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

import { motion } from "framer-motion"
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'

const ClientLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const pathName = usePathname()
    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()
    const { openDialogCustom } = useDialogStore()
    const { openAlertDialog } = useAlertDialogStore()

    const lastScrollY = useRef<number>(0); // Stores last known scroll position
    const ticking = useRef<boolean>(false); // Prevents redundant re-renders

    // const pusher = usePusher({ language: data?.language }) // auto call 

    // Optimized scroll function with useCallback
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;

        if (!ticking.current) {
            requestAnimationFrame(() => {
                if (scrollY > 50 && lastScrollY.current <= 50) {
                    queryKeyIsStateClientLayout({
                        header: { ...isStateClientLayout?.header, isVisibleHeader: true }
                    });
                } else if (scrollY <= 50 && lastScrollY.current > 50) {
                    queryKeyIsStateClientLayout({
                        header: { ...isStateClientLayout?.header, isVisibleHeader: false }
                    });
                }

                lastScrollY.current = scrollY;
                ticking.current = false;
            });

            ticking.current = true;
        }
    }, [isStateClientLayout, queryKeyIsStateClientLayout]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    console.log('hello baby');
    

    return (
        <ProviderLayout data={data}>
            {/* header */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={isStateClientLayout?.header?.isVisibleHeader ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
                style={{ willChange: "transform, opacity" }} // Optimizes for GPU rendering
            >
                <HeaderContainer />
            </motion.div>

            {children}

            {/* footer */}
            <FooterContainer />

            {
                !pathName.startsWith("/auth")
                &&
                <WidgetButton />
            }

            {/* {openDialogCustom && <DialogCustom />} */}
            {/* {openAlertDialog && <AlertDialogCustom />} */}
        </ProviderLayout>
    )
}

export default ClientLayout