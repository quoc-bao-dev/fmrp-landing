import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialMedia = [
    { icon: "/icons/social-media/zalo.svg", link: "#" },
    { icon: "/icons/social-media/facebook.svg", link: "#" },
    { icon: "/icons/social-media/tiktok.svg", link: "#" },
    { icon: "/icons/social-media/youtube.svg", link: "#" },
];

const SocialSection = () => (
    <div className="flex xl:space-x-4 space-x-2">
        {
            socialMedia.map((social, index) => (
                <a key={index} href={social.link} className="text-xl text-[#B4B8C5] hover:scale-105 transition">
                    <div className="bg-[#F2F2F2]/10 hover:bg-[#F2F2F2]/5 p-3 rounded-2xl custom-transition flex-shrink-0">
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

export default SocialSection;
