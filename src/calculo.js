
const { calcularSubtotal, calcularTaxaEntrega, validarPedido } = require('./regras');

function processarCenario(qtds, bairro, hora, primeiraCompra, cupom) {
    console.log("--- Processando Pedido ---");
    
    const { subtotal, totalItens } = calcularSubtotal(qtds);
    const taxa = calcularTaxaEntrega(bairro);
    const status = validarPedido(subtotal, taxa, hora);
    
    if (status !== "Aprovado") {
        console.log("Status:", status);
        console.log("---------------------------\n");
        return;
    }
    
    let desconto = (primeiraCompra && cupom === "PRIMEIRA10") ? Math.round((subtotal * 10) / 100) : 0;
    let total = subtotal - desconto + taxa;
    
    console.log(`Status: ${status}`);
    console.log(`Total de Itens: ${totalItens}`);
    console.log(`Subtotal: R$ ${(subtotal / 100).toFixed(2)}`);
    console.log(`Taxa de Entrega: R$ ${(taxa / 100).toFixed(2)}`);
    console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
    console.log(`Valor Final: R$ ${(total / 100).toFixed(2)}`);
    console.log("---------------------------\n");
}

const meuPedido = [2, 0, 1, 0, 0, 0]; 

processarCenario(meuPedido, "Pituba", 14, true, "PRIMEIRA10");