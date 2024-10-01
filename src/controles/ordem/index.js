export function index({requisicao, resposta, bancoDeDados}){
  const {status} = requisicao.query
  console.log(status);
  const ordem = bancoDeDados.selecionar("ordem");
  return resposta.end(JSON.stringify(ordem));
}