// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = {
    title: "FOSO - Giải pháp công nghệ cho doanh nghiệp",
    description: "Cung cấp các dịch vụ thiết kế website, app, phần mềm chuyên nghiệp cho doanh nghiệp vừa và nhỏ.",
    keywords: "FOSO, thiết kế website, phát triển phần mềm, công nghệ cho SME",
    openGraph: {
        title: "FOSO",
        description: "Giải pháp công nghệ cho doanh nghiệp vừa và nhỏ",
        url: "https://fososoft.vn/",
        siteName: "FOSO",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "FOSO Logo",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    // content: "telephone=no, date=no, email=no, address=no",
    twitter: {
        card: "summary_large_image",
        site: "@fosotech",
        creator: "@fosotech",
        title: "FOSO - Giải pháp công nghệ",
        description: "Giải pháp công nghệ hàng đầu cho doanh nghiệp vừa và nhỏ.",
        images: [
            {
                url: "/opengraph-image.png",
                alt: "FOSO Logo",
            },
        ],
    },
    robots: "index, follow",
    icons: {
        icon: "/favicon.ico",
    },
};
export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
