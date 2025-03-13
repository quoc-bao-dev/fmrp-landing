import { SocialMediaItem } from "@/types/social-media/ISocialMedia";
import Image from "next/image";

interface SocialMediaListProps {
    socialMedia: SocialMediaItem[];
    className?: string
    style?: any
}

const SocialMediaList: React.FC<SocialMediaListProps> = ({ socialMedia, className, style }) => (
    <div className="flex xl:space-x-4 space-x-2">
        {
            socialMedia.map((social, index) => (
                <a key={index} href={social.link} className="text-xl text-[#B4B8C5] hover:scale-105 transition">
                    <div
                        className={`${className} p-3 rounded-2xl custom-transition flex-shrink-0`}
                        style={style}
                        onClick={() => { window.open(social.link) }}
                    >
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='xxl:size-6 size-5 object-contain'
                            src={social?.icon}
                        />
                    </div>
                </a>
            ))
        }
    </div>
);

export default SocialMediaList;
