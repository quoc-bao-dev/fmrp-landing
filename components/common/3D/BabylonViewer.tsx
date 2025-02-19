"use client";

import * as BABYLON from "@babylonjs/core";
import React, { useEffect, useRef, useState } from "react";
import "@babylonjs/loaders"; // Load plugin hỗ trợ GLTF

const BabylonViewer = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true); // ✅ Trạng thái loading

    useEffect(() => {
        if (!canvasRef.current) return;

        // 1️⃣ Khởi tạo BabylonJS Engine
        const engine = new BABYLON.Engine(canvasRef.current, true);
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); // Làm nền trong suốt

        // 2️⃣ Tạo camera
        const camera = new BABYLON.ArcRotateCamera(
            "camera",
            Math.PI / 4,                                  // 🔹 Góc xoay trục X (nghiêng mô hình)
            Math.PI / 2,                                  // 🔹 Góc xoay trục Y (nhìn từ trên xuống)
            3.5, // Khoảng cách camera đến mô hình
            new BABYLON.Vector3(0, 1, 0),                 // 🔹 Đặt camera nhìn vào vị trí trung tâm mô hình
            scene
        );
        camera.attachControl(canvasRef.current, true);
        camera.lowerRadiusLimit = 3.5;
        camera.upperRadiusLimit = 40;
        camera.panningSensibility = 0;                  // 🔹 Tắt kéo ngang dọc để không làm lệch mô hình

        // 3️⃣ Thêm ánh sáng mềm mại
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 1.2;

        // 4️⃣ Load HDR trước
        console.log("🔄 Đang load HDR...");
        let hdrTexture = new BABYLON.HDRCubeTexture("/hdr/test4.hdr", scene, 128);

        // 4️⃣ Thêm phản chiếu môi trường giống kính
        const envTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
            "https://assets.babylonjs.com/environments/environmentSpecular.env",
            scene
        );

        // 👉 Chờ HDR load xong trước khi load mô hình
        Promise.all([
            new Promise((resolve) => envTexture.onLoadObservable.addOnce(() => resolve("✅ CubeTexture Loaded!"))),
            new Promise((resolve) => hdrTexture.onLoadObservable.addOnce(() => resolve("✅ HDR Loaded!")))
        ]).then((messages) => {
            console.log(...messages);
            console.log("✅ HDR đã load xong, bắt đầu load robot...");

            scene.environmentTexture = envTexture;

            // 5️⃣ Load mô hình GLB
            BABYLON.SceneLoader.ImportMesh("", "/models/", "robot.glb", scene, (meshes) => {
                if (meshes.length > 0) {
                    console.log("✅ Robot đã load thành công!");
                    setIsLoading(false); // ✅ Tắt trạng thái loading khi load xong

                    const root = new BABYLON.TransformNode("root", scene); // Gốc chứa mô hình
                    meshes.forEach((mesh) => mesh.setParent(root)); // Gán tất cả vào node gốc

                    // 👉 Tính toán Bounding Box tổng từ tất cả meshes
                    let min = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
                    let max = new BABYLON.Vector3(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);

                    meshes.forEach((mesh) => {
                        if (mesh.getBoundingInfo) {
                            const bbox = mesh.getBoundingInfo().boundingBox;
                            min = BABYLON.Vector3.Minimize(min, bbox.minimumWorld);
                            max = BABYLON.Vector3.Maximize(max, bbox.maximumWorld);
                        }
                    });


                    // 👉 Tính kích thước Bounding Box
                    const size = max.subtract(min);
                    const center = min.add(size.scale(0.5));

                    // 👉 Điều chỉnh kích thước mô hình để nó luôn vừa với khung
                    const scaleFactor = 2 / Math.max(size.x, size.y, size.z);
                    root.scaling = new BABYLON.Vector3(scaleFactor, scaleFactor, scaleFactor);

                    // 👉 Căn giữa mô hình
                    root.position = new BABYLON.Vector3(-center.x * scaleFactor, -min.y * scaleFactor, -center.z * scaleFactor);

                    // 🔹 Xoay mô hình nếu cần (thử chỉnh Math.PI / số nhỏ hơn/lớn hơn nếu không đúng)
                    root.rotationQuaternion = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, Math.PI / 2);

                    // 🔹 Thêm hiệu ứng phản chiếu vật liệu (custom robot)
                    // 🌟 OPTION 2
                    meshes.forEach((mesh) => {
                        if (mesh.material) {
                            const pbr = mesh.material as BABYLON.PBRMaterial;

                            // Ánh sáng môi trường
                            // pbr.environmentTexture = scene.environmentTexture;
                            pbr.reflectionTexture = scene.environmentTexture;

                            // Tùy chỉnh từng phần màu sắc dựa trên tên vật liệu
                            const materialName = mesh.material.name.toLowerCase();

                            if (materialName.includes("lambert4")) {
                                // 🔹 Các đường viền trên lưng (xám nhạt)
                                pbr.albedoColor = new BABYLON.Color3(0.5, 1, 0); // Phối màu vàng xanh lá

                                // Thiết lập phản chiếu ánh sáng
                                pbr.metallic = 0.1;
                                pbr.roughness = 1;

                            } else if (materialName.includes("metalshiny")) { // done
                                // 🔹 Phần cổ (xám bạc bóng)
                                pbr.albedoColor = new BABYLON.Color3(0.2, 0.2, 0.2);
                                pbr.metallic = 1;             // Tăng độ phản chiếu
                                pbr.roughness = 0.05;         // Giảm độ nhám để bóng hơn
                            } else if (materialName.includes("rubber")) {
                                // 🔹 Bàn chân (xám đậm)
                                pbr.albedoColor = new BABYLON.Color3(0.05, 0.05, 0.05);
                                pbr.metallic = 0.2;
                                pbr.roughness = 0.5;
                            } else if (materialName.includes("metal")) {
                                // 🔹 Phần thân ngay gần cổ (xám kim loại)
                                pbr.albedoColor = new BABYLON.Color3(0.08, 0.08, 0.08);
                                pbr.metallic = 0.4;           // Tăng độ kim loại
                                pbr.roughness = 0.35;         // Giảm độ nhám để phản xạ nhẹ
                            } else if (materialName.includes("lambert1")) {
                                // 🔹 Thân chính chứa cả chân (xám trung bình)
                                pbr.albedoColor = new BABYLON.Color3(0.65, 0.65, 0.65);
                                pbr.metallic = 0.1;
                                pbr.roughness = 0.65;

                                pbr.clearCoat.isEnabled = true;
                                pbr.clearCoat.roughness = 0.9;
                                pbr.clearCoat.intensity = 0.2;
                            } else if (materialName.includes("pasted_eyes")) {
                                // 🔹 Mắt robot (vàng phát sáng)
                                pbr.emissiveColor = new BABYLON.Color3(0, 0, 1);
                                pbr.emissiveIntensity = 8; // Tăng độ sáng hơn
                                console.log("🔆 Đã chỉnh màu mắt:", materialName);
                            } else if (materialName.includes("blackglass")) {
                                // 🔹 Mặt kính (đen bóng)
                                pbr.albedoColor = new BABYLON.Color3(0.05, 0.05, 0.05);
                                pbr.metallic = 1;
                                pbr.roughness = 0.01;

                                // Áp dụng file HDR làm texture phản chiếu
                                let hdrTexture = new BABYLON.HDRCubeTexture("/hdr/test4.hdr", scene, 128);
                                pbr.reflectionTexture = hdrTexture;
                                pbr.reflectionTexture.level = 0.8; // Điều chỉnh độ phản chiếu
                            }
                        }
                    });

                    // console.log("Mô hình đã load:", root);
                }
            });
        }).finally(() => {
            setIsLoading(false); // ✅ Tắt trạng thái loading khi load xong
        });

        // 6️⃣ Xoay mô hình tự động nhẹ nhàng
        scene.onBeforeRenderObservable.add(() => {
            camera.alpha += 0.004;
        });

        // 7️⃣ Render loop
        engine.runRenderLoop(() => scene.render());

        // 8️⃣ Cleanup khi unmount
        return () => {
            scene.dispose();
            engine.dispose();
        };
    }, []);

    return (
        <React.Fragment>
            {/* {isLoading && ( // ✅ Hiển thị Loading khi đang tải robot
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#85EEB3]/10 backdrop-blur-md">
          <div className="relative">
            <div className="absolute inset-0 opacity-50 animate-pulse rounded-lg"
              style={{
                background: "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)"
              }}
            />
            <div className="w-32 h-32 bg-[#53B086] rounded-lg animate-pulse" />
          </div>
          <p
            className="mt-4 text-default font-semibold"
            style={{
              background: "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Đang tải Robot...
          </p>
        </div>
      )} */}
            <canvas ref={canvasRef} tabIndex={-1} className="w-full h-full flex justify-center items-center"></canvas>
        </React.Fragment>
    )
};

export default BabylonViewer;
