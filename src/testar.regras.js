// src/testar.regras.js

const CARDAPIO = require('./dados/cardapio.js');

const comanda = [
  { id: 1, qtd: 2 },
  { id: 2, qtd: 3 },
  { id: 5, qtd: 2 },
  { id: 6, qtd: 1 },
];

const TAXA_SERVICO = 10;
const DESCONTO_ACIMA_DE = 8000;
const VALOR_DESCONTO = 500;

const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function formatarReais(centavos) {
  return reais.format(centavos / 100);
}

function buscarItem(id) {
  return CARDAPIO.find((item) => item.id === id);
}

function listarDisponiveis() {
  return CARDAPIO.filter((item) => item.disponivel).map((item) => item.nome);
}

function calcularSubtotal(comanda) {
  return comanda.reduce((soma, linha) => soma + buscarItem(linha.id).preco * linha.qtd, 0);
}

function calcularServico(subtotal) {
  return Math.round((subtotal * TAXA_SERVICO) / 100);
}

function calcularDesconto(subtotal) {
  if (subtotal > DESCONTO_ACIMA_DE) {
    return VALOR_DESCONTO;
  }
  return 0;
}

function calcularTotal(comanda) {
  const subtotal = calcularSubtotal(comanda);
  return subtotal + calcularServico(subtotal) - calcularDesconto(subtotal);
}

console.assert(buscarItem(5).nome === "Cadeira", "id 5 é a Cadeira");
console.assert(buscarItem(99) === undefined, "id que não existe dá undefined");
console.assert(listarDisponiveis().length === 5, "5 disponíveis: o picolé acabou");
console.assert(calcularSubtotal(comanda) === 8800, "subtotal R$ 88,00");
console.assert(calcularDesconto(8000) === 0, "R$ 80,00 em ponto não tem desconto");
console.assert(calcularDesconto(8001) === 500, "acima de R$ 80,00 tem desconto");
console.assert(calcularTotal(comanda) === 9180, "total R$ 91,80");
console.assert(calcularTotal([{ id: 3, qtd: 1 }, { id: 2, qtd: 1 }]) === 1870, "comanda pequena: R$ 18,70");

console.log("Testes de regras executados com sucesso!");