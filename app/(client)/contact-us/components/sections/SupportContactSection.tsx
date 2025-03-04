import FeatureCard from '@/components/common/card/contact/FeatureCard';
import GradientGreenText from '@/components/common/gradient/GradientGreenText';
import HandshakeIconLinear from '@/components/icons/linear/HandshakeIconLinear';
import HeadsetIconLinear from '@/components/icons/linear/HeadsetIconLinear';
import WrenchIconLinear from '@/components/icons/linear/WrenchIconLinear';
import BgPaddingMarginSection from '@/components/layouts/sections/BgPaddingMarginSection'
import React from 'react'
import { FaHandshake, FaHeadset, FaTools } from 'react-icons/fa';

type Props = {}

const features = [
    {
        icon: <HeadsetIconLinear />,
        title: "Tư vấn giải pháp",
        description:
            "Bạn đang cần tư vấn giải pháp phù hợp cho doanh nghiệp của mình? Hãy gửi thông tin và đội ngũ sẽ tư vấn thêm.",
        link: "/tu-van",
        linkText: "Tư vấn",
    },
    {
        icon: <WrenchIconLinear />,
        title: "Hỗ trợ kỹ thuật",
        description:
            "Bạn cần trợ giúp về các tính năng kỹ thuật trên dự án hiện đang đồng hành cùng FOSO, hãy gửi yêu cầu đến bộ phận kỹ thuật ngay.",
        link: "/ho-tro",
        linkText: "Hỗ trợ",
    },
    {
        icon: <HandshakeIconLinear />,
        title: "Hợp tác",
        description:"Bạn muốn trở thành đối tác với FOSO để xây dựng các giải pháp công nghệ mới mang tính biểu tượng cho thời đại mới hãy liên hệ ngay.",
        link: "/hop-tac",
        linkText: "Hợp tác",
    },
];


const SupportContactSection = (props: Props) => {
    return (
        <BgPaddingMarginSection className='flex flex-col 3xl:gap-10 gap-8'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
                <h2 className="text-title-section-small font-bold space-x-2 text-center">
                    <GradientGreenText>
                        Foso
                    </GradientGreenText>
                    {/* <span
                    className="font-extrabold"
                    style={{
                        ...gradientStyle,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    FOSO
                </span> */}
                    <span className="text-[#050505] font-extrabold capitalize">sẵn sàng hỗ trợ bạn</span>
                </h2>

                <p className='text-default text-[#33404A] font-medium'>
                    Bạn đang cần tư vấn thêm về báo giá dịch vụ, hướng dẫn sử dụng hoặc trở thành đối tác FOSO - Chúng tôi luôn sẵn sàng kết nối cùng bạn!
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>

        </BgPaddingMarginSection>
    )
}

export default SupportContactSection