'use client'

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { dataLanguageOptions } from '@/data/DataTranslate'
// import { useScrollHeader } from '@/hooks/use-scroll'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
// import { usePostLocale } from '@/managers/api-management/other/usePostLocale'
// import { updateLanguage } from '@/managers/api-management/server/lang/useDataLang'
// import { useStateLayout } from '@/managers/state-management/layout/useStateLayout'
import { useAuthStore } from '@/stores/useAuthStores'
import useCookieStore from '@/stores/useCookieStore'
import { useResizeStore } from '@/stores/useResizeStore'
import { usePathname } from 'next/dist/client/components/navigation'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'
import { KEY_COOKIES } from '@/constants/Cookie';

import { motion } from 'framer-motion'
import { variantsLinearShadow } from '@/utils/animations/variantsAnimation';

type LanguageProps = {
    classNameTrigger?: string
    styleTrigger?: any
}

const LanguageSelector = ({ classNameTrigger, styleTrigger }: LanguageProps) => {
    const router = useRouter()

    const pathname = usePathname();

    const { setCookie } = useCookieStore()

    const { isVisibleTablet } = useResizeStore()

    // const { isHeaderVisible } = useScrollHeader()

    // const checkPathname = ['/', '/home'].includes(pathname)

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    // const { submitMutation } = usePostLocale()

    const { informationUser } = useAuthStore()

    const handleLanguageChange = async (value: string) => {
        const selectedLanguage = dataLanguageOptions.find(option => option.code === value);

        if (!selectedLanguage) return;

        queryKeyIsStateClientLayout({
            language: {
                ...isStateClientLayout?.language,
                selectedLanguage: selectedLanguage
            }
        });

        setCookie(KEY_COOKIES.WEBSITE_LANG, value)

        if (informationUser) {
            //     const res = await submitMutation.mutateAsync()
            //     if (res) {
            //         await updateLanguage(value)
            //         router.refresh()
            //     }
            // } else {
            //     await updateLanguage(value)
            //     router.refresh()
        }
    };


    return (
        <div>
            <Select
                onValueChange={handleLanguageChange}
                value={isStateClientLayout.language.selectedLanguage?.code}
                defaultValue={isStateClientLayout.language.selectedLanguage?.code}
            >
                {/* <motion.div
                    whileHover={{
                        background: [
                                // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, ##09090B, #09090B)",
                                // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #09090B, #09090B)",
                                // "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #09090B, #09090B)",
                            "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)"
                        ],
                        transition: {
                            duration: 1.5,
                            ease: [0.4, 0, 0.6, 1],
                            repeat: Infinity
                        },
                        boxShadow: [
                            "4px 8px 25px rgba(26, 213, 152, 0.25), inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                            "4px 8px 25px rgba(26, 213, 152, 0.45), inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                            "4px 8px 30px rgba(26, 213, 152, 0.35), inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                            "4px 8px 25px rgba(26, 213, 152, 0.25), inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                        ],
                    }}
                    className="w-fit h-full bg-transparent"
                > */}
                    <SelectTrigger
                        className={`${classNameTrigger} lg:px-3 lg:py-2 px-3 py-2 flex items-center gap-1 3xl:min-w-[100px] lg:min-w-[90px] min-w-fit lg:w-full w-fit h-full rounded-[40px] focus:outline-none focus:ring-0 focus:ring-offset-0`}
                        style={{
                            ...styleTrigger,
                        }}
                    >
                        {
                            isStateClientLayout.language.selectedLanguage && (
                                <React.Fragment>
                                    {/* <motion.div whileHover={{
                                    background: [
                                        "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.2) 100%)",
                                        "linear-gradient(360deg, rgba(9, 9, 11, 0.03) 0%, rgba(9, 9, 11, 0.1) 100%)"
                                    ],
                                    transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity }
                                }}> */}
                                    <div className='3xl:size-6 size-5 rounded-full aspect-square'>
                                        <Image
                                            src={isStateClientLayout.language.selectedLanguage?.flag}
                                            alt={`${isStateClientLayout.language.selectedLanguage?.country} flag`}
                                            width={1280}
                                            height={1280}
                                            className="size-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <div className={`text-sm-default uppercase font-medium`}>
                                            {isStateClientLayout.language.selectedLanguage?.country}
                                        </div>

                                        <IoIosArrowDown className={`3xl:size-5 size-4`} />
                                    </div>
                                    {/* </motion.div> */}
                                </React.Fragment>
                            )
                        }
                    </SelectTrigger>
                {/* </motion.div> */}
                <SelectContent>
                    {
                        dataLanguageOptions.map((option: any) => (
                            <SelectItem
                                key={option?.code}
                                value={option?.code}
                            >
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className='size-4 rounded-full aspect-square'>
                                        <Image
                                            src={option?.flag}
                                            alt={`${option?.country} flag`}
                                            width={1280}
                                            height={1280}
                                            className="size-full object-cover rounded-full text-white"
                                        />
                                    </div>
                                    <p>{option?.country}</p>
                                    {/* <p>{option?.country} ({option?.extra})</p> */}
                                </div>
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div >
    )
}

export default LanguageSelector