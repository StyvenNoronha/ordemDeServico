import fs from "node:fs/promises";
const ENDERECO_BANCO_DE_DADOS = new URL("banco.json", import.meta.url);
export class BancoDeDados {
  #BancoDeDados = {};
  construtor() {
    fs.readFile(ENDERECO_BANCO_DE_DADOS, "utf8")
      .then((data) => {
        this.#BancoDeDados = JSON.parse(data);
      })
      .catch(() => {
        this.#persistir();
      });
  }
  #persistir() {
    fs.writeFile(ENDERECO_BANCO_DE_DADOS, JSON.stringify(this.#BancoDeDados));
  }
  inserir(tabela, dados) {
    if (Array.isArray(this.#BancoDeDados[tabela])) {
      this.#BancoDeDados[tabela].push(dados);
    } else {
      this.#BancoDeDados[tabela] = [dados];
    }
    this.#persistir();
  }

  selecionar(tabela){
    let dados = this.#BancoDeDados[tabela] ?? [];
    return dados;
  }

}
