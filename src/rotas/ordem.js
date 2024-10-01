import { criacao } from "../controles/ordem/criacao.js";
import { index } from "../controles/ordem/index.js";
export const ordem = [
  {
    method: "POST",
    path: "/ordem",
    controller: criacao
  },
  {
    method: "GET",
    path: "/ordem",
    controller: index
  }
];
