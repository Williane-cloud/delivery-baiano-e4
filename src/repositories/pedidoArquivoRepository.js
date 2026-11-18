// src/repositories/pedidoArquivoRepository.js
// Guarda os pedidos em data/pedidos.json

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const PASTA = path.join(import.meta.dirname, "..", "..", "data");
const ARQUIVO = path.join(PASTA, "pedidos.json");

// Lista todos os pedidos gravados; se o arquivo não existir, retorna lista vazia
export async function listar() {
  try {
    const texto = await readFile(ARQUIVO, "utf-8");
    return JSON.parse(texto);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      return [];
    }
    throw erro;
  }
}

// Busca um pedido pelo ID ou retorna undefined
export async function buscarPorId(id) {
  const pedidos = await listar();
  return pedidos.find((pedido) => pedido.id === id);
}

// Atribui o próximo ID, grava a lista inteira e devolve o novo pedido salvo
export async function salvar(dados) {
  const pedidos = await listar();
  const maiorId = pedidos.reduce((maior, pedido) => Math.max(maior, pedido.id), 0);
  
  const novo = { id: maiorId + 1, ...dados };
  pedidos.push(novo);

  await mkdir(PASTA, { recursive: true });
  await writeFile(ARQUIVO, JSON.stringify(pedidos, null, 2), "utf-8");
  
  return novo;
}