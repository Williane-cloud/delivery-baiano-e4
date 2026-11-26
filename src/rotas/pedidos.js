import { Router } from "express";
import Produto from "../models/Produto.js";
import Pedido from "../models/Pedido.js";
import { buscarProduto } from "../dados/cardapio.js";
import * as repositorio from "../repositories/pedidoArquivoRepository.js";
import { ErroValidacao, ErroNaoEncontrado } from "../erros.js";

const rotas = Router();
const STATUS_PERMITIDOS = ["preparando", "saiu", "entregue", "cancelado"];

function produtoDoCardapio(id) {
  const dados = buscarProduto(Number(id));
  if (!dados) {
    throw new ErroValidacao(`prato ${id} não existe`);
  }
  return new Produto(dados.id, dados.nome, dados.preco, dados.estoque, dados.ativo);
}

rotas.get("/pedidos", async (req, res) => {
  const { status } = req.query;
  const todos = await repositorio.listar();
  if (!status) {
    return res.json(todos);
  }
  if (!STATUS_PERMITIDOS.includes(status)) {
    throw new ErroValidacao(`status inválido: ${status}`);
  }
  res.json(todos.filter((p) => p.status === status));
});

rotas.post("/pedidos", async (req, res) => {
  const { cliente, bairro, hora, itens } = req.body ?? {};
  if (!cliente) {
    throw new ErroValidacao("informe o nome do cliente");
  }
  if (!Array.isArray(itens) || itens.length === 0) {
    throw new ErroValidacao("o pedido precisa de pelo menos um item");
  }

  const pedido = new Pedido(bairro, hora);
  for (const item of itens) {
    pedido.adicionarItem(produtoDoCardapio(item.id), item.qtd);
  }

  const gravado = await repositorio.salvar({
    cliente,
    status: "preparando",
    ...pedido.paraObjeto(),
  });
  res.status(201).json(gravado);
});

rotas.get("/pedidos/:id", async (req, res) => {
  const pedido = await repositorio.buscarPorId(Number(req.params.id));
  if (!pedido) {
    throw new ErroNaoEncontrado(`pedido ${req.params.id} não existe`);
  }
  res.json(pedido);
});

rotas.patch("/pedidos/:id/status", async (req, res) => {
  const { status } = req.body ?? {};
  if (!STATUS_PERMITIDOS.includes(status)) {
    throw new ErroValidacao(
      `status inválido; use um de: ${STATUS_PERMITIDOS.join(", ")}`
    );
  }
  const atualizado = await repositorio.atualizarStatus(
    Number(req.params.id),
    status
  );
  if (!atualizado) {
    throw new ErroNaoEncontrado(`pedido ${req.params.id} não existe`);
  }
  res.json(atualizado);
});

export default rotas;