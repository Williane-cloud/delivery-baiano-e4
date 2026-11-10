function calcularEstacionamento(horas) {
    const valorPrimeiraHora = 10.00;
    const valorHoraAdicional = 5.00;

    if (horas <= 1) {
        console.log(`Total a pagar: R$ ${valorPrimeiraHora.toFixed(2)}`);
    } else {
        let total = valorPrimeiraHora + ((horas - 1) * valorHoraAdicional);
        console.log(`Total para ${horas} horas: R$ ${total.toFixed(2)}`);
    }
}

calcularEstacionamento(3); // 1 hora base + 2 horas adicionais