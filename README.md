# Delivery Baiano
Sistema de pedidos de um delivery de comida baiana: o cliente monta o pedido, a cozinha atualiza o status e a administradora cuida do cardápio.

## Integrantes
| Integrante| Usuário no GitHub |
|---|---|
| Williane Vitória | Williane-cloud |
| Laísa Kelle | laisa-cyber |
| Ana Beatriz | ana-beatriz-cm |

## Como rodar
Precisa do Node.js 26. Ainda não há código: o projeto começa na Sprint 1.

## Situação
Sprint 1 - Cardápio no ar. Scrum Master: Williane Vitória

## Como rodar

Na pasta do repositório:

    npm install
    npm start                   # monta dois pedidos com as classes
    npm run dev                 # o mesmo, rodando de novo cada vez que salvar
    npm test                    # confere as regras e o cardápio
    node src/pedido-agora.js    # um pedido com a hora de agora

## Bibliotecas

| Biblioteca | Versão | Para quê | Licença |
| --- | --- | --- | --- |
| dayjs | ^1.11.23 | data e hora do pedido em português | MIT |

## npm audit

Rodado em 19/11/2026: `found 0 vulnerabilities`.