import React from 'react'

import Image from 'next/image'
import ButtonToTop from './ButtonToTop'
import SocialMediaButton from './SocialMediaButton'

// eslint-disable-next-line react/display-name
const WidgetButton = React.memo(() => {
    return (
        <div className='flex flex-col gap-6 fixed bottom-8 lg:right-8 right-5 z-[999]'>
            <SocialMediaButton
                children={
                    <div className="bg-white hover:bg-[#F2F2F2]/5 p-3 rounded-full custom-transition">
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='size-6 object-contain'
                            src="/icons/social-media/zalo-color.svg"
                        />
                    </div>
                }
                className=""
                // handleClick={() => handleClickFacebook()}
                background_animation="linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)"
            />
            <SocialMediaButton
                children={
                    <div className="bg-white hover:bg-[#F2F2F2]/5 p-3 rounded-full custom-transition">
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='size-6 object-contain'
                            src="/icons/social-media/messenger.svg"
                        />
                    </div>
                }
                className=""
                // handleClick={() => handleClickFacebook()}
                background_animation="linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)"
            />
            <SocialMediaButton
                children={
                    <div className="bg-white hover:bg-[#F2F2F2]/5 p-3 rounded-full custom-transition">
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='size-6 object-contain'
                            src="/icons/social-media/call.svg"
                        />
                    </div>
                }
                className=""
                // handleClick={() => handleClickFacebook()}
                background_animation="linear-gradient(90deg, #E0FFCC 0%, #CCFFEC 100%)"
            />
            <SocialMediaButton
                children={
                    <div className="bg-white hover:bg-[#F2F2F2]/5 p-3 rounded-full custom-transition">
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='size-6 object-contain'
                            src="/icons/social-media/gmail.svg"
                        />
                    </div>
                }
                className="bg-[#53B086]/50"
                // handleClick={() => handleClickFacebook()}
                background_animation="linear-gradient(90deg, #E0FFCC 0%, #CCFFEC 100%)"
            />

            <ButtonToTop />
        </div>
    )
})

export default WidgetButton