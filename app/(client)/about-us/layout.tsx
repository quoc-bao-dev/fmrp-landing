// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Giới Thiệu",
    description: "Khám phá tầm nhìn, giá trị cốt lõi và hành trình hình thành nên FOSO – nơi khởi nguồn những giải pháp công nghệ đồng hành cùng sự phát triển của doanh nghiệp.",
    ogImage: "/(client)/about-us/opengraph-image.png",
    url: "https://fososoft.com/about-us",
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
