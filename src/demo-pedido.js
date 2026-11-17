import assert from "assert";
import Produto from "./models/produto.js";
import ItemPedido from "./models/itemPedido.js";
import Pedido from "./models/pedido.js";

// Criando produtos de teste
const coxinha = new Produto(1, "Coxinha de Frango", 8.00);
const refri = new Produto(2, "Refrigerante 2L", 10.00);
const xuxin = new Produto(3, "Xinxin de Bofe", 30.00);

// Simulação 1: Pedido totalizando R$ 46,00
const pedido1 = new Pedido();
pedido1.adicionarItem(new ItemPedido(coxinha, 2)); // 2 * 8 = 16
pedido1.adicionarItem(new ItemPedido(refri, 3));    // 3 * 10 = 30
// Total = 46,00

for (const item of pedido1.itens) {
  console.log(`${item.quantidade} x ${item.produto.nome}`);
}
console.log(`Pedido 1 Total: R$ ${pedido1.calcularTotal().toFixed(2).replace('.', ',')}`);
assert.strictEqual(pedido1.calcularTotal(), 46.00);

// Simulação 2: Pedido totalizando R$ 32,00
const pedido2 = new Pedido();
pedido2.adicionarItem(new ItemPedido(coxinha, 4)); // 4 * 8 = 32
// Total = 32,00

console.log(`Pedido 2 Total: R$ ${pedido2.calcularTotal().toFixed(2).replace('.', ',')}`);
assert.strictEqual(pedido2.calcularTotal(), 32.00);

console.log("Todos os testes passaram com sucesso!");