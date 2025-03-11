import React from 'react'
import { uuidv4 } from '@/lib/uuid';
import AnimatedReveal from '@/components/common/animations/common/AnimatedReveal';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import { useResizeStore } from '@/stores/useResizeStore';
import FeedbackMarquee from '@/components/common/marquee/FeedbackMarquee';

type Props = {}

export type FeedbackItem = {
    id: string;
    name: string;
    position: string;
    message: string;
    image: string;
};

const FeedbackFmrpSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const feedbacks: FeedbackItem[] = [
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Trưởng bộ phận App Health Land Spa", message: "“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Quản lý Nam Việt", message: "“Công việc tôi khá bận khi quản lý dữ liệu trên excel, nên tôi có lên internet tìm cách giúp đỡ, thì gặp được FMRP, sau khi làm việc với FOSO, tôi đã sở hữu được 1 hệ thống giúp cho công việc tôi rất thuận lợi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Trưởng bộ phận App Health Land Spa", message: "“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Giám Đốc NPCare Việt Nam", message: " khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi thamDo nhu “Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Giám Đốc NPCare Việt Nam", message: "“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Quản lý Nam Việt", message: "“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Giám Đốc NPCare Việt Nam", message: "“Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
        { id: uuidv4(), name: "Mrs. Hoàng", position: "Giám Đốc NPCare Việt Nam", message: "khiến công việc sản xuất quá tải đòi hỏi cần phải có phần mềm để quản lý. Chúng tôi đã lựa chọn FMRP sau khi tham Do nhu “Tôi thấy ấn tượng với chất lượng ứng dụng mà FOSO đã thiết kế cho bên tôi. Giao diện trực quan và hiệu suất ứng dụng đều đáp ứng được mong đợi của chúng tôi.”", image: "/avatar/example/avatar2.png" },
    ];

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
                    <h3 className='text-title-section-small text-[#1A2025] capitalize font-extrabold'>
                        Phản hồi từ Khách hàng
                    </h3>

                    <p className='text-default text-[#33404A] font-medium'>
                        Cùng lắng nghe những phản hồi tích cực đến từ những khách hàng đang đồng hành cùng FOSO
                    </p>
                </AnimatedReveal>
            </div>
        </div>
    )
}

export default FeedbackFmrpSection