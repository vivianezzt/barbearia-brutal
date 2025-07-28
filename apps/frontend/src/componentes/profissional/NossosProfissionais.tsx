import profissionais from "@/data/constants/profissionias";
import ItemProfissional from "./ItemProfissional";
import TituloSecao from "../shared/TituloSecao";

export default function NossosProfissionais() {
    return (
        <div className="flex flex-col gap-16">
            <TituloSecao
                tag="Time"
                principal="Nossos Profissionais"
                secundario="Conheça nossos especialistas" />
             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {profissionais.map((profissional) => (
                <ItemProfissional key={profissional.id} profissional={profissional} />
            ))}
        </div>
        </div>
       
    )
}