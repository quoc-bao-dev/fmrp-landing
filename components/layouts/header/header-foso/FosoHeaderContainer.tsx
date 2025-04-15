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
import FosoDesktopHeader from './sections/FosoDesktopHeader'
import FosoTabletHeader from './sections/FosoTabletHeader'
import LaptopIconLinear from '@/components/icons/linear/LaptopIconLinear'
import DeviceMobileIconLinear from '@/components/icons/linear/DeviceMobileIconLinear'
import CodeIconLinear from '@/components/icons/linear/CodeIconLinear'
import CloudArrowUpIconLinear from '@/components/icons/linear/CloudArrowUpIconLinear'

import FolderStarIconLinear from '@/components/icons/linear/FolderStarIconLinear'
import UsersThreeIconLinear from '@/components/icons/linear/UsersThreeIconLinear'
import ChatsTeardropIconLinear from '@/components/icons/linear/ChatsTeardropIconLinear'
import PencilSimpleLineIconLinear from '@/components/icons/linear/PencilSimpleLineIconLinear'

import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import React, { useEffect, useCallback, useRef } from 'react'
import FmrpIcon from '../../../icons/common/FmrpIcon';
import FposIcon from '../../../icons/common/FposIcon';
import { useSheetStores } from '../../../../stores/useSheetStores';
import { useModalContext } from '@/contexts/ModalContext'
import FosoOriginIcon from '@/components/icons/social-media/FosoOriginIcon'

