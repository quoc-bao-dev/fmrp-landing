import React from 'react'

import Image from 'next/image'
import ButtonToTop from './ButtonToTop'
import SocialMediaButton from './SocialMediaButton'

// eslint-disable-next-line react/display-name
const WidgetButton = React.memo(() => {
    return (
        <div className='flex flex-col gap-4 fixed bottom-8 lg:right-8 right-5 z-[999]'>
            <SocialMediaButton
                children={
                    <Image
                        width={100}
                        height={100}
                        alt="icon"
                        className='size-full object-contain'
                        src="/icons/social/telegram.png"
                    />
                }
                // handleClick={() => handleClickTelegram()}
                background_animation="linear-gradient(180deg, rgba(42, 171, 238, 0.3) 0%, rgba(34, 158, 217, 0.3) 10000%)"
            />

            <SocialMediaButton
                children={
                    <Image
                        width={100}
                        height={100}
                        alt="icon"
                        className='size-full object-contain'
                        src="/icons/social/messenger.png"
                    />
                }
                // handleClick={() => handleClickFacebook()}
                background_animation="linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)"
            />

            <ButtonToTop />
        </div>
    )
})

export default WidgetButton