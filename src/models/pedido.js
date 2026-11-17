import { validarPedido } from "../regras.js";
import ItemPedido from "./ItemPedido.js";

class Pedido {
  constructor(bairro, hora) {
    this.bairro = bairro;
    this.hora = hora;
    this.itens = [];
  }

  adicionarItem(item, qtd = 1) {
    this.itens.push(new ItemPedido(item, qtd));
  }

  calcularSubtotal() {
    return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
  }

  validarMinimo(taxa, hora) {
    const subtotal = this.calcularSubtotal();
    return validarPedido(subtotal, taxa, hora);
  }
}

export default Pedido;