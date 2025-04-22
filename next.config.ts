import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    eslint: {
        // Tắt ESLint trong quá trình build
        ignoreDuringBuilds: true,
    },
    images: {
        // unoptimized: true,
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
            },
            {
                protocol: 'https',
                hostname: '*',
            },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Kích thước thiết bị hỗ trợ
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Kích thước hình ảnh
    },
    async headers() {
        return [
            {
                source: "/icons/(.*)", // Cache tất cả hình ảnh trong thư mục `/public/icons`
                // source: "/_next/image(.*)", // Cache tất cả hình ảnh tối ưu của Next.js
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable", // Cache 1 năm
                    },
                ],
            },
        ];
    },

    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
            {
                source: '/products/phan-mem-quan-ly-san-xuat-fmrp',
                destination: '/products/fmrp',
            },
            {
                source: '/gioi-thieu',
                destination: '/about-us',
            },
            {
                source: '/lien-he',
                destination: '/contact-us',
            },
            {
                source: '/chinh-sach-bao-mat',
                destination: '/resource/blogs/chinh-sach-bao-mat',
            },
        ]
    },

    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            },
            {
                source: '/products',
                destination: '/products/phan-mem-quan-ly-san-xuat-fmrp',
                permanent: true
            },
            {
                source: '/resource',
                destination: '/resource/projects',
                permanent: true
            },
        ]
    },

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        // config.resolve.fallback = { fs: false };
        return config;
    },
};

export default nextConfig;
