import { JSX } from "react";
import { FormatPhoneNumberCountry } from "@/utils/format/FormatNumber";
import PhoneLink from "../../../common/contact-links/PhoneLink";
import EmailLink from "../../../common/contact-links/EmailLink";
import InfoSection from "../elements/InfoSection";

interface CompanyInfoItem {
    label: string;
    value: JSX.Element | string;
}

interface ServiceItem {
    name: string;
    link: string;
}

interface PolicyItem {
    name: string;
    link: string;
}

const FooterContent = () => {
    const companyInfo: CompanyInfoItem[] = [
        { label: "MST:", value: "031405287" },
        {
            label: "Hotline:",
            value: <PhoneLink phoneNumber="0901136968" className="hover:text-[#B3C5D4]/80 custom-transition">
                {FormatPhoneNumberCountry("0901136968", "VN")}
            </PhoneLink>
        },
        { label: "Email:", value: <EmailLink email="info@fososoft.com" className="hover:text-[#B3C5D4]/80 custom-transition" /> },
        { label: "Địa chỉ trụ sở:", value: "số 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM" },
        { label: "Địa chỉ văn phòng:", value: "Tòa nhà VCC Building, 69/1/3 Nguyễn Gia Trí, Phường 25, Quận Bình Thạnh, TP.HCM" }
    ];

    const services: ServiceItem[] = [
        { name: "Thiết kế Website", link: "#" },
        { name: "Thiết kế App Mobile", link: "/services/app-development" },
        { name: "Thuê Hosting", link: "/services/hosting" },
        { name: "Thuê IT Outsourcing", link: "/services/it-outsourcing" },
        { name: "FMRP - Trợ lý sản xuất", link: "#" },
        { name: "FPOS - Trợ lý bán hàng", link: "#" }
    ];

    const policies: PolicyItem[] = [
        { name: "Chính sách bảo mật", link: "#" },
        { name: "Quy định thanh toán", link: "#" },
        { name: "Chính sách cookie", link: "#" }
    ];


    return (
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between lg:gap-0 gap-4">
            <div className="lg:max-w-[60%] max-w-full">
                <InfoSection title="CÔNG TY TNHH CÔNG NGHỆ FOSO" items={companyInfo} />
            </div>

            <div className="grid grid-cols-4 2xl:gap-20 md:gap-10 gap-4 justify-end lg:max-w-[40%] max-w-full">
                <div className='md:col-span-2 col-span-4'>
                    <InfoSection title="Dịch vụ" items={services} />
                </div>
                <div className='md:col-span-2 col-span-4'>
                    <InfoSection title="Chính sách" items={policies} />
                </div>
            </div>
        </div>
    )
};

export default FooterContent;
