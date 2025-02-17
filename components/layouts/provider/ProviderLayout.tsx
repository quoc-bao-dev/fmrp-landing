'use client'

import React, { useEffect } from 'react'


import { TranslateProvider } from '@/contexts/TranslateContext'

import useCookieStore from '@/stores/useCookieStore'
import { useAuthStore } from '@/stores/useAuthStores'

import { KEY_COOKIES } from '@/constants/Cookie'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'
import { dataLanguageOptions } from '../../../data/DataTranslate';

const ProviderLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { setCookie, getCookie } = useCookieStore()

    const language = getCookie(KEY_COOKIES.WEBSITE_LANG)

    const { informationUser } = useAuthStore()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    // const { isLoading } = useGetInfoByToken() // auto call

    useEffect(() => {
        const setLange = () => {
            const oj = dataLanguageOptions.find((item) => item.code === (data?.language || language || KEY_COOKIES.DEFAULT_LANGUAGE))

            queryKeyIsStateClientLayout({
                language: {
                    ...isStateClientLayout?.language,
                    selectedLanguage: oj ?? dataLanguageOptions[0]
                }
            });
        }

        setLange()
        if (data?.language || informationUser?.default_language) {
            setCookie(KEY_COOKIES.WEBSITE_LANG, (data?.language || informationUser?.default_language))
            setLange()
            return
        }

        if (!language) {
            setCookie(KEY_COOKIES.WEBSITE_LANG, KEY_COOKIES.DEFAULT_LANGUAGE)
            setLange()
            return
        }
    }, [informationUser, data])

    console.log('isStateClientLayout: ', isStateClientLayout);


    return (
        <TranslateProvider dataLang={data?.dataLang} language={data?.language} loading={false}>
            {children}
        </TranslateProvider>
    )
}

export default ProviderLayout