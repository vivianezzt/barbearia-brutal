import clientes from "@/data/constants/clientes";
import TituloSecao from "../shared/TituloSecao";
import ItemCliente from "./ItemCliente";
import { LayoutGrid } from "../ui/LayoutGrid";


export default function NossosClientes() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2'];
     const cards = clientes.map((cliente, i) => {
        return {
            id: cliente.id,
            content: <ItemCliente key={cliente.id} nome={cliente.nome} testemunho={cliente.testemunho} />,
            thumbnail: cliente.imagemURL,
            alt: cliente.nome,
            className: classes[i]
        }
     });
    return (
       
        <div className="flex flex-col gap-16">
            <TituloSecao
                tag="Clientes"
                principal="Quem manda aqui!"
                secundario="Nossos clientes s;ao nossos chefes! Aqui eles mandam, desmandam e ainda saem com estilo de rockstar!" />
             <div className="h-[900px] w-full">
          <LayoutGrid cards={cards} />
        </div>
        </div>
       
    )
}