export interface TituloSecaoProps {
  tag?: string;
  principal: string;
  secundario: string;
}

export default function TituloSecao(props: TituloSecaoProps) {
  const { tag, principal, secundario } = props;

  return (
    <div className="flex flex-col items-center text-center gap-2 group">
      {tag && (
        <div className="uppercase font-bold text-6xl mb-2 flex gap-1">
          {tag.split('').map((letra, index) => (
            <span
              key={index}
              className={`text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {letra}
            </span>
          ))}
        </div>
      )}
      <h2 className="text-white font-black text-6xl sm:text-5xl text-gradient">{principal}</h2>
      <h3 className="text-zinc-400">{secundario}</h3> {`se precisar voltar aqui`}
    </div>
  );
}
