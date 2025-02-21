import React from 'react'
import { uuidv4 } from '@/lib/uuid';
import FeedbackMarquee from '../ui/customer-feedback/FeedbackMarquee';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';

type Props = {}

export type FeedbackItem = {
    id: string;
    name: string;
    position: string;
    message: string;
    image: string;
};

const CustomerFeedbackSection = (props: Props) => {
    const feedbacks: FeedbackItem[] = [
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao...", image: "/avatar/example/avatar1.png" },
    ];

    return (
        <div className='3xl:py-24 xl:py-20 lg:py-16 py-8 overflow-hidden'>
            <div className='custom-container flex lg:flex-row flex-col lg:items-center 3xl:gap-16 gap-14 relative z-[1]'>
                <AnimatedReveal
                    from='center'
                    effect='fade'
                    className='w-full lg:max-w-[60%] max-w-full overflow-hidden  lg:order-1 order-2'
                >
                    <FeedbackMarquee feedbacks={feedbacks} />
                </AnimatedReveal>

                <AnimatedReveal
                    from='bottom'
                    effect='fade'
                    className='w-full lg:max-w-[40%] max-w-full flex flex-col justify-center gap-4 lg:order-2 order-1'
                >
                    <h3 className='text-title-section-small text-[#1A2025] capitalize font-extrabold'>
                        Phản hồi từ Khách hàng
                    </h3>

                    <p className='text-default text-[#33404A] font-normal'>
                        Cùng lắng nghe những phản hồi tích cực đến từ những khách hàng đang đồng hành cùng FOSO
                    </p>
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default CustomerFeedbackSection