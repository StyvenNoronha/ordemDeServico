export const ordem = [
  {
    method: "POST",
    path: "/ordem",
    controller: (requisicao, resposta) => {
      resposta.end("Rota de ordem");
    },
  },
];
