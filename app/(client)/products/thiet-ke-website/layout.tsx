// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Thiết Kế Website Theo Yêu Cầu Doanh Nghiệp",
    description: "FOSO mang đến dịch vụ thiết kế website chuyên nghiệp, phù hợp đa ngành nghề riêng biệt của từng doanh nghiệp.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/products/thiet-ke-website",
});

export default function WebsiteLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
