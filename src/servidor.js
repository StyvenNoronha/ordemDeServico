import http from 'node:http';
import {manipuladorJson} from './intermediario/manipuladorJson.js'

async function escutar(requisicao, resposta){
    await manipuladorJson(requisicao,  resposta);
    console.log(requisicao.body);
}

http.createServer(escutar).listen(3333); 