import { ToastClose } from "@/components/ui/toast";
import { useToastStore } from "@/stores/useToastStore";
import { CloseCircle, TickCircle, Warning2 } from "iconsax-react";

type Props = {
    type: 'success' | 'error' | 'warning'
    content: string,
    title?: string,
}
const ToastCustom = ({ type, content, title }: Props) => {
    const { showType } = useToastStore()

    const types = {
        success: <TickCircle
            size="20"
            className={`text-[#52C41A]`}
            variant="Bold"
        />
        ,
        error: <CloseCircle
            size="20"
            className={`text-red-500`}
            variant="Bold"
        />,
        warning: <Warning2
            size="20"
            className={`text-orange-500`}
            variant="Bold"
        />,
    } as const

    return (
        <div className={'flex items-start gap-3'}>
            <ToastClose className={'opacity-100 text-[#00000073] dark:text-white'} />
            <div className={'size-5'}>
                {types[type]}
            </div>
            <div className={'flex flex-col gap-2'}>
                {
                    showType ?
                        <div className="flex flex-col gap-0.5">
                            <h1 className={'text-[#1B2124] dark:text-white font-bold 2xl:text-base text-sm leading-5'}>
                                {type.replace(/^./, (char) => char.toUpperCase())}
                            </h1>
                            <h2 className={'text-[#717A95] dark:text-white font-normal 2xl:text-base text-sm'}>
                                {content}
                            </h2>
                        </div>
                        :
                        <div className="flex flex-col gap-0.5">
                            <h1 className={'text-[#1B2124] dark:text-white font-bold 2xl:text-base text-sm leading-5'}>
                                {title}
                            </h1>
                            <h2 className={'text-[#717A95] dark:text-white font-normal 2xl:text-base text-sm'}>
                                {content}
                            </h2>
                        </div>

                }
            </div>
        </div>
    )
}

export default ToastCustom