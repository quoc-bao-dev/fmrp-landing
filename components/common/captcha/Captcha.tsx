import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
    onVerify: (token: string | null | any) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const [isChecked, setIsChecked] = useState(false);
    const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

    // const [expired, setExpired] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<string | null | any>(null);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    // ✅ Hàm xử lý khi xác minh reCAPTCHA thành công
    const handleVerify = (token: string | null | any) => {
        console.log("✅ Captcha Token:", token);
        setCaptchaValue(token);
        onVerify(token);
        if (token === null) {
            console.log('no token');

            // setExpired(true);
        }
    };
    // ✅ Kiểm tra nếu reCAPTCHA đã load thành công
    useEffect(() => {
        if (recaptchaRef.current) {
            console.log("✅ reCAPTCHA đã mount 1!");
            setIsRecaptchaReady(true);
        }
    }, [siteKey]);

    // ✅ Khi reCAPTCHA script được tải hoàn toàn
    const asyncScriptOnLoad = () => {
        console.log("✅ Google reCAPTCHA script đã load 1!");
        setRecaptchaLoaded(true);
    };

    // ✅ Hàm kích hoạt reCAPTCHA khi bấm nút submit
    const handleSubmit = async () => {
        if (!recaptchaRef.current || !recaptchaLoaded) {
            console.error("🚨 reCAPTCHA chưa sẵn sàng hoặc chưa được mount!");
            return;
        }

        console.log("🔄 Đang kích hoạt reCAPTCHA...");

        try {
            console.log("✅ check 1");
            const token = await recaptchaRef.current.executeAsync();


            // if (!token) {
            //     console.error("🚨 Lỗi: reCAPTCHA không trả về token!");
            //     return;
            // }

            console.log("✅ Token nhận được:", token);
            console.log("✅ check 2");
            setCaptchaValue(token);
            handleVerify(token);
        } catch (err) {
            console.error("❌ Lỗi khi gọi executeAsync():");
        }
    };


    console.log('captchaValue', captchaValue);
    console.log('isRecaptchaReady', isRecaptchaReady);
    console.log('recaptchaRef', recaptchaRef.current);


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
            />

            {/* 🔘 Nút custom */}
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


            </button>
        </div>
    );
};

export default Captcha;
