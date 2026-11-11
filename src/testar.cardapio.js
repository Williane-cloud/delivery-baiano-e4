
const CARDAPIO = require('./dados/cardapio.js');

console.log("Testando carregamento do cardápio...");
console.assert(Array.isArray(CARDAPIO), "O cardápio deve ser um array");
console.assert(CARDAPIO.length > 0, "O cardápio não pode estar vazio");
console.assert(CARDAPIO[0].nome === "Água de coco", "O primeiro item deve ser Água de coco");

console.log("Testes do cardápio executados com sucesso!");