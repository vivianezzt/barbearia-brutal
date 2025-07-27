import clientes from "@/data/constants/clientes";
import TituloSecao from "../shared/TituloSecao";
import ItemCliente from "./ItemCliente";


export default function NossosClientes() {
    return (
        <div className="flex flex-col gap-16">
            <TituloSecao
                tag="Clientes"
                principal="Quem manda aqui!"
                secundario="Nossos clientes s;ao nossos chefes! Aqui eles mandam, desmandam e ainda saem com estilo de rockstar!" />
             <div className="text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {clientes.map((cliente) => (
                <ItemCliente key={cliente.id} cliente={cliente} />
            ))}
        </div>
        </div>
       
    )
}