import fs from "node:fs";
import path from "node:path";

const caminhoPedidos = path.resolve("data", "pedidos.json");
const caminhoSaida = path.resolve("data", "relatorio-pedidos.csv");

const pedidos = fs.existsSync(caminhoPedidos)
  ? JSON.parse(fs.readFileSync(caminhoPedidos, "utf-8"))
  : [
      { id: 1, data: "2026-11-23", cliente: "Ana Silva", bairro: "Pituba", total: 46.0, status: "Entregue" },
      { id: 2, data: "2026-11-23", cliente: "Carlos Souza", bairro: "Barra", total: 32.5, status: "Em preparo" }
    ];

const cabecalho = "id;data;cliente;bairro;total;status";

const linhas = pedidos.map((p) => {
  const totalFormatado = Number(p.total || 0).toFixed(2).replace(".", ",");
  return [
    p.id,
    p.data || "",
    p.cliente || "",
    p.bairro || "",
    totalFormatado,
    p.status || ""
  ].join(";");
});

const conteudoCsv = "\uFEFF" + [cabecalho, ...linhas].join("\n");

fs.mkdirSync(path.dirname(caminhoSaida), { recursive: true });
fs.writeFileSync(caminhoSaida, conteudoCsv, "utf-8");

console.log("Arquivo gerado com sucesso em:", caminhoSaida);