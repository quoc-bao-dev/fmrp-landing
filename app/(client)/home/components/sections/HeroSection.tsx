import React, { useEffect, useRef } from 'react';

type Props = {}

const HeroSection = (props: Props) => {

    return (
        <div className='3xl:py-24 py-20 h-screen relative'>
            <div
                className='absolute top-0 left-0 size-full blur-[772.7864379882812px]'
                style={{
                    background: "linear-gradient(95.16deg, #E0FFCC 12.93%, #CCFFEC 65.56%)",
                }}
            />

            <div className='mx-[128px] flex flex-wrap items-center justify-between gap-2 h-full relative z-[2]'>
                <div className='max-w-[55%]'>
                    <span className='text-[#050505] text-title-section font-extrabold'>Đồng Hành Cùng</span>
                    <span
                        className='text-[56px] font-extrabold text-white px-6 py-2 rounded-full uppercase ml-4'
                        style={{
                            background: "linear-gradient(180deg, #9DFFB3 0%, #1AA37A 100%)"
                        }}
                    >
                        Foso
                    </span>
                    <br />
                    <span className='text-[#050505] text-title-section font-extrabold'>trong kỷ nguyên số mới</span>
                </div>

                {/* Phần mô hình 3D bên phải */}
                <div className="max-w-[45%] relative">
                    <iframe
                        title="Sketchfab Model"
                        src="https://sketchfab.com/models/9a793a9293fb4ec89936aebfda8fc434/embed?autostart=1&camera=0&transparent=1&ui_infos=0&ui_controls=0&ui_watermark=0&ui_stop=0&ui_fullscreen=0&ui_hint=0"
                        width="100%"
                        height="600px"
                        className="rounded-lg w-full aspect-[1.89/1]"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection

