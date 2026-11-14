# Relatório de Depuração - bugs.js

## Defeito 1: Taxa de entrega em reais em vez de centavos
* **Descrição do Problema:** A taxa de entrega do bairro "Barra" está incorreta, violando a regra imposta pela Dona Ju de que o dinheiro deve ser registado sempre em centavos inteiros.
* **Causa do Erro:** O valor foi definido como `6` (que equivale a 6 centavos) em vez de `600` (R$ 6,00).
* **Código Original (com erro):**
```javascript
} else if (bairro === "Barra") {
  taxaEntrega = 6;
}
```
* **Solução / Código Corrigido:** O valor foi alterado de 6 para 600.
```javascript
} else if (bairro === "Barra") {
  taxaEntrega = 600;
}
```

## Defeito 2: Desconto a incidir sobre a entrega
* **Descrição do Problema:** O desconto do cupom "PRIMEIRA10" está a calcular o valor incluindo a taxa de entrega. As regras indicam que o desconto de 10% se aplica apenas ao valor dos itens.
* **Causa do Erro:** A fórmula matemática incluía a soma `(subtotal + taxaEntrega)` antes da multiplicação.
* **Código Original (com erro):**
```javascript
if (cupom === "PRIMEIRA10") {
  desconto = (subtotal + taxaEntrega) * 10 / 100;
}
```
* **Solução / Código Corrigido:** A fórmula foi alterada para multiplicar apenas o `subtotal`.
```javascript
if (cupom === "PRIMEIRA10") {
  desconto = subtotal * 10 / 100;
}
```

## Defeito 3: Erro na lógica de aprovação do pedido mínimo
* **Descrição do Problema:** Um pedido com valor exatamente igual ao mínimo exigido (R$ 30,00 nos itens) está a ser recusado de forma errada. O pedido de teste da Acarajé e Cocada resulta num subtotal exato de 3000 centavos e falha na verificação.
* **Causa do Erro:** O operador usado na verificação do `if` foi apenas o de "maior que" (`>`).
* **Código Original (com erro):**
```javascript
let aceito = false;
if (subtotal > PEDIDO_MINIMO) {
  aceito = true;
}
```
* **Solução / Código Corrigido:** O operador foi alterado para "maior ou igual" (`>=`), permitindo pedidos de exatamente R$ 30,00.
```javascript
let aceito = false;
if (subtotal >= PEDIDO_MINIMO) {
  aceito = true;
}
```
