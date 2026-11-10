// --- src/testar-regras.js ---
const { calcularTaxaEntrega, validarPedido } = require('./regras');

console.log("--- TESTANDO REGRAS ISOLADAS ---");
console.log("Taxa Barra:", calcularTaxaEntrega("Barra")); // Deve retornar 600
console.log("Taxa Bairro Inexistente:", calcularTaxaEntrega("Centro")); // Deve retornar 0 (Recusado)

const testeValidacao = validarPedido(2500, 500, 15);
console.log("Validação Subtotal Baixo (R$ 25):", testeValidacao);