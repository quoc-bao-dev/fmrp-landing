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

import { motion, useAnimation } from "framer-motion"

const ClientLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const pathName = usePathname()
    const { openDialogCustom } = useDialogStore()
    const { openAlertDialog } = useAlertDialogStore()

    const lastScrollY = useRef<number>(0); // Stores last known scroll position
    const ticking = useRef<boolean>(false); // Prevents redundant re-renders
    const isHeaderVisible = useRef<boolean>(false);
    const controls = useAnimation(); // Framer Motion controls

    // const pusher = usePusher({ language: data?.language }) // auto call 

    // ✅ Xử lý scroll để kiểm tra hướng cuộn
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;

        if (!ticking.current) {
            requestAnimationFrame(() => {
                let shouldShowHeader = isHeaderVisible.current;

                if (scrollY === 0) {
                    // ✅ Nếu đang ở trang chủ => Ẩn header khi ở vị trí đầu trang
                    shouldShowHeader = pathName !== "/";
                    // shouldShowHeader = false; // Ẩn header khi ở đầu trang
                } else if (scrollY > lastScrollY.current) {
                    shouldShowHeader = false; // Ẩn header khi cuộn xuống
                } else if (scrollY < lastScrollY.current) {
                    shouldShowHeader = true; // Hiện header khi cuộn lên
                }

                // Chỉ cập nhật nếu trạng thái thực sự thay đổi
                if (shouldShowHeader !== isHeaderVisible.current) {
                    isHeaderVisible.current = shouldShowHeader;
                    controls.start({
                        y: shouldShowHeader ? 0 : -100,
                        opacity: shouldShowHeader ? 1 : 0,
                        transition: { duration: 0.5, ease: 'easeInOut' },
                    });
                }

                lastScrollY.current = scrollY;
                ticking.current = false;
            });

            ticking.current = true;
        }
    }, [controls, pathName]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <ProviderLayout data={data}>
            {/* header */}
            <motion.div
                // initial={{ y: -100, opacity: 0 }}
                initial={{ y: pathName === "/" ? -100 : 0, opacity: pathName === "/" ? 0 : 1 }}
                animate={controls}
                className="fixed top-0 left-0 w-full z-50 bg-white shadow-md"
                style={{ willChange: 'transform, opacity' }} // Tối ưu hóa GPU rendering
            >
                <HeaderContainer />
            </motion.div>

            {children}

            {/* footer */}
            <FooterContainer />

            {/* {!pathName.startsWith("/auth") && <WidgetButton />} */}

            {/* {openDialogCustom && <DialogCustom />} */}
            {/* {openAlertDialog && <AlertDialogCustom />} */}
        </ProviderLayout>
    )
}

export default ClientLayout