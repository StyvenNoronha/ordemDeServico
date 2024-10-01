export async function manipuladorJson(requisicao, resposta) {
  const acumulador = [];

  for await (const pedaco of requisicao) {
    acumulador.push(pedaco);
  }
  try {
    requisicao.body = JSON.parse(Buffer.concat(acumulador).toString());
  } catch (error) {
    resposta.body = null;
  }

  resposta.setHeader("Content-type", "application/json");
}
