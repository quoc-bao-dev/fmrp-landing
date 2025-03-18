import HoverEffect from '@/components/common/animations/hover-button/HoverEffectButton';
import BlurredBackground from '@/components/common/blur/BlurredBackground';
import ButtonAnimation from '@/components/common/button/ButtonAnimation';
import WhyCard from '@/components/common/card/why/WhyCard';
import { useResizeStore } from '@/stores/useResizeStore';
import { BookOpen, Cat } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

import { variantsLinearShadow } from '@/utils/animations/variantsAnimation'
import { useSheetStores } from '@/stores/useSheetStores';
import BlurredBackground2 from '@/components/common/blur/BlurredBackground2';

type Props = {}

const values = [
    {
        icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M58 32C58 35.1275 53.545 37.4875 52.33 40.4225C51.16 43.2525 52.685 48.085 50.385 50.385C48.085 52.685 43.2525 51.16 40.4225 52.33C37.5 53.545 35.125 58 32 58C28.875 58 26.5 53.545 23.5775 52.33C20.7475 51.16 15.915 52.685 13.615 50.385C11.315 48.085 12.84 43.2525 11.67 40.4225C10.455 37.5 6 35.125 6 32C6 28.875 10.455 26.5 11.67 23.5775C12.84 20.75 11.315 15.915 13.615 13.615C15.915 11.315 20.75 12.84 23.5775 11.67C26.5125 10.455 28.875 6 32 6C35.125 6 37.5 10.455 40.4225 11.67C43.2525 12.84 48.085 11.315 50.385 13.615C52.685 15.915 51.16 20.7475 52.33 23.5775C53.545 26.5125 58 28.875 58 32Z" fill="url(#paint0_linear_1442_5894)" />
            <path d="M56.465 25.705C55.5225 24.72 54.5475 23.705 54.18 22.8125C53.84 21.995 53.82 20.64 53.8 19.3275C53.7625 16.8875 53.7225 14.1225 51.8 12.2C49.8775 10.2775 47.1125 10.2375 44.6725 10.2C43.36 10.18 42.005 10.16 41.1875 9.82C40.2975 9.4525 39.28 8.4775 38.295 7.535C36.57 5.8775 34.61 4 32 4C29.39 4 27.4325 5.8775 25.705 7.535C24.72 8.4775 23.705 9.4525 22.8125 9.82C22 10.16 20.64 10.18 19.3275 10.2C16.8875 10.2375 14.1225 10.2775 12.2 12.2C10.2775 14.1225 10.25 16.8875 10.2 19.3275C10.18 20.64 10.16 21.995 9.82 22.8125C9.4525 23.7025 8.4775 24.72 7.535 25.705C5.8775 27.43 4 29.39 4 32C4 34.61 5.8775 36.5675 7.535 38.295C8.4775 39.28 9.4525 40.295 9.82 41.1875C10.16 42.005 10.18 43.36 10.2 44.6725C10.2375 47.1125 10.2775 49.8775 12.2 51.8C14.1225 53.7225 16.8875 53.7625 19.3275 53.8C20.64 53.82 21.995 53.84 22.8125 54.18C23.7025 54.5475 24.72 55.5225 25.705 56.465C27.43 58.1225 29.39 60 32 60C34.61 60 36.5675 58.1225 38.295 56.465C39.28 55.5225 40.295 54.5475 41.1875 54.18C42.005 53.84 43.36 53.82 44.6725 53.8C47.1125 53.7625 49.8775 53.7225 51.8 51.8C53.7225 49.8775 53.7625 47.1125 53.8 44.6725C53.82 43.36 53.84 42.005 54.18 41.1875C54.5475 40.2975 55.5225 39.28 56.465 38.295C58.1225 36.57 60 34.61 60 32C60 29.39 58.1225 27.4325 56.465 25.705ZM53.5775 35.5275C52.38 36.7775 51.14 38.07 50.4825 39.6575C49.8525 41.1825 49.825 42.925 49.8 44.6125C49.775 46.3625 49.7475 48.195 48.97 48.97C48.1925 49.745 46.3725 49.775 44.6125 49.8C42.925 49.825 41.1825 49.8525 39.6575 50.4825C38.07 51.14 36.7775 52.38 35.5275 53.5775C34.2775 54.775 33 56 32 56C31 56 29.7125 54.77 28.4725 53.5775C27.2325 52.385 25.93 51.14 24.3425 50.4825C22.8175 49.8525 21.075 49.825 19.3875 49.8C17.6375 49.775 15.805 49.7475 15.03 48.97C14.255 48.1925 14.225 46.3725 14.2 44.6125C14.175 42.925 14.1475 41.1825 13.5175 39.6575C12.86 38.07 11.62 36.7775 10.4225 35.5275C9.225 34.2775 8 33 8 32C8 31 9.23 29.7125 10.4225 28.4725C11.615 27.2325 12.86 25.93 13.5175 24.3425C14.1475 22.8175 14.175 21.075 14.2 19.3875C14.225 17.6375 14.2525 15.805 15.03 15.03C15.8075 14.255 17.6275 14.225 19.3875 14.2C21.075 14.175 22.8175 14.1475 24.3425 13.5175C25.93 12.86 27.2225 11.62 28.4725 10.4225C29.7225 9.225 31 8 32 8C33 8 34.2875 9.23 35.5275 10.4225C36.7675 11.615 38.07 12.86 39.6575 13.5175C41.1825 14.1475 42.925 14.175 44.6125 14.2C46.3625 14.225 48.195 14.2525 48.97 15.03C49.745 15.8075 49.775 17.6275 49.8 19.3875C49.825 21.075 49.8525 22.8175 50.4825 24.3425C51.14 25.93 52.38 27.2225 53.5775 28.4725C54.775 29.7225 56 31 56 32C56 33 54.77 34.2875 53.5775 35.5275ZM43.415 24.585C43.601 24.7707 43.7485 24.9913 43.8491 25.2341C43.9498 25.4769 44.0016 25.7372 44.0016 26C44.0016 26.2628 43.9498 26.5231 43.8491 26.7659C43.7485 27.0087 43.601 27.2293 43.415 27.415L29.415 41.415C29.2293 41.601 29.0087 41.7485 28.7659 41.8491C28.5231 41.9498 28.2628 42.0016 28 42.0016C27.7372 42.0016 27.4769 41.9498 27.2341 41.8491C26.9913 41.7485 26.7707 41.601 26.585 41.415L20.585 35.415C20.2097 35.0397 19.9989 34.5307 19.9989 34C19.9989 33.4693 20.2097 32.9603 20.585 32.585C20.9603 32.2097 21.4693 31.9989 22 31.9989C22.5307 31.9989 23.0397 32.2097 23.415 32.585L28 37.1725L40.585 24.585C40.7707 24.399 40.9913 24.2515 41.2341 24.1509C41.4769 24.0502 41.7372 23.9984 42 23.9984C42.2628 23.9984 42.5231 24.0502 42.7659 24.1509C43.0087 24.2515 43.2293 24.399 43.415 24.585Z" fill="url(#paint1_linear_1442_5894)" />
            <defs>
                <linearGradient id="paint0_linear_1442_5894" x1="32" y1="6" x2="32" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1442_5894" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
            </defs>
        </svg>,
        title: 'Công ty nhiều năm kinh nghiệm',
        description: 'Hơn 8 năm kinh nghiệm, FOSO tự tin đáp ứng mọi nhu cầu doanh nghiệp!',
    },
    {
        icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M4 38H12V52H4C3.46957 52 2.96086 51.7893 2.58579 51.4142C2.21071 51.0391 2 50.5304 2 50V40C2 39.4695 2.21071 38.9608 2.58579 38.5858C2.96086 38.2107 3.46957 38 4 38ZM51 14C49.9621 14.0006 48.9374 14.232 48 14.6775C47.9319 13.1761 47.3825 11.7366 46.4329 10.5717C45.4834 9.4068 44.1841 8.57845 42.7273 8.20914C41.2705 7.83984 39.7335 7.94919 38.3437 8.52103C36.9539 9.09287 35.785 10.0968 35.0099 11.3844C34.2348 12.672 33.8947 14.1749 34.0399 15.6707C34.1851 17.1666 34.8078 18.576 35.816 19.6905C36.8243 20.805 38.1644 21.5654 39.6382 21.8593C41.1121 22.1533 42.6414 21.965 44 21.3225C44.0631 22.6914 44.5267 24.0117 45.3333 25.1197C46.1398 26.2276 47.2538 27.0745 48.5371 27.5552C49.8205 28.0359 51.2167 28.1293 52.5527 27.8239C53.8886 27.5185 55.1055 26.8276 56.0525 25.837C56.9995 24.8464 57.6348 23.5997 57.8798 22.2513C58.1248 20.903 57.9686 19.5124 57.4306 18.252C56.8926 16.9916 55.9965 15.9168 54.8534 15.161C53.7103 14.4051 52.3704 14.0014 51 14Z" fill="url(#paint0_linear_1442_5932)" />
            <path d="M57.5825 35.265C56.8383 34.6924 55.972 34.2991 55.0511 34.1157C54.1301 33.9323 53.1793 33.9637 52.2725 34.2075L41.8125 36.6125C42.0559 35.5845 42.0634 34.5147 41.8345 33.4834C41.6056 32.452 41.1462 31.4859 40.4909 30.6573C39.8355 29.8288 39.001 29.1593 38.0501 28.6991C37.0992 28.2389 36.0564 27.9999 35 28H22.485C21.434 27.9974 20.3929 28.203 19.4218 28.6051C18.4508 29.0072 17.569 29.5977 16.8275 30.3425L11.1725 36H4C2.93913 36 1.92172 36.4214 1.17157 37.1716C0.421427 37.9217 0 38.9391 0 40L0 50C0 51.0609 0.421427 52.0783 1.17157 52.8284C1.92172 53.5786 2.93913 54 4 54H30C30.1635 54.0001 30.3264 53.9799 30.485 53.94L46.485 49.94C46.587 49.9157 46.6866 49.8823 46.7825 49.84L56.5 45.705L56.61 45.655C57.5439 45.1883 58.3437 44.4916 58.9339 43.6304C59.5241 42.7692 59.8854 41.772 59.9837 40.7326C60.082 39.6932 59.914 38.6459 59.4957 37.6893C59.0774 36.7328 58.4224 35.8985 57.5925 35.265H57.5825ZM4 40H10V50H4V40ZM54.8575 42.0525L45.3575 46.0975L29.75 50H14V38.8275L19.6575 33.1725C20.0276 32.7995 20.4681 32.5037 20.9535 32.3024C21.4389 32.1011 21.9595 31.9983 22.485 32H35C35.7957 32 36.5587 32.3161 37.1213 32.8787C37.6839 33.4413 38 34.2044 38 35C38 35.7957 37.6839 36.5587 37.1213 37.1213C36.5587 37.6839 35.7957 38 35 38H28C27.4696 38 26.9609 38.2107 26.5858 38.5858C26.2107 38.9609 26 39.4696 26 40C26 40.5304 26.2107 41.0391 26.5858 41.4142C26.9609 41.7893 27.4696 42 28 42H36C36.1505 41.9996 36.3006 41.9828 36.4475 41.95L53.1975 38.0975L53.275 38.0775C53.7863 37.9356 54.3321 37.9877 54.8073 38.224C55.2824 38.4602 55.6535 38.8638 55.8489 39.3572C56.0444 39.8505 56.0505 40.3987 55.8661 40.8963C55.6817 41.3939 55.3198 41.8057 54.85 42.0525H54.8575ZM41 24C41.4941 24.0006 41.9875 23.9604 42.475 23.88C43.0234 25.5089 44.0267 26.9466 45.3663 28.0234C46.7059 29.1001 48.3259 29.7707 50.0345 29.956C51.7432 30.1412 53.4692 29.8333 55.0085 29.0687C56.5477 28.3041 57.8358 27.1147 58.7206 25.6413C59.6053 24.1678 60.0496 22.4718 60.001 20.7538C59.9524 19.0357 59.4128 17.3676 58.4462 15.9465C57.4795 14.5254 56.1262 13.4108 54.5462 12.7345C52.9661 12.0582 51.2255 11.8484 49.53 12.13C49.002 10.5606 48.0512 9.16732 46.7824 8.10345C45.5135 7.03957 43.9758 6.34636 42.3384 6.1001C40.701 5.85383 39.0274 6.06407 37.5017 6.70766C35.9761 7.35126 34.6576 8.40327 33.6913 9.74791C32.725 11.0926 32.1484 12.6777 32.0249 14.3289C31.9015 15.9802 32.2359 17.6334 32.9915 19.1068C33.7471 20.5802 34.8945 21.8166 36.3075 22.6799C37.7204 23.5432 39.3442 24 41 24ZM56 21C56 21.9889 55.7068 22.9556 55.1573 23.7779C54.6079 24.6001 53.827 25.241 52.9134 25.6194C51.9998 25.9978 50.9945 26.0969 50.0245 25.9039C49.0546 25.711 48.1637 25.2348 47.4645 24.5355C46.7652 23.8363 46.289 22.9454 46.0961 21.9755C45.9031 21.0056 46.0022 20.0002 46.3806 19.0866C46.759 18.173 47.3999 17.3921 48.2221 16.8427C49.0444 16.2932 50.0111 16 51 16C52.3261 16 53.5979 16.5268 54.5355 17.4645C55.4732 18.4022 56 19.6739 56 21ZM41 10C42.0908 10.0005 43.1514 10.3578 44.0203 11.0172C44.8892 11.6766 45.5185 12.6021 45.8125 13.6525C44.7882 14.3732 43.9256 15.2998 43.2798 16.373C42.6341 17.4462 42.2195 18.6424 42.0625 19.885C41.7133 19.9604 41.3572 19.999 41 20C39.6739 20 38.4021 19.4732 37.4645 18.5355C36.5268 17.5979 36 16.3261 36 15C36 13.6739 36.5268 12.4022 37.4645 11.4645C38.4021 10.5268 39.6739 10 41 10Z" fill="url(#paint1_linear_1442_5932)" />
            <defs>
                <linearGradient id="paint0_linear_1442_5932" x1="29.9963" y1="7.99451" x2="29.9963" y2="52" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1442_5932" x1="30.0055" y1="6" x2="30.0055" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
            </defs>
        </svg>,
        title: 'Chi phí hợp lý',
        description: '"FOSO thấu hiểu nhu cầu doanh nghiệp, cung cấp giải pháp tiết kiệm nhất!"',
    },
    {
        icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M20 36V46C20 47.0609 19.5786 48.0783 18.8284 48.8284C18.0783 49.5786 17.0609 50 16 50H12C10.9391 50 9.92172 49.5786 9.17157 48.8284C8.42143 48.0783 8 47.0609 8 46V32H16C17.0609 32 18.0783 32.4214 18.8284 33.1716C19.5786 33.9217 20 34.9391 20 36ZM48 32C46.9391 32 45.9217 32.4214 45.1716 33.1716C44.4214 33.9217 44 34.9391 44 36V46C44 47.0609 44.4214 48.0783 45.1716 48.8284C45.9217 49.5786 46.9391 50 48 50H56V32H48Z" fill="url(#paint0_linear_1442_7841)" />
            <path d="M50.4725 13.6649C46.8402 10.0114 42.2051 7.51838 37.1546 6.50176C32.104 5.48513 26.8653 5.99068 22.1023 7.95434C17.3394 9.918 13.2666 13.2514 10.4 17.5321C7.53335 21.8128 6.00202 26.8481 6 31.9999V45.9999C6 47.5912 6.63214 49.1174 7.75736 50.2426C8.88258 51.3678 10.4087 51.9999 12 51.9999H16C17.5913 51.9999 19.1174 51.3678 20.2426 50.2426C21.3679 49.1174 22 47.5912 22 45.9999V35.9999C22 34.4086 21.3679 32.8825 20.2426 31.7573C19.1174 30.6321 17.5913 29.9999 16 29.9999H10.09C10.4757 25.8298 12.0421 21.856 14.6056 18.5442C17.169 15.2325 20.6234 12.72 24.5637 11.3014C28.5041 9.88269 32.7672 9.61658 36.8534 10.5342C40.9396 11.4518 44.6796 13.5152 47.635 16.4824C51.2472 20.1132 53.4691 24.8976 53.9125 29.9999H48C46.4087 29.9999 44.8826 30.6321 43.7574 31.7573C42.6321 32.8825 42 34.4086 42 35.9999V45.9999C42 47.5912 42.6321 49.1174 43.7574 50.2426C44.8826 51.3678 46.4087 51.9999 48 51.9999H54C54 53.5912 53.3679 55.1174 52.2426 56.2426C51.1174 57.3678 49.5913 57.9999 48 57.9999H34C33.4696 57.9999 32.9609 58.2107 32.5858 58.5857C32.2107 58.9608 32 59.4695 32 59.9999C32 60.5304 32.2107 61.0391 32.5858 61.4142C32.9609 61.7892 33.4696 61.9999 34 61.9999H48C50.6522 61.9999 53.1957 60.9464 55.0711 59.071C56.9464 57.1957 58 54.6521 58 51.9999V31.9999C58.013 28.5989 57.3548 25.2287 56.0631 22.0824C54.7714 18.9362 52.8716 16.0757 50.4725 13.6649ZM16 33.9999C16.5304 33.9999 17.0391 34.2107 17.4142 34.5857C17.7893 34.9608 18 35.4695 18 35.9999V45.9999C18 46.5304 17.7893 47.0391 17.4142 47.4142C17.0391 47.7892 16.5304 47.9999 16 47.9999H12C11.4696 47.9999 10.9609 47.7892 10.5858 47.4142C10.2107 47.0391 10 46.5304 10 45.9999V33.9999H16ZM48 47.9999C47.4696 47.9999 46.9609 47.7892 46.5858 47.4142C46.2107 47.0391 46 46.5304 46 45.9999V35.9999C46 35.4695 46.2107 34.9608 46.5858 34.5857C46.9609 34.2107 47.4696 33.9999 48 33.9999H54V47.9999H48Z" fill="url(#paint1_linear_1442_7841)" />
            <defs>
                <linearGradient id="paint0_linear_1442_7841" x1="32" y1="32" x2="32" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1442_7841" x1="32.0001" y1="5.99011" x2="32.0001" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
            </defs>
        </svg>,
        title: 'Hỗ trợ chuyên sâu, đồng hành dài hạn',
        description: 'Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ, tư vấn giải pháp phù hợp.',
    },
    {
        icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M60 32L42 48H22L4 32L22 16H42L60 32Z" fill="url(#paint0_linear_1442_5940)" />
            <path d="M23.3275 17.5L6.99998 32L23.3175 46.5C23.5145 46.6744 23.6752 46.8858 23.7905 47.1222C23.9057 47.3587 23.9733 47.6155 23.9893 47.8781C24.0053 48.1406 23.9695 48.4038 23.8838 48.6525C23.7981 48.9012 23.6643 49.1305 23.49 49.3275C23.3156 49.5245 23.1042 49.6852 22.8678 49.8005C22.6313 49.9158 22.3745 49.9834 22.112 49.9994C21.8494 50.0154 21.5863 49.9795 21.3376 49.8939C21.0889 49.8082 20.8595 49.6744 20.6625 49.5L2.66248 33.5C2.44966 33.3123 2.27922 33.0815 2.16248 32.8229C2.04573 32.5643 1.98535 32.2838 1.98535 32C1.98535 31.7163 2.04573 31.4358 2.16248 31.1772C2.27922 30.9185 2.44966 30.6877 2.66248 30.5L20.6625 14.5C20.8595 14.325 21.089 14.1906 21.3379 14.1043C21.5869 14.018 21.8504 13.9816 22.1134 13.9972C22.3764 14.0127 22.6338 14.0799 22.8709 14.1949C23.1079 14.31 23.32 14.4705 23.495 14.6675C23.67 14.8645 23.8044 15.094 23.8907 15.343C23.977 15.5919 24.0134 15.8555 23.9979 16.1185C23.9823 16.3815 23.9151 16.6389 23.8001 16.8759C23.685 17.113 23.5245 17.325 23.3275 17.5ZM61.3275 30.5L43.3275 14.5C42.9297 14.148 42.4083 13.9683 41.878 14.0007C41.3477 14.033 40.8521 14.2747 40.5 14.6725C40.1479 15.0704 39.9683 15.5917 40.0006 16.122C40.033 16.6523 40.2747 17.148 40.6725 17.5L57 32L40.6825 46.5C40.4855 46.6744 40.3248 46.8858 40.2095 47.1222C40.0942 47.3587 40.0266 47.6155 40.0106 47.8781C39.9946 48.1406 40.0305 48.4038 40.1161 48.6525C40.2018 48.9012 40.3356 49.1305 40.51 49.3275C40.6843 49.5245 40.8957 49.6852 41.1322 49.8005C41.3686 49.9158 41.6254 49.9834 41.888 49.9994C42.1506 50.0154 42.4137 49.9795 42.6624 49.8939C42.9111 49.8082 43.1405 49.6744 43.3375 49.5L61.3375 33.5C61.5503 33.3123 61.7207 33.0815 61.8375 32.8229C61.9542 32.5643 62.0146 32.2838 62.0146 32C62.0146 31.7163 61.9542 31.4358 61.8375 31.1772C61.7207 30.9185 61.5503 30.6877 61.3375 30.5H61.3275Z" fill="url(#paint1_linear_1442_5940)" />
            <defs>
                <linearGradient id="paint0_linear_1442_5940" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1442_5940" x1="32" y1="13.9937" x2="32" y2="50.0031" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9DFFB3" />
                    <stop offset="1" stopColor="#1AA37A" />
                </linearGradient>
            </defs>
        </svg>,
        title: 'Công nghệ hiện đại, bảo mật cao',
        description: 'Ứng dụng công nghệ tiên tiến vào các dự án, đảm bảo an toàn cho doanh nghiệp.',
    },
];

// CSS gradient tái sử dụng
const gradientStyle = {
    backgroundImage: `
    linear-gradient(90deg, #85EEB3, #53B086),
    radial-gradient(219.3% 1471.82% at 24.6% -30.56%, rgba(84, 171, 177, 0) 0%, rgba(84, 171, 177, 0.409141) 34.37%, rgba(133, 238, 179, 0.71) 51.52%, rgba(84, 171, 177, 0) 100%)`,
    // backgroundBlendMode: "hard-light", // Hoặc try 'multiply', 'screen', 'hard-light' tùy vào Figma,
};

const WhyChooseFosoSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { isVisibleTablet, isVisibleMobile } = useResizeStore()
    const { setStatusSheet, setOpenSheetCustom } = useSheetStores()
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const handleMouseMove = (event: MouseEvent) => {
            if (!sectionRef.current) return;

            const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
            const x = event.clientX - left - width / 2; // Căn giữa
            const y = event.clientY - top - height / 2; // Căn giữa

            setMousePosition({ x, y });
        };

        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 }); // Reset về trung tâm
        };

        sectionRef.current.addEventListener("mousemove", handleMouseMove);
        sectionRef.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            sectionRef.current?.removeEventListener("mousemove", handleMouseMove);
            sectionRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
    // Thuy Do
    // Write note ...
    // mong muốn cục gradient chuyển động khi di chuyển cursor và scroll xuống thì mới toả ra như section jumbotron CTA (ảnh kế bên) ở link ref này:
    // https://rootly.com/

    // tham khảo thêm hiệu ứng 4 cards di chuyển như trong link ref này:
    // https://ai.humbleteam.com/

    return (
        <section className="custom-padding-section">
            <div className="custom-container flex lg:flex-row flex-col lg:items-center gap-6 ">
                <div className='w-full lg:max-w-[39%] max-w-full flex flex-col 3xl:gap-8 gap-6 overflow-hidden'>
                    <h2 className="text-title-section-small font-bold space-x-2">
                        <span className="text-[#050505] font-extrabold capitalize">Lý Do Nên Chọn</span>
                        <span
                            className="font-extrabold"
                            style={{
                                ...gradientStyle,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            FOSO
                        </span>
                    </h2>

                    <div className='3xl:space-y-6 space-y-4'>
                        <p className="text-default text-[#33404A] font-medium 3xl:max-w-[65%] lg:max-w-[75%] max-w-full">
                            Công nghệ hiện đại - Hỗ trợ chuyên sâu - Thành công bền vững với FOSO
                        </p>

                        <div className='pb-10'>
                            {
                                !isVisibleTablet &&
                                <ButtonAnimation
                                    icon={
                                        <div className='xl:size-6 size-5 flex-shrink-0'>
                                            <Image
                                                width={100}
                                                height={100}
                                                alt='icon'
                                                src={"/icons/common/arrow-circle.svg"}
                                                className='size-full object-contain'
                                            />
                                        </div>
                                    }
                                    onClick={() => {
                                        setOpenSheetCustom(true)
                                        setStatusSheet("contact")
                                    }}
                                    reverse={true}
                                    title="Tư vấn ngay"
                                    className='overflow-hidden border-gradient-button-foso flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                                    style={{
                                        background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                                        border: "1px solid #A3EED6",
                                        borderImageSource: "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",
                                    }}
                                    whileHover={{
                                        background: [
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 100%), linear-gradient(0deg, #1AD598, #1AD598)",
                                            "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)"
                                        ],
                                        transition: {
                                            duration: 1.5,
                                            ease: [0.4, 0, 0.6, 1],
                                            repeat: Infinity
                                        },
                                        boxShadow: [
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.15)",
                                            "inset -3px -3px 6px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(0,0,0,0.35)",
                                            "inset -3px -3px 7px rgba(255,255,255,0.7), inset 3px 3px 7px rgba(0,0,0,0.4)",
                                            "inset -2px -2px 5px rgba(255,255,255,0.5), inset 2px 2px 4px rgba(0,0,0,0.3)"
                                        ],
                                    }}
                                />
                            }
                        </div>
                    </div>
                </div>


                {/* Nội dung các lợi ích */}
                <div
                    ref={sectionRef}
                    className='w-full lg:max-w-[61%] p-2 max-w-full flex flex-col justify-center gap-4 relative overflow-hidden'
                // style={{
                //     WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                //     maskImage: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
                // }}
                >
                    {/* Lớp mask overlay để làm mờ viền */}
                    <div className="absolute inset-0 pointer-events-none mask-overlay"></div>

                    {/* Blur sẽ di chuyển theo con chuột */}
                    {!isVisibleMobile && (
                        <BlurredBackground2 className="3xl:top-10 top-20 right-24" x={mousePosition.x} y={mousePosition.y} />
                    )}

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 3xl:gap-x-8 xl:gap-x-6 md:gap-x-4 md:gap-y-0 gap-4 auto-rows-auto relative z-[10]">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className={`relative ${index % 2 !== 1 ? "3xl:mt-8 xl:mt-6 md:mt-4" : "3xl:mb-8 xl:mb-6 md:mb-4" // Đẩy cột 2 xuống
                                    }`}
                            >
                                <WhyCard {...value} />
                            </div>
                        ))}
                    </div>
                </div>

                {
                    isVisibleTablet &&
                    <ButtonAnimation
                        icon={
                            <div className='xl:size-6 size-5 flex-shrink-0'>
                                <Image
                                    width={100}
                                    height={100}
                                    alt='icon'
                                    src={"/icons/common/arrow-circle.svg"}
                                    className='size-full object-contain'
                                />
                            </div>
                        }
                        onClick={() => {
                            setOpenSheetCustom(true)
                            setStatusSheet("contact")
                        }}
                        reverse={true}
                        title="Tư vấn ngay"
                        className='border-gradient-button-foso flex items-center gap-2 text-sm-default text-[#052B1E] font-bold capitalize border-none w-fit rounded-full px-4 py-2 transition-colors duration-300 ease-in-out'
                        style={{
                            background: `radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #1AD598, #1AD598)`,
                            border: "1px solid #A3EED6",
                            borderImageSource: "radial-gradient(50% 93.75% at 50% 6.25%, #A3EED6 0%, rgba(255, 255, 255, 0) 100%)",
                        }}
                        whileHover={variantsLinearShadow}
                    />
                }
            </div>
        </section>
    );
};

// Đặt displayName để debug dễ hơn
WhyChooseFosoSection.displayName = 'WhyChooseFosoSection';

export default WhyChooseFosoSection