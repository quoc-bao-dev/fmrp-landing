import React, { Fragment, useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useTranslate } from '@/contexts/TranslateContext'

import { useAuthStore } from '@/stores/useAuthStores'
import { useAlertDialogStore } from '@/stores/useAlertDialogStore'

import { dataLanguageOptions } from '@/data/DataTranslate'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
} from '@/components/ui/select'

import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import {
    ArrowDown2,
    ArrowRight2,
    ArrowUp2,
    Heart,
    Location,
    Lock,
    Logout,
    MessageQuestion,
    Note,
    Tag,
    User,
    UserSquare
} from 'iconsax-react'

import { motion } from 'framer-motion'
import useCookieStore from '@/stores/useCookieStore'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import { useDebounce } from 'use-debounce'
import { Separator } from '@/components/ui/separator'
import { ActionTooltip } from '@/components/common/tooltip/ActionTooltip'
import AvatarCustom from '@/components/common/avatar/AvatarCustom'
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import { IMenuHeader } from '@/types/ui/menu/IMenuUI'
import { Skeleton } from '@/components/ui/skeleton';
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
import LanguageSelector from '../../../../common/translate/LanguageSelector';

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useResizeStore } from '@/stores/useResizeStore'

import SubmenuTooltip from '@/components/common/tooltip/SubmenuTooltip'
import HoverEffect from '@/components/common/animations/hover-button/HoverEffectButton'
import { variantButtonScaleZoom } from '@/utils/animations/variantsAnimation'
import { scrollToTop } from '@/utils/scroll/scrollUtils';

interface DesktopHeaderClientProps {
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
    handleChangeLanguage: (value: string) => void
    handleOpenDialog: (value: string, type_device: string) => void
    handleOpenSheet: (value: string, type_device: string) => void
    handleValueChange: (e?: any) => void
}

