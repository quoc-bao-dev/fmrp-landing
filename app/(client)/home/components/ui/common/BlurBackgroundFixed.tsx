import React from "react";

const BlurBackgroundFixed: React.FC = () => {
    return (
        <div className="absolute w-full h-screen top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-0 pointer-events-none">
            {/* Nhóm chứa cả hai gradient */}
            <div className="flex justify-center items-center overflow-hidden">
                {/* Gradient background bên trái */}
                <div className='absolute 2xl:size-[500px] size-[320px] aspect-square rounded-[40px] blur-[145px] -translate-x-1/2 pointer-events-none'>
                    <img
                        alt="green-blur"
                        src="/background/blur/bg-green.svg"
                        className="size-full object-contain"
                    />
                </div>

                {/* Gradient background bên phải */}
                {/* <div className='absolute 3xl:size-[500px] size-[420px] aspect-square rounded-[40px] blur-[145px] translate-x-1/2 pointer-events-none'>
                    <img
                        alt="blue-blur"
                        src="/background/blur/bg-blue.svg"
                        className="size-full object-contain"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default BlurBackgroundFixed;
