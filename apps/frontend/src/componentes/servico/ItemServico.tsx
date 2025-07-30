import {Servico} from "@barbearia-brutal/core";
import Image from "next/image";

export interface ItemServicoProps {
  servico: Servico;
}

export default function ItemServico(props: ItemServicoProps) {
  const { servico } = props;

  return (
    <div className="flex rounded-xl bg-zinc-900/70 backdrop-blur-md shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <Image
        src={servico.imagemURL}
        alt={servico.nome}
        width={150}
        height={150}
        className="object-cover"
      />
      <div className="flex flex-col p-5 gap-2 text-white">
        <span className="text-xl font-black">{servico.nome}</span>
        <span className="text-xs text-zinc-300 flex-1">{servico.descricao}</span>
        <span className="text-lg font-bold">R$ {servico.preco.toFixed(2)}</span>
      </div>
    </div>
  );
}
