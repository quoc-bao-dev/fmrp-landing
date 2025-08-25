import React from "react";
import ProjectCard from "../../components/ProjectPage/ProjectCard";
import Image from "next/image";
import { IMAGES } from "@/constants/Images";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  },
];

const Related = () => {
  return (
    <div className="custom-container flex flex-col gap-12 xl:py-24">
      <h2 className="text-[#050505] font-extrabold capitalize text-title-section-small">
        Dự án liên quan
      </h2>
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {sampleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="xl:hidden flex flex-col gap-3">
        <div className="flex gap-3">
          <Image
            src={IMAGES.img}
            alt="brand-avatar"
            width={200}
            height={200}
            className="size-[100px] flex-shrink-0 rounded-lg object-cover"
          />
          <div className="flex flex-col justify-center gap-2">
            <div className="inline-flex w-fit items-center gap-1 bg-white border border-gray-50 px-1 py-0.5 rounded-full">
              <Image
                src="/project/icons/image-01.png"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
              <p className="text-[10px] text-light-900 font-semibold">
                Nổi bật
              </p>
            </div>
            <h3 className="text-sm text-light-900 font-extrabold line-clamp-2">
              AFFISO: Nền tảng tiếp thị liên kết Blockchain hóa
            </h3>
            <Button
              variant="ghost"
              className="w-full gap-5 justify-end p-0 h-auto text-gray-500 hover:text-[#53B086] hover:bg-transparent font-semibold group/btn"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
