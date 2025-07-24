import Servico from "@/core/servico/Servico";
import Image from "next/image";

export interface ItemServicoProps {
  servico: Servico;
}

export default function ItemServico(props: ItemServicoProps) {
  const { servico } = props;

  return (
    <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
      <Image
        src={servico.imagemURL}
        alt={servico.nome}
        width={150}
        height={150}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col p-5 gap-2">
        <span className="text-xl font-black text-white">{servico.nome}</span>
        <span className="text-xs text-zinc-300 flex-1">{servico.descricao}</span>
        <span className="text-lg font-bold text-white">R$ {servico.preco.toFixed(2)}</span>
      </div>
    </div>
  );
}
