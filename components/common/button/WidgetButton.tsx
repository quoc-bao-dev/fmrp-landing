import React from "react";
import Image from "next/image";
import ButtonToTop from "./ButtonToTop";
import SocialMediaButton from "./SocialMediaButton";

// Danh sách các button mạng xã hội với `handleClick` riêng
const socialButtons = [
    {
        icon: "/icons/social-media/zalo2.svg",
        background_animation: "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
        handleClick: () => console.log("Zalo button clicked!")
    },
    {
        icon: "/icons/social-media/messenger.svg",
        background_animation: "linear-gradient(212.75deg, #FF7061 5.92%, #FF5280 34.96%, #A033FF 68.84%, #0099FF 96.41%)",
        handleClick: () => console.log("Messenger button clicked!")
    },
    {
        icon: "/icons/social-media/call.svg",
        background_animation: "linear-gradient(90deg, #53B086 0%, #53B086 100%)",
        handleClick: () => alert("Calling...")
    },
    {
        icon: "/icons/social-media/gmail.svg",
        background_animation: "linear-gradient(90deg, #53B086 0%, #53B086 100%)",
        className: "bg-[#53B086]/80",
        handleClick: () => alert("Opening Gmail...")
    }
];

// Component WidgetButton
const WidgetButton: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 fixed bottom-8 lg:right-8 right-5 z-[999]">
            {socialButtons.map((button, index) => (
                <SocialMediaButton
                    key={index}
                    className={button.className || ""}
                    background_animation={button.background_animation}
                    handleClick={button.handleClick} // ✅ Truyền `handleClick` riêng cho từng button
                >
                    <div
                        className="bg-white hover:bg-[#53B086]/80 p-3 rounded-full custom-transition"
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
                </SocialMediaButton>
            ))}

            <ButtonToTop />
        </div>
    );
}

export default React.memo(WidgetButton);
