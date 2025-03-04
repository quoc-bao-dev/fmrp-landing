import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

    // ✅ Hàm xử lý khi xác minh reCAPTCHA thành công
    const handleVerify = (token: string | null) => {
        if (token) {
            console.log("✅ Token từ reCAPTCHA:", token);
            setIsChecked(true); // Đánh dấu checkbox
            onVerify(token);
        } else {
            console.warn("⚠️ Token reCAPTCHA không hợp lệ hoặc chưa được xác minh.");
        }
    };

    // ✅ Khi component mount, kiểm tra nếu reCAPTCHA đã sẵn sàng
    useEffect(() => {
        if (!siteKey) {
            console.error("🚨 NEXT_PUBLIC_RECAPTCHA_SITE_KEY chưa được cấu hình!");
        }

        const checkRecaptchaReady = setInterval(() => {
            if (recaptchaRef.current) {
                console.log("✅ reCAPTCHA đã sẵn sàng!");
                setIsRecaptchaReady(true);
                clearInterval(checkRecaptchaReady);
            }
        }, 500);

        return () => clearInterval(checkRecaptchaReady);
    }, [siteKey]);

    // ✅ Hàm kích hoạt reCAPTCHA khi click vào checkbox
    const handleCustomButtonClick = () => {
        if (isRecaptchaReady && recaptchaRef.current) {
            console.log("🔄 Đang kích hoạt reCAPTCHA...");
            recaptchaRef.current.execute();
        } else {
            console.error("🚨 reCAPTCHA chưa sẵn sàng hoặc phương thức execute() không tồn tại!");
        }
    };

    if (!siteKey) {
        return <p className="text-red-500">Lỗi: Chưa có reCAPTCHA Site Key</p>;
    }

    return (
        <div className="flex justify-center">
            {/* 🔘 Nút custom */}
            <button
                type="button"
                onClick={handleCustomButtonClick}
                className="relative flex items-center justify-between w-[320px] h-[90px] border border-[#1b365d] rounded-lg overflow-hidden shadow-md bg-white hover:bg-gray-100 transition-all p-2"
            >
                {/* 🔲 Custom Checkbox */}
                <div className="flex items-center gap-2">
                    <div
                        className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-all
                            ${isChecked ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-gray-400"}
                        `}
                    >
                        {isChecked && <span className="text-white font-bold">✔</span>}
                    </div>

                    {/* 🔹 Text "Click to Verify" */}
                    <span className="text-gray-700 font-medium">Click to Verify</span>
                </div>

                {/* 🔹 Phần logo reCAPTCHA */}
                <div className="absolute right-0 w-[90px] h-full bg-[#1b365d] flex items-center justify-center">
                    <div className="size-16">
                        <Image
                            width={400}
                            height={400}
                            src="/icons/svg/captcha/captcha.svg"
                            alt="Custom reCAPTCHA"
                            className="size-full object-contain"
                        />
                    </div>
                </div>

                {/* 🔍 reCAPTCHA Invisible */}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={handleVerify}
                    size="invisible"
                />
            </button>
        </div>
    );
};

export default Captcha;
