import { ReactNode } from "react";

import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";

import apiBlogs from "@/services/blogs/blogs.services";

export async function generateMetadata({ params }: any) {
  try {
    const { id } = await params;

    const { data } = await apiBlogs.getDetailBlog(id);

    const canonicalUrl = `${process.env.NEXT_PUBLIC_URL_WEBSITE}/blogs/${id}`;

    return GenerateMetadataFromData(data?.data, canonicalUrl);
  } catch (error) {
    return {
      title: "Không tìm thấy",
      description: "Bài viết bạn yêu cầu không tồn tại.",
    };
  }
}

export default async function BlogDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
