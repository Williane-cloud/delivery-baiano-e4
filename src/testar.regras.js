const { calcularSubtotal, calcularTaxaEntrega, validarPedido } = require('./regras');

console.log("--- TESTANDO AS REGRAS DO DELIVERY ---");

// Teste 1: Subtotal
const itensPedido = ["acaraje", "vatapa"];
const subtotal = calcularSubtotal(itensPedido);
console.log("Subtotal (Acarajé + Vatapá): R$", (subtotal / 100).toFixed(2)); // Deve retornar R$ 27,00

// Teste 2: Taxa de Entrega
const taxaBarra = calcularTaxaEntrega("Barra");
console.log("Taxa Barra (R$ 3,00): R$", (taxaBarra / 100).toFixed(2));

const taxaInvalida = calcularTaxaEntrega("Bairro Inexistente");
console.log("Taxa Bairro Inexistente (R$ 6,00): R$", (taxaInvalida / 100).toFixed(2));

// Teste 3: Validação do Pedido
const testeValidaAprovado = validarPedido(2500, 300, 15);
console.log("Validação Pedido Válido:", testeValidaAprovado); // Deve aprovar

const testeValidaBaixo = validarPedido(1500, 300, 15);
console.log("Validação Subtotal Baixo:", testeValidaBaixo); // Deve rejeitar por ser menor que R$ 20,00