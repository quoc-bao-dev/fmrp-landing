// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";
import apiBlogs from "@/services/blogs/blogs.services";
import { Metadata, ResolvingMetadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export default function BlogDetailLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
