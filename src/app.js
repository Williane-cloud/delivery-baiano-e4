import express from "express";
import path from "node:path";
import rotasProdutos from "./rotas/produtos.js";
import { ErroValidacao, ErroNaoEncontrado } from "./erros.js";

const app = express();

// 1. Log de requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 2. Parser de JSON no corpo
app.use(express.json());

// 3. Arquivos estáticos da pasta public
app.use(express.static(path.join(import.meta.dirname, "public")));

// 4. Rotas
app.use(rotasProdutos);

// 5. Rota inexistente -> 404
app.use((req, res) => {
  res.status(404).json({ erro: `rota não encontrada: ${req.method} ${req.url}` });
});

// 6. Central de erros
app.use((erro, req, res, next) => {
  if (erro instanceof ErroValidacao) {
    return res.status(400).json({ erro: erro.message });
  }
  if (erro instanceof ErroNaoEncontrado) {
    return res.status(404).json({ erro: erro.message });
  }
  if (erro.type === "entity.parse.failed") {
    return res.status(400).json({ erro: "o corpo não é um JSON válido" });
  }
  console.error(erro);
  return res.status(500).json({ erro: "erro interno, tente de novo em instantes" });
});

export default app;