import React from 'react'
import FeedbackMarquee from '../ui/FeedbackMarquee'
import { uuidv4 } from '@/lib/uuid';

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
        <div className='3xl:py-24 py-20 overflow-hidden'>
            <div className='custom-container flex items-center 3xl:gap-16 gap-14 relative z-[1]'>
                <div className='w-full max-w-[60%] overflow-hidden'>
                    <FeedbackMarquee feedbacks={feedbacks} />
                </div>
                <div className='w-full max-w-[40%] flex flex-col justify-center gap-4'>
                    <h3 className='text-title-section-small text-[#1A2025] capitalize font-extrabold'>
                        Phản hồi từ Khách hàng
                    </h3>

                    <p className='text-default text-[#33404A] font-normal'>
                        Cùng lắng nghe những phản hồi tích cực đến từ những khách hàng đang đồng hành cùng FOSO
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerFeedbackSection