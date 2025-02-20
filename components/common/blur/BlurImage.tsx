import { useState } from "react";
import Image from "next/image";

type BlurImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    blurDataURL?: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
};

const BlurImage: React.FC<BlurImageProps> = ({
    src,
    alt,
    width,
    height,
    className = "",
    blurDataURL = "/default/default-blur.png",
    priority = false,
    loading,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Skeleton Loading giữ đúng kích thước ảnh */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse" />
            )}

            <Image
                layout="intrinsic"
                width={width}
                height={height}
                src={src}
                alt={alt}
                className={`${imageLoaded ? "blur-0 opacity-100" : "blur-md opacity-0"} ${className} transition-all duration-500`}
                placeholder="blur"
                blurDataURL={blurDataURL}
                priority={priority}
                {...(!priority ? { loading: loading || "lazy" } : {})} // ⬅ Điều kiện này sẽ loại bỏ `loading` nếu `priority` là `true`
                onLoadingComplete={() => setImageLoaded(true)}
            />
        </div>
    );
};

export default BlurImage;
