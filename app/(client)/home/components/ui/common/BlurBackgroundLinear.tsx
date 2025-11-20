import React from "react";
import Image from 'next/image';

const BlurBackgroundLinear: React.FC = () => {
    return (
        <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden !bg-white z-0 pointer-events-none">
            {/* Gradient background bên trái */}
            <div className='absolute w-[500px] h-[500px] aspect-square rounded-[40px] blur-[155px] -translate-x-1/2 pointer-events-none'>
                <Image
                    width={500}
                    height={500}
                    alt="green-blur"
                    src="/background/blur/bg-green.svg"
                    className="size-full object-contain"
                />
            </div>
        </div>
    );
};

export default BlurBackgroundLinear;
