import { useState, useCallback, memo } from "react";
import Image from "next/image";

type BlurImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    classNameContainer?: string;
    className?: string;
    blurDataURL?: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
    style?: any;
    onClick?: () => void
};

const BlurImage: React.FC<BlurImageProps> = ({
    src,
    alt,
    width,
    height,
    classNameContainer = "",
    className = "",
    blurDataURL = "data:image/jpeg;base64,/9j/4AAQSk...",
    priority = false,
    loading,
    style,
}) => {
    const [loaded, setLoaded] = useState(false);

    // Callback giúp tránh re-render không cần thiết
    const handleLoad = useCallback(() => setLoaded(true), []);
    const handleError = useCallback(() => setLoaded(true), []); // Nếu lỗi cũng tránh re-render

    return (
        <div className={`relative overflow-hidden ${classNameContainer}`}>
            {/* Skeleton nếu ảnh chưa tải */}
            {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse size-full" />}

            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`${className} transition-opacity duration-700 size-full`}
                placeholder="blur"
                blurDataURL={blurDataURL}
                priority={priority}
                {...(!priority ? { loading: loading || "lazy" } : {})}
                decoding="async"
                onLoadingComplete={handleLoad}
                onError={handleError}
                style={{
                    opacity: loaded ? 1 : 0,
                    filter: loaded ? "blur(0px)" : "blur(10px)",
                    ...style,
                }}
            />
        </div>
    );
};

// Ngăn re-render khi không có props thay đổi
export default memo(BlurImage);
