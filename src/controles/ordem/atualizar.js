export function atualizar({ requisicao, resposta, bancoDeDados }) {
  const { id } = requisicao.parametro;
  const{equipamento,descricao} = requisicao.body;
    return resposta.writeHead(204).end();
}