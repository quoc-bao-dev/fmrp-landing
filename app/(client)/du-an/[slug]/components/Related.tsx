import React, { useState } from "react";
import ProjectCard from "../../components/ProjectPage/ProjectCard";
import Image from "next/image";
import { IMAGES } from "@/constants/Images";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProjectList } from "@/managers/api/projects";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

// Component ảnh có fallback khi lỗi
const ImageWithFallback = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src || IMAGES.img);
  return (
    <Image
      src={imgSrc || IMAGES.img}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc(IMAGES.img)}
    />
  );
};

const Related = ({ slug }: { slug: string }) => {
  const { data: projectList, isLoading } = useProjectList({
    params: {
      current_page: 1,
      per_page: 3,
      id: slug,
    },
  });

  return (
    <div className="custom-container px-1 xl:px-0 flex flex-col gap-6 xl:gap-12 xl:py-24">
      <h2 className="text-[#050505] font-extrabold capitalize text-title-section-small">
        Dự án liên quan
      </h2>
      <div className="hidden lg:grid grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={`sk-${i}`} className="rounded-xl border border-[#F1F5F9] p-3">
                <Skeleton className="w-full aspect-[320/200] rounded-lg" />
                <div className="pt-6 md:pt-16 px-2 md:px-6 mb-2 md:pb-6 space-y-2">
                  <Skeleton className="h-14 w-full" />
                  <Skeleton className="h-6 w-2/3" />
                </div>
              </div>
            ))
          : projectList?.data?.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>

      <div className="lg:hidden flex flex-col gap-3">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div className="flex gap-3" key={`sk-m-${i}`}>
                <Skeleton className="size-[100px] flex-shrink-0 rounded-lg" />
                <div className="flex flex-col justify-center gap-2 flex-1">
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          : projectList?.data?.map((project: any) => (
              <Link href={`/du-an/${project.slug}`} className="flex gap-3" key={project.id}>
                <ImageWithFallback
                  src={project?.image}
                  alt="brand-avatar"
                  width={200}
                  height={200}
                  className="size-[100px] flex-shrink-0 rounded-lg object-cover"
                />
                <div className="flex flex-col justify-center gap-2 flex-1">
                  {project?.featured ? (
                    <div className="inline-flex w-fit items-center gap-1 bg-white border border-gray-50 px-1 py-0.5 rounded-full">
                      <Image
                        src="/project/icons/image-01.png"
                        alt=""
                        width={16}
                        height={16}
                        className="size-4"
                      />
                      <p className="text-[10px] text-light-900 font-semibold">
                        Nổi bật
                      </p>
                    </div>
                  ) : null}
                  <h3 className="text-sm text-light-900 font-extrabold line-clamp-2">
                    {project?.title}
                  </h3>
                  <Button
                    variant="ghost"
                    className="w-full gap-5 justify-end p-0 h-auto text-gray-500 hover:text-[#53B086] hover:bg-transparent font-semibold group/btn"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Button>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Related;
