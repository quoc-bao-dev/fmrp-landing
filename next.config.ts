import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    eslint: {
        // Tắt ESLint trong quá trình build
        ignoreDuringBuilds: true,
    },
    experimental: {
        // Giảm JS ban đầu
        optimizeCss: true,
        scrollRestoration: true
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
                source: '/bang-gia-fmrp',
                destination: '/products/bang-gia-fmrp',
            },
            {
                source: '/phan-mem-quan-ly-san-xuat-fmrp', // vietsublink
                destination: '/products/fmrp',
            },
            {
                source: '/production-management-software-fmrp', // ensublink
                destination: '/products/fmrp',
            },
            {
                source: '/fpos', // ensublink
                destination: '/products/fpos',
            },
            // {
            //     source: '/thiet-ke-app-mobile', // ensublink
            //     destination: '/products/thiet-ke-app-mobile',
            // },
            // {
            //     source: '/thiet-ke-app-mobile',
            //     destination: '/blogs/thiet-ke-app-mobile',
            // },
            {
                source: '/thiet-ke-website', // ensublink
                destination: '/products/thiet-ke-website',
            },
            {
                source: '/hosting-server-rental-services', // ensublink
                destination: '/products/thue-hosting-server',
            },
            {
                source: '/thue-hosting-server', // ensublink
                destination: '/products/thue-hosting-server',
            },
            {
                source: '/gioi-thieu',
                destination: '/about-us',
            },
            {
                source: '/du-an',
                destination: '/resource/du-an',
            },
            {
                source: '/projects',
                destination: '/resource/du-an',
            },
            {
                source: '/cau-chuyen-khach-hang',
                destination: '/resource/cau-chuyen-khach-hang',
            },
            {
                source: '/customer-stories',
                destination: '/resource/cau-chuyen-khach-hang',
            },
            {
                source: '/blogs',
                destination: '/resource/blogs',
            },
            {
                source: '/blogs/:slug',
                destination: '/resource/blogs/:slug',
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
                destination: '/phan-mem-quan-ly-san-xuat-fmrp',
                permanent: true
            },
            {
                source: '/products/fmrp',
                destination: '/phan-mem-quan-ly-san-xuat-fmrp',
                permanent: true
            },
            {
                source: '/products/bang-gia-fmrp',
                destination: '/bang-gia-fmrp',
                permanent: true
            },
            {
                source: '/products/fpos',
                destination: '/fpos',
                permanent: true
            },
            // {
            //     source: '/products/thiet-ke-app-mobile',
            //     destination: '/thiet-ke-app-mobile',
            //     permanent: true
            // },
            // {
            //     source: '/blogs/thiet-ke-app-mobile',
            //     destination: '/thiet-ke-app-mobile',
            //     permanent: true
            // },
            {
                source: '/products/thiet-ke-website',
                destination: '/thiet-ke-website',
                permanent: true
            },
            {
                source: '/products/thue-hosting-server',
                destination: '/thue-hosting-server',
                permanent: true
            },
            {
                source: '/resource',
                destination: '/du-an',
                permanent: true
            },
            {
                source: '/resource/du-an',
                destination: '/du-an',
                permanent: true
            },
            {
                source: '/resource/cau-chuyen-khach-hang',
                destination: '/cau-chuyen-khach-hang',
                permanent: true
            },
            {
                source: '/resource/blogs',
                destination: '/blogs',
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
