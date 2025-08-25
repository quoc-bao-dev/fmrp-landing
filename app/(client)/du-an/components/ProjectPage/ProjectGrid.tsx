"use client";

import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { useProjectList } from "@/managers/api/projects";
import { motion } from "framer-motion";
import { ArrowDownRightIcon } from "lucide-react";
import React, { useMemo } from "react";
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
  searchQuery?: string;
  activeTab?: string;
  selectedCategories?: string[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  searchQuery = "",
  activeTab = "0",
  selectedCategories = [],
}) => {
  const { data: projectList } = useProjectList({
    params: {
      category_search: activeTab,
      search: searchQuery,
      current_page: 1,
      field_search: selectedCategories.join(","),
      per_page: 10,
    },
  });

  const projectListData = useMemo(() => {
    if (!projectList) return [];
    return projectList?.data.map((item) => {
      return {
        id: String(item.id),
        title: item.title || item.name || "",
        description: item.name || "",
        category: "",
        tags: [],
        image: item.image || item.background || "",
        brandAvatar: item.logo || "",
        isHighlighted: !!item.featured,
      };
    });
  }, [projectList]);

  const isEmpty = projectList?.data.length === 0;

  const showMoreButton = useMemo(() => {
    return (
      <div className="flex justify-center mt-6 lg:mt-12">
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
    );
  }, []);
  const emptyState = useMemo(() => {
    return (
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
    );
  }, []);

  return (
    <section className="w-full py-8 lg:py-12">
      <div className="custom-container">
        {!isEmpty && (
          <h2 className="text-lg lg:text-4xl font-bold mb-6">Tất cả dự án</h2>
        )}
        {isEmpty && (
          <h2 className="text-4xl font-bold mb-6 text-center">
            Kết quả tìm kiếm cho &quot;{searchQuery}&quot;
          </h2>
        )}
        {/* Grid container với responsive layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
          {projectListData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show more button */}
        {!isEmpty && showMoreButton}

        {/* Empty state */}
        {isEmpty && emptyState}
      </div>
    </section>
  );
};

export default ProjectGrid;
