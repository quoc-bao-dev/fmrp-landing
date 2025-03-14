"use client"

import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, useSpring } from "framer-motion"
import { ZoomIn, ZoomOut, X, RotateCcw, Download } from "lucide-react"
import Image from "next/image"

interface ImagePreviewPortalProps {
    open: boolean
    onClose: () => void
    imageSrc: string
    imageAlt?: string
}

export function ImagePreviewPortal({ open, onClose, imageSrc, imageAlt = "Preview image" }: ImagePreviewPortalProps) {
    const [mounted, setMounted] = useState(false)
    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)

    const constraintsRef = useRef(null)

    // Motion values for smooth animations
    const springConfig = { stiffness: 300, damping: 30 }
    const scaleMotion = useSpring(scale, springConfig)
    const xMotion = useSpring(position.x, springConfig)
    const yMotion = useSpring(position.y, springConfig)

    // Handle portal mounting
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    console.log('scaleMotion', scaleMotion);

    // Lock body scroll when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])

    // Reset position and scale when closing
    useEffect(() => {
        if (!open) {
            setTimeout(() => {
                setScale(1)
                setPosition({ x: 0, y: 0 })
            }, 300)
        }
    }, [open])

    useEffect(() => {
        scaleMotion.set(scale);
    }, [scale]);

    const handleZoomIn = () => {
        setScale((prev) => {
            const newScale = Math.min(prev + 0.25, 3);
            scaleMotion.set(newScale);
            return newScale;
        });
    };

    const handleZoomOut = () => {
        setScale((prev) => {
            const newScale = Math.max(prev - 0.25, 0.5);
            scaleMotion.set(newScale);
            return newScale;
        });
    };

    const handleReset = () => {
        setScale(1);
        scaleMotion.set(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleDownload = () => {
        const link = document.createElement("a")
        link.href = imageSrc
        link.download = imageAlt.replace(/\s+/g, "-").toLowerCase() || "image"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    // Handle escape key
    useEffect(() => {
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                onClose()
            }
        }

        window.addEventListener("keydown", handleEscKey)
        return () => window.removeEventListener("keydown", handleEscKey)
    }, [open, onClose])

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ backdropFilter: "blur(8px)" }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Main content container */}
                    <motion.div
                        ref={constraintsRef}
                        className="relative w-full h-full flex items-center justify-center overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image container with zoom and drag */}
                        <motion.div
                            drag={scale > 1}
                            dragConstraints={constraintsRef}
                            dragElastic={0.05}
                            dragMomentum={false}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            // style={{
                            //     scale: scaleMotion,
                            //     x: xMotion,
                            //     y: yMotion,
                            //     cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                            // }}
                            style={{
                                transform: `scale(${scaleMotion.get()}) translate(${xMotion.get()}px, ${yMotion.get()}px)`,
                                cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                            }}
                            className="relative size-[90%]"
                            whileTap={{ cursor: "grabbing" }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        >
                            <Image
                                src={imageSrc || "/placeholder.svg"}
                                alt={imageAlt}
                                width={1920}
                                height={1080}
                                className="object-contain max-w-full max-h-full"
                                priority
                                onDoubleClick={() => {
                                    if (scale === 1) {
                                        setScale(2)
                                    } else {
                                        setScale(1)
                                        setPosition({ x: 0, y: 0 })
                                    }
                                }}
                            />
                        </motion.div>

                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: 0.2 }}
                            className="absolute top-4 right-4 z-50 size-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                            onClick={onClose}
                        >
                            <X className="size-5" />
                        </motion.button>

                        {/* Controls */}
                        {/* <div className='absolute bottom-6 w-full flex justify-center items-center'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: 0.2 }}
                                className="left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full p-2"
                            >
                                <button
                                    onClick={handleZoomOut}
                                    className="size-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                    disabled={scale <= 0.5}
                                >
                                    <ZoomOut className="size-5" />
                                </button>

                                <div className="text-white px-2 min-w-16 text-center">{Math.round(scale * 100)}%</div>

                                <button
                                    onClick={handleZoomIn}
                                    className="size-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                    disabled={scale >= 3}
                                >
                                    <ZoomIn className="size-5" />
                                </button>

                                <button
                                    onClick={handleReset}
                                    className="size-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                >
                                    <RotateCcw className="size-5" />
                                </button>

                                <button
                                    onClick={handleDownload}
                                    className="size-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                >
                                    <Download className="size-5" />
                                </button>
                            </motion.div>
                        </div> */}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    )
}

