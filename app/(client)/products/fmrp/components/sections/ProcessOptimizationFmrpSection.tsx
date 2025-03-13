import React from 'react'
import StepsProcess from '../ui/process-optimization-fmrp/StepsProcess'

type Props = {}

const ProcessOptimizationFmrpSection = (props: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className='3xl:px-60 xxl:px-40 xl:px-32 lg:px-10 md:px-8 px-4 4xl:px-[25%]'>
                <StepsProcess />
            </div>
        </div>
    )
}

export default ProcessOptimizationFmrpSection