"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";

const ProjectSection: React.FC = () => {
  // Hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  // State để quản lý các bộ lọc
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("0");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Ref để tham chiếu đến section cần scroll
  const sectionRef = useRef<HTMLDivElement>(null);

  // Hàm xử lý scroll đến đầu section
  const handleScroll = () => {
    if (sectionRef.current) {
      const yOffset = -100; // Offset để tránh bị che bởi header cố định
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // Effect để đọc query parameter khi component mount
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setActiveTab(tabParam);
      // Auto scroll xuống section khi có query param
      setTimeout(() => {
        handleScroll();
      }, 100); // Delay nhỏ để đảm bảo component đã render
    }
  }, [searchParams]);

  // Handlers để xử lý thay đổi từ ProjectFilter
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    // Cập nhật URL với query parameter
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div ref={sectionRef} className="w-full">
      {/* Project Filter Section - Bộ lọc và tìm kiếm */}
      <ProjectFilter
        onSearchChange={handleSearchChange}
        onTabChange={handleTabChange}
        onCategoryChange={handleCategoryChange}
        onScroll={handleScroll}
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
