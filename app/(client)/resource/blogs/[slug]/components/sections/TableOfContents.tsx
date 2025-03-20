'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'

interface TocItem {
    id: string
    text: string
    level: number
    index: string
    children: TocItem[]
}

export default function AutoTableOfContents() {
    const [isOpen, setIsOpen] = useState(true)
    const [tocItems, setTocItems] = useState<TocItem[]>([])

    useEffect(() => {
        // Tìm tất cả các heading trong bài viết
        const articleContent = document.querySelector('.article-content')
        if (!articleContent) return

        const headings = articleContent.querySelectorAll('h1, h2, h3, h4, h5, h6')

        // Xây dựng cấu trúc TOC
        const items: TocItem[] = []
        const levelStack: TocItem[] = []

        headings.forEach((heading) => {
            const level = parseInt(heading.tagName.substring(1))
            const id = heading.id
            const text = heading.textContent || ''

            // Bỏ qua nếu không có id hoặc text
            if (!id || !text) return

            // Tạo item mới
            const newItem: TocItem = {
                id,
                text,
                level,
                index: '',
                children: []
            }

            // Xác định vị trí của item trong cấu trúc TOC
            if (level === 2) { // h2 là cấp cao nhất trong bài viết
                items.push(newItem)
                levelStack[0] = newItem
            } else {
                // Tìm parent phù hợp
                for (let i = level - 3; i >= 0; i--) {
                    if (levelStack[i]) {
                        levelStack[i].children.push(newItem)
                        levelStack[level - 2] = newItem
                        break
                    }
                }
            }
        })

        // Thêm số thứ tự
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
    }, [])

    // Render TOC item và các children của nó
    const renderTocItem = (item: TocItem) => {
        return (
            <li key={item.id}>
                <Link
                    href={`#${item.id}`}
                    className="text-blue-600 hover:text-blue-800 block py-1"
                >
                    {item.index}. {item.text}
                </Link>

                {item.children.length > 0 && (
                    <ul className="pl-4 space-y-1 mt-1">
                        {item.children.map(renderTocItem)}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <div className="bg-white space-y-2">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-title font-extrabold">
                    Nội dung bài viết
                </p>

                {
                    isOpen ?
                        (
                            <ChevronUp className="h-5 w-5 text-[#15AA7A]" />
                        )
                        :
                        (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                        )
                }
            </div>

            {
                isOpen && (
                    <div className="py-2">
                        {
                            tocItems.length > 0 ?
                                (
                                    <ul className="space-y-2">
                                        {tocItems.map(renderTocItem)}
                                    </ul>
                                )
                                :
                                (
                                    <p className="text-gray-500">Đang tải mục lục...</p>
                                )
                        }
                    </div>
                )
            }
        </div>
    )
}

