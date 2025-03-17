import React from 'react'
import { uuidv4 } from '@/lib/uuid';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import { useResizeStore } from '@/stores/useResizeStore';
import FeedbackMarquee from '@/components/common/marquee/FeedbackMarquee';
import { FeedbackItem } from '@/types/feedback/IFeedback';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

type Props = {}

const feedbacks: FeedbackItem[] = [
    {
        id: uuidv4(),
        name: "Mr. Tâm",
        position: "Quản Lý Nam Việt",
        message: '“Công việc tôi khá bận khi quản lý dữ liệu trên excel, nên tôi có lên internet tìm cách giúp đỡ, thì gặp được FMRP, sau khi làm việc với FOSO, tôi đã sở hữu được 1 hệ thống giúp cho công việc tôi rất thuận lợi.”',
        image: "/avatar/example/avatar-danh.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Nguyên",
        position: "Giám Đốc NPCare Việt Nam",
        message: '“Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.”',
        image: "/avatar/example/avatar-tran.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Minh",
        position: "Trưởng phòng Sản xuất Tùng Việt",
        message: '“Trước đây, việc theo dõi tồn kho thủ công thường xuyên xảy ra sai sót. Từ khi áp dụng FMRP, mọi số liệu đều được cập nhật chính xác theo thời gian thực, giúp giảm thiểu thất thoát nguyên liệu đáng kể.”',
        image: "/avatar/example/avatar-tuan.svg",
        gender: "male"
    },
    {

        id: uuidv4(),
        name: "Mrs. Mai",
        position: "Trưởng Bộ phận Kho hàng Latex",
        message: '“Chúng tôi đặc biệt hài lòng với tính năng quản lý sản phẩm đa biến thể của FMRP. Việc xử lý đơn hàng theo từng size, màu sắc trở nên dễ dàng và chính xác hơn bao giờ hết.”',
        image: "/avatar/example/avatar-tam.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Tùng",
        position: "Trưởng Phòng Mua hàng Phương đông",
        message: '"FMRP không chỉ tối ưu hóa quy trình sản xuất mà còn hỗ trợ quản lý mua hàng, giúp chúng tôi dễ dàng theo dõi nhà cung cấp và tối ưu chi phí nguyên vật liệu.”',
        image: "/avatar/example/avatar-tuan.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Phương",
        position: "Trưởng phòng Kế hoạch NTC",
        message: '“Phần mềm FMRP giúp chúng tôi đồng bộ dữ liệu từ sản xuất đến kho hàng, hạn chế sai sót trong khâu kiểm kê và tiết kiệm đáng kể thời gian báo cáo.”',
        image: "/avatar/example/avatar-nguyen.svg",
        gender: "female"
    },
    {
        id: uuidv4(),
        name: "Mr. Công",
        position: "Quản lý sản xuất Sơn Hà",
        message: '"Từ khi triển khai FMRP, việc theo dõi và đánh giá hiệu suất từng chuyền may trở nên minh bạch hơn, giúp cải thiện năng suất và giảm thiểu sai sót đáng kể.”',
        image: "/avatar/example/avatar-phuc.svg",
        gender: "male"
    },
    {
        id: uuidv4(),
        name: "Mrs. Hà",
        position: "Giám đốc sản xuất Golden",
        message: '“FMRP giúp chúng tôi tối ưu chi phí vận hành và nâng cao chất lượng quản lý sản xuất. Việc theo dõi từ nguyên liệu đầu vào đến thành phẩm cuối cùng trở nên đơn giản và chính xác hơn rất nhiều.”',
        image: "/avatar/example/avatar-hong.svg",
        gender: "female"
    },
];

const FeedbackFmrpSection = (props: Props) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { isVisibleTablet } = useResizeStore()

    return (
        <div className='custom-padding-section overflow-hidden bg-white'>
            <div className='custom-container flex lg:flex-row flex-col lg:items-center 3xl:gap-16 gap-14 relative z-[10]'>
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
                                className="absolute bottom-[12%] bg-[#92BFF7] rounded-full h-[30%] w-full"
                                initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }} // Bắt đầu ẩn
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
                    {/* <h3 className='text-title-section-small text-[#1A2025] capitalize font-extrabold'>
                        Phản hồi từ Khách hàng
                    </h3> */}

                    <p className='text-default text-[#33404A] font-medium'>
                        Cùng lắng nghe những phản hồi tích cực đến từ những khách hàng đang đồng hành cùng FOSO
                    </p>
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default FeedbackFmrpSection