export function atualizar({ requisicao, resposta, bancoDeDados }) {
  const { id } = requisicao.parametro;
  const { equipamento, descricao } = requisicao.body;
  bancoDeDados.atualizar("ordem", id, {
    equipamento,
    descricao,
    data_atualizacao: new Date(),
  });
  return resposta.writeHead(204).end();
}
