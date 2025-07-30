import CasoDeUso from "../../shared/CasoDeUso";

// casos de uso: fluxos da aplicação
// DDD: Aplication service = caso de uso = fluxo da aplicacao
export default class RegistrarUsuario implements CasoDeUso {
   async executar(entrada: any): Promise<any> {
       return "Deu certo!";
   }
    
}