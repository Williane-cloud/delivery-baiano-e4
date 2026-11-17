import { validarPedidoMinimo } from "../regras.js";

class Pedido {
  constructor() {
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  calcularTotal() {
    return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
  }

  validarMinimo() {
    const total = this.calcularTotal();
    return validarPedidoMinimo(total);
  }
}

export default Pedido;