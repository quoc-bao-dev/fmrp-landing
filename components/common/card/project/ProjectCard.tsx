import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import { motion } from 'framer-motion'
import React, { useState, useCallback } from 'react';

import { HiArrowUpRight } from "react-icons/hi2";

type ProjectCardProps = {
    project: {
        id: string;
        image: string;
        content: string;
        logo: string;
    };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [rotation, setRotation] = useState<number>(0);
    const [imageLoaded, setImageLoaded] = useState(false); // State kiểm tra ảnh đã load chưa

    const handleHover = useCallback((hovering: boolean) => {
        setIsHovered(hovering);
        if (hovering) setRotation((prev) => prev + 360); // Xoay icon 360° mỗi lần hover
    }, []);

    console.log('imageLoaded: ', imageLoaded);


    return (
        <Link
            href="#"
            className='col-span-1 flex items-end relative aspect-0.87/1 w-full rounded-3xl group'
            style={{
                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
            }}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
        >

            <div className='absolute w-full aspect-0.87/1 rounded-3xl z-0 overflow-hidden'>
                {/* Skeleton Loading */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                )}

                <Image
                    width={500}
                    height={800}
                    alt="project image"
                    src={project?.image ?? "/default/default.png"}
                    className={`size-full object-cover object-top rounded-3xl transition-all duration-500 ${imageLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"
                        }`}
                    placeholder="blur"
                    blurDataURL="/default/default-blur.png"
                    loading='eager'
                    priority
                    onLoadingComplete={() => setImageLoaded(true)}
                />

                {/* Hover Overlay */}
                <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 blur-md"
                    style={{
                        background: "linear-gradient(to bottom, rgba(216, 230, 255, 0.9) 0%, rgba(216, 230, 255, 0.1) 50%, #507687 100%)",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 33%, rgba(0, 0, 0, 0) 100%)"
                    }}
                />
            </div>

            {/* Project Details (Trigger hover effect) */}
            <div
                className='w-full p-3 rounded-b-3xl relative z-[2]'
                style={{
                    boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A",
                    background: "linear-gradient(360deg, rgba(0, 0, 0, 0.2) 12.85%, rgba(0, 0, 0, 0) 100%)"
                }}
            >
                <div className='flex items-center justify-between gap-6 bg-white rounded-3xl px-6 py-3'>
                    <div className='flex flex-col gap-4 max-w-full'>
                        <div className='flex items-start'>
                            <div className='h-6 w-auto'>
                                <Image
                                    alt='logo'
                                    src={`${project?.logo ?? "/default/default.png"}`}
                                    width={100}
                                    height={50}
                                    className='size-full object-contain'
                                />
                            </div>
                        </div>

                        <div className='text-sm-default text-[#667F93] group-hover:text-[#667F93]/80 line-clamp-3'>
                            {project?.content}
                        </div>
                    </div>

                    {/* Rotating Arrow Icon */}
                    <motion.div
                        animate={{ rotate: rotation }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex items-center max-w-12"
                    >
                        <div className="bg-[#000000] p-3.5 rounded-full">
                            <HiArrowUpRight className='size-5 text-white' />
                        </div>
                    </motion.div>
                </div>
            </div>


        </Link >
    )
}

export default ProjectCard