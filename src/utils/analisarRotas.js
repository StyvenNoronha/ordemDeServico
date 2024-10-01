export function analisarRotas(caminho) {
  const parametrosRotasRegex = /:([a-zA-Z]+)/g;

  const parametro = caminho.replaceAll(parametrosRotasRegex, "(?<$1>[a-z0-9-_]+)");

  const rotasRegex = new RegExp(`^${parametro}(?<query>\\?(.*))?$`);

  return rotasRegex;
}
