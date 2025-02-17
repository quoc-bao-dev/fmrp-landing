"use client";

import React from "react";

type BlurredBackgroundProps = {
    background?: string;
    className?: string;
};

const BlurredBackground: React.FC<BlurredBackgroundProps> = ({
    background = "linear-gradient(90deg, #E0FFCC 0%, #CCFFEC 100%)",
    className = "",
}) => {
    return (
        <div
            className={`w-[500px] aspect-square absolute -z-0 blur-[100px] backdrop-blur-[267.447px] ${className}`}
            style={{ background }}
        />
    );
};

export default BlurredBackground;
