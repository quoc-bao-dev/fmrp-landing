"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { useSheetStores } from '../../../stores/useSheetStores';
import FormContact from '../form/FormContact';

interface DynamicSheetProps {

}

export function DynamicSheet({ }: DynamicSheetProps) {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const { openSheetCustom, statusSheet, setOpenSheetCustom, setStatusSheet } = useSheetStores()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleCloseDialog = (value: boolean, type?: string) => {
        setOpenSheetCustom(value)
    }


    const isAuthStatusSheet = ['contact']?.includes(statusSheet)

    if (!isMounted) {
        return null;
    }

    return (

        <Sheet
            open={openSheetCustom}
            onOpenChange={(value: boolean) => {
                handleCloseDialog(value)
            }}
        >
            <SheetContent overlayClassName={"backdrop-blur-[16px] bg-[#FFFFFF]/5"} className="p-10 sm:max-w-md md:max-w-lg bg-white lg:max-w-screen-lg overflow-y-auto custom-size-text">
                {
                    isAuthStatusSheet && (
                        statusSheet === "contact" &&
                        <AnimatePresence>
                            <motion.div
                                key="sheet-container"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className='h-full flex flex-col justify-between gap-10'
                            >
                                <div className="text-[#1A2025] text-title-section-small font-extrabold">
                                    Cơ hội để kết nối với chuyên gia và bứt phá doanh thu – Hãy để lại thông tin ngay!
                                </div>
                                
                                <FormContact className="lg:!p-0 !shadow-none" />
                            </motion.div>
                        </AnimatePresence>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}

