import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FPOS - Phần Mềm FPOS",
    description: "FPOS – Phần mềm quản lý sản xuất dành cho xưởng sản xuất, giúp tối ưu quy trình sản xuất hiệu quả trên đa nền tảng.",
    ogImage: "/seo/img/fmrp.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/phan-mem-quan-ly-san-xuat-fmrp`,
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
