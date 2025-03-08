import { FC, useCallback, useRef, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface CustomMapProps {
    lat: number;
    lng: number;
}

const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
};

// ⭐ Dữ liệu style lấy từ Figma
const mapStyles = [
    { stylers: [{ hue: "#baf4c4" }, { saturation: 10 }] },
    { featureType: "water", stylers: [{ color: "#effefd" }] },
    { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
    { featureType: "administrative", elementType: "labels", stylers: [{ visibility: "on" }] },
    { featureType: "road", elementType: "all", stylers: [{ visibility: "off" }] },
    { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }
];

const CustomMap: FC<CustomMapProps> = ({ lat, lng }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // 🔑 API Key từ Google
    });

    const mapRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    const toggleFullscreen = () => {
        if (!mapRef.current) return;

        if (!isFullscreen) {
            if (mapRef.current.requestFullscreen) {
                mapRef.current.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };


    const onLoad = useCallback((map: google.maps.Map) => {
        map.setOptions({ styles: mapStyles }); // Áp dụng styles custom từ Figma
    }, []);

    console.log('isLoaded', isLoaded);
    console.log('process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY', process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);


    if (!isLoaded) return <p>Đang tải bản đồ...</p>;

    return (
        <div ref={mapRef} className="relative w-full h-auto lg:aspect-2/1 aspect-1/1.92 rounded-3xl overflow-hidden shadow-lg">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat, lng }}
                zoom={14}
                onLoad={onLoad}
                options={{
                    disableDefaultUI: true, // Tắt UI mặc định
                    zoomControl: true, // Bật nút zoom
                }}
            >
                {/* Marker với custom logo */}
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        </div>
    );
};

export default CustomMap;
