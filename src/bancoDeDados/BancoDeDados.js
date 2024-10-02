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

  selecionar(tabela, filtros) {
    let dados = this.#BancoDeDados[tabela] ?? [];
    if (filtros) {
      dados = dados.filter((linha) => {
        return Object.entries(filtros).some(([key, value]) => {
          return linha[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }
    return dados;
  }
  atualizar(tabela, id, dados) {
    const indexLinha = this.#BancoDeDados[tabela].findIndex(
      (linha) => linha.id === id
    );
    if (indexLinha > -1) {
      this.#BancoDeDados[tabela][indexLinha] = {
        ...this.#BancoDeDados[tabela][indexLinha],
        ...dados,
      };
    }
    this.#persistir();
  }
  deletar(tabela, id) {
    const indexLinha = this.#BancoDeDados[tabela].findIndex(
      (linha) => linha.id === id
    );
    if (indexLinha > -1) {
      this.#BancoDeDados[tabela].splice(indexLinha, 1);
      this.#persistir();
    }
  } 
}
