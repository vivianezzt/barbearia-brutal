export interface ItemClienteProps {
  nome: string
  testemunho: string;

}

export default function ItemCliente(props : ItemClienteProps) {
    const { nome, testemunho } = props;
  return (
    <div>
        <p className="text-white font-bold text-4xl">{nome}</p>
        <p className="my-4 text-zinc-400">{testemunho}</p>
        <p>{}</p>
    </div>
  );
}
