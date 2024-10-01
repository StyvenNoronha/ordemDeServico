import { rotas } from "../rotas/index.js";
import { BancoDeDados } from "../bancoDeDados/BancoDeDados.js";

const bancoDeDados = new BancoDeDados()
export function rotaIndermediario(requisicao, resposta){
 const rota =  rotas.find((rota)=>{
    return rota.method === requisicao.method && rota.path === requisicao.url
 })
 if(rota){
    return rota.controller({requisicao, resposta, bancoDeDados})
 }
 return resposta.writeHead(404).end()
}