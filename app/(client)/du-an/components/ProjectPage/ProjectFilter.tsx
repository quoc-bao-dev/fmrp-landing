"use client";

import React, { useState } from "react";
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
  activeTab?: string;
  selectedCategories?: string[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  onSearchChange,
  onTabChange,
  onCategoryChange,
  activeTab = "all",
  selectedCategories = [],
}) => {
  // State cho search input
  const [searchValue, setSearchValue] = useState("");

  // Dữ liệu mẫu cho các tabs với icon paths
  const tabs: TabData[] = [
    {
      id: "all",
      label: "Tất cả dự án",
      iconPath: "/project/icons/icon-01.svg",
    },
    {
      id: "website",
      label: "Thiết Kế Website",
      iconPath: "/project/icons/icon-02.svg",
    },
    {
      id: "mobile",
      label: "Thiết Kế App Mobile",
      iconPath: "/project/icons/icon-03.svg",
    },
    {
      id: "software",
      label: "Thiết kế phần mềm",
      iconPath: "/project/icons/icon-04.svg",
    },
  ];

  // Dữ liệu mẫu cho dropdown categories
  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "spa", label: "Spa & Nail" },
    { value: "travel", label: "Du lịch" },
    { value: "transport", label: "Book Xe & Vận Chuyển" },
    { value: "shopping", label: "Thời Trang" },
    { value: "business", label: "Doanh Nghiệp" },
    { value: "hr", label: "Nhân sự" },
    { value: "decoration", label: "Trang sức" },
    { value: "auction", label: "Giải Đấu" },
    { value: "ecommerce", label: "Thương mại" },
  ];

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

  return (
    <section className="w-full">
      {/* Container chính với responsive margin */}
      <div className="custom-container">
        <div className="flex flex-col gap-6">
          {/* Phần tabs - horizontal scroll trên mobile */}
          <div className="w-full">
            {/* Desktop: hiển thị tabs theo grid */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4">
              {tabs.map((tab) => (
                <TabItem
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  iconPath={tab.iconPath}
                  isActive={activeTab === tab.id}
                  onClick={handleTabClick}
                  variant="desktop"
                />
              ))}
            </div>

            {/* Mobile: horizontal scroll tabs */}
            <div className="lg:hidden">
              <div className="flex gap-8 overflow-x-auto md:pb-12 scrollbar-hide">
                {tabs.map((tab) => (
                  <TabItem
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    iconPath={tab.iconPath}
                    isActive={activeTab === tab.id}
                    onClick={handleTabClick}
                    variant="mobile"
                  />
                ))}
              </div>
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
              options={categories}
              selectedValues={selectedCategories}
              onChange={handleCategoryChange}
              placeholder="Lĩnh vực"
            />
          </div>
          {/* Phần danh sách lĩnh vực cho desktop */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-6 text-base text-gray-600">
              {categories.slice(1).map((category, index) => (
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
