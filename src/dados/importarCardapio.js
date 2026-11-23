import { readFile } from "node:fs/promises";
import { ErroValidacao } from "../erros.js";

function centavos(texto) {
  return Math.round(Number(texto.replace(",", ".")) * 100);
}

export async function lerCardapioCsv(arquivo) {
  const texto = (await readFile(arquivo, "utf-8")).replace("\uFEFF", "");
  const [, ...linhas] = texto.trim().split(/\r?\n/);
  return linhas.map((linha, i) => {
    const [id, nome, preco, estoque, ativo] = linha.split(";");
    const produto = {
      id: Number(id),
      nome,
      preco: centavos(preco),
      estoque: Number(estoque),
      ativo: ativo === "sim",
    };
    if (Number.isNaN(produto.preco)) {
      throw new ErroValidacao(`preço inválido na linha ${i + 2} do cardápio: ${preco}`);
    }
    return produto;
  });
}