export interface ItemClienteProps {
  cliente: any;
}

export default function ItemCliente(props : ItemClienteProps) {
    const { cliente } = props;
  return (
    <div>
        {cliente.nome}
    </div>
  );
}
