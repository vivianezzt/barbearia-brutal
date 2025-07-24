import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface AvaliacaoProps {
    nota: number;
    quantidade: number;
}

export default function Avaliacao(props: AvaliacaoProps){
    const { nota, quantidade } = props;
    const estrelas = Array.from({ length: 5 }, (_, index) => {
        const valor = index + 1;
        if(nota >= valor) {
            return <IconStarFilled key={index} size={18}/>
        } else if(nota >= valor - 1) {
            return <IconStarHalfFilled key={index} size={18} />
        } else {
            return <IconStar key={index} size={18} style={{ opacity: 0.3 }} />
        }
    }
    );
    return (
        <div className="flex items-center">
           <div className="flex text-yellow-300 gap-1">{estrelas}</div>
           <span className="textxs text-zinc-300 ml-2">({quantidade})</span>
        </div>
    );
}
