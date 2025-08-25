"use client";

import AnimatedReveal from "@/components/common/animations/common/AnimatedReveal";
import ButtonAnimationNew from "@/components/common/button/ButtonAnimationNew";
import { useProjectList } from "@/managers/api/projects";
import { motion } from "framer-motion";
import { ArrowDownRightIcon } from "lucide-react";
import React, { useMemo } from "react";
import ProjectCard from "./ProjectCard";

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
  const { data: projectList, isLoading } = useProjectList({
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

  // Skeleton component với useMemo
  const projectGridSkeleton = useMemo(() => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            {/* Card container */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Image skeleton */}
              <div className="aspect-[4/3] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>

              {/* Content skeleton */}
              <div className="p-4 md:p-6">
                {/* Brand avatar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-24"></div>
                </div>

                {/* Title skeleton */}
                <div className="space-y-2 mb-3">
                  <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-full"></div>
                  <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-3/4"></div>
                </div>

                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-full"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-5/6"></div>
                  <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }, []);

  const showMoreButton = useMemo(() => {
    return (
      <div className="flex justify-center mt-6 lg:mt-12">
        <AnimatedReveal effect="fade" className="lg:w-fit w-full">
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
        {/* Loading state */}
        {isLoading && (
          <>
            <div className="mb-6">
              <div className="h-8 lg:h-10 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-48"></div>
            </div>
            {projectGridSkeleton}
          </>
        )}

        {/* Loaded state */}
        {!isLoading && (
          <>
            {!isEmpty && (
              <h2 className="text-lg lg:text-4xl font-bold mb-6">
                Tất cả dự án
              </h2>
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
          </>
        )}
      </div>

      {/* Custom CSS cho shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default ProjectGrid;
