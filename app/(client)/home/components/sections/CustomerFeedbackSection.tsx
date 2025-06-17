'use client'

import BlurredBackground from '@/components/common/blur/BlurredBackground';
import { uuidv4 } from '@/lib/uuid';
import { useResizeStore } from '@/stores/useResizeStore';
import { FeedbackItem } from '@/types/feedback/IFeedback';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import FeedbackMarquee from '../ui/customer-feedback/FeedbackMarquee';
const AnimatedReveal = dynamic(() => import('@/components/common/animations/common/AnimatedReveal'), { ssr: false });

type Props = {}

const feedbacks: FeedbackItem[] = [
    {
        id: uuidv4(),
        name: "Mr. Danh",
        position: "Quản lý KANOW",
        message: '”Từ lúc hợp tác với FOSO, chúng tôi đã có một trang web hoàn hảo về cả mặt thiết kế lẫn tính năng. Đội ngũ luôn lắng nghe và giải quyết mọi vấn đề một cách nhanh chóng và hiệu quả.”',
        image: "/avatar/example/avatar-danh.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Trân",
        position: "Quản lý MONY",
        message: '”Trang web mà FOSO thiết kế cho công ty chúng tôi không chỉ đẹp mà còn rất tiện lợi cho người dùng. Tốc độ tải trang nhanh và giao diện thân thiện đã giúp chúng tôi thu hút nhiều khách hàng hơn.”',
        image: "/avatar/example/avatar-tran.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Tuấn",
        position: "Trưởng bộ phận Website Hải Âu",
        message: '”FOSO đã mang đến cho chúng tôi một trang web giao diện đẹp mắt và dễ sử dụng. Đội ngũ thiết kế web luôn lắng nghe ý kiến và đáp ứng nhanh chóng yêu cầu của chúng tôi. Cảm ơn FOSO.”',
        image: "/avatar/example/avatar-tuan.svg",
        gender: "male"
    },
    {

        id: uuidv4(),
        name: "Mrs. Tâm",
        position: "Bộ phận IT HYPERSPACE",
        message: '”Chúng tôi đã sử dụng dịch vụ IT Outsourcing của FOSO cho dự án phát triển phần mềm nội bộ và hoàn toàn hài lòng. Đội ngũ FOSO không chỉ có chuyên môn cao mà còn rất tận tâm trong việc tư vấn và hỗ trợ.”',
        image: "/avatar/example/avatar-tam.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Hoàng",
        position: "Trưởng bộ phận App Health Land Spa",
        message: '“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”',
        image: "/avatar/example/avatar-tuan.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Nguyên",
        position: "Giám Đốc NPCare Việt Nam",
        message: '“Chúng tôi hài lòng về chất lượng dịch vụ App mà FOSO đã triển khai. Bên phía FOSO đã tư vấn chúng tôi nhiệt tình, tận tâm trong quá trình hoàn thành dự án.”',
        image: "/avatar/example/avatar-nguyen.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Phúc",
        position: "Quản lý App Checkin-Care",
        message: '“Chúng tôi hài lòng về chất lượng dịch vụ App mà FOSO đã triển khai. Bên phía FOSO đã tư vấn chúng tôi nhiệt tình, tận tâm trong quá trình hoàn thành dự án.”',
        image: "/avatar/example/avatar-phuc.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Hồng",
        position: "Quản lý Bộ phận Web ECOSPACE",
        message: '”Chúng tôi hài lòng với dịch vụ thiết kế web của FOSO. FOSO đã tạo ra một trang web chuyên nghiệp, thể hiện đúng phong cách và giá trị của thương hiệu. Chúng tôi cũng được hỗ trợ nhiệt tình trong quá trình vận hành.”',
        image: "/avatar/example/avatar-hong.svg",
        gender: "female"
    },
];

const CustomerFeedbackSection = (props: Props) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='custom-padding-section overflow-hidden'>
            <div className='custom-container flex lg:flex-row flex-col lg:items-center 3xl:gap-16 gap-14 relative z-[10]'>
                {!isVisibleTablet && <BlurredBackground className='top-[20%] -right-[45%] z-[1]' />}
                <AnimatedReveal
                    from='center'
                    effect='fade'
                    className='w-full lg:max-w-[60%] max-w-full overflow-hidden  lg:order-1 order-2'
                >
                    <FeedbackMarquee feedbacks={feedbacks} />
                </AnimatedReveal>
                {/* <div className='w-full lg:max-w-[60%] max-w-full overflow-hidden  lg:order-1 order-2'>
                    <FeedbackMarquee feedbacks={feedbacks} />
                </div> */}

                <AnimatedReveal
                    from='bottom'
                    effect='fade'
                    className='w-full lg:max-w-[40%] max-w-full flex flex-col justify-center gap-4 lg:order-2 order-1'
                >
                    <h3 className='text-title-section-small text-[#1A2025] capitalize font-extrabold space-x-2'>
                        <span>
                            Phản hồi từ
                        </span>
                        <span ref={ref} className="relative inline-block">
                            {/* Background trượt từ trái sang phải */}
                            <motion.span

                                className="absolute bottom-[12%] bg-[#A3EED6] rounded-full h-[30%] w-full"
                                initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
                                // animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }} // Chỉ chạy khi inView
                                animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : {}} // Chỉ chạy khi inView
                                transition={{
                                    duration: 2, // Làm chậm hiệu ứng để mượt hơn
                                    delay: 0.4, // Đồng bộ với chữ nhưng bắt đầu mượt hơn
                                    ease: [0.25, 1, 0.5, 1], // Bezier Curve giúp chạy tự nhiên hơn
                                }}
                            />

                            <div className='text-[#050505] relative z-10 font-extrabold' >
                                Khách hàng
                            </div>
                        </span>
                    </h3>

                    <p className='text-base-default text-[#33404A] font-normal'>
                        Cùng lắng nghe những phản hồi tích cực đến từ những khách hàng đang đồng hành cùng FOSO
                    </p>
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default CustomerFeedbackSection