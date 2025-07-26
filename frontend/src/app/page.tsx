import NossosProfissionais from "@/componentes/profissional/NossosProfissionais";
import NossosServisos from "@/componentes/servico/NossosServicos";
import Rodape from "@/componentes/shared/Rodape";
import SecaoBackground from "@/componentes/shared/SecaoBackground";

export default function Lading() {
  return (
    <div className="flex flex-col">
      <div className="container py-10">
         <h1 className="text-6xl">Lading page</h1>
      </div>
     
      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServisos />
      </SecaoBackground>
      <SecaoBackground imagem="/banners/fundo-profissionais.png">
        <NossosProfissionais />
      </SecaoBackground>
      <Rodape />
    </div>
  );
}
