import Marquee from 'react-fast-marquee';
import Image from 'next/image';

type LogoMarqueeProps = {
    logos: string[];
};


const LogoMarquee: React.FC<LogoMarqueeProps> = ({ logos }) => {
    const firstRowItems = logos.slice(0, 7);
    const secondRowItems = logos.slice(7, 14);
    const thirdRowItems = logos.slice(14, 20);

    return (
        <div className="space-y-4" onMouseEnter={() => document.querySelectorAll('.marquee').forEach(m => (m as any).stop())} onMouseLeave={() => document.querySelectorAll('.marquee').forEach(m => (m as any).start())}>
            <Marquee speed={30} pauseOnHover autoFill gradient={true} gradientWidth={200}>
                {firstRowItems.map((logo, index) => (
                    <div key={index} className="w-fit mx-4 flex items-center">
                        <Image src={logo} alt={`logo-${index}`} width={120} height={50} className="object-contain" />
                    </div>
                ))}
            </Marquee>

            <Marquee speed={30} pauseOnHover direction='right' autoFill gradient={true} gradientWidth={200}>
                {secondRowItems.map((logo, index) => (
                    <div key={index} className="w-fit mx-4 flex items-center">
                        <Image src={logo} alt={`logo-${index}`} width={120} height={50} className="object-contain" />
                    </div>
                ))}
            </Marquee>

            <Marquee speed={30} pauseOnHover autoFill gradient={true} gradientWidth={200}>
                {thirdRowItems.map((logo, index) => (
                    <div key={index} className="w-fit mx-4 flex items-center">
                        <Image src={logo} alt={`logo-${index}`} width={120} height={50} className="object-contain" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
