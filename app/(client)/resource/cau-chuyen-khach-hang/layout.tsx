import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Câu Chuyện Khách Hàng",
    description: "Lắng nghe câu chuyện thật từ các doanh nghiệp đã đồng hành cùng FOSO – từ phần mềm quản lý đến các giải pháp thiết kế app và website.",
    ogImage: "/opengraph-image.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/cau-chuyen-khach-hang`,
});

export default function FeedbackCustomerLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
