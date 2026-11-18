export default class ItemPedido {
  constructor(produto, quantidade = 1) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  calcularSubtotal() {
    return this.produto.preco * this.quantidade;
  }
}