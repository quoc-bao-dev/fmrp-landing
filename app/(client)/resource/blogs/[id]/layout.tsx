import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";
import apiBlogs from "@/services/blogs/blogs.services";
import { ReactNode } from "react";

export async function generateMetadata({ params }: any) {
    try {
        const { id } = await params

        console.log('id', id);

        const { data } = await apiBlogs.getDetailBlog(id);

        const canonicalUrl = `${process.env.NEXT_PUBLIC_URL_WEBSITE}/resource/blogs/${id}`;

        return GenerateMetadataFromData(data?.data, canonicalUrl);
    } catch (error) {
        console.error('generateMetadata error:', error);
        return {
            title: 'Không tìm thấy',
            description: 'Bài viết bạn yêu cầu không tồn tại.',
        };
    }
}

export default function BlogDetailLayout({
    children,
}: {
    children: ReactNode;
}) {
    return children;
}