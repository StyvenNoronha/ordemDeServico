import{randomUUID} from"node:crypto"

export function criacao({ requisicao, resposta, bancoDeDados }) {

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
  bancoDeDados.inserir("ordem", ordem);

  return resposta.writeHead(201).end(JSON.stringify(ordem));
}
