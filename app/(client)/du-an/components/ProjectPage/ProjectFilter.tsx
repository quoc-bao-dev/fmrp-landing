"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Check, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Định nghĩa kiểu dữ liệu cho tabs
interface TabItem {
  id: string;
  label: string;
  iconPath: string;
}

// Định nghĩa kiểu dữ liệu cho props
interface ProjectFilterProps {
  onSearchChange?: (value: string) => void;
  onTabChange?: (tabId: string) => void;
  onCategoryChange?: (category: string) => void;
  activeTab?: string;
  selectedCategory?: string;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  onSearchChange,
  onTabChange,
  onCategoryChange,
  activeTab = "all",
  selectedCategory = "all",
}) => {
  // State cho search input
  const [searchValue, setSearchValue] = useState("");
  // State cho dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dữ liệu mẫu cho các tabs với icon paths
  const tabs: TabItem[] = [
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

  // Xử lý clear search
  const handleClearSearch = () => {
    setSearchValue("");
    onSearchChange?.("");
  };

  // Xử lý chọn tab
  const handleTabClick = (tabId: string) => {
    onTabChange?.(tabId);
  };

  // Xử lý chọn category
  const handleCategoryChange = (category: string) => {
    onCategoryChange?.(category);
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
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`
                    relative p-6 items-center gap-4 
                    border rounded-[24px] transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-gray-400/10 bg-white text-gray-700 
                  `}
                >
                  {/* Dấu tích bo tròn ở góc trên bên phải khi tab được chọn */}
                  {activeTab === tab.id && (
                    <div
                      className="absolute -top-0 -right-0 w-14 h-8 bg-[#53B086] flex items-center justify-center shadow-lg z-10"
                      style={{
                        borderRadius: "0 23px 0 50px",
                      }}
                    >
                      <Check className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="size-[70px] flex items-center justify-center">
                    <Image
                      src={tab.iconPath}
                      alt={tab.label}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  {/* Label */}
                  <p className="pt-4 text-xl font-semibold">{tab.label}</p>
                </div>
              ))}
            </div>

            {/* Mobile: horizontal scroll tabs */}
            <div className="lg:hidden">
              <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`
                      relative flex-shrink-0 h-auto p-4 flex items-center gap-3
                       rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer
                      ${
                        activeTab === tab.id
                          ? "bg-white border border-[#A1A1A11A] text-gray-700 shadow-lg"
                          : "bg-none border-gray-200 text-[#809FB8] hover:border-[#53B086] hover:shadow-md"
                      }
                    `}
                  >
                    {/* Icon */}
                    <div className="size-[24px] flex items-center justify-center flex-shrink-0">
                      <Image
                        src={tab.iconPath}
                        alt={tab.label}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>

                    {/* Label */}
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phần search và filter */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center w-full">
            {/* Search input - responsive width */}
            <div className="relative flex-1">
              <div className="relative w-full">
                <Input
                  type="text"
                  value={searchValue}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Tìm kiếm dự án"
                  className={`
                    w-full
                    pl-4 pr-20 h-[72px]
                    rounded-[12px] border border-gray-50 bg-white
                    text-sm font-medium focus:ring-1 focus:border-primary ring-blue-400! placeholder:text-gray-400
                    transition-all duration-300 shadow-xl
                  `}
                />

                {/* Clear button */}
                {searchValue && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearSearch}
                    className="absolute right-[80px] top-1/2 transform -translate-y-1/2 size-8 bg-gray-950 p-0 text-gray-50 rounded-full hover:text-gray-600"
                  >
                    <XIcon />
                  </Button>
                )}

                {/* Search button */}
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 size-[48px] p-0 bg-[#53B086] hover:bg-[#53B086]/90 rounded-[12px]"
                >
                  <Search className="size-6 text-white" />
                </Button>
              </div>
            </div>

            {/* Category dropdown - responsive width */}
            <div className="relative w-full lg:w-auto lg:min-w-[200px]">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`
                    relative h-[72px] px-4 py-3 flex items-center justify-between
                    rounded-[12px] border cursor-pointer transition-all duration-300
                    text-sm font-semibold
                    ${
                      selectedCategory !== "all"
                        ? "bg-white border-[#53B086] text-gray-700 shadow-lg"
                        : isDropdownOpen
                        ? "bg-white border-[#53B086] text-gray-700 shadow-lg"
                        : "bg-white border-gray-200 text-gray-700 hover:border-[#53B086] hover:shadow-md"
                    }
                  `}
              >
                <span>
                  {selectedCategory === "all"
                    ? "Lĩnh vực"
                    : categories.find((cat) => cat.value === selectedCategory)
                        ?.label || "Lĩnh vực"}
                </span>

                <ChevronDown
                  className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <>
                  {/* Overlay để đóng dropdown khi click outside */}
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />

                  {/* Dropdown content */}
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-20 max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                      <div
                        key={category.value}
                        onClick={() => {
                          handleCategoryChange(category.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`
                          px-4 py-3 text-sm font-medium cursor-pointer transition-colors duration-200
                          ${
                            selectedCategory === category.value
                              ? "bg-[#53B086]/10 text-[#53B086] font-semibold"
                              : "text-gray-700 hover:bg-[#53B086]/5"
                          }
                          ${
                            category.value === categories[0].value
                              ? "rounded-t-xl"
                              : ""
                          }
                          ${
                            category.value ===
                            categories[categories.length - 1].value
                              ? "rounded-b-xl"
                              : ""
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category.label}</span>
                          {selectedCategory === category.value && (
                            <Check className="w-4 h-4 text-[#53B086] stroke-[2.5]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
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
