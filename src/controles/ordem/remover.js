export function remover({ requisicao, resposta, bancoDeDados }){
const {id} = requisicao.parametro
bancoDeDados.deletar("ordem", id)
return resposta.end("removido com sucesso")
}