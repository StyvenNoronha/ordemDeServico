import { criacao } from "../controles/ordem/criacao.js";
import { index } from "../controles/ordem/index.js";
import { atualizar } from "../controles/ordem/atualizar.js";
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
  },
  {
    method: "PUT",
    path: "/ordem/:id",
    controller: atualizar
  }
];
