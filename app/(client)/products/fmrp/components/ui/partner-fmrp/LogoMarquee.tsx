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
                {
                    firstRowItems.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="w-fit h-auto aspect-1.36/1 mx-4 flex items-center">
                            <Image
                                src={logo}
                                alt={`logo-1-${index}`}
                                width={150}
                                height={120}
                                className="3xl:w-[150px] w-[130px] h-auto aspect-1.36/1 object-contain"
                            />
                        </div>
                    ))
                }
            </Marquee>

            <Marquee speed={30} pauseOnHover direction='right' autoFill gradient={true} gradientWidth={200}>
                {
                    secondRowItems.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="w-fit h-auto mx-4 flex items-center">
                            <Image
                                src={logo}
                                alt={`logo-2-${index}`}
                                width={150}
                                height={120}
                                className="3xl:w-[150px] w-[130px] h-auto aspect-1.36/1 object-contain"
                            />
                        </div>
                    ))
                }
            </Marquee>

            <Marquee speed={30} pauseOnHover autoFill gradient={true} gradientWidth={200}>
                {
                    thirdRowItems.map((logo, index) => (
                        <div key={`logo-3-${index}`} className="w-fit h-auto mx-4 flex items-center">
                            <Image
                                src={logo}
                                alt={`logo-3-${index}`}
                                width={150}
                                height={120}
                                className="3xl:w-[150px] w-[130px] h-auto aspect-1.36/1 object-contain"
                            />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
};

export default LogoMarquee;
