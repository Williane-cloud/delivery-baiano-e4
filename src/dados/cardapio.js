import path from "node:path";
import { lerCardapioCsv } from "./importarCardapio.js";

const CARDAPIO = await lerCardapioCsv(path.join(import.meta.dirname, "cardapio.csv"));

export function listarAtivos() {
  return CARDAPIO.filter((item) => item.ativo);
}

export function buscarProduto(id) {
  return CARDAPIO.find((item) => item.id === id);
}

export default CARDAPIO;