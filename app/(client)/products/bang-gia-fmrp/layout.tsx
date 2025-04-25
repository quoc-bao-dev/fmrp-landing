// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FMRP - Bảng giá FMRP",
    description: "FMRP – Phần mềm quản lý sản xuất dành cho xưởng sản xuất, giúp tối ưu quy trình sản xuất hiệu quả trên đa nền tảng.",
    ogImage: "/seo/img/bang-gia-fmrp.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/bang-gia-fmrp`,
});

export default function PricingFmrpLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
