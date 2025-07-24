import Profissional from "@/core/profissional/Profissional";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";

export interface ItemProfissionalProps {
  profissional: Profissional;
}

export default function ItemProfissional({ profissional }: ItemProfissionalProps) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-zinc-800 border border-zinc-700 shadow-md p-6">

      {/* Imagem redonda */}
      <div className="relative w-52 h-52 mb-4">
        <Image
          src={profissional.imagemURL}
          alt={profissional.nome}
          fill
          className="object-cover rounded-full border-4 border-zinc-700"
        />
      </div>

      {/* Nome */}
      <span className="text-2xl font-black text-white text-center">
        {profissional.nome}
      </span>

      {/* Descrição */}
      <span className="text-sm text-zinc-300 text-center mt-2">
        {profissional.descricao}
      </span>

      {/* Redes sociais */}
      <div className="flex gap-4 mt-4 text-green-500">
        <IconBrandYoutube stroke={1} className="hover:text-green-400 cursor-pointer" />
        <IconBrandInstagram stroke={1} className="hover:text-green-400 cursor-pointer" />
        <IconBrandLinkedin stroke={1} className="hover:text-green-400 cursor-pointer" />
        <IconBrandX stroke={1} className="hover:text-green-400 cursor-pointer" />
      </div>
    </div>
  );
}
