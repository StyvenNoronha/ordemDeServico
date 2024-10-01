import{randomUUID} from"node:crypto"

export function criacao({ requisicao, resposta }) {

  const { equipamento, descricao, nome_usuario } = requisicao.body;

  const ordem = {
    id:randomUUID(),
    equipamento,
    descricao,
    nome_usuario,
    status:"aberto",
    data_criacao: new Date(),
    data_atualizacao: new Date(),
  };

  return resposta.end(JSON.stringify(ordem));
}
