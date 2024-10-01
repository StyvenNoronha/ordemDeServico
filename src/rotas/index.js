import { ordem } from "./ordem.js";
import {analisarRotas} from "../utils/analisarRotas.js";
export const rotas = [
    ...ordem
].map((rota)=>({
    ...rota,
    caminho: analisarRotas(rota.path)
}))