const dia = "terca";
const idade = 20;

let preco = 0;

switch (dia) {
    case "terca":
        preco = 1200; // Em centavos para evitar problemas decimais
        break;
    case "sabado":
    case "domingo":
        preco = 3000;
        break;
    case "segunda":
    case "quarta":
    case "quinta":
    case "sexta":
        preco = 2400;
        break;
    default:
        console.log("Dia inválido");
        break;
}

if (preco > 0) {
    // Ternário para verificar se tem direito à meia-entrada
    const ehMeia = idade < 18 || idade >= 60;
    const precoFinal = ehMeia ? preco / 2 : preco;
    const tipoIngresso = ehMeia ? "Ingresso meia" : "Ingresso inteira";

    // Formata o valor para exibição em Reais
    const valorFormatado = (precoFinal / 100).toFixed(2).replace(".", ",");
    console.log(`${tipoIngresso}: R$ ${valorFormatado}`);
}