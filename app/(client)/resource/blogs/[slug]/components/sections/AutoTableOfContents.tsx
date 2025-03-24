'use client'
import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { animate } from 'framer-motion'

interface TocItem {
    id: string
    text: string
    level: number
    index: string
    children: TocItem[]
}

export default function AutoTableOfContents() {
    const [isOpen, setIsOpen] = useState(false)
    const [tocItems, setTocItems] = useState<TocItem[]>([])
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const articleContent = document.querySelector('.article-content')
        if (!articleContent) return

        const buildToc = () => {
            const headings = articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6')
            const items: TocItem[] = []
            const levelStack: TocItem[] = []

            headings.forEach((heading, index) => {
                const level = parseInt(heading.tagName.substring(1))
                let id = heading.id
                const text = heading.textContent || ''

                // nếu chưa có id thì tạo
                if (!id) {
                    id = `heading-${index}`
                    heading.id = id
                }

                const newItem: TocItem = {
                    id,
                    text,
                    level,
                    index: '',
                    children: []
                }

                if (level === 2) {
                    items.push(newItem)
                    levelStack[0] = newItem
                } else {
                    for (let i = level - 3; i >= 0; i--) {
                        if (levelStack[i]) {
                            levelStack[i].children.push(newItem)
                            levelStack[level - 2] = newItem
                            break
                        }
                    }
                }
            })

            const addIndexes = (items: TocItem[], parentIndex: string = '') => {
                items.forEach((item, i) => {
                    const currentIndex = parentIndex ? `${parentIndex}.${i + 1}` : `${i + 1}`
                    item.index = currentIndex
                    if (item.children.length > 0) {
                        addIndexes(item.children, currentIndex)
                    }
                })
            }

            addIndexes(items)
            setTocItems(items)
            setIsOpen(true)
        }

        // Theo dõi sự thay đổi DOM để chỉ build TOC khi content có
        const observer = new MutationObserver((mutations) => {
            buildToc()
        })

        observer.observe(articleContent, { childList: true, subtree: true })
        buildToc() // lần đầu

        return () => observer.disconnect()
    }, [])

    // useEffect(() => {
    //     if (tocItems.length === 0) return;

    //     const headingElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

    //     if (headingElements.length === 0) return;

    //     const observer = new IntersectionObserver((entries) => {
    //         const visible = entries
    //             .filter(entry => entry.isIntersecting)
    //             .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    //         if (visible.length > 0) {
    //             setActiveId(visible[0].target.id);
    //         }
    //     }, {
    //         rootMargin: '0px 0px -70% 0px',
    //         threshold: 0.1
    //     });

    //     headingElements.forEach(el => observer.observe(el));

    //     return () => {
    //         headingElements.forEach(el => observer.unobserve(el));
    //     };
    // }, [tocItems]);

    useEffect(() => {
        if (tocItems.length === 0) return;

        // Lấy toàn bộ tocItems bao gồm cả children
        const flattenToc = (items: TocItem[]): TocItem[] =>
            items.reduce<TocItem[]>((acc, item) => {
                acc.push(item);
                if (item.children?.length) acc.push(...flattenToc(item.children));
                return acc;
            }, []);

        const allTocItems = flattenToc(tocItems);
        const headingElements = allTocItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];

        if (headingElements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length > 0) {
                setActiveId(visible[0].target.id);
            }
        }, {
            rootMargin: '0px 0px -65% 0px', // hơi cao hơn để active sớm
            threshold: 0.4
        });

        headingElements.forEach(el => observer.observe(el));

        return () => {
            headingElements.forEach(el => observer.unobserve(el));
        };
    }, [tocItems]);

    const renderTocItem = (item: TocItem) => {
        const isActive = item.id === activeId;
        const isLevel2 = item.level === 2;
        const isLevel3 = item.level === 3;
        const isLevel4 = item.level === 4;

        const padding = isLevel3 ? "pl-4" : isLevel4 ? "pl-8" : "";
        const textSize = isLevel2 ? "text-[16px]" : "text-[15px]";
        const activeStyle = isActive ? "!text-[#15AA7A] font-bold" : "";

        console.log('isActive', isActive);


        return (
            <div key={item.id}>
                {/* <Link
                    href={`#${item.id}`}
                    className={`block py-1 ${padding} ${textSize}  ${activeStyle} hover:text-[#15AA7A] transition-all`}
                >
                    {item.text}
                </Link> */}

                <div
                    key={item.id}
                    onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.id);
                        if (el) {
                            const yOffset = -80; // offset để không bị che bởi header
                            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

                            animate(window.scrollY, y, {
                                duration: 0.6,
                                onUpdate: (latest) => window.scrollTo(0, latest),
                                ease: [0.25, 0.1, 0.25, 1]
                            });
                        }

                    }}
                    className={`block py-1 cursor-pointer ${padding} ${textSize} ${activeStyle} hover:text-[#15AA7A] transition-all`}
                >
                    {item.text}
                </div>

                {item.children.length > 0 && (
                    <div className="space-y-1 mt-1">
                        {item.children.map(renderTocItem)}
                    </div>
                )}
            </div>
        );
    };

    console.log("activeId:", activeId);

    return (
        <div className="bg-white space-y-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <p className="text-title font-extrabold">Nội dung bài viết</p>
                {isOpen ? <ChevronUp className="h-5 w-5 text-[#15AA7A]" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </div>

            {isOpen && (
                <div className="py-2">
                    {tocItems && tocItems.length > 0 ? (
                        <ul className="space-y-2">{tocItems.map(renderTocItem)}</ul>
                    ) : (
                        <p className="text-gray-500">Đang tải mục lục...</p>
                    )}
                </div>
            )}
        </div>
    )
}
