import SocialMediaList from '@/components/common/social/SocialMediaList';
import ClockIconLinear from '@/components/icons/linear/ClockIconLinear';
import EnvelopeSimpleIconLinear from '@/components/icons/linear/EnvelopeSimpleIconLinear';
import MapPinIconLinear from '@/components/icons/linear/MapPinIconLinear';
import PhoneIconLinear from '@/components/icons/linear/PhoneIconLinear';
import React from 'react'
import { uuidv4 } from '@/lib/uuid';
import ContactCard from '@/components/common/card/contact/ContactCard';
import { ICardContactItem } from '@/types/card/ICard';
import FormContact from '@/components/common/form/FormContact';

type Props = {}

// CSS gradient tái sử dụng
const gradientStyle = {
    backgroundImage: `
    linear-gradient(90deg, #85EEB3, #53B086),
    radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
    // backgroundBlendMode: "hard-light", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
};

interface FormValues {
    email: string;
    fullname: string;
    phone: string;
    description: string;
    file: File[]; // Nếu file là danh sách tệp đính kèm
    name_company: string;
    service: string; // Nếu chọn 1 dịch vụ, dùng string
    role: string; // Chức vụ
}


const contactData: ICardContactItem[] = [
    {
        icon: <PhoneIconLinear className='size-6' />,
        title: "Hotline",
        content: "0901136968",
        type: "phone"
    },
    {
        icon: <EnvelopeSimpleIconLinear className='size-full' />,
        title: "E-mail",
        content: "info@fososoft.com",
        type: "email"
    },
    {
        icon: <ClockIconLinear className='size-full' />,
        title: "Thời gian làm việc",
        description: "Từ thứ 2 đến thứ 6 hàng tuần",
        content: [
            { label: "Sáng:", value: "08h30 - 12h00" },
            { label: "Chiều:", value: "13h30 - 18h00" },
        ],
        type: "working_hours"
    },
    {
        icon: <MapPinIconLinear className='size-full' />,
        title: "Địa chỉ",
        content: [
            { label: "Trụ sở đăng ký:", value: "68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM" },
            { label: "Văn phòng làm việc:", value: "VCC Building, số 69/1-3 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP.HCM" },
        ],
        type: "address"
    },
];

const socialMedia = [
    { icon: "/icons/social-media/basic/zalo.svg", link: "https://zalo.me/2281264205827497572" },
    { icon: "/icons/social-media/basic/facebook.svg", link: "https://www.facebook.com/fososoftware" },
    { icon: "/icons/social-media/basic/tiktok.svg", link: "https://www.tiktok.com/@fososoftware" },
    { icon: "/icons/social-media/basic/youtube1.svg", link: "https://www.youtube.com/@fososoft" },
];

const roleData = [
    {
        id: uuidv4(),
        label: "Quản lý",
        value: "Quản lý"
    },
    {
        id: uuidv4(),
        label: "Admin",
        value: "Admin"
    },
    {
        id: uuidv4(),
        label: "Nhân viên",
        value: "Nhân viên"
    },
    {
        id: uuidv4(),
        label: "Khác",
        value: "Khác"
    },
]

const serviceList = [
    {
        id: "898989",
        name: "Thiết kế Website"
    },
    {
        id: "37434",
        name: "Thiết kế App Mobile"
    },
    {
        id: "5454545",
        name: "Thuê Hosting & Server"
    },
    {
        id: "987989",
        name: "Thuê IT OutSourcing"
    },
    {
        id: "8989892143",
        name: "FMRP - Trợ lý sản xuất"
    },
    {
        id: "89898921321",
        name: "FPOS - Trợ lý bán hàng"
    },
]

const FormContactSection = (props: Props) => {
    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col 3xl:gap-12 gap-10'>
                <h2 className="3xl:text-[36px] 2xl:text-[28px] xxl:text-[28px] xl:text-[26px] md:text-[28px] text-[24px] 3xl:!leading-[56px] 2xl:!leading-[46px] xxl:!leading-[46px] xl:!leading-[42px] md:!leading-[38px] !leading-[34px] tracking-[-2%] font-bold space-x-2 text-center">
                    <span
                        className="font-extrabold"
                        style={{
                            ...gradientStyle,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        FOSO
                    </span>
                    <span className="text-[#050505] font-extrabold capitalize">- Nơi ý tưởng doanh nghiệp trở thành giải pháp công nghệ thực tiễn!</span>
                </h2>

                <div className='grid grid-cols-18 lg:gap-x-6 lg:gap-y-6 gap-x-0 gap-y-6'>
                    <div className='lg:col-span-5 col-span-18 space-y-4 w-full'>
                        {
                            contactData.map((item, index) => (
                                <React.Fragment key={`contact-${index}`}>
                                    <ContactCard item={item} />
                                </React.Fragment>
                            ))
                        }

                        <SocialMediaList
                            socialMedia={socialMedia}
                            className=' bg-white hover:bg-white/50'
                            style={{
                                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                            }}
                        />
                    </div>

                    <FormContact />
                </div>
            </div>
        </div>
    )
}

export default FormContactSection