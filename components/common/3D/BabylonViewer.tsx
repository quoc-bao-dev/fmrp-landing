"use client";

import * as BABYLON from "@babylonjs/core";
import React, { useEffect, useRef } from "react";
import "@babylonjs/loaders";

const BabylonViewer = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const engineRef = useRef<BABYLON.Engine | null>(null);
    const sceneRef = useRef<BABYLON.Scene | null>(null);
    const rootRef = useRef<BABYLON.TransformNode | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // 🏎️ **Khởi tạo Babylon Engine**
        const engine = new BABYLON.Engine(canvasRef.current, true, {
            preserveDrawingBuffer: true,
            stencil: true,
        });
        engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
        engineRef.current = engine;

        const scene = new BABYLON.Scene(engine);
        sceneRef.current = scene;
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        // 📸 **Tạo Camera**
        const camera = new BABYLON.ArcRotateCamera(
            "camera",
            Math.PI / 4,
            Math.PI / 2,
            3.5,
            new BABYLON.Vector3(0, 1, 0),
            scene
        );
        camera.attachControl(canvasRef.current, true);
        camera.lowerRadiusLimit = 3.5;
        camera.upperRadiusLimit = 20;
        camera.panningSensibility = 0;

        // 💡 **Thêm ánh sáng**
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 1.2;

        // 🚀 **Tải HDR & EnvironmentTexture song song**
        console.log("🔄 Đang load HDR...");
        const hdrTexture = new BABYLON.HDRCubeTexture("/hdr/test4.hdr", scene, 128);
        const envTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
            "https://assets.babylonjs.com/environments/environmentSpecular.env",
            scene
        );

        // ⏳ **Chờ cả HDR và EnvironmentTexture load xong**
        Promise.all([
            new Promise((resolve) => envTexture.onLoadObservable.addOnce(() => resolve("✅ CubeTexture Loaded!"))),
            new Promise((resolve) => hdrTexture.onLoadObservable.addOnce(() => resolve("✅ HDR Loaded!"))),
        ]).then((messages) => {
            console.log(...messages);
            console.log("✅ HDR đã load xong, bắt đầu load robot...");

            scene.environmentTexture = envTexture;

            // 📌 **Tải mô hình GLB**
            BABYLON.SceneLoader.ImportMesh("", "/models/", "robot.glb", scene, (meshes) => {
                if (meshes.length > 0) {
                    console.log("✅ Robot đã load thành công!");

                    if (rootRef.current) {
                        rootRef.current.dispose();
                    }

                    const root = new BABYLON.TransformNode("root", scene);
                    rootRef.current = root;
                    meshes.forEach((mesh) => mesh.setParent(root));

                    // 🏗️ **Tính toán kích thước Bounding Box**
                    let min = BABYLON.Vector3.Zero();
                    let max = BABYLON.Vector3.Zero();
                    meshes.forEach((mesh) => {
                        if (mesh.getBoundingInfo) {
                            const bbox = mesh.getBoundingInfo().boundingBox;
                            min = BABYLON.Vector3.Minimize(min, bbox.minimumWorld);
                            max = BABYLON.Vector3.Maximize(max, bbox.maximumWorld);
                        }
                    });

                    // 🎯 **Căn chỉnh kích thước mô hình**
                    const size = max.subtract(min);
                    const center = min.add(size.scale(0.5));
                    const scaleFactor = 2 / Math.max(size.x, size.y, size.z);
                    root.scaling = new BABYLON.Vector3(scaleFactor, scaleFactor, scaleFactor);
                    root.position = new BABYLON.Vector3(-center.x * scaleFactor, -min.y * scaleFactor, -center.z * scaleFactor);
                    root.rotationQuaternion = BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, Math.PI / 2);

                    // 🌟 **Thêm hiệu ứng phản chiếu vật liệu**
                    scene.blockMaterialDirtyMechanism = true; // 🚀 Giảm số lần cập nhật vật liệu
                    meshes.forEach((mesh) => {
                        if (mesh.material) {
                            const pbr = mesh.material as BABYLON.PBRMaterial;
                            pbr.reflectionTexture = scene.environmentTexture;
                            const materialName = mesh.material.name.toLowerCase();

                            switch (true) {
                                case materialName.includes("lambert4"):
                                    pbr.albedoColor = new BABYLON.Color3(0.5, 1, 0);
                                    pbr.metallic = 0.1;
                                    pbr.roughness = 1;
                                    break;
                                case materialName.includes("metalshiny"):
                                    pbr.albedoColor = new BABYLON.Color3(0.2, 0.2, 0.2);
                                    pbr.metallic = 1;
                                    pbr.roughness = 0.05;
                                    break;
                                case materialName.includes("pasted_eyes"):
                                    pbr.emissiveColor = new BABYLON.Color3(0, 0, 1);
                                    pbr.emissiveIntensity = 8;
                                    break;
                                case materialName.includes("blackglass"):
                                    pbr.albedoColor = new BABYLON.Color3(0.05, 0.05, 0.05);
                                    pbr.metallic = 1;
                                    pbr.roughness = 0.01;
                                    pbr.reflectionTexture = new BABYLON.HDRCubeTexture("/hdr/test4.hdr", scene, 128);
                                    pbr.reflectionTexture.level = 0.8;
                                    break;
                            }
                        }
                    });

                    // 🔄 **Tối ưu hiệu suất**
                    scene.freezeActiveMeshes();
                }
            });
        });

        // 🏎️ **Tự động xoay mô hình nhẹ**
        scene.onBeforeRenderObservable.add(() => {
            camera.alpha += 0.004;
        });

        // 🎮 **Render loop**
        engine.runRenderLoop(() => scene.render());

        // 🔚 **Dọn dẹp khi component unmount**
        return () => {
            console.log("🧹 Cleaning up Babylon scene...");
            if (rootRef.current) rootRef.current.dispose();
            if (sceneRef.current) sceneRef.current.dispose();
            if (engineRef.current) engineRef.current.dispose();
            engineRef.current = null;
            sceneRef.current = null;
            rootRef.current = null;
        };
    }, []);

    return (
        <React.Fragment>
            <canvas ref={canvasRef} tabIndex={-1} className="w-full h-full flex justify-center items-center rounded-xl" />
        </React.Fragment>
    );
};

export default BabylonViewer;
