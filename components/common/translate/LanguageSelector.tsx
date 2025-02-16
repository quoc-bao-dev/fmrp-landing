'use client'

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { KEY_COOKIES } from '@/constants/Cookie'
import { dataLanguageOptions } from '@/data/DataTranslate'
import { dataCountrySelected } from '@/enums/lang'
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

const LanguageSelector = () => {
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
        const selectedCountry = dataLanguageOptions.find(option => option.code === value);
        console.log('value', value);
        console.log('selectedCountry', selectedCountry);
        if (!selectedCountry) return;



        queryKeyIsStateClientLayout({
            header: {
                ...isStateClientLayout?.header,
                selectedLanguage: selectedCountry
            }
        });

        // setCookie(KEY_COOKIES.WEBSITE_LANG, value)

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
                value={isStateClientLayout.header.selectedLanguage?.code}
                defaultValue={isStateClientLayout.header.selectedLanguage?.code}
            >
                <SelectTrigger
                    className="flex items-center  gap-2 min-w-[110px] h-full border rounded-[40px] focus:outline-none focus:ring-0 focus:ring-offset-0 text-[#25272A]"
                    style={{
                        background: "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)",
                        borderImageSource: "linear-gradient(360deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.1) 100%)"
                    }}
                >
                    {
                        isStateClientLayout.header.selectedLanguage && (
                            <React.Fragment>
                                <div className='size-6 rounded-full aspect-square'>
                                    <Image
                                        src={isStateClientLayout.header.selectedLanguage?.flag}
                                        alt={`${isStateClientLayout.header.selectedLanguage?.country} flag`}
                                        width={1280}
                                        height={1280}
                                        className="size-full object-cover rounded-full"
                                    />
                                </div>
                                <div className={`3xl:text-base xl:text-sm lg:text-xs text-sm uppercase font-medium text-[#1E1E1E]`}>
                                    {isStateClientLayout.header.selectedLanguage?.country}
                                </div>

                                <IoIosArrowDown className={`size-5 text-[#1E1E1E]`} />
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
        </div>
    )
}

export default LanguageSelector