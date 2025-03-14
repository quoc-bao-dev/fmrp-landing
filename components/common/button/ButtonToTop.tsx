'use client'

import React, { useState, useEffect, useCallback } from 'react'

import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '@/utils/scroll/scrollUtils';

const ButtonToTop = () => {
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

    const handleClick = () => {
        scrollToTop();
    };

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
                        onClick={handleClick}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className='relative z-[1] 3xl:size-12 size-10 rounded-full text-white flex flex-col justify-center items-center bg-[#53B086]'
                    >
                        <HiOutlineArrowNarrowUp className='text-2xl' />
                    </motion.button>

                    {/* <div className='3xl:size-10 size-8 rounded-full absolute animate-ping bg-[#53B086]/50 z-0' /> */}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ButtonToTop;