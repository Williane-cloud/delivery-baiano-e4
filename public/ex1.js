const minutos = 16; // Altere este valor para testar as diferentes faixas

if (minutos < 0) {
    console.log("Tempo inválido");
} else if (minutos <= 15) {
    console.log("Grátis");
} else if (minutos <= 180) {
    console.log("Pagar R$ 8,00");
} else {
    console.log("Pagar R$ 15,00");
}