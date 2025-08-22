"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ArrowUpRightIcon,
} from "lucide-react";
import { FcStart } from "react-icons/fc";
import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { motion } from "framer-motion";

// Interface cho project data
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
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
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "2",
    title: "KANOW: Ứng dụng đặt thuê xe linh hoạt cho mọi chuyến đi",
    description: "Find tours, places, and tour guides",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "3",
    title: "Haiau Corp: App hỗ trợ nhà nông tiếp cận sản phẩm chất lượng",
    description: "Ứng dụng hỗ trợ nông nghiệp thông minh",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "4",
    title: "Health Land Spa: Ứng dụng đặt lịch chăm sóc sắc đẹp",
    description: "Booking spa và chăm sóc sức khỏe",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "5",
    title: "Camboquick: Website thương mại điện tử xuyên biên giới",
    description: "Nền tảng thương mại điện tử đa quốc gia",
    category: "website",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "6",
    title: "FMRP: Phần mềm quản lý sản xuất chuyên sâu & chuyên nghiệp",
    description: "Hệ thống quản lý sản xuất và vận hành",
    category: "software",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
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
                title="Đăng ký tư vấn ngay"
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
                      <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
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
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative md:bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container với aspect ratio cố định */}
      <div className="relative aspect-[4/3]">
        {/* Placeholder image với gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center  rounded-2xl md:rounded-none">
          <div className="text-gray-400 text-sm font-medium">
            {project.title.substring(0, 20)}...
          </div>
        </div>

        {/* Brand Avatar - Desktop only */}
        <div className="hidden md:block absolute -bottom-7 left-[17%] transform -translate-x-1/2 z-10">
          <div className="relative">
            <img src="/project/image-05.png" alt="" className="" />
            <div className="absolute top-[12px] left-[] w-full h-full flex items-center justify-center">
              <div className="size-[60px] bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tags overlay */}
        {project.tags.length > 0 && (
          <div className="absolute top-4 left-4">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1 bg-white border border-gray-50 text-gray-900 font-semibold text-xs px-3 py-1 rounded-full"
              >
                <img
                  src="/project/icons/image-01.png"
                  alt=""
                  className="size-4"
                />{" "}
                <p className="mt-0.5">{tag}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pt-4 md:pt-16 md:px-6 md:pb-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#53B086] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Action button */}
        <Button
          variant="ghost"
          className="hidden md:flex mt-6 w-full gap-5 justify-end p-0 h-auto text-gray-400 hover:text-[#53B086] hover:bg-transparent font-semibold group/btn"
        >
          <span>Xem chi tiết</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectGrid;
