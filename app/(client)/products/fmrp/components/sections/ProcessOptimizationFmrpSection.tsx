import React from 'react'
import StepsProcess from '../ui/process-optimization-fmrp/StepsProcess'

type Props = {}

const ProcessOptimizationFmrpSection = (props: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className='custom-container'>
                <StepsProcess />
            </div>
        </div>
    )
}

export default ProcessOptimizationFmrpSection