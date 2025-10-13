"use client";

import BannerBottomBlog from "@/app/(client)/resource/blogs/[id]/components/sections/BannerBottomBlog";
import AvatarCustom from "@/components/common/avatar/AvatarCustom";
import BannerVerticalBlog from "@/components/common/banner/BannerVerticalBlog";
import BannerVerticalFmrp from "@/components/common/banner/BannerVerticalFmrp";
import BlurImage from "@/components/common/blur/BlurImage";
import CustomBreadcrumb from "@/components/common/breadcrumb/CustomBreadcrumb";
import BlogContentSkeleton from "@/components/common/skeleton/blogs/BlogContentSkeleton";
import CalendarBlankIcon from "@/components/icons/common/CalendarBlankIcon";
import ClockIcon from "@/components/icons/common/ClockIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { useHideOnScrollBottom } from "@/hooks/custom/useHideOnScrollBottom";
import { uuidv4 } from "@/lib/uuid";
import { useBlogsList } from "@/managers/api/blogs/useBlogsList";
import { IBlogItem } from "@/types/blog/IBlog";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import moment from "moment";
import { useParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuoteBox from "../../../../../components/common/quote/QuoteBox";
import { FORMAT_DATE } from "../../../../../constants/FormatDate";
import { useGetDataDetailBlog } from "../../../../../managers/api/blogs/useGetDataDetailBlog";
import { useResizeStore } from "../../../../../stores/useResizeStore";
import AuthorCard from "./components/sections/AuthorCard";
import AutoTableOfContents from "./components/sections/AutoTableOfContents";
import ReactionBox from "./components/ui/ReactionBox";
import RelatedBlogList from "./components/ui/RelatedBlogList";
import SocialShare from "./components/ui/SocialShare";
import { removeFontWeight400 } from "@/utils/format/FormatFont";

type Props = {};

const breadcrumbItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Tài nguyên", href: "#" },
  { label: "Blog", href: "/resource/blogs" },
  // { label: "Quản Lý Sản Xuất" },
];

const dataTypeBlog = [
  {
    name: "Quản lý sản xuất",
    id: 1,
    color: "#0F4F9E",
  },
  {
    name: "Quản lý Bán Hàng",
    id: 2,
    color: "#15AA7A",
  },
];

const dataBlogList: IBlogItem[] = [
  {
    id: uuidv4(),
    image: "/example/blog/blog1.png",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    type_blog: [
      {
        name: "Quản lý sản xuất",
        id: 1,
        color: "#0F4F9E",
      },
      {
        name: "Quản lý Bán Hàng",
        id: 2,
        color: "#15AA7A",
      },
    ],
    created_date: "17/11/2025",
    time_read: "20 phút đọc",
  },
  {
    id: uuidv4(),
    image: "/example/blog/blog1.png",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    type_blog: [
      {
        name: "Quản lý Bán Hàng",
        id: 2,
        color: "#15AA7A",
      },
    ],
    created_date: "17/11/2025",
    time_read: "20 phút đọc",
  },
  {
    id: uuidv4(),
    image: "/example/blog/blog1.png",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    type_blog: [
      {
        name: "Thiết Kế Website",
        id: 3,
        color: "#555CF3",
      },
    ],
    created_date: "17/11/2025",
    time_read: "20 phút đọc",
  },
];

