// ==========================================
// PROJETO DELIVERY BAIANO - SPRINT 2 (AULA 8/9)
// Arquivo: src/calculo.js
// Integrantes: Ana Beatriz, Williane, Laisa
// ==========================================

// Preço base dos itens do cardápio (em centavos)
const PRECO_ACARAJE = 1200; // R$ 12,00
const PRECO_ABARA = 1000;   // R$ 10,00
const PRECO_VATAPA = 1500;  // R$ 15,00

// Cenários de Teste para o Delivery Baiano
const cenarios = [
  { id: 1, descricao: "Pedido simples em Barra (sem taxa extra, sem cupom)", itens: ["acaraje", "vatapa"], bairro: "Barra", cupom: "" },
  { id: 2, descricao: "Pedido com taxa de entrega para Pituba", itens: ["abara", "vatapa"], bairro: "Pituba", cupom: "" },
  { id: 3, descricao: "Pedido em Itapuã com cupom BAIANO10 (10% de desconto)", itens: ["acaraje", "abara", "vatapa"], bairro: "Itapuã", cupom: "BAIANO10" },
  { id: 4, descricao: "Pedido no Pelourinho com cupom invalido", itens: ["acaraje"], bairro: "Pelourinho", cupom: "CUPOMFALSO" },
  { id: 5, descricao: "Pedido com taxa para Rio Vermelho e cupom BAIANO10", itens: ["acaraje", "acaraje"], bairro: "Rio Vermelho", cupom: "BAIANO10" }
];

// Processamento dos 5 Cenários
for (let i = 0; i < cenarios.length; i++) {
  const cenario = cenarios[i];
  let subtotal = 0;

  // 1. Cálculo do Subtotal com laço (for)
  for (let j = 0; j < cenario.itens.length; j++) {
    const item = cenario.itens[j];
    if (item === "acaraje") subtotal += PRECO_ACARAJE;
    else if (item === "abara") subtotal += PRECO_ABARA;
    else if (item === "vatapa") subtotal += PRECO_VATAPA;
  }

  // 2. Taxa de Entrega por Bairro (switch)
  let taxaEntrega = 0;
  switch (cenario.bairro) {
    case "Barra":
      taxaEntrega = 300; // R$ 3,00
      break;
    case "Pituba":
      taxaEntrega = 500; // R$ 5,00
      break;
    case "Itapuã":
      taxaEntrega = 700; // R$ 7,00
      break;
    case "Rio Vermelho":
      taxaEntrega = 400; // R$ 4,00
      break;
    default:
      taxaEntrega = 600; // R$ 6,00 (outros bairros)
  }

  // 3. Aplicação de Cupom com operador ternário
  const desconto = (cenario.cupom === "BAIANO10") ? Math.round(subtotal * 0.10) : 0;
  const total = subtotal + taxaEntrega - desconto;

  // Exibição dos resultados no terminal
  console.log(`--- CENÁRIO ${cenario.id}: ${cenario.descricao} ---`);
  console.log(`Bairro: ${cenario.bairro} | Cupom: ${cenario.cupom || "Nenhum"}`);
  console.log(`Subtotal: R$ ${(subtotal / 100).toFixed(2)}`);
  console.log(`Taxa de Entrega: R$ ${(taxaEntrega / 100).toFixed(2)}`);
  console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
  console.log(`Total Final: R$ ${(total / 100).toFixed(2)}\n`);
}
