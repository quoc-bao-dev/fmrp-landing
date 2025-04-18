// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Dịch Vụ Thiết Kế App Mobile Tận Tâm - Viết  App Theo Nhu Cầu",
    description: "Thiết kế app mobile tại FOSO mang đến giải pháp app mobile hiệu quả, phù hợp với từng nhu cầu doanh nghiệp với giao diện thân thiện, đẹp mắt.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/products/thiet-ke-app-mobile",
});

export default function AppMobileLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
