// src/models/pedido.js
import * as regras from "../regras.js";
import ItemPedido from "./itemPedido.js";

export default class Pedido {
  constructor(bairro = "Rio Vermelho", hora = 12, cupom = "", primeiraCompra = false) {
    this.bairro = bairro;
    this.hora = hora;
    this.cupom = cupom;
    this.primeiraCompra = primeiraCompra;
    this.criadoEm = new Date();
    this.itens = [];
  }

  adicionarItem(produtoOuItem, qtd) {
    if (qtd !== undefined) {
      if (typeof produtoOuItem.temEstoque === "function" && !produtoOuItem.temEstoque(qtd)) {
        throw new Error(`${produtoOuItem.nome}: sem estoque para ${qtd}`);
      }
      this.itens.push(new ItemPedido(produtoOuItem, qtd));
    } else {
      this.itens.push(produtoOuItem);
    }
  }

  calcularSubtotal() {
    return this.itens.reduce((soma, item) => {
      if (typeof item.subtotal === "function") return soma + item.subtotal();
      if (typeof item.calcularSubtotal === "function") return soma + item.calcularSubtotal();
      const preco = item.produto?.preco || item.preco || 0;
      const q = item.quantidade || item.qtd || 1;
      return soma + preco * q;
    }, 0);
  }

  subtotal() {
    return this.calcularSubtotal();
  }

  validar() {
    if (regras.calcularTaxa(this.bairro) === 0) {
      throw new Error(`não entregamos em ${this.bairro}`);
    }
    if (this.hora < 11 || this.hora >= 22) {
      throw new Error("pedidos só das 11h às 22h");
    }
    if (this.subtotal() < regras.PEDIDO_MINIMO) {
      throw new Error("abaixo do mínimo de R$ 30,00 em itens");
    }
  }

  validarMinimo(taxa = 500, hora = 12) {
    const subtotal = this.calcularSubtotal();
    if (taxa === 0) return "Recusado: bairro não atendido.";
    if (hora < 11 || hora >= 22) return "Recusado: pedidos só das 11h às 22h.";
    if (subtotal < regras.PEDIDO_MINIMO) return "Recusado: abaixo do mínimo de R$ 30,00.";
    return "Aprovado";
  }

  total() {
    this.validar();
    const sub = this.subtotal();
    const desconto = regras.calcularDesconto(sub, this.cupom, this.primeiraCompra);
    return sub - desconto + regras.calcularTaxa(this.bairro);
  }

  calcularTotal() {
    return this.calcularSubtotal();
  }

  paraObjeto() {
    return {
      bairro: this.bairro,
      hora: this.hora,
      itens: this.itens.map((item) => ({
        id: item.produto?.id || item.id || 1,
        nome: item.produto?.nome || item.nome || "Produto",
        qtd: item.quantidade || item.qtd || 1,
        precoUnitario: item.precoUnitario || item.produto?.preco || item.preco || 0,
      })),
      total: this.calcularSubtotal(),
    };
  }
}