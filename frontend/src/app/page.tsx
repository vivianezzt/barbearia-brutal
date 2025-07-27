import NossosClientes from "@/componentes/clientes/NossosClientes";
import Slogan from "@/componentes/landing/Slogan";
import NossosProfissionais from "@/componentes/profissional/NossosProfissionais";
import NossosServisos from "@/componentes/servico/NossosServicos";
import Cabecalho from "@/componentes/shared/Cabecalho";
import Rodape from "@/componentes/shared/Rodape";
import SecaoBackground from "@/componentes/shared/SecaoBackground";

export default function Lading() {
  return (
    <div className="flex flex-col">
    <Slogan />
      <SecaoBackground imagem="/banners/servicos.webp">
        <NossosServisos />
      </SecaoBackground>
      <SecaoBackground imagem="/banners/fundo-profissionais.png">
        <NossosProfissionais />
      </SecaoBackground>
      <SecaoBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </SecaoBackground>
      <Rodape />
    </div>
  );
}
