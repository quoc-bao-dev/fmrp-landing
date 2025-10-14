import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Dịch Vụ Thuê Hosting & Server ",
    description: "FOSO cung cấp dịch vụ cho thuê hosting và server tốc độ cao, ổn định, bảo mật tốt – phù hợp cho website doanh nghiệp, ứng dụng theo yêu cầu.",
    ogImage: "/opengraph-image.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/thue-hosting-server`,
});

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
