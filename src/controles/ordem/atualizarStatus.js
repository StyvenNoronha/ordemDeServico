export function atualizarStatus({ requisicao, resposta, bancoDeDados }){
    const {id} = requisicao.parametro
    const {solucao} = requisicao.body
    console.log(solucao)
    bancoDeDados.atualizar("ordem", id, {status: "fechado", solucao})
    return resposta.end()
}