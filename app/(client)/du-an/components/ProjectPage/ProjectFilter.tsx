"use client";

import { useProjectCategory, useProjectMenu } from "@/managers/api/projects";
import React, { useMemo, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import SearchInput from "./SearchInput";
import TabItem from "./TabItem";

// Định nghĩa kiểu dữ liệu cho tabs
interface TabData {
  id: string;
  label: string;
  iconPath: string;
}

// Định nghĩa kiểu dữ liệu cho props
interface ProjectFilterProps {
  onSearchChange?: (value: string) => void;
  onTabChange?: (tabId: string) => void;
  onCategoryChange?: (categories: string[]) => void;
  onScroll?: () => void;
  activeTab?: string;
  selectedCategories?: string[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  onSearchChange,
  onTabChange,
  onCategoryChange,
  onScroll,
  activeTab = "0",
  selectedCategories = [],
}) => {
  // State cho search input
  const [searchValue, setSearchValue] = useState("");

  const { data: projectMenu, isLoading: isLoadingMenu } = useProjectMenu();

  const projectFieldOption = useMemo(() => {
    if (!projectMenu) return [];
    return projectMenu?.data.map((item) => ({
      label: item.name,
      value: item.id.toString(),
    }));
  }, [projectMenu]);

  const { data: projectCategory, isLoading: isLoadingCategory } =
    useProjectCategory();

  const tabs: TabData[] = useMemo(() => {
    if (!projectCategory) return [];
    return projectCategory?.data.map((item) => ({
      id: item.id.toString(),
      label: item.name,
      iconPath: item.image,
    }));
  }, [projectCategory]);

  const isLoading = isLoadingMenu || isLoadingCategory;

  // Xử lý search input
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  // Xử lý chọn tab
  const handleTabClick = (tabId: string) => {
    onTabChange?.(tabId);
    // Gọi hàm scroll sau khi thay đổi tab
    onScroll?.();
  };

  // Xử lý chọn category
  const handleCategoryChange = (categories: string[]) => {
    onCategoryChange?.(categories);
  };

  // Skeleton components với useMemo
  const tabsSkeleton = useMemo(() => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-[120px] lg:h-[140px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-2xl border border-gray-100">
              <div className="p-4 h-full flex flex-col items-center justify-center space-y-3">
                {/* Icon skeleton */}
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer rounded-lg"></div>
                {/* Text skeleton */}
                <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-[length:200%_100%] animate-shimmer rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }, []);

  console.log("activeTab", activeTab);

  return (
    <section className="w-full">
      {/* Container chính với responsive margin */}
      <div className="custom-container">
        <div className="flex flex-col gap-6">
          {/* Tabs - Loading state */}
          {isLoading && <div className="w-full">{tabsSkeleton}</div>}

          {/* Tabs - Loaded state */}
          {!isLoading && (
            <div className="w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                {tabs.map((tab) => (
                  <TabItem
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    iconPath={tab.iconPath}
                    isActive={activeTab === tab.id}
                    onClick={handleTabClick}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Phần search và filter - luôn hiển thị */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full md:pt-6 ">
            {/* Search input - responsive width */}
            <SearchInput
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Tìm kiếm dự án"
            />

            {/* Category dropdown - responsive width */}
            <CategoryDropdown
              options={projectFieldOption}
              selectedValues={selectedCategories}
              onChange={handleCategoryChange}
              onScroll={onScroll}
              placeholder="Lĩnh vực"
            />
          </div>
          {/* Phần danh sách lĩnh vực cho desktop */}
          {/* <div className="hidden lg:block">
            <div className="flex flex-wrap gap-6 text-base text-gray-600">
              {projectFieldOption.slice(1).map((category, index) => (
                <span key={category.value}>{category.label}</span>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Custom scrollbar styles and shimmer animation */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

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

export default ProjectFilter;
