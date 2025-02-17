import React from 'react'
import Image from 'next/image'
import SocialSection from '../elements/SocialSection'

type Props = {}

const FooterBottom = (props: Props) => {
    return (
        <div className="grid xl:grid-cols-12 lg:grid-cols-14 grid-cols-1 lg:gap-0 gap-4 justify-between">
            <div className='xl:col-span-3 lg:col-span-4 col-span-1 flex items-center lg:justify-start'>
                <SocialSection />
            </div>

            <div className='xl:col-span-6 lg:col-span-6 col-span-1 flex items-center lg:justify-center'>
                <div className="text-sm-default space-y-2 text-[#B3C5D4]">
                    Copyright © 2025 FOSO Co. LTD. All Rights Reserved.
                </div>
            </div>

            <div className='xl:col-span-3 lg:col-span-4 col-span-1 flex items-center lg:justify-end'>
                <div className='xxl:w-[200px] lg:w-[160px] md:w-[220x] w-[160px] aspect-8/3'>
                    <Image
                        src="/logo/logo-bct.svg"
                        alt="logo"
                        width={300}
                        height={200}
                        className='size-full object-contain cursor-pointer hover:scale-[1.03] custom-transition'
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterBottom