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
    const lastScrollX = useRef<number>(0); // Lưu vị trí scroll ngang trước đó
    const ticking = useRef<boolean>(false); // Prevents redundant re-renders
    const isHeaderVisible = useRef<boolean>(false);
    const controls = useAnimation(); // Framer Motion controls
    const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
    const forceCheckScroll = useRef<boolean>(false); // Flag để kiểm tra hướng cuộn sau khi tự hiện header

    // ✅ Xử lý scroll để kiểm tra hướng cuộn (dùng throttle để tránh lag)
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Nếu chỉ cuộn ngang (scrollX thay đổi mà scrollY không đổi) → Bỏ qua
        if (scrollX !== lastScrollX.current && scrollY === lastScrollY.current) {
            lastScrollX.current = scrollX; // Cập nhật scrollX để không xử lý lần sau
            return;
        }

        if (!ticking.current) {
            requestAnimationFrame(() => {
                let shouldShowHeader = isHeaderVisible.current;

                if (scrollY === 0) {
                    // ✅ Nếu đang ở trang chủ => Ẩn header khi ở vị trí đầu trang
                    shouldShowHeader = pathName !== "/";
                    // shouldShowHeader = false; // Ẩn header khi ở đầu trang
                } else if (scrollY > lastScrollY.current || forceCheckScroll.current) {
                    shouldShowHeader = false; // Ẩn header khi cuộn xuống
                    forceCheckScroll.current = false; // Reset flag sau lần đầu tiên kiểm tra
                } else if (scrollY < lastScrollY.current) {
                    shouldShowHeader = true; // Hiện header khi cuộn lên
                }


                if (shouldShowHeader !== isHeaderVisible.current) {
                    isHeaderVisible.current = shouldShowHeader;
                    controls.start({
                        y: shouldShowHeader ? 0 : -100,
                        opacity: shouldShowHeader ? 1 : 0,
                        transition: {
                            type: "spring", // 🏆 Mượt hơn với spring easing
                            stiffness: 250,
                            damping: 30
                        },
                    });
                }

                lastScrollY.current = scrollY;
                lastScrollX.current = scrollX; // Cập nhật vị trí scroll ngang
                ticking.current = false;
            });
            ticking.current = true;
        }

        resetInactivityTimer();
    }, [controls, pathName]);

    // ✅ Xử lý khi không thao tác để tự hiện header
    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

        inactivityTimer.current = setTimeout(() => {
            isHeaderVisible.current = true;
            forceCheckScroll.current = true;
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 18
                }
            });
            inactivityTimer.current = null;
        }, 1500);
    }, [controls]);

    useEffect(() => {
        lastScrollY.current = window.scrollY; // Cập nhật vị trí scroll ngay khi tải trang

        // 🚀 Khi load trang, đảm bảo header HIỆN ra trước
        isHeaderVisible.current = true; // Đặt lại giá trị ref

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', resetInactivityTimer);
        window.addEventListener('keydown', resetInactivityTimer);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', resetInactivityTimer);
            window.removeEventListener('keydown', resetInactivityTimer);
        };
    }, [handleScroll, resetInactivityTimer]);

    return (
        <ProviderLayout data={data}>
            {/* header */}
            <motion.div
                initial={{ y: 0, opacity: 1 }} // 🚀 Đảm bảo header HIỆN khi vào trang
                // initial={{ y: pathName === "/" ? -100 : 0, opacity: pathName === "/" ? 0 : 1 }}
                animate={controls}
                className="fixed top-0 left-0 w-full z-50 bg-transparent"
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