import { GenerateMetadataFromData } from "@/components/seo/GenerateMetadataFromData";
import { GenerateMetadataProject } from "@/components/seo/GenerateMetadataProject";
import apiProjects from "@/services/projects/projects.services";

export async function generateMetadata({ params }: any) {
  try {
    const { slug } = await params;
console.log(slug)
    const { data } = await apiProjects.getProjectDetail(slug);
console.log(data)
    const canonicalUrl = `${process.env.NEXT_PUBLIC_URL_WEBSITE}/du-an/${slug}`;

    return GenerateMetadataProject(data?.data, canonicalUrl);
  } catch (error) {
    return {
      title: "Không tìm thấy",
      description: "Bài viết bạn yêu cầu không tồn tại.",
    };
  }
}
export default function ProjectDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
