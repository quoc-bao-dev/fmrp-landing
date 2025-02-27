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
                <SelectTrigger
                    className={`${classNameTrigger} lg:px-3 lg:py-2 px-3 py-2 flex items-center gap-1 3xl:min-w-[100px] lg:min-w-[90px] min-w-fit lg:w-full w-fit h-full rounded-[40px] focus:outline-none focus:ring-0 focus:ring-offset-0`}
                    style={{
                        ...styleTrigger,
                    }}
                >
                    {
                        isStateClientLayout.language.selectedLanguage && (
                            <React.Fragment>
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
                            </React.Fragment>
                        )
                    }
                </SelectTrigger>
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
                                    <p>{option?.country} ({option?.extra})</p>
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