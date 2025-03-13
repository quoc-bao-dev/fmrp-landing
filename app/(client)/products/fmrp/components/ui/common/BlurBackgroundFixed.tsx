import React from "react";

const BlurBackground: React.FC = () => {
    return (
        <div className="absolute w-full h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden !bg-white z-0">
            {/* Nhóm chứa cả hai gradient */}
            <div className="flex justify-center items-center overflow-hidden">
                {/* Gradient background bên trái */}
                <div
                    className="absolute w-[500px] h-[500px] aspect-square rounded-[40px] backdrop-filter blur-[267px] -translate-x-1/2"
                    style={{
                        background: "linear-gradient(180deg, rgba(157, 255, 179, 0.3) 100%, rgba(26, 163, 122, 0.3) 0% , rgba(157, 255, 179, 0.3) 100%)",
                    }}
                />

                {/* Gradient background bên phải */}
                <div
                    className="absolute w-[500px] h-[500px] aspect-square rounded-[40px] backdrop-filter blur-[267px] translate-x-1/2"
                    style={{
                        background: "linear-gradient(107.38deg, rgba(3, 117, 243, 0.4) 7.02%, rgba(1, 61, 160, 0.4) 100%)",
                    }}
                />
            </div>
        </div>
    );
};

export default BlurBackground;
