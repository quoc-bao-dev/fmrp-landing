import ButtonAnimation from '@/components/common/button/ButtonAnimation'
import ProjectCard from '@/components/common/card/project/ProjectCard'
import { uuidv4 } from '@/lib/uuid'
import { useResizeStore } from '@/stores/useResizeStore'
import React, { useRef } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {}

const ServicePresentationSection = (props: Props) => {
    const swiperRef = useRef<any>(null);
    const { isVisibleTablet } = useResizeStore()

    const projectList = [
        {
            id: uuidv4(),
            image: "/example/project/image/image-kanow.png",
            content: "Nền tảng thuê xe thông minh – Định vị chính xác, đề xuất lộ trình tối ưu và đặt xe dễ dàng và quản lý chuyến đi thuận tiện ngay trên app.",
            logo: '/example/project/logo/logo-kanow.svg'
        },
        {
            id: uuidv4(),
            image: "/example/project/image/image-affiso.png",
            content: "Giải pháp tiếp thị liên kết AI - Kết nối nhà tiếp thị với sản phẩm, đồng thời hỗ trợ tạo video để tăng hiệu quả bán hàng và nhận hoa hồng.",
            logo: '/example/project/logo/logo-affiso.svg'
        },
        {
            id: uuidv4(),
            image: "/example/project/image/image-dqcl.png",
            content: "Website chuyên nghiệp cho ngành khai thác khoáng sản - Giao diện hiện đại, dễ dàng nắm bắt thông tin dự án, quy trình khai thác.",
            logo: '/example/project/logo/logo-dqcl.svg'
        },
        {
            id: uuidv4(),
            image: "/example/project/image/image-smb.png",
            content: "Giải pháp website du lịch toàn diện - Thiết kế website đẹp mắt, quản lý tour du lịch và khách sạn dễ dàng, tăng khả năng tiếp cận khách hàng mới.",
            logo: '/example/project/logo/logo-smb.svg'
        },
        {
            id: uuidv4(),
            image: "/example/project/image/image-healthland.png",
            content: "Ứng dụng quản lý Spa & Nail hiện đại - Quản lý booking đặt lịch, quản lý khách hàng và nhân viên thuận tiện, giúp doanh nghiệp vận hành chuyên nghiệp.",
            logo: '/example/project/logo/logo-healthland.svg'
        },
        {
            id: uuidv4(),
            image: "/example/project/image/image-haiaucorp.png",
            content: "App quản lý nông nghiệp hiệu quả - Với giao diện trực quan, đặt hàng nhanh chóng, tư vấn sản phẩm và theo dõi đơn hàng dễ dàng cho doanh nghiệp.",
            logo: '/example/project/logo/logo-haiaucorp.svg'
        },
    ]

    const customPagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class=${className}></span>`
        },

    }


    return (
        <div className='relative 3xl:py-24 xl:py-20 lg:py-16 py-8 '>
            <div className='custom-container flex flex-col items-center justify-center 3xl:gap-12 xl:gap-10 gap-8 relative z-[1] h-full'>
                <div className='space-x-2 font-extrabold 3xl:max-w-[49%] 2xl:max-w-[55%] lg:max-w-[60%] max-w-full'>
                    <span className='text-title-section-small text-[#1A2025] capitalize'>
                        AI tiên tiến cho giải pháp thông minh – Giải pháp công nghệ đột phá từ
                    </span>
                    <span
                        className='text-title-section-small uppercase'
                        style={{
                            background: "linear-gradient(to right, #85EEB3, #53B086), radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Foso
                    </span>
                </div>

                {
                    isVisibleTablet
                        ?
                        <div className='w-full '>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={60}
                                modules={[Pagination, Autoplay]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                autoplay={true}
                                speed={1000}
                                loop
                                pagination={customPagination}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 30
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                    1920: {
                                        slidesPerView: 4,
                                        spaceBetween: 60,
                                    }
                                }}
                                className='custom-swiper-pagination md:h-[440px] h-[460px] rounded-3xl'
                                allowTouchMove={true}
                            >
                                {
                                    projectList && projectList?.map((project) => (
                                        <SwiperSlide
                                            key={`project-${project?.id}`}
                                        // className='h-full relative cursor-pointer group'
                                        >
                                            <ProjectCard project={project} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        :
                        <div className='grid grid-cols-3 gap-6 w-full h-full'>
                            {
                                projectList && projectList?.map((project) => (
                                    <React.Fragment key={`project-${project?.id}`}>
                                        <ProjectCard project={project} />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                }

                <ButtonAnimation
                    type="button"
                    title="Xem tất cả"
                    reverse={true}
                    icon={
                        <div className='size-5'>
                            <GoArrowUpRight className='size-full' />
                        </div>
                    }
                    className="flex items-center gap-2 text-default text-[#10805B] font-medium px-8 py-2 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                    onClick={() => { }}
                />
            </div>

        </div>
    )
}

export default ServicePresentationSection