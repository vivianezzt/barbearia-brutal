import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "./Logo";

export default function Rodape() {
  return (
    <footer className="container bg-back py-10 text-zinc-400 py-10 gap-10">
      {/* Logo centralizado no mobile e alinhado no desktop */}
      <div className="flex justify-between items-center flex-col md:flex-row gap-4">
      <Logo />
      <div className="flex flex-col gap-1 text-center md:text-left gap-2">
        <span className="font-bold text-2xl text-orange-400">Sobre</span>
        <span className="text-sm">Nossa Hitória</span>
        <span className="text-sm">Política de privacidade</span>
        <span className="text-sm">Termo de uso</span>
      </div>
         <div className="flex flex-col gap-1 text-center md:text-left gap-2">
        <span className="font-bold text-2xl text-orange-400">Contato</span>
        <span className="text-sm">suporte@barbabrutal.app</span>
        <div className="text-sm flex items-center gap-1 cursor-pointer hover:text-green-400 mt-1 md:mt-0 hover:scale-105 transition-transform justify-center md:justify-start">
          <IconBrandWhatsapp size={20} stroke={1} className="text-green-500" />
          <span>Whatsapp</span>
        </div>
      </div>
      </div>

      {/* Redes sociais e texto de direitos */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 lg:mt-6 mt-1">
        {/* Redes sociais */}
        <div className="flex gap-3 justify-center md:justify-start">
          <a href="https://youtube.com/@vivianezzt" target="_blank" rel="noopener noreferrer">
            <IconBrandYoutube
              stroke={1}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
            />
          </a>
          <a href="https://instagram.com/vivianezzt" target="_blank" rel="noopener noreferrer">
            <IconBrandInstagram
              stroke={1}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
            />
          </a>
          <a href="https://linkedin.com/in/vivianezzt" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin
              stroke={1}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
            />
          </a>
          <a href="https://www.threads.net/@vivianezzt" target="_blank" rel="noopener noreferrer">
            <IconBrandThreads
              stroke={1}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
            />
          </a>
          <a href="https://t.me/vivianezzt" target="_blank" rel="noopener noreferrer">
            <IconBrandTelegram
              stroke={1}
              className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
            />
          </a>
        </div>

        {/* Texto de direitos autorais */}
        <div className="flex flex-col items-center md:items-end text-sm">
          <div className="flex items-center gap-1.5">
            <span>Feito com</span>
            <span>🪓</span>
            <span>em {new Date().getFullYear()}</span>
          </div>
          <span>Todos os direitos reservados &copy;</span>
        </div>
      </div>
    </footer>
  );
}
