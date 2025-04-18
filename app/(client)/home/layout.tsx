// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Giải Pháp Công Nghệ Cho Doanh Nghiệp",
    description: "FOSO cung cấp giải pháp công nghệ giúp doanh nghiệp tối ưu vận hành, từ giải pháp phần mềm đến thiết kế app mobile và website theo yêu cầu.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/",
});

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
