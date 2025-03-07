import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // ✅ Xử lý khi reCAPTCHA đã tải
    useEffect(() => {
        if (recaptchaRef.current) {
            console.log("✅ reCAPTCHA đã mount!");
            setRecaptchaLoaded(true);
        }
    }, [recaptchaRef.current]); // Lắng nghe thay đổi của ref

    // ✅ Khi reCAPTCHA script được tải hoàn toàn
    const asyncScriptOnLoad = () => {
        console.log("✅ Google reCAPTCHA script đã load 2!");
        setRecaptchaLoaded(true);
    };

    // ✅ Khi xác minh thành công
    const handleVerify = (token: string | null) => {
        console.log("✅ Captcha Token:", token);
        setCaptchaValue(token);
        onVerify(token);
        setIsChecked(true); // Cập nhật UI khi đã xác thực
    };

    // ✅ Kích hoạt reCAPTCHA
    const handleSubmit = async () => {
        if (!recaptchaRef.current || !recaptchaLoaded) {
            console.error("🚨 reCAPTCHA chưa sẵn sàng!");
            return;
        }

        console.log("🔄 Kích hoạt reCAPTCHA...");
        try {
            const token = await recaptchaRef.current.executeAsync();
            if (!token) {
                console.error("🚨 Không có token!");
                throw new Error("🚨 reCAPTCHA không trả về token!");
            }

            handleVerify(token);
        } catch (err) {
            console.error("❌ Lỗi executeAsync():", err);
        }
    };

    if (!siteKey) {
        return <p className="text-red-500">Lỗi: Chưa có reCAPTCHA Site Key</p>;
    }

    return (
        <div className="flex justify-center">
            {/* 🔍 reCAPTCHA Invisible */}
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={handleVerify}
                size="invisible"
                asyncScriptOnLoad={asyncScriptOnLoad}
                nonce={document?.querySelector("meta[name='csp-nonce']")?.getAttribute("content") ?? ''}
            />

            {/* 🔘 Nút Custom */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!recaptchaLoaded}
                className="relative flex items-center justify-between w-[320px] h-[90px] border border-[#1b365d] rounded-lg overflow-hidden shadow-md bg-white hover:bg-gray-100 transition-all p-4"
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
            </button>
        </div>
    );
};

export default Captcha;
