import NossosProfissionais from "@/componentes/profissional/NossosProfissionais";
import NossosServisos from "@/componentes/servico/NossosServicos";

export default function Lading() {
  return (
    <div className="flex flex-col gap-10 container">
      <h1 className="text-6xl">Lading page</h1>
      <NossosServisos />
      <NossosProfissionais />
    </div>
  );
}