const FosoDesktopHeader = ({ dataHeader, handleToggleMenu, handleChangeLanguage, handleOpenDialog, handleOpenSheet, handleValueChange }: DesktopHeaderClientProps) => {
    const { isVisibleTablet } = useResizeStore()

    const dropdownRef = useRef<HTMLDivElement>(null); // Tham chiếu đến div cần kiểm tra

    const router = useRouter()

    const pathname = usePathname();

    const { dataLang } = useTranslate();

    // const { isLoading } = useGetInfoByToken()

    const { informationUser } = useAuthStore()

    const { setOpenAlertDialog } = useAlertDialogStore()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout();

    // const { data: dataCountCart } = useGetCountCart({ session_id: getCookie("session_id") ?? "" }) // api count cart

    // const { onSubmit: onSubmitSearchProduct, isLoading: isLoadingSearchProduct } = usePostSearchProduct()

    // const [valueSearchProduct] = useDebounce(isStateClientLayout?.header?.searchProduct, 500); // search báo giá

    // Đóng khi nhấn ra ngoài
    // useEffect(() => {
    //     if (isStateClientLayout?.header?.isShowMenuSearchProduct) {
    //         const handleClickOutside = (event: any) => {
    //             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //                 queryKeyIsStateClientLayout({
    //                     header: {
    //                         ...isStateClientLayout?.header,
    //                         isShowMenuSearchProduct: false
    //                     }
    //                 })
    //             }
    //         };

    //         document.addEventListener("mousedown", handleClickOutside);
    //         return () => {
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }
    // }, [isStateClientLayout?.header?.isShowMenuSearchProduct]);

    const dataTabProfile = [
        {
            id: 343241,
            name: `${dataLang?.q_auth_request_quote ?? "q_auth_request_quote"}`,
            icon: MessageQuestion,
            link: "/auth/products/quote-request",
        },
        {
            id: 1232,
            name: `${dataLang?.q_auth_order_history ?? "q_auth_order_history"}`,
            icon: Note,
            link: "/auth/products/order-history",
        },
        // {
        //     id: 15252,
        //     name: `${dataLang?.q_auth_discount_code ?? "q_auth_discount_code"}`,
        //     icon: Tag,
        //     link: "/auth/products/discount-codes",
        // },
        {
            id: 13453,
            name: `${dataLang?.q_auth_favorite_products ?? "q_auth_favorite_products"}`,
            icon: Heart,
            link: "/auth/products/favorites",
        },
        {
            id: 144324,
            name: `${dataLang?.q_auth_profile ?? "q_auth_profile"}`,
            icon: UserSquare,
            link: "/auth/information/profile",
        },
        {
            id: 323,
            name: `${dataLang?.q_auth_change_password ?? "q_auth_change_password"}`,
            icon: Lock,
            link: "/auth/information/change-password",
        },
        {
            id: 54,
            name: `${dataLang?.q_auth_address_book ?? "q_auth_address_book"}`,
            icon: Location,
            link: "/auth/information/address-book",
        }
    ]

    const handleDropdownChange = (value: boolean) => {
        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                openDropdownProfile: value,
            }
        })
    }

    // const checkIsActive = (pathname: string, link: string | string[]) => {
    //     if (Array.isArray(link)) {
    //         return link.some((sub) => pathname.includes(sub));
    //     }
    //     return pathname.includes(link);
    // };

    const checkIsActive = (pathname: string, keywords: string | string[]): boolean => {
        if (Array.isArray(keywords)) {
            return keywords.some(keyword => pathname.includes(keyword));
        }
        return pathname.includes(keywords);
    };

    return (
        <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.div
                initial={false}
                animate="rest"
                whileTap="press"
                variants={variantButtonScaleZoom}
                className="aspect-2.4/1 3xl:w-[134px] xl:w-[110px] w-[86px] h-auto cursor-pointer"
                onClick={() => {
                    router.push("/")
                    scrollToTop()
                }}
            >
                <Image
                    alt="logo"
                    src="/logo/foso/logo.svg"
                    width={134}
                    height={55}
                    quality={100}
                    priority
                    className="size-full object-contain aspect-2.4/1"
                />
            </motion.div>


            <div className="flex-grow max-w-[65%] flex items-center justify-center 2xl:gap-4 xl:gap-2 lg:gap-1">
                {
                    dataHeader.map((item) => {
                        console.log('checkIsActive(pathname, item.link): ', checkIsActive(pathname, item.active));


                        return (
                            <React.Fragment key={item.id}>
                                {
                                    item.subMenu ?
                                        (
                                            <ActionTooltip
                                                side="bottom"
                                                align="center"
                                                classNameContent="bg-white rounded-3xl xl:p-6 p-4"
                                                classNameArrow="fill-white custom-arrow"
                                                label={
                                                    <SubmenuTooltip
                                                        subMenu={item.subMenu}
                                                    />
                                                }
                                                styleContent={{
                                                    boxShadow: "0px 1px 1px 2px #1018280D",
                                                }}
                                            >
                                                <div
                                                    className={`${checkIsActive(pathname, item.active)
                                                        ? "text-[#25272A] font-bold"
                                                        : "text-[#25272A] font-medium hover:text-[#10805B] hover:font-bold"
                                                        } flex items-center text-sm-default gap-2 px-2 cursor-pointer custom-transition relative`}
                                                >
                                                    <span className='relative'>
                                                        <HoverEffect
                                                            title={item.name}
                                                            hoverTitle={item.name}
                                                            reverse={false}
                                                            className={`${checkIsActive(pathname, item.active)
                                                                ? "text-[#25272A] font-bold"
                                                                : "text-[#25272A] hover:text-[#10805B] font-medium hover:font-bold"
                                                                }  text-sm-default !tracking-[1%] px-2 py-1 cursor-pointer custom-transition capitalize relative text-nowrap
                                                    w-fit flex flex-col overflow-hidden
                                                    `}
                                                        />
                                                        {
                                                            (checkIsActive(pathname, item.active) && item.link !== "/") &&
                                                            <div className='absolute -bottom-2.5 left-1/2 -translate-x-1/2 size-2 rounded-full bg-[#1AD598] z-[999]' />
                                                        }
                                                    </span>
                                                    <IoIosArrowDown className="size-4" />

                                                </div>
                                            </ActionTooltip>
                                        )
                                        :
                                        (
                                            <Link
                                                href={item.link}
                                                className='inline-flex relative'
                                            >
                                                <HoverEffect
                                                    title={item.name}
                                                    hoverTitle={item.name}
                                                    reverse={false}
                                                    className={`${checkIsActive(pathname, item.active)
                                                        ? "text-[#25272A] font-bold"
                                                        : "text-[#25272A] hover:text-[#10805B] font-medium hover:font-bold"
                                                        }  text-sm-default !tracking-[1%] px-2 py-1 cursor-pointer custom-transition capitalize relative text-nowrap
                                                    w-fit flex flex-col overflow-hidden
                                                    `}
                                                />

                                                {
                                                    (checkIsActive(pathname, item.active) && item.link !== "/") &&
                                                    <div className='absolute -bottom-2.5 left-1/2 -translate-x-1/2 size-2 rounded-full bg-[#1AD598] z-[999]' />
                                                }
                                            </Link>
                                        )
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>

            {/* Nút chuyển ngôn ngữ + CTA */}
            <div className="flex items-center justify-end gap-2 max-w-[30%]">
                {/* <LanguageSelector
                    classNameTrigger='border-gradient-language text-[#25272A] border-none'
                    styleTrigger={{
                        background: isVisibleTablet ? "" : "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                        boxShadow: isVisibleTablet ? "" : "0 0 0 1px rgba(9, 9, 11, 0.05), 0 0 0 1px rgba(9, 9, 11, 0.1)"
                    }}
                    whileHover={{
                        background: [
                            // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, ##09090B, #09090B)",
                            // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #09090B, #09090B)",
                            // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #09090B, #09090B)",
                            "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                            "linear-gradient(360deg, rgba(9, 9, 11, 0) 0%, rgba(9, 9, 11, 0.2) 100%)",
                            "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.2) 100%)",

                        ],
                        transition: {
                            duration: 1.5,
                            ease: [0.4, 0, 0.6, 1],
                            repeat: Infinity
                        },
                        boxShadow: [
                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                        ],
                    }}
                /> */}

                <ButtonAnimation
                    icon={
                        <div className='xl:size-6 size-5 flex-shrink-0'>
                            <Image
                                width={100}
                                height={100}
                                alt='icon'
                                src={"/icons/common/arrow-circle.svg"}
                                className='size-full object-contain'
                            />
                        </div>
                    }
                    reverse={true}
                    title="Trở thành khách hàng"
                    onClick={() => handleOpenSheet("contact", "desktop")}
                    className='border-gradient-button-foso flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                    style={{
                        background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                    }}
                    whileHover={{
                        background: [
                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)"
                        ],
                        transition: {
                            duration: 1.5,
                            ease: [0.4, 0, 0.6, 1],
                            repeat: Infinity
                        },
                        boxShadow: [
                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                        ],
                    }}
                />
            </div>
        </div>
    )
}

export default FosoDesktopHeader



