'use client'

import ChatsTeardropIconLinear from '@/components/icons/linear/ChatsTeardropIconLinear'
import CloudArrowUpIconLinear from '@/components/icons/linear/CloudArrowUpIconLinear'
import DeviceMobileIconLinear from '@/components/icons/linear/DeviceMobileIconLinear'
import FolderStarIconLinear from '@/components/icons/linear/FolderStarIconLinear'
import LaptopIconLinear from '@/components/icons/linear/LaptopIconLinear'
import PencilSimpleLineIconLinear from '@/components/icons/linear/PencilSimpleLineIconLinear'
import UsersThreeIconLinear from '@/components/icons/linear/UsersThreeIconLinear'
import FosoOriginIcon from '@/components/icons/social-media/FosoOriginIcon'
import { KEY_COOKIES } from '@/constants/Cookie'
import { useModalContext } from '@/contexts/ModalContext'
import { dataLanguageOptions } from '@/data/DataTranslate'
import { dataFmrpPages } from '@/data/UrlHeaderFmrp'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
import useCookieStore from '@/stores/useCookieStore'
import { useDialogStore } from '@/stores/useDialogStores'
import { useResizeStore } from '@/stores/useResizeStore'
import { IMenuHeader } from '@/types/ui/menu/IMenuUI'
import { motion, useAnimation } from 'framer-motion'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { useSheetStores } from '../../../../stores/useSheetStores'

// ✅ Tối ưu: Dynamic import với loading fallback
const FosoDesktopHeader = dynamic(() => import('./sections/FosoDesktopHeader'), {
    loading: () => <div className="h-16 bg-transparent" />
});
const FosoTabletHeader = dynamic(() => import('./sections/FosoTabletHeader'), {
    loading: () => <div className="h-16 bg-transparent" />
});

