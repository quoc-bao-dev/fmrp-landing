import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Dự Án Tiêu Biểu",
    description: "Khám phá những dự án tiêu biểu mà FOSO đã thực hiện cho các doanh nghiệp sản xuất, thương mại và dịch vụ.",
    ogImage: "/opengraph-image.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/du-an`,
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
