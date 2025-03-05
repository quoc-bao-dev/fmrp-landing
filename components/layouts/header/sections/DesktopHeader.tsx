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
import LanguageSelector from '../../../common/translate/LanguageSelector';

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { useResizeStore } from '@/stores/useResizeStore'

import SubmenuTooltip from '@/components/common/tooltip/SubmenuTooltip'

interface DesktopHeaderClientProps {
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
    handleChangeLanguage: (value: string) => void
    handleOpenDialog: (value: string, type_device: string) => void
    handleValueChange: (e?: any) => void
}

const DesktopHeader = ({ dataHeader, handleToggleMenu, handleChangeLanguage, handleOpenDialog, handleValueChange }: DesktopHeaderClientProps) => {
    const { isVisibleTablet } = useResizeStore()
    const { getCookie } = useCookieStore()

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

    return (
        <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link
                href="/"
                className="w-auto 3xl:min-w-[134px] xl:min-w-[110px] min-w-[86px] h-full flex justify-start items-center gap-2"
                prefetch={false}
            >
                <div className="aspect-2.4/1 3xl:w-[134px] xl:w-[110px] w-[86px]">
                    <Image
                        alt="logo"
                        src="/logo/foso/logo.svg"
                        width={134}
                        height={55}
                        quality={100}
                        priority
                        className="size-full object-contain"
                    />
                </div>
            </Link>

            {/* Menu Navigation */}
            {/* <div className="flex-grow max-w-[65%] flex items-center justify-center 2xl:gap-4 xl:gap-2 lg:gap-1">
                {
                    dataHeader && dataHeader.map((item) => (
                        <React.Fragment key={item.id}>
                            {
                                item.children?.length > 0 ?
                                    (
                                        <ActionTooltip
                                            side="bottom"
                                            align="center"
                                            classNameContent={"bg-white rounded-3xl p-6"}
                                            classNameArrow="fill-white custom-arrow"
                                            // label={
                                            //     <div className='flex flex-col gap-2'>
                                            //         {
                                            //             item.children && item.children?.map((item) => (
                                            //                 <motion.div
                                            //                     key={item.id}
                                            //                     // onClick={() => handleSelectedCategory(item, "desktop")}
                                            //                     initial={false}
                                            //                     animate="rest"
                                            //                     whileTap="press"
                                            //                     variants={{
                                            //                         rest: { scale: 1 },
                                            //                         press: { scale: 1.03 },
                                            //                     }}
                                            //                 >
                                            //                     <Link
                                            //                         href={`${item.link}?id=${item.id}`}
                                            //                         prefetch={false}
                                            //                         // ${isStateProductCategory?.category?.selectedCategory?.id === item.id ? 'bg-[#FCFFF9] text-[#0E0E0E]' : ''} 
                                            //                         className={` 
                                            //                 flex flex-row items-center gap-3 group hover:bg-[#FCFFF9] hover:text-[#25272A] py-2 px-8 rounded-xl cursor-pointer custom-transition`}
                                            //                     >
                                            //                         <div className={`max-w-full font-medium text-sm-default line-clamp-2`}>
                                            //                             {item?.name ? item?.name : ''}
                                            //                         </div>
                                            //                     </Link>
                                            //                 </motion.div>
                                            //             ))
                                            //         }
                                            //     </div>
                                            // }
                                            label={
                                                <CustomTooltipContent
                                                    type={item.link === "Giải Pháp" ? "solution" : "resource"}
                                                />
                                            }
                                            styleContent={{
                                                boxShadow: "0px 1px 1px 2px #1018280D"
                                            }}
                                        >
                                            <div
                                                className={`${pathname.includes(item.link) && item.link !== "/" ? "text-[#25272A] font-bold" : "text-[#25272A] hover:text-[#25272A]/80 font-medium"}
                                                     flex items-center gap-2 3xl:!text-base xxl:!text-sm xl:!text-xs lg:!text-xs !text-sm !tracking-[1%] xl:px-2 px-1 cursor-pointer custom-transition relative`}
                                            >
                                                <span>{item.name}</span>
                                                <IoIosArrowDown className="size-4 text-[#25272A]" />
                                            </div>
                                        </ActionTooltip>
                                    )
                                    :
                                    (
                                        <Link
                                            href={item.link}
                                            className={`${(pathname.includes(item.link) && item.link !== "/") ? "text-[#25272A] font-bold" : "text-[#25272A] hover:text-[#25272A]/80 font-medium"} 
                                                3xl:!text-base xxl:!text-sm xl:!text-xs lg:!text-xs !text-sm !tracking-[1%] xl:px-2 px-1 cursor-pointer custom-transition capitalize relative`}
                                            prefetch={false}
                                        >
                                            {item.name}

                                            {
                                                (pathname.includes(item.link) && item.link !== "/") &&
                                                <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 size-2 rounded-full bg-[#1AD598] z-[999]' />
                                            }
                                        </Link>
                                    )
                            }
                        </React.Fragment>
                    ))
                }
            </div> */}

            <div className="flex-grow max-w-[65%] flex items-center justify-center 2xl:gap-4 xl:gap-2 lg:gap-1">
                {
                    dataHeader.map((item) => (
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
                                                className={`${pathname.includes(item.link)
                                                    ? "text-[#25272A] font-bold"
                                                    : "text-[#25272A] hover:text-[#1AD598] font-medium"
                                                    } flex items-center 3xl:!text-lg xl:text-base !text-sm gap-2 px-2 cursor-pointer custom-transition relative`}
                                            >
                                                <span>{item.name}</span>
                                                <IoIosArrowDown className="size-4" />

                                                {
                                                    (pathname.includes(item.link) && item.link !== "/") &&
                                                    <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 size-2 rounded-full bg-[#1AD598] z-[999]' />
                                                }
                                            </div>
                                        </ActionTooltip>
                                    )
                                    :
                                    (
                                        <Link
                                            href={item.link}
                                            className={`${pathname.includes(item.link)
                                                ? "text-[#25272A] font-bold"
                                                : "text-[#25272A] hover:text-[#1AD598] font-medium"
                                                }  3xl:!text-lg xl:text-base !text-sm !tracking-[1%] px-2 cursor-pointer custom-transition capitalize relative`}
                                            prefetch={false}
                                        >
                                            {item.name}
                                            {
                                                (pathname.includes(item.link) && item.link !== "/") &&
                                                <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 size-2 rounded-full bg-[#1AD598] z-[999]' />
                                            }
                                        </Link>
                                    )
                            }
                        </React.Fragment>
                    ))
                }
            </div>

            {/* Nút chuyển ngôn ngữ + CTA */}
            <div className="flex items-center justify-end gap-2 max-w-[30%]">
                <LanguageSelector
                    classNameTrigger='text-[#25272A] border border-[#09090B]/[2%]'
                    styleTrigger={{
                        background: isVisibleTablet ? "" : "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                        boxShadow: isVisibleTablet ? "" : "0 0 0 1px rgba(9, 9, 11, 0.05), 0 0 0 1px rgba(9, 9, 11, 0.1)"
                    }}
                />

                {/* <DropdownMenu
                    open={isStateClientLayout?.header?.openDropdownProfile}
                    onOpenChange={(value) => handleDropdownChange(value)}
                >
                    <DropdownMenuTrigger className="focus:outline-none focus:ring-0 select-none group">
                        <div className="flex gap-2 items-center cursor-pointer font-medium text-sm">
                            <div className="text-[#333538] group-hover:text-[#F78F08]">
                                {informationUser?.fullname}
                            </div>
                            <div className="size-8 min-w-8 min-h-8">
                                <AvatarCustom
                                    classNameContainer="w-full h-full shadow"
                                    avatar={informationUser?.client_image ?? "/avatar/avatar_default.png"}
                                />
                            </div>
                            <ArrowDown2
                                variant="Bold"
                                className="size-5 text-[#333538] group-hover:text-[#F78F08] custom-transition"
                            />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="min-w-60 border-none p-4 space-y-2 dark:bg-[#09112B]"
                        style={{
                            boxShadow: "0px 4px 4px 0px #0000004D, 0px 8px 12px 6px #00000026",
                        }}
                        side="bottom"
                        sideOffset={10}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <AvatarCustom
                                avatar={informationUser?.client_image ?? "/avatar/avatar_default.png"}
                                classNameContainer="size-10"
                            />
                            <div className="text-sm-default text-neutral-500 font-semibold">
                                {informationUser?.fullname}
                            </div>
                        </div>
                        <Separator />
                        <div
                            className="flex items-center gap-2 text-red-500 cursor-pointer"
                            onClick={() => {
                                setOpenAlertDialog(true, "logout");
                                handleDropdownChange(false);
                            }}
                        >
                            <Logout className="size-5 custom-transition" />
                            <div className="text-default">Đăng xuất</div>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu> */}

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
                    className='border-gradient flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                    style={{
                        background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                        border: "1px solid #A3EED6",
                        borderImageSource: "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",
                        
                    }}
                    whileHover={{
                        background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                        border: "1px solid rgba(255, 255, 255, 0.00)",
                        transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                />
            </div>
        </div>
    )
}

export default DesktopHeader



