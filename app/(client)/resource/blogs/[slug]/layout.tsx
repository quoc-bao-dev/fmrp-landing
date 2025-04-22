// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";
import apiBlogs from "@/services/blogs/blogs.services";
import { Metadata, ResolvingMetadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export async function generateMetadata({ params }: { params: { slug: any } }, parent: ResolvingMetadata): Promise<Metadata> {
    try {
        const { data } = await apiBlogs.getDetailBlog(params.slug);

        const canonicalUrl = `${process.env.NEXT_PUBLIC_URL_WEBSITE}/resource/blogs/${params.slug}`;

        return GenerateMetadataFromData(data?.data, canonicalUrl);
    } catch (error) {
        console.error('generateMetadata error:', error);
        return {
            title: 'Không tìm thấy',
            description: 'Bài viết bạn yêu cầu không tồn tại.',
        };
    }
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
    return children
}
