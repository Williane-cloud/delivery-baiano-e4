import { Router } from "express";
import CARDAPIO from "../dados/cardapio.js";
import { ErroNaoEncontrado } from "../erros.js";

const rotas = Router();

rotas.get("/produtos", (req, res) => {
  res.json(CARDAPIO);
});

rotas.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = Array.isArray(CARDAPIO)
    ? CARDAPIO.find((item) => Number(item.id) === id)
    : undefined;

  if (!produto) {
    throw new ErroNaoEncontrado(`prato ${req.params.id} não existe`);
  }

  res.json(produto);
});

export default rotas;