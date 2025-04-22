// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";
import apiBlogs from "@/services/blogs/blogs.services";
import { Metadata, ResolvingMetadata } from 'next'
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    params: { id: string }; // Thêm params nếu cần
}

export async function generateMetadata({ params }: any) {
    try {
        const { id } = await params

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
    params,
}: {
    children: ReactNode;
    params: { id: string };
}) {
    return children;
}