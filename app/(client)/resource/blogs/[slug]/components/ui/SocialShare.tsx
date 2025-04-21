"use client"

import ZaloOriginIcon from '../../../../../../../components/icons/social-media/ZaloOriginIcon';
import FacebookOriginIcon from '@/components/icons/social-media/FacebookOriginIcon';
import XOriginIcon from '../../../../../../../components/icons/social-media/XOriginIcon';
import LinkedOriginIcon from '../../../../../../../components/icons/social-media/LinkedOriginIcon';
import RedditOriginIcon from '../../../../../../../components/icons/social-media/RedditOriginIcon';
import * as React from 'react';
import ButtonAnimationNew from '@/components/common/button/ButtonAnimationNew';
import { variantButtonBasic } from '@/utils/animations/variantsAnimation';
import { useResizeStore } from '../../../../../../../stores/useResizeStore';
import { uuidv4 } from '@/lib/uuid';
import { FaYoutube } from 'react-icons/fa';
import YoutubeOriginIcon from '@/components/icons/social-media/YoutubeOriginIcon';

type SocialPlatform = "zalo" | "facebook" | "twitter" | "linkedin" | "reddit"

// Chuyển từ object thành mảng
const platforms = [
    {
        id: uuidv4(),
        key: "zalo",
        name: "Zalo",
        url: "https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft",
        width: 600,
        height: 600,
        icon: ZaloOriginIcon,
        appendUrl: true,
    },
    {
        id: uuidv4(),
        key: "facebook",
        name: "Facebook",
        url: "https://www.facebook.com/fososoftware",
        width: 670,
        height: 340,
        icon: FacebookOriginIcon,
        appendUrl: false,
    },
    {
        id: uuidv4(),
        key: "youtube",
        name: "Youtube",
        url: "https://www.youtube.com/@fososoft",
        width: 550,
        height: 420,
        icon: YoutubeOriginIcon,
        appendUrl: false,
    },
    {
        id: uuidv4(),
        key: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/fososoft/",
        width: 550,
        height: 450,
        icon: LinkedOriginIcon,
        appendUrl: false,
    },
    // {
    //     id: uuidv4(),
    //     key: "reddit",
    //     name: "Reddit",
    //     url: "https://www.reddit.com/submit?url=",
    //     width: 600,
    //     height: 600,
    //     icon: RedditOriginIcon,
    // }
];

type SocialShareProps = {
    classNameContainer?: string
    classNameSocial?: string
    isVisibleTablet?: boolean
}

export default function SocialShare({ classNameContainer, classNameSocial, isVisibleTablet }: SocialShareProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleShare = (platform: SocialPlatform | string) => {
        const info = platforms.find(p => p.key === platform);
        if (!info) return;

        const currentUrl = typeof window !== "undefined" ? window.location.href : "";
        const left = window.screen.width / 2 - info.width / 2;
        const top = window.screen.height / 2 - info.height / 2;

        // 🧠 Chỉ append URL nếu nền tảng yêu cầu
        const shouldAppendUrl = ["zalo", "reddit", "twitter"].includes(platform);
        const finalUrl = shouldAppendUrl ? `${info.url}${encodeURIComponent(currentUrl)}` : info.url;

        // window.open(
        //     `${info.url}${encodeURIComponent(currentUrl)}`,
        //     `share_${platform}`,
        //     `width=${info.width},height=${info.height},left=${left},top=${top},toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1`
        // );

        window.open(
            finalUrl,
            `share_${platform}`,
            `width=${info.width},height=${info.height},left=${left},top=${top},toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1`
        );
    };

    return (
        <div className={classNameContainer}>
            <h3 className="text-base-default font-extrabold text-[#33404A]">Chia sẻ</h3>
            {
                isVisibleTablet ?
                    (
                        <div className="relative">
                            <button
                                className="flex size-12 items-center justify-center rounded-2xl border border-[#15AA7A] text-[#15AA7A] hover:bg-[#15AA7A]/20 backdrop-blur-lg transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <img
                                    src="/icons/share.svg"
                                    alt="Share"
                                    className="size-6"
                                />
                            </button>
                            {
                                isOpen && (
                                    <div className="absolute left-0 top-14 flex flex-col items-center gap-3 bg-white shadow-lg rounded-xl p-3">
                                        {
                                            platforms.map((item) => (
                                                <ButtonAnimationNew
                                                    key={item.id}
                                                    icon={
                                                        <div className="size-6 object-contain">
                                                            <item.icon />
                                                        </div>
                                                    }
                                                    hideTitle={true}
                                                    className='flex size-12 items-center justify-center rounded-2xl border border-[#15AA7A] text-[#15AA7A] hover:bg-[#15AA7A]/20 backdrop-blur-lg transition-colors'
                                                    onClick={() => handleShare(item.id)}
                                                    variant={variantButtonBasic}
                                                />
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                    :
                    (
                        <div className={classNameSocial}>
                            {
                                platforms && platforms?.map((item) => (
                                    <React.Fragment key={`${item.id}`}>
                                        <ButtonAnimationNew
                                            icon={
                                                <div className="size-6 object-contain">
                                                    <item.icon /> {/* Gọi component thay vì truyền reference */}
                                                </div>
                                            }
                                            hideTitle={true}
                                            className='flex size-12 items-center justify-center rounded-2xl border border-[#15AA7A] text-[#15AA7A] hover:bg-[#15AA7A]/20 backdrop-blur-lg transition-colors'
                                            onClick={() => handleShare(item.key)}
                                            variant={variantButtonBasic}
                                        />
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    )
            }
        </div>
    )
}

