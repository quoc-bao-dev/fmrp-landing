import React from "react";
import Image from "next/image";
import ButtonToTop from "./ButtonToTop";
import SocialMediaButton from "./SocialMediaButton";
import { usePathname } from 'next/navigation';

// Danh sách các button mạng xã hội với `handleClick` riêng
const socialButtons = [
    {
        icon: "/icons/social-media/zalo2.svg",
        background_animation: "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
        info: <p className="text-sm">Nhắn tin qua Messenger</p>,
        handleClick: () => { window.open("https://zalo.me/2281264205827497572") }
    },
    {
        icon: "/icons/social-media/messenger.svg",
        background_animation: "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
        info: <p className="text-sm">Nhắn tin qua Messenger</p>,
        handleClick: () => { window.open("https://m.me/fososoftware") }
    },
    {
        icon: "/icons/social-media/call.svg",
        background_animation: "linear-gradient(90deg, #53B086 0%, #53B086 100%)",
        info: <p className="text-sm">Nhắn tin qua Messenger</p>,
        handleClick: () => { window.location.href = `tel:0901136968` }
    },
    {
        icon: "/icons/social-media/gmail.svg",
        background_animation: "linear-gradient(90deg, #53B086 0%, #53B086 100%)",
        className: "bg-[#53B086]/80",
        info: <p className="text-sm">Nhắn tin qua Messenger</p>,
        handleClick: () => { window.open("https://m.me/yourpage", "_blank") },
        // handleClick: () => { window.open("mailto:info@fososoft.com", "_blank") }
        // handleClick: () => { window.location.href = `mailto:info@fososoft.com` }
    }
];

// Component WidgetButton1
const WidgetButton1: React.FC = () => {
    const pathname = usePathname()
    return (
        <div className="flex flex-col gap-4 fixed bottom-8 lg:right-8 right-5 z-[999]">
            {socialButtons.map((button, index) => (
                <SocialMediaButton
                    key={index}
                    className={button.className || ""}
                    // background_animation={button.background_animation}
                    info={button.info}
                    handleClick={button.handleClick} // ✅ Truyền `handleClick` riêng cho từng button
                    icon={
                        <div
                            className={`${pathname === "/products/fmrp" ? "hover:bg-[#0375f3]/80" : "hover:bg-[#53B086]/80"} bg-white  p-3 rounded-full custom-transition`}
                            style={{
                                boxShadow: "0px 4px 6px -1px #0000001A, 0px 2px 4px -2px #0000001A"
                            }}
                        >
                            <Image
                                width={100}
                                height={100}
                                alt="social-media"
                                className="size-6 object-contain"
                                src={button.icon}
                            />
                        </div>
                    }
                />
            ))}

            <ButtonToTop />
        </div>
    );
}

export default React.memo(WidgetButton1);
