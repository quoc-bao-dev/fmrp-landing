// app/layout.tsx
import { Suspense } from "react";
import { KEY_COOKIES } from "@/constants/Cookie";

import RootLayout from "@/components/layouts/root/RootLayout";
import { raleway_sans } from "@/utils/fonts/fontUtils";
import "@/styles/globals.scss";
import '@smastrom/react-rating/style.css';
import "@babylonjs/loaders";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.css";
import Script from "next/script";

export const metadata = {
    title: "FOSO Tech - Giải pháp công nghệ cho doanh nghiệp",
    description: "Cung cấp các dịch vụ thiết kế website, app, phần mềm chuyên nghiệp cho doanh nghiệp vừa và nhỏ.",
    keywords: "FOSO Tech, thiết kế website, phát triển phần mềm, công nghệ cho SME",
    openGraph: {
        title: "FOSO Tech",
        description: "Giải pháp công nghệ cho doanh nghiệp vừa và nhỏ",
        url: "https://fosotech.vn",
        siteName: "FOSO Tech",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "FOSO Tech Logo",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@fosotech",
        creator: "@fosotech",
        title: "FOSO Tech - Giải pháp công nghệ",
        description: "Giải pháp công nghệ hàng đầu cho doanh nghiệp vừa và nhỏ.",
        images: [
            {
                url: "/opengraph-image.png",
                alt: "FOSO Tech Logo",
            },
        ],
    },
    robots: "index, follow",
    icons: {
        icon: "/favicon.ico",
    },
};

export default async function RootLayoutApp({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const { language, lang } = await getLanguage(); // chạy api dưới sv

    return (
        <html lang={KEY_COOKIES.DEFAULT_LANGUAGE}>
            <body className={`${raleway_sans.className} antialiased`}>
                <Suspense>
                    <RootLayout data={{ dataLang: "lang", language: "" }}>
                        {children}
                    </RootLayout>
                </Suspense>
            </body>
        </html>
    );
}
