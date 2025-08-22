import React from "react";
import ProjectCard from "../../components/ProjectPage/ProjectCard";
const brandAvatars = [
  "/project/icons/image-1.png",
  "/project/icons/image-2.png",
  "/project/icons/image-3.png",
  "/project/icons/image-4.png",
  "/project/icons/image-5.png",
  "/project/icons/image-6.png",
];
const sampleProjects: any[] = [
  {
    id: "1",
    title: "AFFISO: Nền tảng tiếp thị liên kết Blockchain hóa",
    description: "Effective Affiliate Platform with Blockchain Technology",
    category: "software",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-01.png",
    brandAvatar: brandAvatars[0], // image-1.png
    isHighlighted: true,
  },
  {
    id: "2",
    title: "KANOW: Ứng dụng đặt thuê xe linh hoạt cho mọi chuyến đi",
    description: "Find tours, places, and tour guides",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-02.png",
    brandAvatar: brandAvatars[1], // image-2.png
    isHighlighted: true,
  },
  {
    id: "3",
    title: "Haiau Corp: App hỗ trợ nhà nông tiếp cận sản phẩm chất lượng",
    description: "Ứng dụng hỗ trợ nông nghiệp thông minh",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-03.png",
    brandAvatar: brandAvatars[2], // image-3.png
    isHighlighted: true,
  }
];
const Related = () => {
  return (
    <div className="hidden custom-container xl:flex flex-col gap-12 xl:py-24">
      <h2 className="text-[#050505] font-extrabold capitalize text-title-section-small">
        Dự án liên quan
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Related;
