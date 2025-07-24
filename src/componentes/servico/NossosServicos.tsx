import servicos from "@/data/constants/servicos";
import ItemServico from "./ItemServico";

export default function NossosServisos (){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {servicos.map(servico => (
                <ItemServico key={servico.id} servico={servico} />
            ))}
        </div>
    )
}