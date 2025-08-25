"use client";

import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";

const ProjectSection: React.FC = () => {
  // State để quản lý các bộ lọc
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("0");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  console.log("searchQuery", searchQuery);
  console.log("activeTab", activeTab);
  console.log("selectedCategories", selectedCategories);

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
