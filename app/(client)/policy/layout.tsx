import { getMetadata } from "@/components/seo/DefaultMetadata";

export const metadata = getMetadata({
    title: "FOSO - Chính sách",
    description: "FOSO – Chính sách của FOSO",
    ogImage: "/opengraph-image.png",
    url: `${process.env.NEXT_PUBLIC_URL_WEBSITE}/policy`,
});

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return children
}
