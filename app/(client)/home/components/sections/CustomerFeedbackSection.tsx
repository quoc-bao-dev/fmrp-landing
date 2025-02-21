import React from 'react'
import { uuidv4 } from '@/lib/uuid';
import FeedbackMarquee from '../ui/customer-feedback/FeedbackMarquee';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import { useResizeStore } from '@/stores/useResizeStore';

type Props = {}

export type FeedbackItem = {
    id: string;
    name: string;
    position: string;
    message: string;
    image: string;
};

const CustomerFeedbackSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const feedbacks: FeedbackItem[] = [
        { id: uuidv4(), name: "Mrs. Nguyễn 1", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm 2", position: "Quản lý Nam Việt", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn 3", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn 4", position: "Giám Đốc NPCare Việt Nam", message: " khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi thamDo nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn 5", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mr. Tâm 6", position: "Quản lý Nam Việt", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn 7", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        { id: uuidv4(), name: "Mrs. Nguyễn 8", position: "Giám Đốc NPCare Việt Nam", message: "khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mr. Tâm", position: "Quản lý Nam Việt", message: "Công việc tôi khá bận khi quản lý dữ liệu...", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
        // { id: uuidv4(), name: "Mrs. Nguyễn", position: "Giám Đốc NPCare Việt Nam", message: "Do nhu cầu sử dụng khẩu trang tăng cao, khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham khảo qua nhiều nhà cung cấp khác trên thị trường.", image: "/avatar/example/avatar1.png" },
    ];

    return (
        <div className='3xl:py-24 xl:py-20 lg:py-16 py-8 overflow-hidden'>
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