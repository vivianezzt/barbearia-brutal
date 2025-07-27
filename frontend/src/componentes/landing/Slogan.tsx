import Image from "next/image";
import Cabecalho from "../shared/Cabecalho";
import Link from "next/link";

export default function Slogan() {
  return (
    <div className="relative h-[450px] sm:h-[700px]">
      <Image
        src="/banners/principal.webp"
        alt="Banner"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col">
        <Cabecalho />
        
        <div className="flex flex-1 items-center justify-center text-center px-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white">
              <span className="block text-orange-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin">
                Transformações
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">
                lendárias
              </span>
            </h1>
            <p className="text-base sm:text-lg font-extralight text-white">
              🤟 Seu estilo, nosso Rock 🤟
            </p>
            <Link href="/agendamento" className="mt-4 inline-block bg-zinc-900 text-orange-300 font-bold py-2 px-4 rounded transition-colors hover:bg-orange-300 hover:text-white">Agendar agora</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
