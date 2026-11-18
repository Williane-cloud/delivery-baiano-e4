// ==========================================
// PROJETO DELIVERY BAIANO - SPRINT 2
// Arquivo: src/testar-regras.js
// ==========================================

import * as regras from "./regras.js";

console.log("Testando as regras...");

// 1. Teste de Subtotal e Total de Itens
// Índices: [0: Acarajé (1200), 1: Abará (1000), 2: Moqueca (4200), 3: Bobó (3800), 4: Vatapá (1500), 5: Cocada (600)]
// 2 x R$ 12,00 (2400) + 1 x R$ 6,00 (600) = 3000 centavos (3 itens)
const resultado1 = regras.calcularSubtotal([2, 0, 0, 0, 0, 1]);
console.assert(resultado1.subtotal === 3000, "subtotal: 2 x R$ 12,00 + 1 x R$ 6,00");
console.assert(resultado1.totalItens === 3, "totalItens: deve ser 3");

// 2. Teste de Taxa de Entrega
console.assert(regras.calcularTaxa("Rio Vermelho") === 500, "taxa Rio Vermelho deve ser 500");
console.assert(regras.calcularTaxa("Barra") === 600, "taxa Barra deve ser 600");
console.assert(regras.calcularTaxa("Pituba") === 700, "taxa Pituba deve ser 700");
console.assert(regras.calcularTaxa("Itapuã") === 900, "taxa Itapuã deve ser 900");
console.assert(regras.calcularTaxa("Lua") === 0, "bairro fora da área não tem taxa");

// 3. Teste de Validação do Pedido
console.assert(
    regras.validarPedido(3000, 0, 12) === "Recusado: bairro não atendido.",
    "deve recusar bairro não atendido"
);
console.assert(
    regras.validarPedido(3000, 500, 10) === "Recusado: pedidos só das 11h às 22h.",
    "deve recusar pedido antes das 11h"
);
console.assert(
    regras.validarPedido(3000, 500, 22) === "Recusado: pedidos só das 11h às 22h.",
    "deve recusar pedido a partir das 22h"
);
console.assert(
    regras.validarPedido(2000, 500, 14) === "Recusado: faltam R$ 10.00 para o valor mínimo.",
    "deve recusar pedido abaixo de R$ 30,00"
);
console.assert(
    regras.validarPedido(3000, 500, 14) === "Aprovado",
    "deve aprovar pedido dentro das regras"
);

console.log("Fim. Se nenhum Assertion failed apareceu acima, tudo passou.");