// ✅ Tối ưu: Memoize data để tránh re-render
const dataHeader: IMenuHeader[] = [
    {
        id: "432432432",
        name: "Về chúng tôi",
        link: "/gioi-thieu",
        active: ['about-us', 'gioi-thieu'],
        type: "default",
        visible: true,
    },
    {
        id: "5454545453",
        name: "Giải Pháp",
        link: "products",
        type: "products",
        active: ['thue-hosting-server', 'bang-gia-fmrp', 'phan-mem-quan-ly-san-xuat-fmrp'],
        description: "Dịch vụ công nghệ giúp tối ưu vận hành doanh nghiệp.",
        subMenu: {
            tabs: ["Sản phẩm", "Dịch vụ"],
            activeTab: "Dịch vụ",
            content: {
                "Sản phẩm": {
                    image: "/background/banner/banner2.webp",
                    items: [
                        {
                            id: "5",
                            name: "FMRP - Quản Lý Xưởng Online",
                            link: "/phan-mem-quan-ly-san-xuat-fmrp",
                            icon: <FosoOriginIcon className='size-full rounded-[10px]' />,
                            description: "Phần Mềm Sản Xuất Tối Ưu Tinh Gọn & Thông Minh",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                    ]
                },
                "Dịch vụ": {
                    image: "/background/banner/banner1.webp",
                    items: [
                        {
                            id: "3",
                            name: "Thiết Kế App Mobile",
                            link: "/thiet-ke-app-mobile",
                            icon: <DeviceMobileIconLinear className='size-full' />,
                            description: "Nâng tầm doanh nghiệp",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                        {
                            id: "1",
                            name: "Thiết Kế Website",
                            link: "https://thietkewebfoso.com/",
                            icon: <LaptopIconLinear className='size-full' />,
                            description: "Bệ phóng thương hiệu",
                            typeIcon: "default",
                            typeLink: "new_tab",
                        },
                        {
                            id: "4",
                            name: "Thuê Hosting & Server",
                            link: "/thue-hosting-server",
                            icon: <CloudArrowUpIconLinear className='size-full' />,
                            description: "Lưu trữ, sao lưu, bảo mật dữ liệu doanh nghiệp",
                            typeIcon: "default",
                            typeLink: "normal",
                        }
                    ]
                },
            }
        },
        visible: true,
    },
    {
        id: "dsadasq34234",
        name: "Tài nguyên",
        link: "resource",
        type: "resource",
        description: "Thông tin và tài liệu hữu ích từ khách hàng.",
        active: ['du-an', 'projects', 'cau-chuyen-khach-hang', 'customer-stories', 'blogs'],
        subMenu: {
            tabs: ["Khách hàng", "Nâng cao"],
            activeTab: "Khách hàng",
            content: {
                "Khách hàng": {
                    image: "/background/banner/banner3.webp",
                    items: [
                        {
                            id: "8",
                            name: "Dự án",
                            link: "/du-an",
                            icon: <FolderStarIconLinear className='size-full' />,
                            description: "Các dự án đã triển khai",
                            typeIcon: "default",
                            typeLink: "normal"
                        },
                        {
                            id: "9",
                            name: "Câu chuyện khách hàng",
                            link: "/cau-chuyen-khach-hang",
                            icon: <UsersThreeIconLinear className='size-full' />,
                            description: "Chia sẻ từ khách hàng",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                    ]
                },
                "Nâng cao": {
                    image: "/background/banner/banner4.webp",
                    items: [
                        {
                            id: "10",
                            name: "Diễn đàn",
                            link: "https://www.facebook.com/groups/mrpvn",
                            icon: <ChatsTeardropIconLinear className='size-full' />,
                            description: "Tham gia cộng đồng ngay",
                            typeIcon: "default",
                            typeLink: "new_tab",
                        },
                        {
                            id: "11",
                            name: "Blog",
                            link: "/blogs",
                            icon: <PencilSimpleLineIconLinear className='size-full' />,
                            description: "Cập nhật tin tức, kiến thức",
                            typeIcon: "default",
                            typeLink: "normal",
                        }
                    ]
                }
            }
        },
        visible: true,
    },
    {
        id: "95684968594",
        name: "Liên hệ",
        link: "/lien-he",
        active: ['contact-us', 'lien-he'],
        type: "default",
        visible: true,
    },
];

// ✅ Tối ưu: Custom hook để quản lý scroll với throttling
const useOptimizedScroll = (pathname: string) => {
    const controls = useAnimation();
    const [isAtPageTop, setIsAtPageTop] = useState(true);
    
    // ✅ Tối ưu: Sử dụng ref để tránh re-render
    const lastScrollY = useRef(0);
    const isHeaderVisible = useRef(true);
    const ticking = useRef(false);
    const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
    const forceCheckScroll = useRef(false);

    // ✅ Tối ưu: Throttled scroll handler
    const handleScroll = useCallback(() => {
        if (ticking.current) return;
        
        ticking.current = true;
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            setIsAtPageTop(scrollY === 0);

            let shouldShowHeader = isHeaderVisible.current;

            if (dataFmrpPages.includes(pathname)) {
                shouldShowHeader = scrollY === 0;
            } else {
                if (scrollY === 0) {
                    shouldShowHeader = true;
                } else if (scrollY > lastScrollY.current || forceCheckScroll.current) {
                    shouldShowHeader = false;
                    forceCheckScroll.current = false;
                } else if (scrollY < lastScrollY.current) {
                    shouldShowHeader = true;
                }
            }

            if (shouldShowHeader !== isHeaderVisible.current) {
                isHeaderVisible.current = shouldShowHeader;
                controls.start({
                    y: shouldShowHeader ? 0 : -100,
                    opacity: shouldShowHeader ? 1 : 0,
                    transition: { duration: 0.3, ease: "easeOut" }
                });
            }

            lastScrollY.current = scrollY;
            ticking.current = false;
        });
    }, [controls, pathname]);

    // ✅ Tối ưu: Debounced inactivity timer
    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimer.current) {
            clearTimeout(inactivityTimer.current);
        }

        inactivityTimer.current = setTimeout(() => {
            if (!isHeaderVisible.current) {
                isHeaderVisible.current = true;
                forceCheckScroll.current = true;
                controls.start({
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                });
            }
            inactivityTimer.current = null;
        }, 500);
    }, [controls]);

    useEffect(() => {
        lastScrollY.current = window.scrollY;
        isHeaderVisible.current = true;
        setIsAtPageTop(window.scrollY === 0);

        // ✅ Tối ưu: Passive listeners cho performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        const interactionEvents = ['mousemove', 'keydown'];
        if (!dataFmrpPages.includes(pathname)) {
            interactionEvents.forEach(evt => 
                window.addEventListener(evt, resetInactivityTimer, { passive: true })
            );
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (!dataFmrpPages.includes(pathname)) {
                interactionEvents.forEach(evt => 
                    window.removeEventListener(evt, resetInactivityTimer)
                );
            }
            // ✅ Tối ưu: Cleanup timer
            if (inactivityTimer.current) {
                clearTimeout(inactivityTimer.current);
            }
        };
    }, [handleScroll, resetInactivityTimer, pathname]);

    // ✅ Tối ưu: Reset header khi chuyển trang
    useEffect(() => {
        isHeaderVisible.current = true;
        controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        });
    }, [pathname, controls]);

    return { isAtPageTop, controls };
};

