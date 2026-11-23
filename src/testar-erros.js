import { ErroValidacao, ErroNaoEncontrado } from "./erros.js";

try {
  throw new ErroValidacao("Quantidade inválida para o pedido.");
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
}

try {
  throw new ErroNaoEncontrado("Pedido #999 não encontrado.");
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
}