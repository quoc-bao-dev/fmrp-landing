// import { createMetadata } from "@/managers/api-management/server/createMetadata";

import { getMetadata } from "@/components/seo/DefaultMetadata";
import { Metadata } from "next";

// export const generateMetadata = async () => createMetadata('home');

export const metadata = getMetadata({
    title: "FOSO - Liên Hệ",
    description: "Liên hệ FOSO ngay hôm nay để được tư vấn miễn phí giải pháp phần mềm, thiết kế app, website cho doanh nghiệp của bạn ngay.",
    ogImage: "/seo/img/contact-us.png",
    url: "https://fososoft.com/about-us",
});

export default function ContactUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
