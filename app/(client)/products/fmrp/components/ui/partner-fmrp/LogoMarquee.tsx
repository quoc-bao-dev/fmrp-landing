import Marquee from 'react-fast-marquee';
import Image from 'next/image';

type LogoMarqueeProps = {
    logos: string[];
};


const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
    const firstRowItems = logos.slice(0, 7);
    const secondRowItems = logos.slice(7, 14);
    const thirdRowItems = logos.slice(14, 21);

    return (
        <div className="space-y-4 !overflow-hidden">
            <Marquee speed={30} pauseOnHover gradient={true} direction='right' gradientWidth={200} className='w-fit overflow-hidden'>
                {firstRowItems.map((logo, index) => (
                    <div key={`logo-1-${index}`} className="3xl:w-[150px] w-[130px] 3xl:h-[120px] h-[110px] shrink-0 mx-6 flex items-center overflow-hidden">
                        <Image
                            src={logo}
                            alt={`logo-1-${index}`}
                            width={150}
                            height={120}
                            className="size-full object-contain "
                        />
                    </div>
                ))}
            </Marquee>
            <Marquee speed={30} pauseOnHover gradient={true} direction='left' gradientWidth={200} className='w-fit overflow-hidden'>
                {secondRowItems.map((logo, index) => (
                    <div key={`logo-2-${index}`} className="3xl:w-[150px] w-[130px] 3xl:h-[120px] h-[110px] shrink-0 mx-6 flex items-center overflow-hidden">
                        <Image
                            src={logo}
                            alt={`logo-2-${index}`}
                            width={150}
                            height={120}
                            className="size-full object-contain"
                        />
                    </div>
                ))}
            </Marquee>
            <Marquee speed={30} pauseOnHover gradient={true} direction='right' gradientWidth={200} className='w-fit overflow-hidden'>
                {thirdRowItems.map((logo, index) => (
                    <div key={`logo-3-${index}`} className="3xl:w-[150px] w-[130px] 3xl:h-[120px] h-[110px] shrink-0 mx-6 flex items-center overflow-hidden">
                        <Image
                            src={logo}
                            alt={`logo-3-${index}`}
                            width={150}
                            height={120}
                            className="size-full object-contain"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
