import Link from "next/link";
import Logo from "./Logo";

export default function Cabecalho() {
     return (
        <header className="flex items-center bg-black/60 text-zinc-300 h-24">
            <nav className="flex items-center justify-between container">
                <Logo />
                <div>
                    <Link href="/entrar" className="logo font-bold text-2xl">Entrar</Link>
                </div>
            </nav>
        </header>
     )
}