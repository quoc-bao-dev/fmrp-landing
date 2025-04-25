import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Thiết Kế Website Theo Yêu Cầu Doanh Nghiệp",
    description: "FOSO mang đến dịch vụ thiết kế website chuyên nghiệp, phù hợp đa ngành nghề riêng biệt của từng doanh nghiệp.",
    ogImage: "/opengraph-image.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/thiet-ke-website`,
});

export default function WebsiteLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
