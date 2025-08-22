"use client";

import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import Tagline from "./Tagline";
import CTASection from "@/app/(client)/about-us/components/sections/CTASection";

/**
 * ProjectSection Component
 *
 * Tổng hợp toàn bộ nội dung trang dự án bao gồm:
 * - Tagline: Tiêu đề và mô tả chính của trang
 * - ProjectFilter: Bộ lọc và tìm kiếm dự án
 * - ProjectGrid: Lưới hiển thị các dự án
 * - CTASection: Call-to-action cuối trang
 */

const ProjectSection: React.FC = () => {
  // State để quản lý các bộ lọc
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handlers để xử lý thay đổi từ ProjectFilter
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="w-full">
      {/* Project Filter Section - Bộ lọc và tìm kiếm */}
      <ProjectFilter
        onSearchChange={handleSearchChange}
        onTabChange={handleTabChange}
        onCategoryChange={handleCategoryChange}
        activeTab={activeTab}
        selectedCategories={selectedCategories}
      />

      {/* Project Grid Section - Hiển thị danh sách dự án */}
      <ProjectGrid
        searchQuery={searchQuery}
        activeTab={activeTab}
        selectedCategories={selectedCategories}
      />
    </div>
  );
};

export default ProjectSection;
