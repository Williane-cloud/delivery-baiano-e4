function calcularIngresso(idade, ehEstudante) {
    const valorInteira = 40.00;

    if (idade <= 12 || idade >= 60 || ehEstudante) {
        console.log("Direito à meia-entrada! Valor: R$ " + (valorInteira / 2).toFixed(2));
    } else {
        console.log("Ingresso Inteira. Valor: R$ " + valorInteira.toFixed(2));
    }
}

calcularIngresso(20, true);  // Estudante
calcularIngresso(25, false); // Inteira