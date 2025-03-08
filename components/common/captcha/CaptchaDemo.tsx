import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null | any) => void;
}

const CaptchaDemo: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const [captchaValue, setCaptchaValue] = useState<string | null | any>(null);
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

    const [expired, setExpired] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    // ✅ Hàm xử lý khi xác minh reCAPTCHA thành công
    const handleVerify = (token: string | null) => {
        console.log("✅ Captcha Token:", token);
        setCaptchaValue(token);
        onVerify(token);
        if (token === null) {
            setExpired(true);
        }
    };

    // ✅ Kiểm tra nếu reCAPTCHA đã load thành công
    useEffect(() => {
        if (recaptchaRef.current) {
            console.log("✅ reCAPTCHA đã mount 2!");
            setIsRecaptchaReady(true);
        }
    }, [siteKey]);

    // ✅ Khi reCAPTCHA script được tải hoàn toàn
    const asyncScriptOnLoad = () => {
        console.log("✅ Google reCAPTCHA script đã load 2!");
        setRecaptchaLoaded(true);
    };

    // ✅ Hàm kích hoạt reCAPTCHA khi bấm nút submit
    const handleSubmit = () => {
        if (!recaptchaRef.current || !recaptchaLoaded) {
            console.error("🚨 reCAPTCHA chưa sẵn sàng hoặc chưa được mount!");
            return;
        }

        console.log("🔄 Đang kích hoạt reCAPTCHA...");

        try {
            console.log("✅ check 1");
            const token = recaptchaRef.current.execute();


            // if (!token) {
            //     console.error("🚨 Lỗi: reCAPTCHA không trả về token!");
            //     return;
            // }

            console.log("✅ Token nhận được:", token);
            console.log("✅ check 2");
            setCaptchaValue(token);
            // handleVerify(token);
        } catch (err) {
            console.error("❌ Lỗi khi gọi executeAsync():");
        }
    };

    if (!siteKey) {
        return <p className="text-red-500">Lỗi: Chưa có reCAPTCHA Site Key</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Google reCAPTCHA Invisible</h3>

            {/* 🔍 Invisible reCAPTCHA */}
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={siteKey}
                onChange={handleVerify}
                size="invisible"
                asyncScriptOnLoad={asyncScriptOnLoad}
            />

            {/* 🔘 Nút Submit */}
            <button
                type="button"
                onClick={handleSubmit}
                disabled={!recaptchaLoaded}
                className={`mt-4 px-6 py-2 text-white rounded ${recaptchaLoaded ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
                    }`}
            >
                {recaptchaLoaded ? "Submit Captcha" : "Loading..."}
            </button>

            {/* 🔹 Trạng thái Captcha */}
            <div className="mt-2 text-gray-700">
                <p><strong>Captcha Token:</strong> {captchaValue || "[Chưa có]"}</p>
                <p><strong>Expired:</strong> {expired ? "✔" : "❌"}</p>
            </div>
        </div>
    );
};

export default CaptchaDemo;