const DetailBlog = () => {
  const idBlog = useParams();
  // if (idBlog.id && idBlog?.id === "thiet-ke-app-mobile") {
  //    idBlog.id = "thiet-ke-app-mobile-1"
  // }
  const lastStateRef = useRef<"show" | "hide">("hide");
  const swiperRef = useRef<any>(null);
  const { isVisibleTablet } = useResizeStore();
  const { data: dataBlogDetail, isLoading: isLoadingBlogDetail } =
    useGetDataDetailBlog({ slug: idBlog?.id });

  const { data: dataBlogsRelatedList, isLoading: isLoadingBlogsRelatedList } =
    useBlogsList({
      page: 1,
      limit: 3,
      idBlog: dataBlogDetail?.id,
      enabled: !!dataBlogDetail?.id,
    });

  const customPagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class=${className}></span>`;
    },
  };

  const addIdsToHeadings = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      const slug = text.toLowerCase().replace(/[^\w]+/g, "-"); // chuyển thành slug
      heading.id = `${slug}-${index}`; // tránh trùng id
    });

    return doc.body.innerHTML;
  };

  const controls = useAnimation();
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        const scrollY = window.scrollY;

        if (scrollY > 300 && lastStateRef.current !== "show") {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 500, damping: 40 },
          });
          lastStateRef.current = "show";
        } else if (scrollY <= 300 && lastStateRef.current !== "hide") {
          controls.start({
            y: 100,
            opacity: 0,
            transition: { duration: 0.3 },
          });
          lastStateRef.current = "hide";
        }
      }, 500); // debounce 100ms
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chạy lần đầu

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [controls]);
  const isScrollBottom = useHideOnScrollBottom(450);
  return (
    <main className="relative">
      <div className="custom-padding-section relative">
        <div className="custom-container 3xl:space-y-14 space-y-10 sm:px-0 px-4 ">
          <div className="lg:pt-8 pt-16">
            <CustomBreadcrumb items={breadcrumbItems} />
          </div>

          <div className="flex lg:flex-row flex-col 3xl:gap-8 gap-6">
            <div className="3xl:w-[74%] xxl:w-[70%] lg:w-[73%] w-full shrink-0 flex flex-col lg:gap-8 gap-4">
              {isLoadingBlogDetail ? (
                <BlogContentSkeleton />
              ) : (
                <React.Fragment>
                  <div className="rounded-lg">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        {dataBlogDetail?.type_blog &&
                          dataBlogDetail?.type_blog?.map((item: any) => (
                            <div
                              key={`tag-${item.id}`}
                              className="px-3 py-2 3xl:text-[13px] text-xs text-white font-semibold rounded-lg capitalize"
                              style={{
                                background: item.color,
                              }}
                            >
                              {item?.name ?? ""}
                            </div>
                          ))}
                      </div>

                      <h1 className="text-title-section-small font-extrabold mb-2">
                        {dataBlogDetail?.title}
                      </h1>

                      <div className="flex md:flex-row flex-col md:items-center md:justify-between md:gap-2 gap-4">
                        <div className="flex items-center 3xl:gap-4 gap-2">
                          <AvatarCustom
                            classNameContainer="size-16 border border-[#F1F5F7] flex items-center justify-center shadow-md"
                            classImage="!size-full !rounded-none object-cover"
                            avatar={
                              dataBlogDetail?.created?.avatar ||
                              "/avatar/common/avatar-foso.png"
                            }
                          />

                          <div className="space-y-0.5">
                            <div className="text-sm text-[#667F93] font-medium">
                              Tác giả
                            </div>

                            <div className="2xl:text-base lg:text-sm text-base font-bold capitalize">
                              {dataBlogDetail?.created?.name}
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center lg:gap-8 gap-2 2xl:text-base text-sm  font-medium">
                          <div className="flex items-center gap-1 text-[#667F93] lg:pr-8 pr-2 border-r">
                            <CalendarBlankIcon className="mr-1 3xl:size-6 size-5" />
                            <span>
                              Cập nhật vào:{" "}
                              {moment(dataBlogDetail?.updated_at)?.format(
                                FORMAT_DATE?.DATE_TIME_SLASH_SHORT
                              )}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[#667F93]">
                            <ClockIcon className="mr-1 3xl:size-6 size-5" />

                            <span>
                              {dataBlogDetail?.number_read ?? 10} phút đọc
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {dataBlogDetail?.image && (
                      <div className="mt-8">
                        <div className="w-full h-auto aspect-3/2 rounded-xl overflow-hidden">
                          <BlurImage
                            src={`${dataBlogDetail?.image}`}
                            alt={"CEO FOSO"}
                            width={1920}
                            height={1080}
                            className="w-full h-auto aspect-3/2 object-contain"
                            classNameContainer="rounded-xl size-full aspect-3/2 hover:scale-[1.02] custom-transition"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <QuoteBox content={dataBlogDetail?.descption} />

                    <div className="article-content">
                      <p
                        className="
                                    text-[#33404A] font-medium
                                    [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4
                                    [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3
                                    [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2
                                    [&_h4]:text-xl [&_h4]:font-medium [&_h4]:mt-4 [&_h4]:mb-1
                                    [&_h5]:text-lg [&_h5]:font-medium [&_h5]:mt-3 [&_h5]:mb-1.5
                                    [&_h6]:text-base [&_h6]:font-medium [&_h6]:mt-2 [&_h6]:mb-1
                                    3xl:[&_p]:text-lg [&_p]:text-base [&_p]:font-medium [&_p]:mt-2 [&_p]:mb-1 
                                    [&_img]:mx-auto [&_img]:rounded-md [&_img]:my-6
                                    [&_figure]:flex [&_figure]:justify-center [&_figure]:my-6
                                    [&_a]:w-fit [&_a:has(img)]:w-full [&_a:has(img)]:inline-block
                                  [&_a:not(:has(img))]:text-blue-600 [&_a:not(:has(img))]:underline
                                    [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:text-sm
                                    [&_table]:border [&_table]:border-gray-300
                                  [&_th]:bg-gray-100 [&_th]:border [&_th]:border-gray-300 [&_th]:p-2 [&_th]:text-left
                                    [&_td]:border [&_td]:border-gray-300 [&_td]:p-2
                                    [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-4
                                "
                        dangerouslySetInnerHTML={{
                          __html: `${addIdsToHeadings(
                            removeFontWeight400(dataBlogDetail?.content ?? "")
                          )}`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center xl:justify-end">
                    <SocialShare
                      classNameContainer={
                        "w-full xl:w-fit flex flex-col items-center xl:items-start justify-end gap-4 z-40"
                      }
                      classNameSocial={"flex items-end justify-start gap-2"}
                    />
                  </div>

                  {dataBlogDetail?.created?.name === "An Bùi" && <AuthorCard />}
                  <ReactionBox />
                </React.Fragment>
              )}
            </div>

            {!isVisibleTablet && (
              <div className="3xl:w-[26%] xxl:w-[30%] lg:w-[27%] w-full">
                <div className="sticky top-28 space-y-8">
                  {isLoadingBlogDetail ? (
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Skeleton className="w-full h-8" />
                        <div className="flex flex-col justify-end pl-8 space-y-1">
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="w-full h-8" />
                        <div className="flex flex-col justify-end pl-8 space-y-1">
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="w-full h-8" />
                        <div className="flex flex-col justify-end pl-8 space-y-1">
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                          <Skeleton className="w-full h-5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <AutoTableOfContents
                      isLoadingBlogDetail={isLoadingBlogDetail}
                    />
                  )}
                  <BannerVerticalFmrp />
                  <BannerVerticalBlog />
                </div>
              </div>
            )}
          </div>

          <RelatedBlogList dataBlogList={dataBlogsRelatedList?.data || []} />

          {isVisibleTablet && (
            <div className="w-full">
              <Swiper
                slidesPerView={4}
                spaceBetween={60}
                modules={[Pagination, Autoplay]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                // loop
                autoplay={true}
                speed={1000}
                pagination={customPagination}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1920: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                  },
                }}
                className="custom-swiper-pagination lg:h-full md:h-[560px] h-[620px] rounded-2xl mx-2"
                allowTouchMove={true}
              >
                <SwiperSlide className="h-full">
                  <BannerVerticalFmrp />
                </SwiperSlide>
                <SwiperSlide className="h-full">
                  <BannerVerticalBlog />
                </SwiperSlide>
              </Swiper>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {dataBlogDetail?.register === 1 && !isLoadingBlogDetail && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={controls}
            className=" sticky bottom-0 bg-[#EBF5FF] overflow-hidden z-40 rounded-b-3xl "
          >
            <BannerBottomBlog />
          </motion.div>
        )}
      </AnimatePresence>
      {/* {!isVisibleTablet && !isScrollBottom && (
        <div>
          <SocialShare
            classNameContainer={
              "fixed 3xl:left-24 xxl:left-12 xl:left-8 left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-20"
            }
            classNameSocial={"flex flex-col items-center justify-center gap-4"}
          />
        </div>
      )} */}
    </main>
  );
};

export default DetailBlog;
