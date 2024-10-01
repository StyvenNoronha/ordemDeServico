import { rotas } from "../rotas/index.js";
export function rotaIndermediario(requisicao, resposta){
 const rota =  rotas.find((rota)=>{
    return rota.method === requisicao.method && rota.path === requisicao.url
 })
 if(rota){
    return rota.controller(requisicao, resposta)
 }
 return resposta.writeHead(404).end()
}