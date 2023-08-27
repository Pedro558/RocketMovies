# 🚀 RocketMovies API
Essa é uma API RESTful desenvolvida em Node.js que permite ao usuário armazenar notas sobre filmes que assistiu e adicionar tags para classificar essas notas.
É possível criar uma conta de usuário, realizar login e logout, adicionar, visualizar, atualizar e excluir notas, além de adicionar e visualizar tags.

## 🛠 Tecnologias utilizadas
- Node.js
- Express.js
- Knex.js (ORM para o banco de dados SQLite)
- SQLite3 (banco de dados)
- Bcrypt (criptografia de senha)
- JWT (autenticação)

## 🕹 Como utilizar
Para utilizar essa API, é necessário ter o Node.js instalado na sua máquina.

1. Clone o repositório:
```
git clone https://github.com/Pedro558/RocketMovies.git
```
2. Acesse a pasta do projeto:
```
cd RocketMovies
```
3. Instale as dependências do projeto:
```
npm install
```
4. Execute as migrações para criar as tabelas do banco de dados:
```
npx knex migrate:latest
```
5. Inicie o servidor:
```
npm start
```
6. Acesse a API pelo endereço http://localhost:3333.

## 🌐 Endpoints
- **/users**
  - GET /: Retorna todos os usuários cadastrados na aplicação.
  - POST /: Cadastra um novo usuário na aplicação.
  - PUT /:id : Atualiza os dados de um usuário existente na aplicação.

- **/notes**
  - GET /: Retorna todas as notas cadastradas na aplicação.
  - GET /:id : Retorna uma nota específica a partir do seu ID.
  - POST /:user_id : Cadastra uma nova nota para um usuário específico.
  - PUT /:id : Atualiza os dados de uma nota existente na aplicação.
  - DELETE /:id : Exclui uma nota existente na aplicação.

- **/tags**
  - GET /:user_id : Retorna todas as tags cadastradas por um usuário específico.
  
## 👨‍🏫 Considerações finais
Essa é uma aplicação simples que pode ser utilizada como base para projetos maiores e mais complexos. 
A arquitetura adotada (MVC) permite uma fácil escalabilidade e manutenção do código. 
Espero que essa aplicação seja útil para você e que possa ajudá-lo a desenvolver seus próprios projetos.

## 🦸‍♂️ Author
<p>
 <sub><strong>🌟 Pedro Afonso🌟</strong></sub>
</p>

>Este projeto foi desenvolvido com ❤️ por **[Pedro Afonso]
(https://github.com/Pedro558)**
