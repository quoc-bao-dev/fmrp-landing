import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null) => void;
}

const CaptchaOrigin: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    // ✅ Xử lý khi xác minh
    const handleVerify = useCallback((token: string | null) => {
        onVerify(token);
    }, [onVerify]);

    useEffect(() => {
        if (!siteKey) {
            console.error("🚨 NEXT_PUBLIC_RECAPTCHA_SITE_KEY chưa được cấu hình!");
        }
    }, [siteKey]);

    if (!siteKey) {
        return <p className="text-red-500">Lỗi: Chưa có reCAPTCHA Site Key</p>;
    }

    return (
        <div className="flex justify-center custom-captcha">
            <div className="relative flex items-center w-[320px] h-[90px] border border-[#1b365d] rounded-lg overflow-hidden shadow-md p-0">
                {/* Google reCAPTCHA */}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={handleVerify}
                    size="normal"
                    badge="inline"
                />


                {/* Custom logo thay thế reCAPTCHA */}
                <div className="absolute right-0 w-[90px] h-full bg-[#1b365d] flex items-center justify-center p-0 ">
                    <div className='size-16'>
                        <Image
                            width={400}
                            height={400}
                            src="/icons/svg/captcha/captcha.svg"
                            alt="Custom reCAPTCHA"
                            className='size-full object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptchaOrigin;
