import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
}

const BgPaddingMarginSection = ({ className, children }: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className={`${className} custom-container`}>
                {children}
            </div>
        </div>
    )
}

export default BgPaddingMarginSection