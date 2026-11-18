import ItemPedido from "./itemPedido.js";
import { validarPedido } from "../regras.js";

export default class Pedido {
  constructor(bairro = "Rio Vermelho", hora = 12) {
    this.bairro = bairro;
    this.hora = hora;
    this.itens = [];
  }

  adicionarItem(itemPedido) {
    this.itens.push(itemPedido);
  }

  calcularSubtotal() {
    return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
  }

  calcularTotal() {
    return this.calcularSubtotal();
  }

  validarMinimo(taxa = 500, hora = 12) {
    const subtotal = this.calcularSubtotal();
    return validarPedido(subtotal, taxa, hora);
  }
}