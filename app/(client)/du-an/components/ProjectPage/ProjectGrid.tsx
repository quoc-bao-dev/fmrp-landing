"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

// Interface cho project data
interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  isHighlighted?: boolean;
}

// Interface cho props
interface ProjectGridProps {
  projects?: Project[];
  searchQuery?: string;
  activeTab?: string;
  selectedCategory?: string;
}

// Dữ liệu mẫu cho projects
const sampleProjects: Project[] = [
  {
    id: "1",
    title: "AFFISO: Nền tảng tiếp thị liên kết Blockchain hóa",
    description: "Effective Affiliate Platform with Blockchain Technology",
    category: "software",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "2",
    title: "KANOW: Ứng dụng đặt thuê xe linh hoạt cho mọi chuyến đi",
    description: "Find tours, places, and tour guides",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "3",
    title: "Haiau Corp: App hỗ trợ nhà nông tiếp cận sản phẩm chất lượng",
    description: "Ứng dụng hỗ trợ nông nghiệp thông minh",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "4",
    title: "Health Land Spa: Ứng dụng đặt lịch chăm sóc sắc đẹp",
    description: "Booking spa và chăm sóc sức khỏe",
    category: "mobile",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "5",
    title: "Camboquick: Website thương mại điện tử xuyên biên giới",
    description: "Nền tảng thương mại điện tử đa quốc gia",
    category: "website",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
  {
    id: "6",
    title: "FMRP: Phần mềm quản lý sản xuất chuyên sâu & chuyên nghiệp",
    description: "Hệ thống quản lý sản xuất và vận hành",
    category: "software",
    tags: ["Nổi bật"],
    image: "/api/placeholder/600/400",
    isHighlighted: true,
  },
];

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects = sampleProjects,
  searchQuery = "",
  activeTab = "all",
  selectedCategory = "all",
}) => {
  // Lọc projects dựa trên search query, active tab và selected category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === "all" || project.category === activeTab;

    const matchesCategory = selectedCategory === "all"; // Có thể mở rộng logic này

    return matchesSearch && matchesTab && matchesCategory;
  });

  return (
    <section className="w-full py-12">
      <div className="custom-container">
        {/* Grid container với responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show more button */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 h-auto rounded-full border-2 border-gray-200 hover:border-[#53B086] text-gray-700 hover:text-[#53B086] font-semibold transition-all duration-300"
            >
              Xem Thêm
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 text-lg">
              Không tìm thấy dự án nào phù hợp
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Component ProjectCard riêng biệt
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container với aspect ratio cố định */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder image với gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm font-medium">
            {project.title.substring(0, 20)}...
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tags overlay */}
        {project.tags.length > 0 && (
          <div className="absolute top-4 left-4">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-yellow-400 text-yellow-900 font-semibold text-xs px-3 py-1 rounded-full"
              >
                ⭐ {tag}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#53B086] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Action button */}
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto text-[#53B086] hover:text-[#53B086] hover:bg-transparent font-semibold group/btn"
        >
          <span>Xem chi tiết</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectGrid;
