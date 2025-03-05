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
import { useEffect } from 'react'
// import DesktopHeaderClient from './DesktopHeaderClient'
// import TabletHeaderClient from './TabletHeaderClient'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
import DesktopHeader from './sections/DesktopHeader'
import TabletHeader from './sections/TabletHeader'
import LaptopIconLinear from '@/components/icons/linear/LaptopIconLinear'
import DeviceMobileIconLinear from '@/components/icons/linear/DeviceMobileIconLinear'
import CodeIconLinear from '@/components/icons/linear/CodeIconLinear'
import CloudArrowUpIconLinear from '@/components/icons/linear/CloudArrowUpIconLinear'
import ChartPieSliceIconLinear from '@/components/icons/linear/ChartPieSliceIconLinear'
import StorefrontIconLinear from '@/components/icons/linear/StorefrontIconLinear'
import FolderStarIconLinear from '@/components/icons/linear/FolderStarIconLinear'
import UsersThreeIconLinear from '@/components/icons/linear/UsersThreeIconLinear'
import ChatsTeardropIconLinear from '@/components/icons/linear/ChatsTeardropIconLinear'
import PencilSimpleLineIconLinear from '@/components/icons/linear/PencilSimpleLineIconLinear'

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
        link: "solution",
        type: "solution",
        description: "Dịch vụ công nghệ giúp tối ưu vận hành doanh nghiệp.",
        subMenu: {
            tabs: ["Dịch vụ", "Sản phẩm"],
            activeTab: "Dịch vụ",
            content: {
                "Dịch vụ": {
                    image: "/background/banner/banner1.webp",
                    items: [
                        {
                            id: "1",
                            name: "Thiết Kế Website",
                            link: "/solution/website",
                            icon: <LaptopIconLinear className='size-full' />,
                            description: "Bệ phóng thương hiệu"
                        },
                        {
                            id: "3",
                            name: "Thiết Kế Mobile App",
                            link: "/solution/mobile",
                            icon: <DeviceMobileIconLinear className='size-full' />,
                            description: "Nâng tầm doanh nghiệp"
                        },
                        {
                            id: "2",
                            name: "Thuê IT Outsourcing",
                            link: "/solution/it-outsourcing",
                            icon: <CodeIconLinear className='size-full' />,
                            description: "Giải pháp nhân lực linh hoạt"
                        },
                        {
                            id: "4",
                            name: "Thuê Hosting & Server",
                            link: "/solution/server",
                            icon: <CloudArrowUpIconLinear className='size-full' />,
                            description: "Lưu trữ, sao lưu, bảo mật dữ liệu doanh nghiệp"
                        }
                    ]
                },
                "Sản phẩm": {
                    image: "/background/banner/banner2.webp",
                    items: [
                        {
                            id: "5",
                            name: "FMRP -Trợ Lý Sản Xuất",
                            link: "/products/erp",
                            icon: <ChartPieSliceIconLinear className='size-full' />,
                            description: "Tối ưu vận hành, bứt phá doanh thu"
                        },
                        {
                            id: "6",
                            name: "FPOS - Trợ Lý Bán Hàng",
                            link: "/products/crm",
                            icon: <StorefrontIconLinear className='size-full' />,
                            description: "Quản lý sản xuất tối ưu với FMRP"
                        }
                    ]
                }
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
                            link: "/solutions/website",
                            icon: <FolderStarIconLinear className='size-full' />,
                            description: "Các dự án đã triển khai"
                        },
                        {
                            id: "9",
                            name: "Câu chuyện khách hàng",
                            link: "/solutions/mobile",
                            icon: <UsersThreeIconLinear className='size-full' />,
                            description: "Chia sẻ từ khách hàng"
                        },
                    ]
                },
                "Nâng cao": {
                    image: "/background/banner/banner4.webp",
                    items: [
                        {
                            id: "10",
                            name: "Diễn đàn",
                            link: "/products/erp",
                            icon: <ChatsTeardropIconLinear className='size-full' />,
                            description: "Tham gia cộng đồng ngay"
                        },
                        {
                            id: "11",
                            name: "Blog",
                            link: "/products/crm",
                            icon: <PencilSimpleLineIconLinear className='size-full' />,
                            description: "Cập nhật tin tức, kiến thức"
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

const HeaderContainer = () => {
    const router = useRouter()
    const pathname = usePathname()

    const { dataLang } = useTranslate();

    const { setCookie } = useCookieStore()

    const { informationUser } = useAuthStore()
    const { isVisibleTablet } = useResizeStore()

    const { setOpenDialogCustom, setStatusDialog } = useDialogStore()

    // const { onSubmitChangeLanguage, isLoading } = usePostChangeLanguage()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    useEffect(() => {
        const body = document.body;
        if (!isStateClientLayout?.header?.isShowMenuScreen) {
            body.style.overflow = 'auto'; // Cho phép cuộn
        } else {
            body.style.overflow = 'hidden'; // Chặn cuộn
        }
    }, [isStateClientLayout?.header?.isShowMenuScreen]);


    const handleToggleMenu = (action: string): void => {
        if (action === "on") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuScreen: true,
                }
            })
        } else if (action === "off") {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuScreen: false,
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

        if (informationUser) {
            // // const res = await onSubmitChangeLanguage.mutateAsync(value)
            // // await updateLanguage(value)
            // await updateLanguage(value)
            // const [res] = await Promise.all([onSubmitChangeLanguage.mutateAsync(value)])
            // router.refresh()
        } else {
            // await updateLanguage(value)
            // router.refresh()
        }
    };

    const handleOpenDialog = (status: string, type_device: string) => {
        if (type_device === "desktop") {
            setOpenDialogCustom(true)
            setStatusDialog(status)
        } else {
            queryKeyIsStateClientLayout({
                header: {
                    ...isStateClientLayout?.header,
                    isShowMenuScreen: false,
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
        <header className='fixed w-full z-50 pointer-events-none'>
            <div
                className='custom-container lg:bg-[#FFFFFF]/80 bg-[#FFFFFF]/50 3xl:px-12 xxl:px-10 lg:px-8 px-6 xxl:py-3 py-2 mt-4 lg:space-y-0 -space-y-4 pointer-events-auto lg:rounded-[40px] rounded-xl'
                style={{
                    backdropFilter: "blur(25px)",
                    boxShadow:
                        isVisibleTablet
                            ?
                            `
                                inset 0px 2px 30px rgba(0, 0, 0, 0.03), /* Bóng bên trong mềm mại */
                                -9px 20px 60px rgba(0, 0, 0, 0.08), /* Bóng ngoài ở dưới */
                                9px -20px 60px rgba(0, 0, 0, 0.06), /* 🌟 Thêm bóng phía trên */
                                0px 0px 10px rgba(0, 0, 0, 0.04), /* Viền nhẹ để không bị chìm */
                                1px -1px 0px rgba(255, 255, 255, 0.9), /* Điều chỉnh viền sáng */
                                -1px 1px 0px rgba(240, 240, 240, 0.9) /* Bóng xám mềm */
                            `
                            :
                            "0px 2px 83.99px 0px #00000005 inset, -9px 20px 59.99px -24px #0000000D, 1px -1px 0px rgba(255, 255, 255, 0.9),  -1px 1px 0px rgba(240, 240, 240, 0.9)"
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
            </div>
        </header >
    )
}

export default HeaderContainer
