import { Metadata } from "next";

type MetadataProps = {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    url?: string;
};

export const getMetadata = ({
    title = "FOSO - Giải pháp công nghệ cho doanh nghiệp",
    description = "FOSO cung cấp giải pháp công nghệ giúp doanh nghiệp tối ưu vận hành, từ giải pháp phần mềm đến thiết kế app mobile và website theo yêu cầu.",
    keywords = "FOSO, thiết kế website, phát triển phần mềm, công nghệ cho SME",
    ogImage = "/opengraph-image.png",
    url = "https://fososoft.com",
}: MetadataProps): Metadata => ({
    title,
    description,
    keywords,
    openGraph: {
        title,
        description,
        url,
        siteName: "FOSO",
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: "FOSO Logo",
            },
        ],
        locale: "vi_VN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@foso",
        creator: "@foso",
        title,
        description,
        images: [
            {
                url: ogImage,
                alt: "FOSO Logo",
            },
        ],
    },
    robots: "index, follow",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
});
