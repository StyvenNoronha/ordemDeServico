export function index({requisicao, resposta, bancoDeDados}){
  const ordem = bancoDeDados.selecionar("ordem");
  return resposta.end(JSON.stringify(ordem));
}