<<<<<<< HEAD
// --- ARQUIVO DE TESTE E EXECUÇÃO (calculo.js) ---

// Importando as funções do arquivo regras.js
=======

>>>>>>> 3034aaa259b148956da5dbd2650105cc14600b44
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

<<<<<<< HEAD
// SIMULAÇÃO DE UM PEDIDO:
// Quantidade de cada prato [Acarajé, Abará, Moqueca, Bobó, Vatapá, Cocada]
const meuPedido = [2, 0, 1, 0, 0, 0]; 

// Testando o cenário (Pedido, Bairro, Hora do pedido, É primeira compra?, Cupom)
=======
const meuPedido = [2, 0, 1, 0, 0, 0]; 

>>>>>>> 3034aaa259b148956da5dbd2650105cc14600b44
processarCenario(meuPedido, "Pituba", 14, true, "PRIMEIRA10");