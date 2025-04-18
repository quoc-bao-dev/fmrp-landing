// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - FMRP - Phần Mềm Quản Lý Xưởng Sản Xuất Online",
    description: "FMRP – Phần mềm quản lý sản xuất dành cho xưởng sản xuất, giúp tối ưu quy trình sản xuất hiệu quả trên đa nền tảng.",
    ogImage: "/seo/img/fmrp.png",
    url: "https://fososoft.com/products/phan-mem-quan-ly-san-xuat-fmrp",
});

export default function FmrpLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
