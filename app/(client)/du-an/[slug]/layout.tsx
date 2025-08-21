import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
  title: "FOSO - Dự Án Tiêu Biểu",
  description:
    "Khám phá những dự án tiêu biểu mà FOSO đã thực hiện cho các doanh nghiệp sản xuất, thương mại và dịch vụ.",
  ogImage: "/opengraph-image.png",
});

export default function ProjectDetailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
