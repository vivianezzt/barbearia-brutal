export interface TituloSecaoProps {
  tag?: string;
  principal: string;
  secundario: string;
}

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
              className={`text-zinc-300 group-hover:text-white transition-colors duration-300`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {letra}
            </span>
          ))}
        </div>
      )}
      <h2 className="text-white font-black text-6xl sm:text-5xl">{principal}</h2>
      <h3 className="text-zinc-300">{secundario}</h3>
    </div>
  );
}