// ✅ Tối ưu: Memoized component
const FosoHeaderContainer = memo(() => {
    const pathname = usePathname();
    const { setCookie } = useCookieStore();
    const { isVisibleTablet } = useResizeStore();
    const { setOpenDialogCustom, setStatusDialog } = useDialogStore();
    const { setOpenSheetCustom, setStatusSheet } = useSheetStores();
    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout();
    const { openModal, closeModal } = useModalContext();

    // ✅ Tối ưu: Sử dụng custom hook
    const { isAtPageTop, controls } = useOptimizedScroll(pathname);

    const isDuAnPage = pathname.startsWith('/du-an');

    // ✅ Tối ưu: Memoized handlers
    const handleToggleMenu = useCallback((action: string): void => {
        if (action === "on") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: true,
                }
            });
        } else if (action === "off") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            });
        }
    }, [isStateClientLayout?.header, queryKeyIsStateClientLayout]);

    const handleChangeLanguage = useCallback(async (value: string) => {
        const selectedCountry = dataLanguageOptions.find(option => option.code === value);
        if (!selectedCountry) return;

        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                selectedCodeCountry: selectedCountry
            }
        });

        setCookie(KEY_COOKIES.WEBSITE_LANG, value);
    }, [isStateClientLayout?.header, setCookie, queryKeyIsStateClientLayout]);

    const handleOpenDialog = useCallback((status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenDialogCustom(true);
            setStatusDialog(status);
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            });
            setTimeout(() => {
                setOpenDialogCustom(true);
                setStatusDialog(status);
            }, 500);
        }
    }, [isStateClientLayout?.header, setOpenDialogCustom, setStatusDialog, queryKeyIsStateClientLayout]);

    const handleOpenSheet = useCallback((status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenSheetCustom(true);
            setStatusSheet(status);
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            });
            setTimeout(() => {
                setOpenSheetCustom(true);
                setStatusSheet(status);
            }, 500);
        }
    }, [isStateClientLayout?.header, setOpenSheetCustom, setStatusSheet, queryKeyIsStateClientLayout]);

    // ✅ Tối ưu: Effect cho mobile menu
    useEffect(() => {
        const body = document.body;
        if (!isStateClientLayout?.header?.isShowMenuMobileFoso) {
            body.style.overflow = 'auto';
            closeModal();
        } else {
            body.style.overflow = 'hidden';
            openModal();
        }
    }, [isStateClientLayout?.header?.isShowMenuMobileFoso, closeModal, openModal]);

    return (
        <header className='fixed top-0 left-0 w-full z-50 pointer-events-none'>
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={controls}
                className={`${isStateClientLayout?.header?.isShowMenuMobileFoso ? "mx-0" : `md:mx-8 mx-4 ${(!isDuAnPage && isAtPageTop) ? "mt-4" : "mt-4"} `} 3xl:mx-60 xxl:mx-40 xl:mx-32 lg:mx-10 4xl:px-[10%] z-50  lg:bg-[#FFFFFF]/65 bg-[#FFFFFF]/50 !backdrop-filter !backdrop-blur-[25px] 3xl:px-12 xxl:px-10 lg:px-8 px-6 xxl:py-3 py-2 lg:space-y-0 -space-y-4 pointer-events-auto lg:rounded-[40px] rounded-xl custom-transition
                `}
                style={{
                    willChange: 'transform, opacity', // ✅ Tối ưu: GPU acceleration
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                }}
            >
                {isVisibleTablet ? (
                    <FosoTabletHeader
                        dataHeader={dataHeader}
                        handleToggleMenu={handleToggleMenu}
                        handleChangeLanguage={handleChangeLanguage}
                        handleOpenDialog={handleOpenDialog}
                    />
                ) : (
                    <FosoDesktopHeader
                        dataHeader={dataHeader}
                        handleToggleMenu={handleToggleMenu}
                        handleChangeLanguage={handleChangeLanguage}
                        handleOpenDialog={handleOpenDialog}
                        handleOpenSheet={handleOpenSheet}
                    />
                )}
            </motion.div>
        </header>
    );
});

FosoHeaderContainer.displayName = 'FosoHeaderContainer';

export default FosoHeaderContainer;
