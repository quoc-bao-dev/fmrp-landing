"use client"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import YouTube from "react-youtube"
import { X } from "lucide-react"

interface VideoPopupProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    videoId: string
    title?: string
}

export function VideoPopup({ open, onOpenChange, videoId, title }: VideoPopupProps) {
    // YouTube player options
    const opts = {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
        },
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="bottom" className="h-[92vh] sm:max-w-full p-0 bg-transparent border-none">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="bg-black/95 backdrop-blur-md rounded-t-3xl h-full flex flex-col overflow-hidden"
                >
                    <SheetHeader className="p-4 relative">
                        {title && <SheetTitle className="text-white text-xl font-bold">{title}</SheetTitle>}
                        <SheetClose className="absolute right-4 top-4 rounded-full bg-white/10 p-2 opacity-70 hover:opacity-100 transition-opacity">
                            <X className="h-5 w-5 text-white" />
                            <span className="sr-only">Đóng</span>
                        </SheetClose>
                    </SheetHeader>

                    <div className="flex-1 p-4 pt-0">
                        <div className="w-full h-full rounded-xl overflow-hidden relative">
                            <YouTube
                                videoId={videoId}
                                opts={opts}
                                className="absolute inset-0 w-full h-full"
                                onEnd={() => onOpenChange(false)}
                            />
                        </div>
                    </div>
                </motion.div>
            </SheetContent>
        </Sheet>
    )
}

