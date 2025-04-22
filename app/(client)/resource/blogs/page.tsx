'use client'

import React from 'react'
import IntroBlogSection from './components/sections/IntroBlogSection'
import MainBlogSection from './components/sections/MainBlogSection'
import CTABlogSection from './components/sections/CTABlogSection'

type Props = {}

const Blogs = (props: Props) => {

    return (
        <main className='min-h-screen'>
            <IntroBlogSection />
            <MainBlogSection />
            <CTABlogSection />
        </main >
    )
}

export default Blogs