import React from 'react'

import { useResizeStore } from '@/stores/useResizeStore';

import FeatureCard from '@/components/common/card/contact/FeatureCard';
import WrenchIconLinear from '@/components/icons/linear/WrenchIconLinear';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import GradientGreenText from '@/components/common/gradient/GradientGreenText';
import HeadsetIconLinear from '@/components/icons/linear/HeadsetIconLinear';
import HandshakeIconLinear from '@/components/icons/linear/HandshakeIconLinear';
import BgPaddingMarginSection from '@/components/layouts/sections/BgPaddingMarginSection'

type Props = {}

const features = [
    {
        icon: <HeadsetIconLinear />,
        title: "Tư vấn giải pháp",
        description:
            "Bạn đang cần tư vấn giải pháp phù hợp cho doanh nghiệp của mình? Hãy gửi thông tin và đội ngũ sẽ tư vấn thêm.",
        link: "https://zalo.me/2281264205827497572",
        linkText: "Tư vấn",
    },
    {
        icon: <WrenchIconLinear />,
        title: "Hỗ trợ kỹ thuật",
        description:
            "Bạn cần trợ giúp về các tính năng kỹ thuật trên dự án hiện đang đồng hành cùng FOSO, hãy gửi yêu cầu đến bộ phận kỹ thuật ngay.",
        link: "https://zalo.me/2281264205827497572",
        linkText: "Hỗ trợ",
    },
    {
        icon: <HandshakeIconLinear />,
        title: "Hợp tác",
        description: "Bạn muốn trở thành đối tác với FOSO để xây dựng các giải pháp công nghệ mới mang tính biểu tượng cho thời đại mới hãy liên hệ ngay.",
        link: "https://zalo.me/2281264205827497572",
        linkText: "Hợp tác",
    },
];


const SupportContactSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()

    return (
        <BgPaddingMarginSection classNameContainer="relative overflow-x-hidden" className=''>
            {!isVisibleTablet &&
                <BlurredBackground className='top-10 3xl:-right-[20%] -right-[24%] z-[1]' />
            }
            <div className='3xl:max-w-7xl xxl:max-w-6xl mx-auto flex flex-col 3xl:gap-10 gap-8 relative z-[2]'>
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
                        <span className="text-[#050505] font-extrabold capitalize">Sẵn sàng hỗ trợ bạn</span>
                    </h2>

                    <p className='3xl:!text-lg xxl:!text-base lg:!text-sm !text-lg !tracking-[1%] text-[#33404A] font-medium'>
                        Bạn đang cần tư vấn thêm về báo giá dịch vụ, hướng dẫn sử dụng hoặc trở thành đối tác FOSO - Chúng tôi luôn sẵn sàng kết nối cùng bạn!
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                    {
                        features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                className="col-span-1"
                                {...feature}
                            />
                        ))
                    }
                </div>
            </div>
        </BgPaddingMarginSection>
    )
}

export default SupportContactSection