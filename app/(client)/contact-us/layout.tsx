import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Liên Hệ",
    description: "Liên hệ FOSO ngay hôm nay để được tư vấn miễn phí giải pháp phần mềm, thiết kế app, website cho doanh nghiệp của bạn ngay.",
    ogImage: "/seo/img/contact-us.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/about-us`,
});

export default function ContactUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
