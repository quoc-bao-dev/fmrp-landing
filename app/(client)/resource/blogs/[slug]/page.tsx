'use client'

import CustomBreadcrumb from '@/components/common/breadcrumb/CustomBreadcrumb'
import React from 'react'
import TableOfContents from './components/sections/TableOfContents';
import BannerVerticalFmrp from '@/components/common/banner/BannerVerticalFmrp';
import BannerVerticalBlog from '@/components/common/banner/BannerVerticalBlog';
import Image from 'next/image';
import AvatarCustom from '@/components/common/avatar/AvatarCustom';

type Props = {}

const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tài nguyên", href: "#" },
    { label: "Blog", href: "/resource/blogs" },
    { label: "Quản Lý Sản Xuất" },
];

const Blogs = (props: Props) => {
    const dataBlog = [
        {
            name: "Quản lý sản xuất",
            id: 1,
            color: "#0F4F9E",
        },
        {
            name: "Quản lý Bán Hàng",
            id: 2,
            color: "#15AA7A",
        },
    ]

    return (
        <main className='custom-padding-section'>
            <div className='custom-container space-y-10'>
                <div className='lg:pt-4 pt-8'>
                    <CustomBreadcrumb items={breadcrumbItems} />
                </div>

                <div className='flex 3xl:gap-8 gap-6'>
                    <div className='w-[70%]'>
                        <div className="rounded-lg p-6 mb-8">
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-wrap items-center gap-2'>
                                    {
                                        dataBlog?.map((item: any) => (
                                            <div
                                                key={`tag-${item.id}`}
                                                className='px-3 py-2 3xl:text-[13px] text-xs text-white font-semibold rounded-lg capitalize'
                                                style={{
                                                    background: item.color
                                                }}
                                            >
                                                {item?.name ?? ""}
                                            </div>
                                        ))
                                    }
                                </div>

                                <h1 className="text-title-section-small font-extrabold mb-2">
                                    Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
                                </h1>

                                <div className='flex items-center justify-between gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <AvatarCustom
                                            classNameContainer='size-16'
                                            avatar=''
                                        />

                                        <div className='space-y-0.5'>
                                            <div className='text-sm-default text-[#667F93] font-medium'>
                                                Tác giả
                                            </div>

                                            <div className="3xl:text-base text-sm  font-bold">
                                                FOSO Creator
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-calendar"
                                            >
                                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                                <line x1="16" x2="16" y1="2" y2="6" />
                                                <line x1="8" x2="8" y1="2" y2="6" />
                                                <line x1="3" x2="21" y1="10" y2="10" />
                                            </svg>
                                            <span>Đăng: 12/03/2024</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-eye"
                                            >
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <span>Lượt xem: 1,234</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-clock"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            <span>10 phút đọc</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Image
                                    src="/placeholder.svg?height=300&width=600"
                                    width={600}
                                    height={300}
                                    alt="Quy trình 5S là gì?"
                                    className="rounded-lg w-full"
                                />
                            </div>

                            <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-100 rounded-r-lg">
                                <blockquote className="text-blue-800 italic">
                                    "Cách tiếp cận để cùng nghiệp quản thích nghi và quy trình 5S là gì? Hãy đừng để chờ đợi để tự giải đáp,
                                    với bài viết này chúng tôi sẽ giúp bạn hiểu rõ hơn về quy trình 5S và các bước thực hiện cùng các quy
                                    trình liên kết."
                                </blockquote>
                            </div>
                        </div>

                        <div className="article-content">
                            <section id="quy-trinh-5s-la-gi" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Quy trình 5S là gì?</h2>
                                <p className="mb-4">
                                    Quy trình 5S được biết đến là một thuật ngữ trong tổ chức nơi làm việc. Nguyên tắc của quy trình 5S đến
                                    từ 5 chữ cái đầu tiên của 5 từ tiếng Nhật.
                                </p>
                                <p className="mb-4">
                                    Quy trình 5S không chỉ đơn thuần là dọn dẹp mà còn tạo ra một môi trường làm việc hiệu quả, trật tự và
                                    sạch sẽ. Quy trình này được áp dụng rộng rãi trong các doanh nghiệp.
                                </p>
                                <ul className="list-disc pl-6 mb-4 space-y-2 text-blue-700">
                                    <li>Seiri (Sàng lọc)</li>
                                    <li>Seiton (Sắp xếp)</li>
                                    <li>Seiso (Sạch sẽ)</li>
                                    <li>Seiketsu (Săn sóc)</li>
                                    <li>Shitsuke (Sẵn sàng thực hiện)</li>
                                </ul>
                            </section>

                            <section id="loi-ich-quy-trinh-5s-dem-lai" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Lợi ích quy trình 5S đem lại</h2>
                                <p className="mb-4">
                                    Quy trình 5S mang lại nhiều lợi ích cho doanh nghiệp, từ việc cải thiện môi trường làm việc đến tăng
                                    năng suất và chất lượng sản phẩm.
                                </p>
                                <p className="mb-4">
                                    Khi áp dụng đúng cách, quy trình 5S có thể giúp doanh nghiệp tiết kiệm thời gian, chi phí và tạo ra một
                                    môi trường làm việc chuyên nghiệp hơn.
                                </p>
                            </section>

                            <section id="tai-sao-doanh-nghiep-nen-ap-dung-quy-trinh-5s" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Tại sao doanh nghiệp nên áp dụng quy trình 5S?</h2>
                                <p className="mb-4">
                                    Có nhiều lý do khiến doanh nghiệp nên áp dụng quy trình 5S, dưới đây là một số lý do chính:
                                </p>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="cai-thien-ve-mat-moi-truong-lam-viec">
                                        Cải thiện về mặt môi trường làm việc
                                    </h3>
                                    <p>
                                        Môi trường làm việc sạch sẽ, gọn gàng giúp nhân viên cảm thấy thoải mái và làm việc hiệu quả hơn. Khi
                                        mọi thứ được sắp xếp ngăn nắp, thời gian tìm kiếm công cụ, tài liệu giảm đáng kể.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="tiet-kiem-thoi-gian-trong-tim-kiem">
                                        Tiết kiệm thời gian trong tìm kiếm
                                    </h3>
                                    <p>
                                        Khi mọi thứ đều có vị trí cố định và được sắp xếp hợp lý, nhân viên không cần mất thời gian tìm kiếm,
                                        từ đó tăng năng suất làm việc.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="tang-nang-suat-lam-viec">
                                        Tăng năng suất làm việc
                                    </h3>
                                    <p>
                                        Quy trình 5S giúp loại bỏ những thứ không cần thiết, sắp xếp mọi thứ một cách khoa học, từ đó giúp quá
                                        trình làm việc diễn ra trôi chảy và hiệu quả hơn.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="tiet-kiem-chi-phi">
                                        Tiết kiệm chi phí
                                    </h3>
                                    <p>
                                        Khi áp dụng quy trình 5S, doanh nghiệp có thể tiết kiệm chi phí từ việc giảm lãng phí, tăng tuổi thọ
                                        của thiết bị và giảm tai nạn lao động.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="tang-chat-luong-san-pham">
                                        Tăng chất lượng sản phẩm
                                    </h3>
                                    <p>
                                        Môi trường làm việc sạch sẽ, quy trình rõ ràng giúp giảm thiểu sai sót, từ đó nâng cao chất lượng sản
                                        phẩm và dịch vụ.
                                    </p>
                                </div>
                            </section>

                            <section id="quy-trinh-5s-gom-cac-buoc" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Quy trình 5S gồm các bước:</h2>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="seiri-sang-loc">
                                        Seiri (Sàng lọc)
                                    </h3>
                                    <p>
                                        Bước đầu tiên là phân loại và loại bỏ những thứ không cần thiết tại nơi làm việc. Chỉ giữ lại những gì
                                        thực sự cần thiết cho công việc hiện tại.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="seiton-sap-xep">
                                        Seiton (Sắp xếp)
                                    </h3>
                                    <p>
                                        Sắp xếp mọi thứ một cách có trật tự, khoa học để dễ dàng tìm kiếm và sử dụng. Mỗi vật dụng đều có vị
                                        trí riêng và được đặt đúng chỗ sau khi sử dụng.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="seiso-ve-sinh">
                                        Seiso (Vệ sinh)
                                    </h3>
                                    <p>
                                        Giữ cho nơi làm việc luôn sạch sẽ, gọn gàng. Việc này không chỉ giúp môi trường làm việc dễ chịu hơn
                                        mà còn giúp phát hiện sớm các vấn đề tiềm ẩn.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="seiketsu-tieu-chuan-hoa">
                                        Seiketsu (Tiêu chuẩn hóa)
                                    </h3>
                                    <p>
                                        Duy trì và chuẩn hóa ba bước trên. Thiết lập các quy tắc và tiêu chuẩn để đảm bảo mọi người đều tuân
                                        thủ quy trình 5S.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="shitsuke-ky-luat">
                                        Shitsuke (Kỷ luật)
                                    </h3>
                                    <p>
                                        Duy trì kỷ luật và thói quen thực hiện 5S. Đây là bước quan trọng để đảm bảo quy trình 5S trở thành
                                        một phần của văn hóa doanh nghiệp.
                                    </p>
                                </div>
                            </section>

                            <section id="quy-trinh-thuc-hien-nhu-sau" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Quy trình thực hiện như sau:</h2>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="giai-doan-chuan-bi">
                                        Giai đoạn chuẩn bị
                                    </h3>
                                    <p>
                                        Trước khi triển khai quy trình 5S, doanh nghiệp cần chuẩn bị kỹ lưỡng về mặt nhân sự, tài liệu và kế
                                        hoạch thực hiện.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="trien-khai-rong-rai">
                                        Triển khai rộng rãi
                                    </h3>
                                    <p>
                                        Sau khi đã chuẩn bị đầy đủ, doanh nghiệp tiến hành triển khai quy trình 5S rộng rãi trong toàn bộ tổ
                                        chức.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="thuc-hien-ve-sinh-toan-bo-doanh-nghiep">
                                        Thực hiện vệ sinh toàn bộ doanh nghiệp
                                    </h3>
                                    <p>
                                        Đây là bước quan trọng trong quy trình 5S, giúp loại bỏ những thứ không cần thiết và tạo ra một môi
                                        trường làm việc sạch sẽ.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="sang-loc-sap-xep-va-danh-gia">
                                        Sàng lọc, sắp xếp và đánh giá
                                    </h3>
                                    <p>
                                        Sau khi vệ sinh, doanh nghiệp tiến hành sàng lọc, sắp xếp và đánh giá lại toàn bộ quy trình để đảm bảo
                                        hiệu quả.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold mb-2" id="danh-gia">
                                        Đánh giá
                                    </h3>
                                    <p>
                                        Cuối cùng, doanh nghiệp tiến hành đánh giá kết quả thực hiện quy trình 5S và đưa ra các biện pháp cải
                                        tiến nếu cần.
                                    </p>
                                </div>
                            </section>

                            <section id="quy-trinh-5s-co-giong-voi-kaizen" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Quy trình 5S có giống với Kaizen?</h2>
                                <p className="mb-4">
                                    Mặc dù quy trình 5S và Kaizen đều là các phương pháp cải tiến liên tục, nhưng chúng có những điểm khác
                                    biệt nhất định. Quy trình 5S tập trung vào việc tổ chức và duy trì nơi làm việc, trong khi Kaizen là một
                                    triết lý cải tiến liên tục rộng hơn.
                                </p>
                                <p className="mb-4">
                                    Tuy nhiên, quy trình 5S thường được xem là một phần của Kaizen, và cả hai đều hướng đến mục tiêu cải
                                    thiện hiệu quả và chất lượng trong doanh nghiệp.
                                </p>
                            </section>

                            <section id="doi-tuong-nen-ap-dung-quy-trinh-5s" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Đối tượng nên áp dụng quy trình 5S</h2>
                                <p className="mb-4">
                                    Quy trình 5S có thể áp dụng cho mọi loại hình doanh nghiệp, từ sản xuất đến dịch vụ, từ văn phòng đến
                                    nhà máy. Bất kỳ tổ chức nào muốn cải thiện hiệu quả làm việc và tạo ra một môi trường làm việc tốt hơn
                                    đều có thể áp dụng quy trình 5S.
                                </p>
                                <p className="mb-4">
                                    Đặc biệt, quy trình 5S rất phù hợp với các doanh nghiệp sản xuất, nơi việc tổ chức không gian làm việc
                                    và quản lý công cụ, thiết bị là rất quan trọng.
                                </p>
                            </section>

                            <section id="cac-yeu-to-tao-nen-thanh-cong-cho-quy-trinh-5s" className="mb-8">
                                <h2 className="text-xl font-bold mb-4">Các yếu tố tạo nên thành công cho quy trình 5S</h2>
                                <p className="mb-4">Khi triển khai quy trình 5S, cần lưu ý một số yếu tố sau để đảm bảo thành công:</p>
                                <ul className="list-disc pl-6 mb-4 space-y-2">
                                    <li>Cam kết từ lãnh đạo: Lãnh đạo cần cam kết và hỗ trợ mạnh mẽ cho việc triển khai quy trình 5S.</li>
                                    <li>Sự tham gia của mọi người: Quy trình 5S cần sự tham gia của tất cả mọi người trong tổ chức.</li>
                                    <li>Đào tạo đầy đủ: Mọi người cần được đào tạo đầy đủ về quy trình 5S trước khi triển khai.</li>
                                    <li>
                                        Kiên trì và nhất quán: Quy trình 5S không phải là một dự án ngắn hạn mà là một quá trình liên tục.
                                    </li>
                                    <li>Đo lường và đánh giá: Cần có các chỉ số đo lường để đánh giá hiệu quả của quy trình 5S.</li>
                                </ul>
                            </section>
                        </div>

                        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                            <Image
                                src="/placeholder.svg?height=300&width=600"
                                width={600}
                                height={300}
                                alt="Phần mềm quản lý 5S"
                                className="rounded-lg w-full mb-4"
                            />
                            <h3 className="text-xl font-bold mb-4 text-center">Phần mềm quản lý 5S</h3>
                            <div className="flex justify-center">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Tìm hiểm thêm ngay
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-[30%]'>
                        <div className='sticky top-4 space-y-8'>
                            <TableOfContents />
                            <BannerVerticalFmrp />
                            <BannerVerticalBlog />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Blogs