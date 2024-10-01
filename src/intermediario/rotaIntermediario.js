import { rotas } from "../rotas/index.js";
import { BancoDeDados } from "../bancoDeDados/BancoDeDados.js";
import { extrairQuery } from "../utils/extrairQuery.js";
const bancoDeDados = new BancoDeDados()
export function rotaIndermediario(requisicao, resposta){
   
 const rota =  rotas.find((rota)=>{
    return rota.method === requisicao.method && rota.caminho.test(requisicao.url)
 })
 if(rota){
   const parametroRota = requisicao.url.match(rota.caminho)
   const { query, ...parametro } = parametroRota.groups
   requisicao.parametro = parametro
   requisicao.query = query ? extrairQuery(query) : {}


    return rota.controller({requisicao, resposta, bancoDeDados})
 }
 return resposta.writeHead(404).end()
}