import {Profissional} from "@barbearia-brutal/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Avaliacao from "../shared/Avaliacao";

export interface ItemProfissionalProps {
  profissional: Profissional;
}

export default function ItemProfissional({ profissional }: ItemProfissionalProps) {
  return (
    <div className="flex flex-col items-center rounded-xl p-6 border border-zinc-700 shadow-md 
                    backdrop-blur-md bg-zinc-800/60 transition-transform duration-300 hover:scale-105">
      
      {/* Imagem redonda */}
      <div className="relative w-52 h-52 mb-4">
        <Image
          src={profissional.imagemURL}
          alt={profissional.nome}
          fill
          className="object-cover object-top rounded-full border-4 border-zinc-700"
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

      {/* Avaliação */}
      <div className="mt-2">
        <Avaliacao
          nota={profissional.nota}
          quantidade={profissional.quantidadeAvaliacoes}
        />
      </div>

      {/* Redes sociais com efeito de aumento */}
      <div className="flex gap-4 mt-4 text-orange-500">
        {[IconBrandYoutube, IconBrandInstagram, IconBrandLinkedin, IconBrandX].map((Icon, index) => (
          <Icon
            key={index}
            stroke={1}
            className="cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:text-orange-400"
          />
        ))}
      </div>
    </div>
  );
}
