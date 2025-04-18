// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Câu Chuyện Khách Hàng",
    description: "Lắng nghe câu chuyện thật từ các doanh nghiệp đã đồng hành cùng FOSO – từ phần mềm quản lý đến các giải pháp thiết kế app và website.",
    ogImage: "/opengraph-image.png",
    url: "https://fososoft.com/resource/cau-chuyen-khach-hang",
});


export default function FeedbackCustomerLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
