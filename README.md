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
## Banco de dados (PostgreSQL)

Para testar sem instalar nada: db-fiddle.com, Database **PostgreSQL 17**.
Cole o `db/schema.sql` e, embaixo, o `db/seed.sql` no painel **Schema SQL**, as consultas do `db/consultas.sql` no **Query SQL**, e clique em **Run**.

Na máquina, precisa do PostgreSQL 16 ou mais novo e do pgAdmin 4:
1. No pgAdmin: Databases > Create > Database, nome `delivery`.
2. Botão direito no `delivery` > Query Tool > Open File > `db/schema.sql` > F5.
3. Open File > `db/seed.sql` > F5.
4. Para conferir: `db/consultas.sql`, uma consulta por vez.

Para recomeçar do zero, rode o `schema.sql` e o `seed.sql` de novo.

Pelo psql (SQL Shell, no Windows), as barras do caminho são `/`:
\c delivery
\i 'D:/projetos/delivery-baiano-eN/db/schema.sql'
\i 'D:/projetos/delivery-baiano-eN/db/seed.sql'

A senha do postgres não vai no README nem em lugar nenhum do repositório.