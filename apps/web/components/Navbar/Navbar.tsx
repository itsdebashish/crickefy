import Link from "next/link";
import { PiGreaterThanLight } from "react-icons/pi";



const bars = [
    {
        "name" : "Sponsor",
        "link" : "landing"
    },
    {
        "name" : "Developer",
        "link" : "Developer"
    },
    {
        "name" : "Pricing",
        "link" : "pricing"
    }
]



export default function Navbar() {
    return (
        <div className="flex max-w-6xl w-full pl-10 pr-10 border-gray-200 borde rounded-2xl p-3 justify-between items-center gap-5">
            <div>
                <h1 className="font-semibold text-xl ">Crickefy</h1>
            </div>
            {/*<div className="flex gap-4">*/}
            {/*{*/}
            {/*    bars.map((value, index) => <Link key={index} href={value.link}>{value.name}</Link>)*/}
            {/*}*/}
            {/*</div>*/}
            <div className="flex gap-3">
                <button className="font-semibold hover:text-gray-500 font-serif cursor-pointer">
                    <Link href={"login"}>
                        Sign in
                    </Link>
                </button>
                <button className="text-sm rounded-xl flex justify-center items-center gap-2 text-white w-32 p-2 bg-black ">Get Started <PiGreaterThanLight/> </button>
            </div>
        </div>
    )
}