import React from 'react'
import Image from 'next/image'
import SocialSection from '../elements/SocialSection'

type Props = {}

const FooterBottom = (props: Props) => {
    return (
        <div className="grid grid-cols-3 justify-between">
            <div className='col-span-1 flex items-center justify-start'>
                <SocialSection />
            </div>

            <div className='col-span-1 flex items-center justify-center'>
                <div className="text-sm-default space-y-2 text-[#B3C5D4]">
                    Copyright © 2025 FOSO Co. LTD. All Rights Reserved.
                </div>
            </div>

            <div className='col-span-1 flex items-center justify-end'>
                <div className='w-[200px] aspect-8/3'>
                    <Image
                        src="/logo/logo-bct.svg"
                        alt="logo"
                        width={400}
                        height={200}
                        className='size-full object-contain cursor-pointer hover:scale-[1.03] custom-transition'
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterBottom