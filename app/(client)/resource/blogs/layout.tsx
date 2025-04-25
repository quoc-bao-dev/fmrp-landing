import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Blog - Tin Tức",
    description: "Cập nhật tin tức, câu chuyện khách hàng và những bài viết thực tế từ FOSO – nơi chia sẻ kinh nghiệm công nghệ, quản lý xưởng và giải pháp số cho doanh nghiệp.",
    ogImage: "/seo/img/blogs.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/blogs`,
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
