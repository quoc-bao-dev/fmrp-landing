'use client'

import ToastCustom from '@/components/common/toast/ToastCustom'
import { Toaster as ToastShadcnUi } from "@/components/ui/toaster"
import { useToast } from '@/hooks/ui/use-toast'
import { useResizeStore } from '@/stores/useResizeStore'
import { useToastStore } from '@/stores/useToastStore'
import { scrollToSection } from '@/utils/scroll/scrollUtils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CursorFollower from '../../common/cursor/CursorFollower';
import ProviderLayout from '../provider/ProviderLayout'
import { KEY_COOKIES } from '@/constants/Cookie'
import ScrollbarStyle from '@/components/common/scroll/ScrollbarStyle'
// import { LenisProvider } from '@/contexts/LenisContext'
import { ModalProvider } from '@/contexts/ModalContext';
import { useDebouncedCallback } from 'use-debounce'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

const RootLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { toast } = useToast()

    const [isMounted, setIsMounted] = useState<boolean>(false)

    const sectionId = useSearchParams().get('sectionId')

    const { duration, openToast, message, type, setToast, description } = useToastStore()

    const {
        isVisibleMobile,
        isVisibleTablet,
        isVisibleDesktopLG,
        isVisibleDesktopXL,
        isVisibleDesktopXXL,
        onResizeMobile,
        onResizeTablet,
        onResizeDesktopLG,
        onResizeDesktopXL,
        onResizeDesktopXXL,
        onCloseResizeMobile,
        onCloseResizeTablet,
        onCloseResizeDesktopLG,
        onCloseResizeDesktopXL,
        onCloseResizeDesktopXXL,
    } = useResizeStore()

    useEffect(() => {
        setIsMounted(true)

        // Fix lỗi Hydration failed
        if (typeof window !== "undefined") {
            document.documentElement.removeAttribute("cz-shortcut-listen");

            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
        }
    }, [])

    useEffect(() => {
        if (sectionId) {
            setTimeout(() => {
                scrollToSection(sectionId)
            }, 100);
        }
    }, [sectionId]);

    // Kiểm tra kích thước màn hình và cập nhật trạng thái isVisible 
    const handleResize = useDebouncedCallback(() => {
        if (window.innerWidth < 768) {
            // khi đến màn 768 thì bắt đầu thực hiện function
            onResizeMobile();
        } else {
            onCloseResizeMobile()
        }

        if (window.innerWidth < 1024) {
            onResizeTablet()
        } else {
            onCloseResizeTablet()
        }

        if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
            onResizeDesktopLG()
        } else {
            onCloseResizeDesktopLG()
        }

        if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
            onResizeDesktopXL()
        } else {
            onCloseResizeDesktopXL()
        }

        if (window.innerWidth >= 1440 && window.innerWidth < 1536) {
            onResizeDesktopXXL()
        } else {
            onCloseResizeDesktopXXL()
        }

    }, 200)

    // ẩn/hiện khi chuyển qua màn hình nhỏ khi không dùng chung div để tránh xung đột 
    useEffect(() => {
        // Gọi hàm handleResize khi kích thước màn hình thay đổi
        window.addEventListener('resize', handleResize);

        // Gọi hàm handleResize một lần khi component được render
        handleResize();

        // Hủy lắng nghe sự kiện resize khi component bị unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            handleResize.cancel(); // 💥 cancel debounce khi unmount
        };
    }, [
        isVisibleMobile,
        isVisibleTablet,
        isVisibleDesktopLG,
        isVisibleDesktopXL,
        isVisibleDesktopXXL,
        onResizeMobile,
        onResizeTablet,
        onResizeDesktopLG,
        onResizeDesktopXL,
        onResizeDesktopXXL,
        onCloseResizeMobile,
        onCloseResizeTablet,
        onCloseResizeDesktopLG,
        onCloseResizeDesktopXL,
        onCloseResizeDesktopXXL,
    ]);

    const showToast = (type: 'success' | 'error' | 'warning', message: string, description?: string) => {
        return toast({
            duration: duration,
            className: 'rounded-[13px] max-w-[336px]',
            description: (
                <ToastCustom
                    type={type}
                    content={message}
                    description={description}
                />
            )
        });
    };

    useEffect(() => {
        if (openToast && type && message) {
            setTimeout(() => {
                setToast(false)
            }, duration)
            showToast(type, message, description)
        }
    }, [openToast])

    if (!isMounted) return null;

    return (
        // <LenisProvider>
        <QueryClientProvider client={queryClient}>
            <main id="scroll-container" className='bg-white min-w-screen lg:min-h-screen min-h-dvh custom-tailwind custom-size-text custom-swiper relative border-gradient scroll-container'>
                <AnimatePresence
                    mode="wait"
                    onExitComplete={() => {
                        if (typeof window == 'undefined') return;
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <ModalProvider>
                        <ProviderLayout
                            data={data}
                            attribute="class"
                            defaultTheme="light"
                            themes={KEY_COOKIES.THEME}
                            enableSystem={false}
                            disableTransitionOnChange
                        >
                            <ScrollbarStyle />
                            {!isVisibleTablet && <CursorFollower />}
                            {children}
                            <ToastShadcnUi />
                        </ProviderLayout>
                    </ModalProvider>
                </AnimatePresence>
            </main>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
        // </LenisProvider >
    )
}

export default RootLayout