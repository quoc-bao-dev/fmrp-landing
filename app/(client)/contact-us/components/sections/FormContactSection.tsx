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
import { NumericFormatCore } from '@/lib/numericFormat'
import { regexPatterns } from '../../../../../utils/regex/regexUtils';

import { SelectCustomSearch } from '@/components/common/select/SelectCustomSearch'
import { useStatePageContactUs } from './../../_state/useStatePageContactUs';
import { uuidv4 } from '@/lib/uuid';
import ContactCard from '../../../../../components/common/card/contact/ContactCard';

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

const defaultValues: any = {
    email: "",
    fullname: "",
    phone: "",
    title: "",
    description: "",
    file: [],
    name_company: ""
}

const FormContactSection = (props: Props) => {
    const { isStatePageContactUs, queryKeyIsStatePageContactUs } = useStatePageContactUs()
    const form = useForm({ defaultValues: { ...defaultValues } })

    // Hàm Chọn riêng lẻ từng item
    const handleSingleSelect = (value: any, field: any, type?: string, item?: any, index?: number) => {
        const isSameValue = JSON.stringify(value) === JSON.stringify(field.value); // So sánh đối tượng

        // if (type === "variant") {
        //     onSubmitChangeVariantsQuote(value.id, id ?? "", item, index)
        // }
        // Nếu chọn lại chính nó, đặt thành undefined
        field.onChange(isSameValue ? undefined : value);
    };

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

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit((data) => onSubmit(data))}
                            className='col-span-13  gap-6 bg-white w-full rounded-3xl p-5'
                            style={{
                                boxShadow: "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                            }}
                        >
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    rules={{
                                        required: "Vui lòng nhập họ và tên!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-2 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-xs font-extrabold text-[#33404A] w-fit"
                                            >
                                                Họ và tên
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="name"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                            text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none`}
                                                        placeholder={"Nhập tên của bạn"}
                                                        type="text"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && (
                                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Vui lòng nhập số điện thoại!"
                                        },
                                        pattern: {
                                            value: regexPatterns.lengthPhone,
                                            message: "Số diện thoại không được để trống!",
                                        },
                                        validate: {
                                            isValidPhone: (value) => {
                                                if (!value) return true;
                                                return (regexPatterns.phone.test(value) || 'Số diện thoại không hợp lệ!')
                                            }
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, ref, value, ...props }, fieldState }) => {

                                        return (
                                            <FormItem className='flex flex-col w-full col-span-1 gap-1'>
                                                <FormLabel
                                                    className="3xl:text-base lg:text-sm text-xs font-extrabold text-[#33404A] w-fit"
                                                >
                                                    Số điện thoại
                                                </FormLabel>
                                                <FormControl>
                                                    <NumericFormatCore
                                                        id="number_phone"
                                                        name="phone"
                                                        value={value}
                                                        getInputRef={ref}
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                                    px-3 py-1 text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-[#15AA7A]`}
                                                        placeholder={"09xxx"}
                                                        thousandSeparator={' '}
                                                        maxLength={12}
                                                        onValueChange={(values: any) => {
                                                            const { value } = values;
                                                            onChange(`${value}`); // Combine country code with phone number
                                                        }}
                                                        allowLeadingZeros={true}
                                                        onBlur={onBlur} // Ensure onBlur is called for validation
                                                    />
                                                </FormControl>

                                                {fieldState?.invalid && fieldState?.error && (
                                                    <FormMessage>{fieldState?.error?.message}</FormMessage>
                                                )}
                                            </FormItem>
                                        );
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    rules={{
                                        required: "Vui lòng nhập email!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-1 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-xs font-extrabold text-[#33404A] w-fit"
                                            >
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="email"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                            text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none`}
                                                        placeholder={"email@gmail.com"}
                                                        type="text"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && (
                                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="name_company"
                                    // rules={{
                                    //     required: "Vui lòng nhập tên tổ chức doanh nghiệp",
                                    // }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-1 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-xs font-extrabold text-[#33404A] w-fit"
                                            >
                                                Tên tổ chức doanh nghiệp
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="name-company"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                            text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none`}
                                                        placeholder={"Nhập tên công ty"}
                                                        type="text"
                                                        {...field}
                                                    />
                                                </div>
                                            </FormControl>
                                            {/* {fieldState?.invalid && fieldState?.error && (
                                            <FormMessage>{fieldState?.error?.message}</FormMessage>
                                        )} */}
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="role"
                                    // rules={{
                                    //     required: "Vui lòng nhập tên tổ chức doanh nghiệp",
                                    // }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-1 gap-1'>
                                            <FormLabel
                                                htmlFor="role"
                                                className="3xl:text-base lg:text-sm text-xs font-extrabold text-[#33404A] w-fit"
                                            >
                                                Chức vụ <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <SelectCustomSearch
                                                    onChange={(value) => handleSingleSelect(value, field)}
                                                    onValueChange={() => { }}
                                                    selected={field.value}
                                                    options={roleData || []}
                                                    onOpen={(e: boolean) => queryKeyIsStatePageContactUs({
                                                        combobox: {
                                                            ...isStatePageContactUs?.combobox,
                                                            variants: {
                                                                value: "",
                                                                selected: {},
                                                                open: e,
                                                            }
                                                        }
                                                    })}
                                                    // loading={isLoadingDataCamboquickService}'
                                                    mutiValue={false}
                                                    title='Chức vụ'
                                                    classNameArrow={`${isStatePageContactUs?.combobox?.variants?.open ? 'rotate-180 text-[#F78F08]' : ''}`}
                                                    classNameButtonTrigger={`${isStatePageContactUs?.combobox?.variants?.open ? 'border-[#F78F08]' : ''} bg-white 3xl:text-base lg:text-sm text-xs rounded-lg w-full h-full  px-3 py-1 text-[#33404A] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-[#15AA7A]`}
                                                    classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                    // color=''
                                                />
                                            </FormControl>
                                            {/* {fieldState?.invalid && fieldState?.error && (
                                            <FormMessage>{fieldState?.error?.message}</FormMessage>
                                        )} */}
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormContactSection