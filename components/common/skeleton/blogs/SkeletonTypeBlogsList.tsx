import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

const SkeletonTypeBlogsList = (props: Props) => {
    return (
        <div className={`flex justify-between pb-2 border-b border-[#F1F5F7]`}>
            <Skeleton className="h-6 w-24 rounded-md" />
            <Skeleton className="h-6 w-10 rounded-md" />
        </div>
    )
}

export default SkeletonTypeBlogsList