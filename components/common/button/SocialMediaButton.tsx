'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react'

type SocialMediaProps = {
    children: React.ReactNode
    handleClick?: () => void,
    background_animation: string
}

const SocialMediaButton = ({
    children,
    handleClick,
    background_animation
}: SocialMediaProps) => {
    const [isShow, sIsShow] = useState(false)

    const handleNavigation = useCallback(() => {
        var heightScreen = window.innerHeight;
        if (heightScreen > window.scrollY) {
            sIsShow(false)
        } else if (heightScreen < window.scrollY) {
            sIsShow(true)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <AnimatePresence>
            {isShow && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="relative flex flex-col justify-center items-center"
                >
                    <motion.button
                        type="button"
                        onClick={() => {
                            if (handleClick) {
                                handleClick()
                            }
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className='relative z-[1] 3xl:size-12 size-10 rounded-full text-white flex flex-col justify-center items-center'
                    >
                        {children}
                    </motion.button>

                    <div
                        className='3xl:size-10 size-8 rounded-full absolute animate-ping'
                        style={{
                            background: background_animation
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SocialMediaButton;