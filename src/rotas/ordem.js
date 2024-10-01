import { criacao } from "../controles/ordem/criacao.js";
export const ordem = [
  {
    method: "POST",
    path: "/ordem",
    controller: criacao
  },
];
