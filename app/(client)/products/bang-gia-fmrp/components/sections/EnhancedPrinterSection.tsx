import EnhancedPrinterCard from "../ui/EnhancedPrinterCard"
import React from "react"

export interface IPrinterSpec {
    id: string
    name: string
    image: string
    printSpeed: string
    connectivity: string
    price: number
    formattedPrice: string
    bestSeller?: boolean,
    href?: string
}

const printers: IPrinterSpec[] = [
    {
        id: "zy307q",
        name: "Máy in ZY307Q",
        image: "/printer/ZY307Q.svg",
        printSpeed: "260mm/s",
        connectivity: "LAN, USB, RJ11, RS232",
        price: 2800000,
        formattedPrice: "2,800,000 đ",
        bestSeller: true,
        href: "https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft"
    },
    {
        id: "q822",
        name: "Máy in Q822",
        image: "/printer/Q822.svg",
        printSpeed: "200mm/s",
        connectivity: "USB, LAN, RJ11",
        price: 1250000,
        formattedPrice: "1,250,000 đ",
        href: "https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft"
    },
    {
        id: "zy303",
        name: "Máy in ZY303",
        image: "/printer/ZY303.svg",
        printSpeed: "200mm/s",
        connectivity: "Lan, USB, RJ11",
        price: 1300000,
        formattedPrice: "1,300,000 đ",
        href: "https://id.zalo.me/account?continue=http%3A%2F%2Fzalo.me%2Ffososoft"
    },
]
const EnhancedPrinterSection = () => {
    return (
        <div className='3xl:pb-24 xl:pb-20 lg:pb-16 pb-8 pt-8  w-full'>
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        printers && printers?.length > 0 && printers.map((printer) => (
                            <React.Fragment key={printer.id}>
                                <EnhancedPrinterCard printer={printer} />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EnhancedPrinterSection;

