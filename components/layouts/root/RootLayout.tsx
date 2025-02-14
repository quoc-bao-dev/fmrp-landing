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
import ClientLayout from '../client/ClientLayout'

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
        const rootElement = document.documentElement;
        rootElement.removeAttribute('cz-shortcut-listen');
    }, [])

    useEffect(() => {
        if (sectionId) {
            setTimeout(() => {
                scrollToSection(sectionId)
            }, 100);
        }
    }, [sectionId]);

    // ẩn/hiện khi chuyển qua màn hình nhỏ khi không dùng chung div để tránh xung đột 
    useEffect(() => {
        // Kiểm tra kích thước màn hình và cập nhật trạng thái isVisible
        if (typeof window == 'undefined') return;
        const handleResize = () => {
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

        };

        // Gọi hàm handleResize khi kích thước màn hình thay đổi
        window.addEventListener('resize', handleResize);

        // Gọi hàm handleResize một lần khi component được render
        handleResize();

        // Hủy lắng nghe sự kiện resize khi component bị unmount
        return () => {
            window.removeEventListener('resize', handleResize);
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
        <QueryClientProvider client={queryClient}>
            <main className='bg-white w-screen lg:min-h-screen min-h-dvh custom-tailwind custom-size-text custom-swiper relative'>
                <AnimatePresence
                    mode="wait"
                    onExitComplete={() => {
                        if (typeof window == 'undefined') return;
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <ClientLayout data={data}>
                        {children}
                        <ToastShadcnUi />
                    </ClientLayout>
                </AnimatePresence>
            </main>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}

export default RootLayout