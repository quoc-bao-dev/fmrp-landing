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
    style?: any
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
    style
}) => {
    const [status, setStatus] = useState<"loading" | "error" | "loaded">("loading");

    // Callback giúp tránh re-render không cần thiết
    const handleLoad = useCallback(() => setStatus("loaded"), []);
    const handleError = useCallback(() => setStatus("error"), []);

    return (
        <div
            className={`relative overflow-hidden ${classNameContainer}`}
        // style={{ aspectRatio: `${width} / ${height}` }} // Giữ tỷ lệ ảnh
        >
            {/* Skeleton nếu ảnh chưa tải */}
            {status === "loading" && <div className="absolute inset-0 bg-gray-300 animate-pulse size-full" />}

            <Image
                src={status === "error" ? "/default/default.png" : src}
                alt={alt}
                width={width}
                height={height}
                className={`${className} transition-opacity duration-700 opacity-0 blur-md size-full`} // Giữ class tĩnh
                placeholder="blur"
                blurDataURL={blurDataURL}
                priority={priority}
                {...(!priority ? { loading: loading || "lazy" } : {})}
                decoding="async"
                onLoadingComplete={handleLoad}
                onError={handleError}
                style={{
                    opacity: status === "loaded" ? 1 : 0, // Tránh cập nhật class gây re-render
                    filter: status === "loaded" ? "blur(0px)" : "blur(10px)",
                    ...style,
                }}
            />
        </div>
    );
};

// Ngăn re-render khi không có props thay đổi
export default memo(BlurImage);
