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

const HeaderContainer = () => {
    const router = useRouter()
    const pathname = usePathname()

    const { dataLang } = useTranslate();

    const { setCookie, getCookie } = useCookieStore()

    const { informationUser } = useAuthStore()
    const { isVisibleTablet } = useResizeStore()

    const { setOpenDialogCustom, setStatusDialog } = useDialogStore()

    // const { onSubmitChangeLanguage, isLoading } = usePostChangeLanguage()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()


    const dataHeader: IMenuHeader[] = [
        {
            id: uuidv4(),
            name: "Về chúng tôi",
            link: '/about-us',
            children: [],
            visible: true,
        },
        {
            id: uuidv4(),
            name: "Giải Pháp",
            link: '',
            children: [
                {
                    id: "1",
                    name: "hello",
                    link: "/solutions/a"
                },
                {
                    id: "2",
                    name: "hello 2",
                    link: "/solutions/b"
                },
            ],
            visible: true,
        },
        {
            id: uuidv4(),
            name: "Bảng giá",
            link: '/pricing',
            children: [],
            visible: true,
        },
        {
            id: uuidv4(),
            name: "Dự án",
            link: '/projects',
            children: [],
            visible: true,
        },
        {
            id: uuidv4(),
            name: "Câu chuyện khách hàng",
            link: '/customer-stories',
            children: [],
            visible: true,
        },
        {
            id: uuidv4(),
            name: "Blog",
            link: '/blog',
            children: [],
            visible: true,
        },
    ]

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
        <header className='fixed top-2 w-full z-50 pointer-events-none'>
            <div
                className='custom-container lg:bg-[#FFFFFF]/80 bg-[#FFFFFF]/50 3xl:px-12 xxl:px-10 lg:px-8 px-6 xxl:py-3 py-2 pointer-events-auto lg:rounded-[40px] rounded-xl'
                style={{
                    backdropFilter: "blur(25px)", // Làm tròn giá trị
                    // boxShadow: `
                    //     0px 4px 100px 0px rgba(0, 0, 0, 0.12) inset, 
                    //     -9px 20px 80px -20px rgba(0, 0, 0, 0.15), 
                    //     2px -2px 0px #FFFFFF, 
                    //     -2px 2px 0px #E5E5E5
                    // `
                    boxShadow: `0px 2px 83.99px 0px #00000005 inset, -9px 20px 59.99px -24px #0000000D, 1px -1px 0px 0px #FFFFFF, -1px 1px 0px 0px #F0F0F0`
                    // boxShadow: `
                    //     0px 4px 100px 0px rgba(0, 0, 0, 0.12) inset, 
                    //     -9px 20px 80px -20px rgba(0, 0, 0, 0.15), 
                    //     2px -2px 0px #FFFFFF, 
                    //     -2px 2px 0px #E5E5E5
                    // `
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
