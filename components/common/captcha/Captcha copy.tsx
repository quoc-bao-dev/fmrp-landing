import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (recaptchaRef.current) {
            console.log("✅ reCAPTCHA đã mount!");
            setIsReady(true);
        }
    }, []);

    const handleVerify = (token: string | null) => {
        console.log("✅ Captcha Token:", token);
        onVerify(token);
    };

    const handleSubmit = async () => {
        if (!recaptchaRef.current) {
            console.error("🚨 reCAPTCHA chưa mount!");
            return;
        }
        if (!isReady) {
            console.error("🚨 reCAPTCHA chưa sẵn sàng!");
            return;
        }

        console.log("🔄 Kích hoạt reCAPTCHA...");
        try {
            const token = await recaptchaRef.current.executeAsync();
            if (!token) {
                throw new Error("🚨 Không có token từ reCAPTCHA!");
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
        <div className="flex flex-col items-center">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                size="invisible"
                onChange={handleVerify}
                onErrored={() => console.error("🚨 Lỗi reCAPTCHA!")}
                onExpired={() => console.warn("⚠️ reCAPTCHA đã hết hạn, cần làm mới.")}
                asyncScriptOnLoad={() => setIsReady(true)}
            />

            <button
                type="button"
                onClick={handleSubmit}
                disabled={!isReady}
                className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 disabled:bg-gray-400"
            >
                Xác nhận
            </button>
        </div>
    );
};

export default Captcha;
