import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Rodape() {
  return (
    <footer className="container flex flex-col bg-back py-10">
      <div className=""></div>
      <div className="flex gap-2 text-zinc-400">
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

      <div className="flex gap-1.5 text-zinc-400 mt-4">
        <span>Feito com</span>
        <span>🪓</span>
        <span>em {new Date().getFullYear()}</span>
        <span>- &copy; Todos os direitos reservados</span>
      </div>
    </footer>
  );
}
