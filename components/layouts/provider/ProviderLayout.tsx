'use client'

import React, { useEffect } from 'react'


import { TranslateProvider } from '@/contexts/TranslateContext'

import useCookieStore from '@/stores/useCookieStore'
import { useAuthStore } from '@/stores/useAuthStores'

import { KEY_COOKIES } from '@/constants/Cookie'
import { useStateClientLayout } from '@/managers/state/client/useStateClientLayout'

const ProviderLayout = ({ children, data }: { children: React.ReactNode, data: any }) => {
    const { setCookie, getCookie } = useCookieStore()

    const language = getCookie(KEY_COOKIES.LANGUAGE)

    const { informationUser } = useAuthStore()

    const { isStateClientLayout, queryKeyIsStateClientLayout } = useStateClientLayout()

    // const { isLoading } = useGetInfoByToken() // auto call

    useEffect(() => {
        // const setLange = () => {
        //     const oj = dataLanguageOptions.find((item) => item.code === (data?.language || language || KEY_COOKIES.DEFAULT_LANGUAGE))

        //     queryKeyIsStateLayoutClient({
        //         header: {
        //             ...isStateLayoutClient?.header,
        //             selectedCodeCountry: oj ?? dataLanguageOptions[0]
        //         },
        //     })
        // }

        // if (data?.language || informationUser?.default_language) {
        //     setCookie(KEY_COOKIES.LANGUAGE, (data?.language || informationUser?.default_language))
        //     setLange()
        //     return
        // }

        // if (!language) {
        //     setCookie(KEY_COOKIES.LANGUAGE, KEY_COOKIES.DEFAULT_LANGUAGE)
        //     setLange()
        //     return
        // }
    }, [informationUser, data])

    return (
        <TranslateProvider dataLang={data?.dataLang} language={data?.language} loading={false}>
            {children}
        </TranslateProvider>
    )
}

export default ProviderLayout