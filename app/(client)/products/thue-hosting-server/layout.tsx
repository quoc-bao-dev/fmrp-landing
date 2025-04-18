// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Dịch Vụ Thuê Hosting & Server ",
    description: "FOSO cung cấp dịch vụ cho thuê hosting và server tốc độ cao, ổn định, bảo mật tốt – phù hợp cho website doanh nghiệp, ứng dụng theo yêu cầu.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/products/thue-hosting-server",
});

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
