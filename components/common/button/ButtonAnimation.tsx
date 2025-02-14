import React, { forwardRef } from 'react'

import { motion } from 'framer-motion'
import { variantButtonPressZoom } from '@/utils/animations/variantsAnimation'

type Props = {
    title_button?: string | React.ReactNode
    className?: string
    classNameWithIcon?: string
    variant?: any
    onClick?: (e?: any) => void
    style?: React.CSSProperties | undefined
    icon?: React.ReactNode
    reverse?: boolean
    type?: 'submit' | 'button'
    title_hidden?: boolean
    disabled?: boolean
    isStateloading?: boolean,
    classLoading?: string,
    ref?: any
}

const ButtonAnimation = forwardRef<HTMLButtonElement, Props>(({
    title_button = "",
    className,
    classNameWithIcon,
    variant = variantButtonPressZoom,
    onClick = () => { },
    style,
    icon,
    reverse = false,
    type = 'submit',
    title_hidden = false,

    disabled = false,
    isStateloading = false,
    classLoading = 'border-current'
}, ref) => {

    return (
        <motion.button
            initial={false}
            animate="rest"
            whileTap="press"
            whileHover="hover"
            variants={disabled ? {} : variant}
            className={`${className} ${icon && `${classNameWithIcon}`} transform-gpu text-nowrap whitespace-nowrap disabled:hover:opacity-100 disabled:bg-[#333538]/20 disabled:text-white disabled:border-transparent disabled:cursor-not-allowed disabled:pointer-events-auto`}
            type={type}
            onClick={onClick}
            style={style}
            disabled={disabled}
            ref={ref}
        >
            {
                isStateloading &&
                <span className={`${classLoading} inline-block min-h-4 min-w-4 h-4 w-4 animate-spin rounded-full border-[3px] border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`} />
            }

            {
                !reverse && icon && <span className={`${title_hidden ? "max-w-full" : "max-w-[20%]"} `}>{icon}</span>
            }

            {
                !title_hidden &&
                <span className='flex items-center max-w-[80%] text-center'>
                    {title_button}
                </span>
            }

            {
                reverse && icon && <span className={`${title_hidden ? "max-w-full" : "max-w-[20%]"}`}>{icon}</span>
            }
        </motion.button>
    )
})

export default ButtonAnimation