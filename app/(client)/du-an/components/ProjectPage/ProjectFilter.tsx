"use client";

import React, { useMemo, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import SearchInput from "./SearchInput";
import TabItem from "./TabItem";
import { useProjectCategory, useProjectMenu } from "@/managers/api/projects";

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
  activeTab?: string;
  selectedCategories?: string[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  onSearchChange,
  onTabChange,
  onCategoryChange,
  activeTab = "0",
  selectedCategories = [],
}) => {
  // State cho search input
  const [searchValue, setSearchValue] = useState("");

  const { data: projectMenu } = useProjectMenu();

  const projectFieldOption = useMemo(() => {
    if (!projectMenu) return [];
    return projectMenu?.data.map((item) => ({
      label: item.name,
      value: item.id.toString(),
    }));
  }, [projectMenu]);

  const { data: projectCategory } = useProjectCategory();

  const tabs: TabData[] = useMemo(() => {
    if (!projectCategory) return [];
    return projectCategory?.data.map((item) => ({
      id: item.id.toString(),
      label: item.name,
      iconPath: item.image,
    }));
  }, [projectCategory]);

  // Xử lý search input
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  // Xử lý chọn tab
  const handleTabClick = (tabId: string) => {
    onTabChange?.(tabId);
  };

  // Xử lý chọn category
  const handleCategoryChange = (categories: string[]) => {
    onCategoryChange?.(categories);
  };

  console.log("activeTab", activeTab);

  return (
    <section className="w-full">
      {/* Container chính với responsive margin */}
      <div className="custom-container">
        <div className="flex flex-col gap-6">
          {/* Phần tabs - horizontal scroll trên mobile */}
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* Phần search và filter */}
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
              placeholder="Lĩnh vực"
            />
          </div>
          {/* Phần danh sách lĩnh vực cho desktop */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-6 text-base text-gray-600">
              {projectFieldOption.slice(1).map((category, index) => (
                <span key={category.value}>{category.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectFilter;
