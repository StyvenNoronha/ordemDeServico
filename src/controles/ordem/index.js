export function index({requisicao, resposta, bancoDeDados}){
  const {status} = requisicao.query
  const filtros = status ? {status} : null
  const ordem = bancoDeDados.selecionar("ordem",filtros);
  return resposta.end(JSON.stringify(ordem));
}