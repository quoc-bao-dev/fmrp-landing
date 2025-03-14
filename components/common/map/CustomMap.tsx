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
            {/* <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat, lng }}
                zoom={14}
                onLoad={onLoad}
                options={{
                    disableDefaultUI: true, // Tắt UI mặc định
                    zoomControl: true, // Bật nút zoom
                }}
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap> */}
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.107888396599!2d106.71273007586889!3d10.80304825870042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3dcda0d68d%3A0x77064cbbfc3cc22d!2zQ8O0bmcgVHkgVE5ISCBDw7RuZyBOZ2jhu4cgRk9TTw!5e0!3m2!1svi!2s!4v1741932223134!5m2!1svi!2s`}
                // src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAuEM0-SakklPnXvLx-3aN1QbwEAOXSI4U&q=${data?.contact?.data_place ?? ""}`}
                className='custom-container-map border-none'
                width="100%"
                height="100%"
                loading="lazy"
            />
        </div>
    );
};

export default CustomMap;
