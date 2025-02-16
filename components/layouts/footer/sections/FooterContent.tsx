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
        <div className="flex items-center justify-between">
            <div className="flex flex-col 3xl:gap-6 gap-4 max-w-[50%]">
                <div className="text-default font-bold text-[#F1F5F7] uppercase">
                    CÔNG TY TNHH CÔNG NGHỆ FOSO
                </div>
                <InfoSection items={companyInfo} />
            </div>

            <div className="grid grid-cols-5 gap-20 justify-end max-w-[50%]">
                <div className="col-span-1" />
                <InfoSection title="Dịch vụ" items={services} />
                <InfoSection title="Chính sách" items={policies} />
            </div>
        </div>
    )
};

export default FooterContent;
