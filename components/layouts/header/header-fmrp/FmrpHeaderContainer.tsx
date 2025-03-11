'use client'

import { KEY_COOKIES } from '@/constants/Cookie'
import { useTranslate } from '@/contexts/TranslateContext'
import { dataLanguageOptions } from '@/data/DataTranslate'
import { uuidv4 } from '@/lib/uuid'
// import { updateLanguage } from '@/managers/api-management/server/useGetInitializeLanguage'
// import { usePostChangeLanguage } from '@/managers/api-management/translate/usePostChangeLanguage'
import { useAuthStore } from '@/stores/useAuthStores'
import useCookieStore from '@/stores/useCookieStore'
import { useDialogStore } from '@/stores/useDialogStores'
import { useResizeStore } from '@/stores/useResizeStore'
import { IMenuHeader } from '@/types/ui/menu/IMenuUI'
import { usePathname, useRouter } from 'next/navigation'
// import DesktopHeaderClient from './DesktopHeaderClient'
// import TabletHeaderClient from './TabletHeaderClient'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
import DesktopHeader from './sections/FmrpDesktopHeader'
import TabletHeader from './sections/FmrpTabletHeader'
import LaptopIconLinear from '@/components/icons/linear/LaptopIconLinear'
import DeviceMobileIconLinear from '@/components/icons/linear/DeviceMobileIconLinear'
import CodeIconLinear from '@/components/icons/linear/CodeIconLinear'
import CloudArrowUpIconLinear from '@/components/icons/linear/CloudArrowUpIconLinear'

import FolderStarIconLinear from '@/components/icons/linear/FolderStarIconLinear'
import UsersThreeIconLinear from '@/components/icons/linear/UsersThreeIconLinear'
import ChatsTeardropIconLinear from '@/components/icons/linear/ChatsTeardropIconLinear'
import PencilSimpleLineIconLinear from '@/components/icons/linear/PencilSimpleLineIconLinear'

import { motion, useAnimation } from 'framer-motion';

import { useEffect, useCallback, useRef } from 'react'

const dataHeader: IMenuHeader[] = [
    {
        id: uuidv4(),
        name: "Hướng Dẫn Sử Dụng",
        link: "https://help.fmrp.vn/",
        type: "default",
        visible: true,
    },
    {
        id: uuidv4(),
        name: "Cộng Đồng",
        link: "https://www.facebook.com/groups/mrpviet",
        type: "default",
        visible: true,
    },
    {
        id: uuidv4(),
        name: "Kiến Thức",
        link: "/blogs",
        type: "default",
        visible: true,
    },
];

const FmrpHeaderContainer = () => {
    const router = useRouter()
    const pathName = usePathname()

    const { dataLang } = useTranslate();

    const { setCookie } = useCookieStore()

    const { informationUser } = useAuthStore()
    const { isVisibleTablet } = useResizeStore()

    const { setOpenDialogCustom, setStatusDialog } = useDialogStore()

    // const { onSubmitChangeLanguage, isLoading } = usePostChangeLanguage()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

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
                    shouldShowHeader = false;
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
        if (window.scrollY === 0) return;                                   // Nếu đang ở đầu trang, không làm gì cả

        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

        inactivityTimer.current = setTimeout(() => {
            if (window.scrollY > 0) { // Kiểm tra lại trước khi hiển thị
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
            }
            inactivityTimer.current = null;
        }, 1500);

        console.log('check');

    }, [controls]);

    useEffect(() => {
        lastScrollY.current = window.scrollY; // Cập nhật vị trí scroll ngay khi tải trang
        isHeaderVisible.current = lastScrollY.current !== 0; // Nếu đang ở đầu trang, ẩn header ngay từ đầu

        window.addEventListener('scroll', handleScroll);
        if (lastScrollY.current !== 0) {
            window.addEventListener('mousemove', resetInactivityTimer);
            window.addEventListener('keydown', resetInactivityTimer);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (lastScrollY.current !== 0) {
                window.removeEventListener('mousemove', resetInactivityTimer);
                window.removeEventListener('keydown', resetInactivityTimer);
            }
        };
    }, [handleScroll, resetInactivityTimer]);


    useEffect(() => {
        const body = document.body;
        if (!isStateClientLayout?.header?.isShowMenuMobileFmrp) {
            body.style.overflow = 'auto'; // Cho phép cuộn
        } else {
            body.style.overflow = 'hidden'; // Chặn cuộn
        }
    }, [isStateClientLayout?.header?.isShowMenuMobileFmrp]);


    const handleToggleMenu = (action: string): void => {
        if (action === "on") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFmrp: true,
                }
            })
        } else if (action === "off") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFmrp: false,
                }
            })
        }
    }

    const handleChangeLanguage = async (value: string) => {
        const selectedCountry = dataLanguageOptions.find(option => option.code === value)
        if (!selectedCountry) return

        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                selectedCodeCountry: selectedCountry
            }
        })

        setCookie(KEY_COOKIES.WEBSITE_LANG, value)

        // if (informationUser) {
        //     // const res = await onSubmitChangeLanguage.mutateAsync(value)
        //     // await updateLanguage(value)
        //     await updateLanguage(value)
        //     const [res] = await Promise.all([onSubmitChangeLanguage.mutateAsync(value)])
        //     router.refresh()
        // } else {
        //     await updateLanguage(value)
        //     router.refresh()
        // }
    };

    const handleOpenDialog = (status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenDialogCustom(true)
            setStatusDialog(status)
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFmrp: false,
                }
            })
            setTimeout(() => {
                setOpenDialogCustom(true)
                setStatusDialog(status)
            }, 500);
        }
    }

    // change input search product
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                searchProduct: e.target.value,
            }
        })
    }

    return (
        <header className='fixed top-0 left-0 w-full z-50 pointer-events-none '>
            <motion.div
                // initial={{ y: 0, opacity: 1 }} // 🚀 Đảm bảo header HIỆN khi vào trang
                initial={{
                    y: pathName.includes("/products/fmrp") ? -100 : 0,
                    opacity: pathName.includes("/products/fmrp") ? 0 : 1
                }}
                animate={controls}
                className='custom-container z-50  lg:bg-[#FFFFFF]/65 bg-[#FFFFFF]/50 !backdrop-filter !backdrop-blur-[25px] 3xl:px-12 xxl:px-10 lg:px-8 px-6 xxl:py-3 py-2 mt-4 lg:space-y-0 -space-y-4 pointer-events-auto lg:rounded-[40px] rounded-xl'
                style={{
                    willChange: 'transform, opacity', // Tối ưu hóa GPU rendering
                    backgroundColor: "rgba(255, 255, 255, 0.5)", // Đảm bảo nền trong suốt
                    boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                }}
            >
                {
                    isVisibleTablet ?
                        // màn hình mobile, tablet
                        <TabletHeader
                            dataHeader={dataHeader}
                            handleToggleMenu={handleToggleMenu}
                            handleChangeLanguage={handleChangeLanguage}
                            handleOpenDialog={handleOpenDialog}
                            handleValueChange={handleValueChange}
                        />
                        :
                        // màn hình desktop
                        <DesktopHeader
                            dataHeader={dataHeader}
                            handleToggleMenu={handleToggleMenu}
                            handleChangeLanguage={handleChangeLanguage}
                            handleOpenDialog={handleOpenDialog}
                            handleValueChange={handleValueChange}
                        />
                }
            </motion.div>
        </header >
    )
}

export default FmrpHeaderContainer
