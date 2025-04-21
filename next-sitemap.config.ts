import type { IConfig } from 'next-sitemap'

const config: IConfig = {
    siteUrl: 'https://fososoft.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin', '/private'], // thêm nếu có
}

export default config
