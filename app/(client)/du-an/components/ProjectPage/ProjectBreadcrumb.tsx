import CustomBreadcrumb from "@/components/common/breadcrumb/CustomBreadcrumb";

const ProjectBreadcrumb = () => {
  return (
    <div className="custom-container  lg:pt-12 pt-16 flex items-center justify-center">
      <CustomBreadcrumb
        items={[{ label: "Trang chủ", href: "/" }, { label: "Dự án" }]}
      />
    </div>
  );
};

export default ProjectBreadcrumb;
