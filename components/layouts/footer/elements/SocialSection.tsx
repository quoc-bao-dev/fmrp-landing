import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socialMedia = [
    { icon: "/icons/social-media/zalo.svg", link: "#" },
    { icon: "/icons/social-media/facebook.svg", link: "#" },
    { icon: "/icons/social-media/tiktok.svg", link: "#" },
    { icon: "/icons/social-media/youtube.svg", link: "#" },
];

const SocialSection = () => (
    <div className="flex space-x-4">
        {
            socialMedia.map((social, index) => (
                <a key={index} href={social.link} className="text-xl text-[#B4B8C5] hover:scale-105 transition">
                    <div className="bg-[#F2F2F2]/10 hover:bg-[#F2F2F2]/5 p-3 rounded-2xl custom-transition">
                        <Image
                            width={100}
                            height={100}
                            alt="social-media"
                            className='size-6 object-contain'
                            src={social?.icon}
                        />
                    </div>
                </a>
            ))
        }
    </div>
);

export default SocialSection;
