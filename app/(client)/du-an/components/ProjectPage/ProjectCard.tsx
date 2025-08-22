import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  brandAvatar?: string;
  isHighlighted?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/du-an/du-an-chi-tiet`} className="group relative md:bg-white rounded-2xl overflow-hidden md:shadow-lg md:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container với aspect ratio cố định */}
      <div className="relative aspect-[4/3]">
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl md:rounded-none"
        />

        {/* Brand Avatar - Desktop only */}
        {project.brandAvatar && (
          <div className="hidden md:block absolute -bottom-7 left-[17%] transform -translate-x-1/2 z-10">
            <div className="relative">
              <img src="/project/image-05.png" alt="" className="" />
              <div className="absolute top-[6px] left-[] w-full h-full flex items-center justify-center">
                <div className="size-[60px] rounded-full overflow-hidden bg-white p-1">
                  <img
                    src={project.brandAvatar}
                    alt={`${project.title} brand avatar`}
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tags overlay */}
        {project.tags.length > 0 && (
          <div className="absolute top-4 left-4">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1 bg-white border border-gray-50 text-gray-900 font-semibold text-xs px-3 py-1 rounded-full"
              >
                <img
                  src="/project/icons/image-01.png"
                  alt=""
                  className="size-4"
                />{" "}
                <p className="mt-0.5">{tag}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pt-4 md:pt-16 md:px-6 md:pb-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#53B086] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Action button */}
        <Button
          variant="ghost"
          className="hidden md:flex mt-6 w-full gap-5 justify-end p-0 h-auto text-gray-500 hover:text-[#53B086] hover:bg-transparent font-semibold group/btn"
        >
          <span>Xem chi tiết</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Button>
      </div>
    </Link>
  );
};

export default ProjectCard;
