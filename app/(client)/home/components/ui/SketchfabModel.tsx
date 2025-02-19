import React, { useEffect, useRef } from "react";

const SketchfabModel = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const loadSketchfab = () => {
            if (!containerRef.current) return;

            const script = document.createElement("script");
            script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.11.0.js";
            script.onload = () => {
                const client = new (window as any).Sketchfab(containerRef.current);
                client.init("9a793a9293fb4ec89936aebfda8fc434", {
                    success: (api: any) => {
                        api.start();
                        api.addEventListener("viewerready", () => {
                            console.log("Sketchfab model is ready!");

                            // Xóa nền và tắt UI
                            api.setBackground({ color: [0, 0, 0, 0] }); // Làm nền trong suốt
                            api.setFov(45); // Điều chỉnh góc nhìn
                            api.setAnnotationVisibility(false); // Tắt annotation
                            api.setNavigationMode("orbit"); // Chế độ xoay camera tự do
                        });
                    },
                    error: () => console.error("Sketchfab Model Failed to Load"),
                });
            };

            document.body.appendChild(script);
        };

        loadSketchfab();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-[600px] bg-transparent"
        />
    );
};

export default SketchfabModel;
