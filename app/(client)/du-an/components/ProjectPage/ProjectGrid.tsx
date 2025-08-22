"use client";

import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDownRightIcon, ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";

// Danh sách avatar cho brand
const brandAvatars = [
  "/project/icons/image-1.png",
  "/project/icons/image-2.png",
  "/project/icons/image-3.png",
  "/project/icons/image-4.png",
  "/project/icons/image-5.png",
  "/project/icons/image-6.png",
];

// Interface cho project data
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  brandAvatar?: string;
  isHighlighted?: boolean;
}

// Interface cho props
interface ProjectGridProps {
  projects?: Project[];
  searchQuery?: string;
  activeTab?: string;
  selectedCategories?: string[];
}

// Dữ liệu mẫu cho projects
const sampleProjects: Project[] = [
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
  {
    id: "4",
    title: "Health Land Spa: Ứng dụng đặt lịch chăm sóc sắc đẹp",
    description: "Booking spa và chăm sóc sức khỏe",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-04.png",
    brandAvatar: brandAvatars[3], // image-4.png
    isHighlighted: true,
  },
  {
    id: "5",
    title: "Camboquick: Website thương mại điện tử xuyên biên giới",
    description: "Nền tảng thương mại điện tử đa quốc gia",
    category: "website",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-05.png",
    brandAvatar: brandAvatars[4], // image-5.png
    isHighlighted: true,
  },
  {
    id: "6",
    title: "FMRP: Phần mềm quản lý sản xuất chuyên sâu & chuyên nghiệp",
    description: "Hệ thống quản lý sản xuất và vận hành",
    category: "software",
    tags: ["Nổi bật"],
    image: "/project/thumb/image-06.png",
    brandAvatar: brandAvatars[5], // image-6.png
    isHighlighted: true,
  },
];

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects = sampleProjects,
  searchQuery = "",
  activeTab = "all",
  selectedCategories = [],
}) => {
  // Lọc projects dựa trên search query, active tab và selected categories
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === "all" || project.category === activeTab;

    // Check if matches any of the selected categories
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("all") ||
      selectedCategories.some((category) => {
        // You can add more complex category matching logic here
        // For now, we'll just check if it's "all" or empty
        return category === "all";
      });

    return matchesSearch && matchesTab && matchesCategory;
  });

  const isEmpty = filteredProjects.length === 0;

  return (
    <section className="w-full py-12">
      <div className="custom-container">
        {!isEmpty && <h2 className="text-4xl font-bold mb-6">Tất cả dự án</h2>}
        {isEmpty && (
          <h2 className="text-4xl font-bold mb-6 text-center">
            Kết quả tìm kiếm cho &quot;{searchQuery}&quot;
          </h2>
        )}
        {/* Grid container với responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show more button */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center mt-12">
            <AnimatedReveal
              // once={false}
              effect="fade"
              className="lg:w-fit w-full"
            >
              <ButtonAnimationNew
                title="Xem thêm"
                icon={
                  <div className="2xl:size-12 md:size-10 size-9 rounded-full flex items-center justify-center group-hover:bg-[#10805B] group-hover:text-white duration-500 transition-colors">
                    <motion.div
                      initial={{ x: 0, y: 0 }}
                      variants={{
                        rest: { scale: 1 },
                        hover: { x: 2, y: -2 }, // Khi hover vào button, div cũng scale lớn hơn
                        press: { scale: 0.98 }, // Khi hover vào button, div cũng scale lớn hơn
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <ArrowDownRightIcon className="2xl:size-6 md:size-5 size-4" />
                    </motion.div>
                  </div>
                }
                reverse={true}
                className="border-gradient-button-no-bg-foso flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-[#10805B] hover:bg-[#A3EED6]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter hover:text-[#10805B] font-medium pl-6 pr-1 py-1 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                style={{
                  WebkitBackdropFilter: "blur(15px)", // Safari
                  boxShadow:
                    "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)",
                }}
              />
            </AnimatedReveal>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4">
            {/* Main content container */}
            <div className="max-w-2xl mx-auto">
              {/* Image */}
              <div className="flex justify-center mb-8">
                <img
                  src="/project/image-04.png"
                  alt="Không tìm thấy kết quả"
                  className="w-[500px] h-[500px] object-contain"
                />
              </div>

              {/* Description */}
              <div className="text-gray-600 text-base leading-relaxed">
                Không tìm thấy kết quả tìm kiếm{" "}
                <span className="font-semibold">"{searchQuery}"</span>, vui lòng
                điều chỉnh lại bộ lọc và từ khóa tìm kiếm.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Component ProjectCard riêng biệt

export default ProjectGrid;
