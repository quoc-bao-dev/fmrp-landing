import Image from 'next/image';
import React from 'react'

type ProjectCardProps = {
    project: {
        id: string;
        image: string;
        content: string;
        logo: string;
    };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            className='col-span-1 flex items-end relative aspect-0.87/1 w-full rounded-3xl'
            style={{
                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
            }}
        >

            <div className='absolute w-full aspect-0.87/1 rounded-3xl z-0'>
                <Image
                    width={500}
                    height={600}
                    alt="image"
                    src={project?.image ?? "/default/default.png"}
                    className='size-full object-cover object-top rounded-3xl'
                />
            </div>

            <div className='w-full mx-4 mb-4 rounded-3xl relative z-[2] bg-white'
            // style={{
            //     boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A",
            //     background: "linear-gradient(360deg, rgba(0, 0, 0, 0.5) 12.85%, rgba(0, 0, 0, 0) 100%)"
            // }}
            >
                <div className='relative z-[3] bg-white'>
                    hellosadasd
                </div>
                <div
                    className='absolute size-full rounded-3xl  z-[1]'
                />
            </div>
        </div>
    )
}

export default ProjectCard