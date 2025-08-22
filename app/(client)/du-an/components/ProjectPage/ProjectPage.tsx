"use client";

import React, { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";
import Tagline from "./Tagline";
import BusinessSupport from "./BusinessSupport";

const ProjectPage = () => {
  // State để quản lý filter
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Handlers để truyền từ ProjectFilter xuống ProjectGrid
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Tagline */}
      <div className="pt-[67px]"></div>
      <Tagline />

      {/* Project Filter */}
      <ProjectFilter
        onSearchChange={handleSearchChange}
        onTabChange={handleTabChange}
        onCategoryChange={handleCategoryChange}
        activeTab={activeTab}
        selectedCategory={selectedCategory}
      />

      {/* Project Grid */}
      <ProjectGrid
        searchQuery={searchQuery}
        activeTab={activeTab}
        selectedCategory={selectedCategory}
      />

      {/* Business Support CTA */}
      <BusinessSupport />
    </div>
  );
};

export default ProjectPage;
