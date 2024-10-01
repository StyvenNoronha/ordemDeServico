import http from 'node:http';
import {manipuladorJson} from './intermediario/ManipuladorJson.js'
import { rotaIndermediario } from './intermediario/rotaIntermediario.js';

async function escutar(requisicao, resposta){
    await manipuladorJson(requisicao,  resposta);
    rotaIndermediario(requisicao, resposta);
}

http.createServer(escutar).listen(3333); 