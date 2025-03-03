import EmailLink from '@/components/common/contact-links/EmailLink';
import PhoneLink from '@/components/common/contact-links/PhoneLink';
import SocialMediaList from '@/components/common/social/SocialMediaList';
import ClockIconLinear from '@/components/icons/linear/ClockIconLinear';
import EnvelopeSimpleIconLinear from '@/components/icons/linear/EnvelopeSimpleIconLinear';
import MapPinIconLinear from '@/components/icons/linear/MapPinIconLinear';
import PhoneIconLinear from '@/components/icons/linear/PhoneIconLinear';
import { FormatPhoneNumberCountry } from '@/utils/format/FormatNumber';
import React, { ReactNode } from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { User } from 'iconsax-react';

type Props = {}

// CSS gradient tái sử dụng
const gradientStyle = {
    backgroundImage: `
    linear-gradient(90deg, #85EEB3, #53B086),
    radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
    // backgroundBlendMode: "hard-light", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
};

export interface ContactItem {
    icon: ReactNode;
    title: string;
    description?: string;
    content: string | { label: string; value: string }[];
    type: string
}

export const contactData: ContactItem[] = [
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
    { icon: "/icons/social-media/basic/zalo.svg", link: "#" },
    { icon: "/icons/social-media/basic/facebook.svg", link: "#" },
    { icon: "/icons/social-media/basic/tiktok.svg", link: "#" },
    { icon: "/icons/social-media/basic/youtube.svg", link: "#" },
];

const defaultValues: any = {
    email: "",
    name: "",
    phone: "",
    title: "",
    description: "",
    file: []
}

const FormContactSection = (props: Props) => {
    const form = useForm({ defaultValues: { ...defaultValues } })

    const onSubmit = (value: any) => {

    }

    return (
        <div className='custom-padding-section'>
            <div className='custom-container flex flex-col 3xl:gap-12 gap-10'>
                <h2 className="text-title-section-small font-bold space-x-2 text-center">
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

                <div className='grid grid-cols-18 gap-6'>
                    <div className='col-span-5 space-y-4 w-full'>
                        {
                            contactData.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-5 bg-white rounded-3xl flex gap-3"
                                    style={{
                                        boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                                    }}
                                >
                                    <div className="size-6 shrink-0">{item.icon}</div>
                                    {/* <div className="size-6 flex-shrink-0">{item.icon}</div> */}
                                    <div className='space-y-3'>
                                        <h3 className="text-sm-default font-extrabold text-[#33404A]">{item.title}</h3>

                                        <div className='space-y-0.5'>
                                            {item.description && <p className="text-sm text-[#33404A] font-medium">{item.description}</p>}

                                            {
                                                Array.isArray(item.content) ?
                                                    (
                                                        <div className={`${item.type === "working_hours" ? "space-y-0.5" : "space-y-3"} text-sm`}>
                                                            {item.content.map((subItem, subIndex) => (
                                                                <p key={subIndex}>
                                                                    <span className="font-bold text-[#33404A]">{subItem.label}</span> {subItem.value}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    )
                                                    :

                                                    <>

                                                        {
                                                            !["phone", "email"].includes(item.type) ?
                                                                (
                                                                    <p className="text-[#33404A] font-medium">{item.content}</p>
                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        {/* Tuỳ chỉnh nội dung khi type là "phone" hoặc "email" */}
                                                                        {
                                                                            item.type === "phone" &&
                                                                            <PhoneLink phoneNumber={item.content} className='text-[#33404A] hover:text-[#33404A]/80 font-medium hover:underline hover:underline-offset-2 custom-transition'>
                                                                                {FormatPhoneNumberCountry(item.content, "VN")}
                                                                            </PhoneLink>
                                                                        }
                                                                        {
                                                                            item.type === "email" &&
                                                                            <EmailLink email={item.content} className='text-[#33404A] hover:text-[#33404A]/80 font-medium hover:underline hover:underline-offset-2 custom-transition'>
                                                                                {item.content}
                                                                            </EmailLink>
                                                                        }
                                                                    </>
                                                                )
                                                        }

                                                    </>
                                            }
                                        </div>
                                    </div>
                                </div>
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

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit((data) => onSubmit(data))}
                            className='col-span-13 grid md:grid-cols-2 grid-cols-1 gap-6 bg-white w-full rounded-3xl p-5'
                            style={{
                                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                            }}
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                rules={{
                                    required: "Lỗi",
                                }}
                                render={({ field, fieldState }) => (
                                    <FormItem className='flex flex-col w-full col-span-2'>
                                        <FormLabel
                                            htmlFor="name"
                                            className="3xl:text-sm text-xs font-semibold text-[#505458] w-fit"
                                        >
                                            Họ và tên <span className="text-[#505458]">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    id="name"
                                                    className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                            text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#B2BABD] placeholder:font-normal focus:ring-none focus:outline-none`}
                                                    placeholder={"Nhập tên của bạn"}
                                                    type="text"
                                                    {...field}
                                                />
                                                <User className="text-[#808990] 3xl:size-6 size-5 absolute left-4 top-1/2 -translate-y-1/2" />
                                            </div>
                                        </FormControl>
                                        {fieldState?.invalid && fieldState?.error && (
                                            <FormMessage>{fieldState?.error?.message}</FormMessage>
                                        )}
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormContactSection