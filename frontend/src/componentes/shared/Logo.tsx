import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center gap-2 text-xl font-bold text-orange-300">
            {/* You can place an <img> or text here for the logo */}
            <Image src={"/logo.png"} alt="Logo" width={65} height={65} className="hidden sm:block" />
            <Image src={"/logo.png"} alt="Logo" width={50} height={50} className="block sm:hidden" />
            <div className="flex flex-col item-center">
                <span className="text-xl sm:text-2xl">Barba</span>
                <span>Brutal</span>
            </div>
        </Link>
    );
}