# Teste BrunSker Tecnologia

## Sobre o projeto

Teste Técnico para processo seletivo, este projeto consiste na implementação de um CRUD de imóveis, onde é possivel adicionar, ler, atualizar e deletar dados de imóveis em um banco de dados.

## Tecnologias Utilizadas

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [MySql](https://www.mysql.com/)

## Pré-Requisitos

Este projeto Utiliza o banco de dados MySql, para o perfeito funcionamento é necessário ter o banco de dados em sua máquina. Para instruções sobre a instalação do banco de dados acesse https://dev.mysql.com/doc/.

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/tuliotrindade/facile-challenge.git`

-Instale as dependências através do `npm install`.

-Altere o arquivo `config.json` incluindo as credenciais banco de dados mySql em sua maquina, as credenciais do banco de dados são diferentes para cada usuario, geralmente essas credenciais são ocultadas em um arquivo .env para maior segurança, mas neste projeto para facilitar a utilização do script em outra maquina estas informações devem ser configuradas no arquivo config.json.

Exemplo de credenciais configuradas.<br/>
<img src="/images/config.png" alt="db config"/>

-Utilize a querry presente no arquivo `database.sql` para criar a database 'crud', é apenas nescessário a criação do db, as tabelas são geradas automaticamente.

-Para iniciar a aplicação rode o comando `npm start` em seu terminal.

## Endpoints

### Criação de usuario e login

#### POST - http://localhost:3333/users/ - Recebe um body com dados do usuario e realiza o cadastro dele no banco de dados.
#### POST - http://localhost:3333/users/login -Recebe informações de login no body da requisição e retorna um token de autenticação.

### CRUD de imoveis

#### GET - http://localhost:3333/immobile/ - Retorna todos imoveis cadastrados.
#### GET - http://localhost:3333/immobile/id - Recebe um id e retorna o imovel com id correspondente.
#### POST - http://localhost:3333/immobile/ - Recebe um body na requisição com os dados de um imovel e o cadastra como um novo imovel no banco de dados.
#### PUT: - http://localhost:3333/immobile/id - Recebe um id nos parametros da requisição e dados de um imovel no body e realiza a atualização do imovel com id coorespondente ao enviado como parametro.
#### DELETE - http://localhost:3333/immobile/id - Recebe um id como parametro e remove do banco de dados o imovel com id correspondente.

## Exemplos de requisições e respostas

Abaixo segue um exemplo de todo fluxo do script e funcionamento dos endpoints.

### Criação de novo usuario

<img src="/images/createUser.png" alt="cria usuario"/>

### Login

<img src="/images/login.png" alt="login"/>

### Para adicionar novos imoveis, atualizar ou deletar é preciso estar autenticado com o token retornado apos login, apenas o criador de um imovel pode o atualizar ou deletar

A autenticação deve ser feita por meio da chave authorization no Header da requisição.
<img src="/images/authorization.png" alt="autenticação"/>

### Adicionando um novo imovel 

<img src="/images/newImmobile.png" alt="adiciona imovel"/>

### Vizualizando um ou todos imóveis.

<img src="/images/allImmobiles.png" alt="todos imoveis"/>
<img src="/images/oneImmobile.png" alt="um imovel"/>

### Atualizando um imovel

<img src="/images/update.png" alt="atualização"/>

### Deletando um imovel

<img src="/images/delete.png" alt="deletar"/>

## Contato 

Túlio Trindade - tuliotrindade99@gmail.com