const dataHeader: IMenuHeader[] = [
    {
        id: uuidv4(),
        name: "Về chúng tôi",
        link: "/about-us",
        type: "default",
        visible: true,
    },
    {
        id: uuidv4(),
        name: "Giải Pháp",
        link: "products",
        type: "products",
        // type: ["products", "services"],
        description: "Dịch vụ công nghệ giúp tối ưu vận hành doanh nghiệp.",
        subMenu: {
            tabs: ["Dịch vụ", "Sản phẩm"],
            activeTab: "Dịch vụ",
            content: {
                "Sản phẩm": {
                    image: "/background/banner/banner2.webp",
                    items: [
                        {
                            id: "5",
                            name: "FMRP - Quản Lý Xưởng Online",
                            link: "/products/phan-mem-quan-ly-san-xuat-fmrp",
                            icon: <FosoOriginIcon className='size-full rounded-[10px]' />,
                            description: "Phần Mềm Sản Xuất Tối Ưu Tinh Gọn & Thông Minh",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                        // {
                        //     id: "6",
                        //     name: "FPOS - Trợ Lý Bán Hàng",
                        //     link: "https://fososoft.vn/fpos-banhang/",
                        //     icon: <FposIcon className='size-full rounded-[10px]' />,
                        //     description: "Tối ưu vận hành, bứt phá doanh thu",
                        //     typeIcon: "logo",
                        //     typeLink: "new_tab",
                        // }
                    ]
                },
                "Dịch vụ": {
                    image: "/background/banner/banner1.webp",
                    items: [
                        {
                            id: "1",
                            name: "Thiết Kế Website",
                            link: "/products/thiet-ke-website",
                            icon: <LaptopIconLinear className='size-full' />,
                            description: "Bệ phóng thương hiệu",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                        {
                            id: "3",
                            name: "Thiết Kế App Mobile",
                            link: "/products/thiet-ke-app-mobile",
                            icon: <DeviceMobileIconLinear className='size-full' />,
                            description: "Nâng tầm doanh nghiệp",
                            typeIcon: "default",
                            typeLink: "normal",
                        },
                        // {
                        //     id: "2",
                        //     name: "Thuê IT Outsourcing",
                        //     link: "https://fososoft.vn/dich-vu-cho-thue-nhan-su/",
                        //     icon: <CodeIconLinear className='size-full' />,
                        //     description: "Giải pháp nhân lực linh hoạt",
                        //     typeIcon: "default",
                        //     typeLink: "new_tab",
                        // },
                        {
                            id: "4",
                            name: "Thuê Hosting & Server",
                            link: "/products/thue-hosting-server",
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
        id: uuidv4(),
        name: "Tài nguyên",
        link: "resource",
        type: "resource",
        description: "Thông tin và tài liệu hữu ích từ khách hàng.",
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
                            link: "/resource/du-an",
                            icon: <FolderStarIconLinear className='size-full' />,
                            description: "Các dự án đã triển khai",
                            typeIcon: "default",
                            typeLink: "normal"
                        },
                        {
                            id: "9",
                            name: "Câu chuyện khách hàng",
                            link: "/resource/cau-chuyen-khach-hang",
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
                            link: "/resource/blogs",
                            // link: "https://fososoft.vn/fblog/",
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
        id: uuidv4(),
        name: "Liên hệ",
        link: "/contact-us",
        type: "default",
        visible: true,
    },
];

const FosoHeaderContainer = () => {
    // const { theme } = useTheme()
    const router = useRouter()
    const pathname = usePathname()

    const { dataLang } = useTranslate();

    const { setCookie } = useCookieStore()

    const { informationUser } = useAuthStore()
    const { isVisibleTablet } = useResizeStore()

    const { setOpenDialogCustom, setStatusDialog } = useDialogStore()
    const { setOpenSheetCustom, setStatusSheet } = useSheetStores()

    // const { onSubmitChangeLanguage, isLoading } = usePostChangeLanguage()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    const lastScrollY = useRef<number>(0); // Stores last known scroll position
    const lastScrollX = useRef<number>(0); // Lưu vị trí scroll ngang trước đó
    const ticking = useRef<boolean>(false); // Prevents redundant re-renders
    const isHeaderVisible = useRef<boolean>(false);
    const controls = useAnimation(); // Framer Motion controls
    const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
    const forceCheckScroll = useRef<boolean>(false); // Flag để kiểm tra hướng cuộn sau khi tự hiện header

    const { openModal, closeModal } = useModalContext()

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

                if (pathname.includes("/products/fmrp")) {
                    // Nếu `theme === "fmrp"`, chỉ hiển thị header khi ở đầu trang
                    shouldShowHeader = scrollY === 0;
                } else {
                    if (scrollY === 0) {
                        // ✅ Nếu đang ở trang chủ => Ẩn header khi ở vị trí đầu trang
                        // shouldShowHeader = pathname !== "/";
                        // shouldShowHeader = false; // Ẩn header khi ở đầu trang
                    } else if (scrollY > lastScrollY.current || forceCheckScroll.current) {
                        shouldShowHeader = false; // Ẩn header khi cuộn xuống
                        forceCheckScroll.current = false; // Reset flag sau lần đầu tiên kiểm tra
                    } else if (scrollY < lastScrollY.current) {
                        shouldShowHeader = true; // Hiện header khi cuộn lên
                    }
                }


                if (shouldShowHeader !== isHeaderVisible.current) {
                    isHeaderVisible.current = shouldShowHeader;
                    controls.start({
                        y: shouldShowHeader ? 0 : -100,
                        opacity: shouldShowHeader ? 1 : 0,
                        transition: { duration: 0.3 }
                    });
                }

                lastScrollY.current = scrollY;
                lastScrollX.current = scrollX; // Cập nhật vị trí scroll ngang
                ticking.current = false;
            });
            ticking.current = true;
        }

        if (pathname !== "/products/fmrp") resetInactivityTimer();
    }, [controls, pathname]);

    // ✅ Xử lý khi không thao tác để tự hiện header
    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);

        inactivityTimer.current = setTimeout(() => {
            if (!isHeaderVisible.current) {
                isHeaderVisible.current = true;
                forceCheckScroll.current = true;
                controls.start({
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.3 }
                });
            }
            inactivityTimer.current = null;
        }, 500);
    }, [controls]);

    useEffect(() => {
        lastScrollY.current = window.scrollY; // Cập nhật vị trí scroll ngay khi tải trang
        // 🚀 Khi load trang, đảm bảo header HIỆN ra trước
        isHeaderVisible.current = true; // Đặt lại giá trị ref


        window.addEventListener('scroll', handleScroll);

        const interactionEvents = ['mousemove', 'keydown'];

        if (!pathname.includes("/products/fmrp")) {
            // window.addEventListener('mousemove', resetInactivityTimer);
            // window.addEventListener('keydown', resetInactivityTimer);

            interactionEvents.forEach(evt => window.addEventListener(evt, resetInactivityTimer));
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);

            if (!pathname.includes("/products/fmrp")) {
                // window.removeEventListener('mousemove', resetInactivityTimer);
                // window.removeEventListener('keydown', resetInactivityTimer);

                interactionEvents.forEach(evt => window.removeEventListener(evt, resetInactivityTimer));
            }
        };
    }, [handleScroll, resetInactivityTimer, pathname]);

    useEffect(() => {
        const body = document.body;
        if (!isStateClientLayout?.header?.isShowMenuMobileFoso) {
            body.style.overflow = 'auto'; // Cho phép cuộn
            closeModal()
        } else {
            body.style.overflow = 'hidden'; // Chặn cuộn
            openModal()
        }
    }, [isStateClientLayout?.header?.isShowMenuMobileFoso]);

    // bật/tắt menu dưới tablet/mobile
    const handleToggleMenu = (action: string): void => {
        if (action === "on") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: true,
                }
            })
        } else if (action === "off") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            })
        }
    }

    // chuyển đổi ngôn ngữ
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

    // bật/tắt dialog
    const handleOpenDialog = (status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenDialogCustom(true)
            setStatusDialog(status)
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            })
            setTimeout(() => {
                setOpenDialogCustom(true)
                setStatusDialog(status)
            }, 500);
        }
    }

    // bật/tắt sheet 
    const handleOpenSheet = (status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenSheetCustom(true)
            setStatusSheet(status)
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuMobileFoso: false,
                }
            })
            setTimeout(() => {
                setOpenSheetCustom(true)
                setStatusSheet(status)
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

    const handleToggleSubMenu = (id: string) => {
        let active = isStateClientLayout?.header?.isActiveSubMenuFoso === id ? null : id

        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                isActiveSubMenuFoso: active
            }
        })
    };

    return (
        <header className='fixed top-0 left-0 w-full z-50 pointer-events-none'>
            <motion.div
                initial={{ y: 0, opacity: 1 }} // 🚀 Đảm bảo header HIỆN khi vào trang
                // initial={{ y: pathname === "/" ? -100 : 0, opacity: pathname === "/" ? 0 : 1 }}
                animate={controls}
                className={`${isStateClientLayout?.header?.isShowMenuMobileFoso ? "mx-0" : "md:mx-8 mx-4"} 3xl:mx-60 xxl:mx-40 xl:mx-32 lg:mx-10 4xl:px-[10%] z-50  lg:bg-[#FFFFFF]/65 bg-[#FFFFFF]/50 !backdrop-filter !backdrop-blur-[25px] 3xl:px-12 xxl:px-10 lg:px-8 px-6 xxl:py-3 py-2 mt-4 lg:space-y-0 -space-y-4 pointer-events-auto lg:rounded-[40px] rounded-xl custom-transition`}
                style={{
                    willChange: 'transform, opacity', // Tối ưu hóa GPU rendering
                    backgroundColor: "rgba(255, 255, 255, 0.5)", // Đảm bảo nền trong suốt
                    boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                }}
            >
                {
                    isVisibleTablet ?
                        // màn hình mobile, tablet
                        <FosoTabletHeader
                            dataHeader={dataHeader}
                            handleToggleMenu={handleToggleMenu}
                            handleChangeLanguage={handleChangeLanguage}
                            handleOpenDialog={handleOpenDialog}
                            handleValueChange={handleValueChange}
                        />
                        :
                        // màn hình desktop
                        <FosoDesktopHeader
                            dataHeader={dataHeader}
                            handleToggleMenu={handleToggleMenu}
                            handleChangeLanguage={handleChangeLanguage}
                            handleOpenDialog={handleOpenDialog}
                            handleOpenSheet={handleOpenSheet}
                            handleValueChange={handleValueChange}
                        />
                }
            </motion.div>



        </header >
    )
}

export default FosoHeaderContainer
