// --- DADOS E REGRAS DO DELIVERY (regras.js) ---

const PRATOS = ["Acarajé", "Abará", "Moqueca de peixe", "Bobó de camarão", "Vatapá", "Cocada"];
const PRECOS = [1200, 1000, 4200, 3800, 1500, 600]; // Valores em centavos
const PEDIDO_MINIMO = 3000; // R$ 30,00

// 1. Função para calcular o subtotal e quantidade de itens
function calcularSubtotal(qtds) {
    let subtotal = 0;
    let totalItens = 0;
    for (let i = 0; i < PRECOS.length; i++) {
        if (qtds[i] > 0) {
            subtotal += PRECOS[i] * qtds[i];
            totalItens += qtds[i];
        }
    }
    return { subtotal, totalItens };
}

// 2. Função para definir a taxa de entrega pelo bairro
function calcularTaxaEntrega(bairro) {
    switch (bairro) {
        case "Rio Vermelho": return 500;
        case "Barra": return 600;
        case "Pituba": return 700;
        case "Itapuã": return 900;
        default: return 0; // Bairro não atendido
    }
}

// 3. Função para validar o pedido (horário e mínimo)
function validarPedido(subtotal, taxa, hora) {
    if (taxa === 0) return "Recusado: bairro não atendido.";
    if (hora < 11 || hora >= 22) return "Recusado: pedidos só das 11h às 22h.";
    if (subtotal < PEDIDO_MINIMO) {
        let falta = PEDIDO_MINIMO - subtotal;
        let faltaReais = (falta / 100).toFixed(2);
        return `Recusado: faltam R$ ${faltaReais} para o valor mínimo.`;
    }
    return "Aprovado";
}

// Exportando as funções para poder usá-las no outro arquivo
module.exports = { calcularSubtotal, calcularTaxaEntrega, validarPedido };