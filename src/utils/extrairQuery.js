export function extrairQuery(query){
    return query.slice(1).split('&').reduce((parametroRota, parametro)=>{
        const [chave, valor] = parametro.split('=')
        parametroRota[chave] = valor
        return parametroRota
    },{})
}