import EmailLink from '@/components/common/contact-links/EmailLink';
import PhoneLink from '@/components/common/contact-links/PhoneLink';
import SocialMediaList from '@/components/common/social/SocialMediaList';
import ClockIconLinear from '@/components/icons/linear/ClockIconLinear';
import EnvelopeSimpleIconLinear from '@/components/icons/linear/EnvelopeSimpleIconLinear';
import MapPinIconLinear from '@/components/icons/linear/MapPinIconLinear';
import PhoneIconLinear from '@/components/icons/linear/PhoneIconLinear';
import { FormatPhoneNumberCountry } from '@/utils/format/FormatNumber';
import React, { ReactNode, useEffect, useState } from 'react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { NumericFormatCore } from '@/lib/numericFormat'
import { regexPatterns } from '../../../../../utils/regex/regexUtils';

import { SelectCustomSearch } from '@/components/common/select/SelectCustomSearch'
import { useStatePageContactUs } from './../../_state/useStatePageContactUs';
import { uuidv4 } from '@/lib/uuid';
import ContactCard from '../../../../../components/common/card/contact/ContactCard';
import { ICardContactItem } from '@/types/card/ICard';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Captcha from '@/components/common/captcha/Captcha';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';
import { GoArrowUpRight } from 'react-icons/go';
import CaptchaDemo from '@/components/common/captcha/CaptchaDemo';
import CaptchaOrigin from '@/components/common/captcha/CaptchaOrigin';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import ArrowUpRightIcon from '../../../../../components/icons/common/ArrowUpRightIcon';

import { motion } from 'framer-motion'
import { useResizeStore } from '../../../../../stores/useResizeStore';

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

const defaultValues: FormValues = {
    email: "",
    fullname: "",
    phone: "",
    description: "",
    file: [],
    name_company: "",
    service: "",
    role: ""
}

