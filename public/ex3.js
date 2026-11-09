// --- Parte A: Contagem com for ---
console.log("--- Contagem ---");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Fogo!");

// --- Parte B: Cofrinho com while ---
console.log("\n--- Cofrinho ---");
let cofrinho = 0;
let semanas = 0;
const meta = 250;

while (cofrinho < meta) {
    cofrinho += 20; // Guarda R$ 20,00 por semana
    semanas++;
}
console.log(`${semanas} semanas, R$ ${cofrinho},00 no cofre`);

// --- Parte C: Mercadinho com for...of, continue e break ---
console.log("\n--- Mercadinho ---");
const precosItens = [450, 1290, -1, 899, 0, 350];
let totalCarrinho = 0;
let quantidadeItens = 0;

for (const preco of precosItens) {
    if (preco < 0) {
        continue; // Pula leituras com defeito/negativas
    }
    if (preco === 0) {
        break; // Zero indica fim da compra, para o laço
    }
    totalCarrinho += preco;
    quantidadeItens++;
}

const totalFormatado = (totalCarrinho / 100).toFixed(2).replace(".", ",");
console.log(`${quantidadeItens} itens: R$ ${totalFormatado}`);