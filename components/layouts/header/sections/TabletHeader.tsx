'use client'

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { useTranslate } from '@/contexts/TranslateContext'
import { dataLanguageOptions } from '@/data/DataTranslate'
import { useAuthStore } from '@/stores/useAuthStores'
import useCookieStore from '@/stores/useCookieStore'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { IoCloseSharp } from "react-icons/io5"
import { ArrowRight2 } from 'iconsax-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { IMenuHeader } from '@/types/ui/menu/IMenuUI'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'

import { TbMenu3 } from "react-icons/tb";
import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import AvatarCustom from '@/components/common/avatar/AvatarCustom'
import LanguageSelector from '@/components/common/translate/LanguageSelector'

interface TabletHeaderProps {
    dataHeader: IMenuHeader[]
    handleToggleMenu: (action: string) => void
    handleChangeLanguage: (value: string) => void
    handleOpenDialog: (value: string, type_device: string) => void
    handleValueChange: (e?: any) => void
}

const TabletHeader: React.FC<TabletHeaderProps> = ({
    dataHeader,
    handleToggleMenu,
    handleChangeLanguage,
    handleOpenDialog,
    handleValueChange
}: TabletHeaderProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null); // Tham chiếu đến div cần kiểm tra
    const { dataLang } = useTranslate()
    const router = useRouter()

    const pathname = usePathname()

    const { getCookie } = useCookieStore()

    const { informationUser } = useAuthStore()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    console.log('isStateClientLayout', isStateClientLayout);


    return (
        <React.Fragment>
            <div className='grid grid-cols-12 items-center justify-center'>
                <div className='col-span-10 w-full flex items-center justify-start gap-2'>
                    <Link
                        href="/"
                        className='flex items-center justify-start w-fit h-[40px] py-4'
                        prefetch={false}
                        onClick={() => handleToggleMenu("off")}
                    >
                        <Image
                            width={800}
                            height={800}
                            alt="logo"
                            src="/logo/foso/logo.svg"
                            className="w-fit h-[40px] object-contain cursor-pointer"
                            priority
                        />
                    </Link>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-1">
                    <motion.div
                        initial={false}
                        animate="rest"
                        whileTap="press"
                        variants={{
                            rest: { scale: 1 },
                            press: { scale: 1.03, transition: { duration: 0.2 } },
                        }}
                        className="flex items-center justify-center bg-transparent p-3 rounded-[6px] cursor-pointer border-gradient-gray"
                        onClick={() => handleToggleMenu('on')}
                        style={{
                            background: "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                            "--border-radius": "6px",
                            "--border-width": "1.5px",
                            "--border-color": " rgba(9, 9, 11, 0.2) 0%, rgba(9, 9, 11, 0.05) 16%, rgba(9, 9, 11, 0.05) 86%, rgba(9, 9, 11, 0) 100%"
                        } as React.CSSProperties}
                    >
                        <TbMenu3 className='size-5 scale-110 text-[#28303F]' />
                    </motion.div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {
                    isStateClientLayout?.header?.isShowMenuScreen &&
                    <motion.div
                        initial={{ x: '100%' }} // Bắt đầu từ ngoài bên phải
                        animate={{ x: 0 }}      // Trượt vào vị trí hiển thị
                        exit={{ x: '100%' }}    // Trượt ra khi đóng
                        transition={{ duration: 0.5 }} // Tốc độ trượt
                        className={`flex flex-col justify-between z-[999] absolute w-screen h-dvh -top-2 md:-left-8 -left-4 bg-[#E8FBF5]`}
                    >
                        <div className='custom-container h-full'>
                            <div className='grid grid-cols-12 py-3 items-center justify-center'>
                                <div className='col-span-10 w-full flex items-center justify-start gap-2'>
                                    <Link
                                        href="/"
                                        className='flex items-center justify-start w-fit h-[40px] py-4'
                                        prefetch={false}
                                        onClick={() => handleToggleMenu("off")}
                                    >
                                        <Image
                                            width={800}
                                            height={800}
                                            alt="logo"
                                            src="/logo/foso/logo.svg"
                                            className="w-fit h-[40px] object-contain cursor-pointer"
                                            priority
                                        />
                                    </Link>
                                </div>

                                <div className="col-span-2 flex items-center justify-start gap-1">
                                    <motion.div
                                        initial={false}
                                        animate="rest"
                                        whileTap="press"
                                        variants={{
                                            rest: { scale: 1 },
                                            press: { scale: 1.03, transition: { duration: 0.2 } },
                                        }}
                                        className="flex items-center justify-center bg-transparent p-3 rounded-[6px] cursor-pointer border-gradient-gray"
                                        onClick={() => handleToggleMenu('off')}
                                        style={{
                                            background: "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                                            "--border-radius": "6px",
                                            "--border-width": "1.5px",
                                            "--border-color": " rgba(9, 9, 11, 0.2) 0%, rgba(9, 9, 11, 0.05) 16%, rgba(9, 9, 11, 0.05) 86%, rgba(9, 9, 11, 0) 100%"
                                        } as React.CSSProperties}
                                    >
                                        <IoCloseSharp className='size-5 scale-110 text-[#28303F]' />
                                    </motion.div>
                                </div>
                            </div>

                            <div className='flex flex-col justify-between py-4 h-[calc(100dvh_-_68px)]'>
                                <div className='space-y-0'>
                                    <div className='relative flex flex-col  overflow-y-auto'>
                                        {
                                            dataHeader.map((data) => (
                                                data.children?.length > 0 ?
                                                    <div
                                                        key={`header-tablet-${data.id}`}
                                                        className={`${isStateClientLayout?.header?.isActiveService ? "mb-6" : ""}`}
                                                    >
                                                        <div
                                                            className='flex justify-between'
                                                            onClick={() =>
                                                                queryKeyIsStateClientLayout({
                                                                    header: {
                                                                        ...isStateClientLayout?.header,
                                                                        isActiveService: !isStateClientLayout?.header?.isActiveService
                                                                    }
                                                                })}
                                                        >
                                                            <div
                                                                className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-[#25272A]/90 underline underline-offset-8 decoration-4 decoration-[#25272A]/90' : 'text-[#25272A]'}
                                                                 mb-6 cursor-pointer text-base w-fit custom-transition flex items-center font-medium`}
                                                            // onClick={() => handleToggleMenu("off")}
                                                            >
                                                                {data.name}
                                                            </div>
                                                            <div
                                                                className=' md:w-[10%] w-[15%] flex justify-end'
                                                            >
                                                                <IoIosArrowDown className={`${isStateClientLayout?.header?.isActiveService ? 'rotate-180 transform transition duration-700 ease-in-out text-[#1AD598]' : ''}`} />
                                                            </div>
                                                        </div>

                                                        {
                                                            isStateClientLayout?.header?.isActiveService ?
                                                                <div className='flex flex-col gap-2'>
                                                                    {/* {
                                                                            listCategoryProducts && listCategoryProducts?.map((item) => (
                                                                                <motion.div
                                                                                    key={item.id}
                                                                                    initial={false}
                                                                                    animate="rest"
                                                                                    whileTap="press"
                                                                                    variants={{
                                                                                        rest: { scale: 1 },
                                                                                        press: { scale: 1.03 },
                                                                                    }}
                                                                                    onTouchStart={() => handleSelectedCategory(item, "mobile")}
                                                                                >
                                                                                    <Link
                                                                                        href={`${item.link}`}
                                                                                        prefetch={false}
                                                                                        className={`${isStateProductCategory?.category?.selectedCategory?.id === item.id ? 'bg-[#25A35A]/50 text-[#0E0E0E]' : 'text-[#9D9FA6]'} 
                                                                                flex flex-row items-center gap-3 group hover:bg-[#FCFFF9] hover:text-[#0E0E0E] py-2 px-8 rounded-xl cursor-pointer custom-transition`}
                                                                                    >
                                                                                        <div className={`max-w-full font-normal text-base line-clamp-2`}>
                                                                                            {item?.name ? item?.name : ''}
                                                                                        </div>
                                                                                    </Link>
                                                                                </motion.div>
                                                                            ))
                                                                        } */}
                                                                    tab service con
                                                                </div>
                                                                :
                                                                (null)
                                                        }
                                                    </div>
                                                    :
                                                    <Link
                                                        key={data.id}
                                                        href={data.link}
                                                        className={`${(data.link === '/' && pathname === '/') || (pathname.includes(data.link) && data.link !== '/') ? 'text-[#25272A]/90 font-medium underline underline-offset-8 decoration-4 decoration-[#25272A]/90' : 'text-[#25272A]'} mb-6 text-base w-fit duration-300 transition ease-in-out flex items-center font-medium`}
                                                        onClick={() => {
                                                            setTimeout(() => {
                                                                queryKeyIsStateClientLayout({
                                                                    isActiveService: false
                                                                })
                                                            }, 400);
                                                            handleToggleMenu("off")
                                                        }}
                                                        prefetch={false}
                                                    >
                                                        {data.name}
                                                    </Link>
                                            ))
                                        }
                                    </div>
                                    <LanguageSelector />
                                </div>

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
                                    className='flex items-center gap-2 text-sm-default text-[#052B1E] bg-[#1AD598] hover:bg-[#1AD598]/80 font-bold capitalize border-none w-full rounded-full px-5 py-3 transition-colors duration-300 ease-in-out'
                                />
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </React.Fragment>
    )
}

export default TabletHeader