const FormContactSection = (props: Props) => {
    const { isVisibleTablet } = useResizeStore()
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { isStatePageContactUs, queryKeyIsStatePageContactUs } = useStatePageContactUs()
    const form = useForm({
        defaultValues: {
            ...defaultValues,
            mode: "onChange", // Chế độ validation
        }
    })

    useEffect(() => {
        if (!form.getValues("service") && serviceList.length > 0) {
            form.setValue("service", serviceList[0].id); // Đặt giá trị mặc định
        }
    }, [form]);

    // Hàm Chọn riêng lẻ từng item
    const handleSingleSelect = (value: any, field: any, type?: string, item?: any, index?: number) => {
        const isSameValue = JSON.stringify(value) === JSON.stringify(field.value); // So sánh đối tượng
        // Nếu chọn lại chính nó, đặt thành undefined
        field.onChange(isSameValue ? undefined : value);
    };

    const onSubmit = (value: any) => {

    }

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

                <div className='grid grid-cols-18 lg:space-x-6 lg:space-y-6 space-x-0 space-y-6'>
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

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit((data) => onSubmit(data))}
                            className='lg:col-span-13 col-span-18  gap-6 bg-white w-full rounded-3xl lg:p-5'
                            style={{
                                boxShadow: isVisibleTablet ? "" : "0px 1px 2px 0px #1212170F, 0px 1px 3px 0px #1212171A"
                            }}
                        >
                            <div className='grid md:grid-cols-4 grid-cols-1 gap-6'>
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    rules={{
                                        required: "Vui lòng nhập họ và tên!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-4 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                            >
                                                Họ và tên <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="name"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"} 
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
                                            <FormItem className='flex flex-col w-full lg:col-span-2 col-span-4 gap-1'>
                                                <FormLabel
                                                    className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                                >
                                                    Số điện thoại <span className="text-[#FA3434]">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <NumericFormatCore
                                                        id="number_phone"
                                                        name="phone"
                                                        value={value}
                                                        getInputRef={ref}
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"} 
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
                                        <FormItem className='flex flex-col w-full lg:col-span-2 col-span-4 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                            >
                                                Email <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="email"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"} 
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
                                    rules={{
                                        required: "Vui lòng nhập tên công ty!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full lg:col-span-2 col-span-4 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                            >
                                                Tên tổ chức doanh nghiệp <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        id="name-company"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                            text-[#333538] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none`}
                                                        placeholder={"Nhập tên công ty"}
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
                                    name="role"
                                    rules={{
                                        required: "Vui lòng chọn chức vụ!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full lg:col-span-2 col-span-4 gap-1'>
                                            <FormLabel
                                                htmlFor="role"
                                                className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                            >
                                                Chức vụ <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <SelectCustomSearch
                                                    onChange={(value) => handleSingleSelect(value, field)}
                                                    onValueChange={() => { }}
                                                    selected={field.value}
                                                    options={roleData || []}
                                                    onOpen={(e: boolean) => {
                                                        console.log('e', e);


                                                        queryKeyIsStatePageContactUs({
                                                            combobox: {
                                                                ...isStatePageContactUs?.combobox,
                                                                variants: {
                                                                    value: "",
                                                                    selected: {},
                                                                    open: e,
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    // loading={isLoadingDataCamboquickService}'
                                                    mutiValue={false}
                                                    title='Chức vụ'
                                                    classNameArrow={`${isStatePageContactUs?.combobox?.variants?.open ? 'rotate-180 text-[#15AA7A] custom-transition' : ''}`}
                                                    classNameButtonTrigger={`
                                                        ${isStatePageContactUs?.combobox?.variants?.open ? 'border-[#15AA7A]' : ''}
                                                        ${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"}
                                                        bg-white 3xl:text-base lg:text-sm text-base rounded-lg w-full h-full  px-3 py-1 text-[#33404A] bg-transparent text-sm-default w-full h-12 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
                                                    classNameInputSearch='bg-white rounded-none border-t-0 border-x-0 border-b'
                                                    colorActive='#15AA7A'
                                                />
                                            </FormControl>
                                            {fieldState?.invalid && fieldState?.error && (
                                                <FormMessage>{fieldState?.error?.message}</FormMessage>
                                            )}
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="service"
                                    rules={{
                                        required: "Vui lòng chọn dịch vụ!",
                                    }}
                                    render={({ field, fieldState }) => {
                                        console.log('field.valu', field.value);

                                        return (
                                            <FormItem className='flex flex-col w-full col-span-4 gap-1'>
                                                <FormLabel
                                                    htmlFor="role"
                                                    className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                                >
                                                    Vui lòng chọn dịch vụ bạn quan tâm <span className="text-[#FA3434]">*</span>
                                                </FormLabel>
                                                <FormControl className='max-w-[80%]'>
                                                    <RadioGroup
                                                        onValueChange={(value) => {
                                                            console.log("Selected service:", value)
                                                            field.onChange(value)
                                                        }}
                                                        value={field.value}
                                                        className="flex flex-wrap gap-3 2xl:max-w-[80%] lg:max-w-[90%] max-w-full"
                                                    >
                                                        {
                                                            serviceList.map((service) => (
                                                                <Label
                                                                    key={`service-form-${service.id}`}
                                                                    className={cn(
                                                                        "text-sm border border-[#D9E1E7] rounded-[8px] p-3 font-medium text-[#33404A] cursor-pointer w-fit flex items-center gap-2 custom-transition",
                                                                        field.value === service.id ? "bg-[#A3EED6] border-[#15AA7A]" : "hover:bg-[#A3EED6] hover:border-[#15AA7A]"
                                                                    )}
                                                                >
                                                                    <RadioGroupItem value={service.id} className="sr-only" />
                                                                    {service.name}
                                                                </Label>
                                                            ))
                                                        }
                                                    </RadioGroup>
                                                </FormControl>
                                                {fieldState?.invalid && fieldState?.error && (
                                                    <FormMessage>{fieldState?.error?.message}</FormMessage>
                                                )}
                                            </FormItem>
                                        )
                                    }}
                                />

                                <FormField
                                    control={form.control}
                                    name="description"
                                    rules={{
                                        required: "Vui lòng nhập nội dung!",
                                    }}
                                    render={({ field, fieldState }) => (
                                        <FormItem className='flex flex-col w-full col-span-4 gap-1'>
                                            <FormLabel
                                                htmlFor="name"
                                                className="3xl:text-base lg:text-sm text-base font-extrabold text-[#33404A] w-fit"
                                            >
                                                Chia sẻ nhu cầu của bạn để nhận tư vấn tối ưu từ chuyên gia <span className="text-[#FA3434]">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Textarea
                                                        id="description"
                                                        placeholder="Nhập mô tả"
                                                        className={`${fieldState?.invalid && fieldState?.error ? "border border-[#F15A5A] focus-visible:ring-[#F15A5A]" : "border border-[#D9E1E7]"} 
                                                text-[#333538] bg-transparent text-sm-default w-full lg:h-28 h-52 shadow-none rounded-[8px] placeholder:text-[#33404A] placeholder:font-medium focus:ring-none focus:outline-none`}
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

                                <div className='col-span-4 flex lg:flex-row flex-col lg:gap-2 gap-4 items-center justify-between'>
                                    {/* CAPTCHA */}
                                    <div className='space-y-1 '>
                                        <Captcha onVerify={(token) => console.log("Captcha Token:", token)} />
                                        {/* <CaptchaDemo onVerify={(token) => console.log("Captcha Token:", token)} /> */}
                                        {/* <CaptchaOrigin onVerify={(token) => console.log("Captcha Token:", token)} /> */}

                                        {/* Thông báo lỗi hoặc thành công */}
                                        {/* {message && <p className="text-red-500">{message}</p>} */}
                                    </div>

                                    <ButtonAnimationNew
                                        title="Gửi Yêu Cầu"
                                        icon={
                                            <div className="2xl:size-12 md:size-10 size-9 rounded-full flex items-center justify-center group-hover:bg-[#10805B] group-hover:text-white duration-500 transition-colors">
                                                <motion.div
                                                    initial={{ x: 0, y: 0 }}
                                                    animate={isHovered ? { x: 2, y: -2 } : { x: 0, y: 0 }} // Bay chéo lên phải và xuống lại
                                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                >
                                                    <ArrowUpRightIcon className="2xl:size-6 md:size-5 size-4" />
                                                </motion.div>
                                            </div>
                                        }
                                        onMouseEnter={() => setIsHovered(true)} // Khi hover vào button
                                        onMouseLeave={() => setIsHovered(false)} // Khi rời khỏi button
                                        onClick={() => console.log('Button Clicked!')}
                                        reverse={true}
                                        className="flex items-center gap-2 3xl:!text-lg xl:!text-base lg:!text-sm md:!text-base text-sm !tracking-[1%] group text-[#10805B] hover:bg-[#A3EED6]/40 hover:!backdrop-blur-[100px] hover:!backdrop-filter hover:text-[#10805B] font-medium pl-6 pr-1 py-1 border border-[#10805B] rounded-[40px] lg:w-fit w-full"
                                        style={{
                                            WebkitBackdropFilter: "blur(15px)", // Safari
                                            boxShadow: "0px 2px 83.99px 0px rgba(0, 0, 0, 0.02) inset, -9px 20px 59.99px -24px rgba(0, 0, 0, 0.05), 1px -1px 0px 0px rgba(255, 255, 255, 1), -1px 1px 0px 0px rgba(240, 240, 240, 1)"
                                        }}
                                    />
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormContactSection