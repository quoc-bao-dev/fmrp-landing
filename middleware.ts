import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Danh sách từ khóa nghi ngờ (có thể bổ sung tùy ý)
const spammyKeywords = ['xổ số', 'vietlott', 'casino', 'thuốc', 'bet', 'seo', 'backlink', 'hack', 'tăng like']

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const query = decodeURIComponent(url.search || '')

  const hasSlash = query.includes('/')
  const hasSpamKeyword = spammyKeywords.some(keyword => query.toLowerCase().includes(keyword))

  // Nếu query đáng ngờ → chuyển sang trang 404
  if (hasSlash || hasSpamKeyword) {
    url.pathname = '/404'
    url.search = ''
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/home'],
}
