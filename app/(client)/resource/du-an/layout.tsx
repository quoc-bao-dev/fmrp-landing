// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Dự Án Tiêu Biểu",
    description: "Khám phá những dự án tiêu biểu mà FOSO đã thực hiện cho các doanh nghiệp sản xuất, thương mại và dịch vụ.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/resource/du-an",
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
