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
    return this.itens.reduce((total, item) => {
      // Se o item tiver o método calcularSubtotal, usa ele. Senão, calcula manualmente.
      if (typeof item.calcularSubtotal === "function") {
        return total + item.calcularSubtotal();
      }
      const preco = item.produto?.preco || item.preco || 0;
      const qtd = item.quantidade || item.qtd || 1;
      return total + (preco * qtd);
    }, 0);
  }

  calcularTotal() {
    return this.calcularSubtotal();
  }

  validarMinimo(taxa = 500, hora = 12) {
    const subtotal = this.calcularSubtotal();
    return validarPedido(subtotal, taxa, hora);
  }

  paraObjeto() {
    return {
      bairro: this.bairro,
      hora: this.hora,
      itens: this.itens.map((item) => ({
        produto: {
          id: item.produto?.id || item.id || 1,
          nome: item.produto?.nome || item.nome || "Produto",
          preco: item.produto?.preco || item.preco || 0
        },
        quantidade: item.quantidade || item.qtd || 1
      })),
      total: this.calcularTotal()
    };
  }
}