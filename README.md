<div align="center">
  <img src="./front/src/assets/logo.png" width="200px" alt="logo">
  <h1>Hacker News Full Stack Developer Test</h1>
</div>

<p align="center">
  Hacker News Full Stack Developer Test é um projeto de teste, onde o back-end em Laravel realiza a integração com a API do [Hacker News](https://github.com/HackerNews/API), que por sua vez é consumida com o front-end realizado em Vue.js.
</p>

## Funcionalidades

### Front-end

* Vue.js 2.6+
* Vuex
* Vue-Router
* SASS
* Vuejs-Paginate
* Axios
* Cypress

### Back-end

* Laravel 5.7+
* PHP 7.1+
* PHPUnit
* PHPCS (CodeSniffer)
* Docker
* Docker compose

## Iniciar ambiente de desenvolvimento

Requisitos mínimos: você precisará ter instalado `Docker`, `Docker compose`

### Configuração

#### Front-end

Todo o front-end está na pasta `front`

Deve ser criado um `.env.js` a partir do `.env.example.js` que está na raíz da pasta

Se você não tiver `Node v8.11.0+` instalado em sua máquina, execute os comandos abaixo:

---------------------------------------------------------------------------------------
Execute `docker-compose up -d` para subir os containers (`php/vue`)

Execute `docker-compose exec vue /bin/sh` para entrar dentro do container do front-end

Dentro da pasta front (`cd front`) execute `npm install`

Para sair do container execute `exit`

Execute `docker-compose down && docker-compose up -d` para reiniciar o servidor

---------------------------------------------------------------------------------------

Se você tiver `Node v8.11.0+` instalado em sua máquina, execute os comandos abaixo:

Dentro da pasta front (`cd front`) execute `npm install`

---------------------------------------------------------------------------------------

Por padrão o front-end é executado na porta `8080`

#### Back-end

Todo o back-end está na pasta `api` na raíz

Deve ser criado um `.env` a partir do `.env.example` na raíz da pasta

Se você não tiver `Composer` instalado em sua máquina, execute os comandos abaixo:

---------------------------------------------------------------------------------------

Execute `docker-compose up -d` para subir os containers (`php/vue`)

Execute `docker-compose exec php bash` para entrar dentro do container do php

Execute `composer install`

Para sair do container execute `exit`

Execute `docker-compose down && docker-compose up -d` para reiniciar o servidor

---------------------------------------------------------------------------------------

Se você não tiver `Composer` instalado em sua máquina, execute os comandos abaixo:

Dentro da pasta api (`cd api`) execute `composer install`

---------------------------------------------------------------------------------------

Por padrão ele é executado na porta `80`

Para acessar diretamente o back-end, acesse `localhost/`

O projeto segue PSR-1 e PSR-2.

Para executar o code sniffer basta rodar o comando dentro da pasta `api`: `./vendor/bin/phpcs --standard=psr2 nomeDaPasta` para PSR-2 e `./vendor/bin/phpcs --standard=psr1 nomeDaPasta` para PSR-1

## Informação das rotas

### Front-end

Rota | Descrição
--- | ---

### Back-end

Método | Rota | Descrição |
--- | --- | ---
GET | /top-stories | Paginação das Top Stories do Hacker News
GET | /best-stories | Paginação das Best Stories do Hacker News
GET | /new-stories | Paginação das New Stories do Hacker News

## Testes

### Back-end

Requisitos mínimos: você precisará ter instalado `Phpunit`, `Xdebug`

### Executando os testes

Para executar todos os testes, execute o comando dentro da pasta api: `./vendor/bin/phpunit tests`
Isto irá executar todos os testes da pasta `tests`

Para executar todos os testes `HackerNews`, execute o comando dentro da pasta api: `./vendor/bin/phpunit tests/Feature/HackerNewsControllerTest`
Isto irá executar todos os testes da classe `HackerNewsControllerTest` de integração

Para executar apenas um teste `HackerNews`, execute o comando dentro da pasta api: `./vendor/bin/phpunit tests/Feature/HackerNewsControllerTest --filter=nomeDoMetodo`
Isto irá executar apenas um teste da classe `HackerNewsControllerTest` passada de integração e apenas o método com o mesmo nome passado

Para gerar code coverage em modo texto no terminal, execute o comando dentro da pasta api: `./vendor/bin/phpunit tests --coverage-text`

Para gerar code coverage em xml, execute o comando dentro da pasta api: `./vendor/bin/phpunit tests --coverage-clover text`
Feito isto, abra: `http://localhost/.coverage/` para verificar a cobertura de testes

Pode ser executado diretamente dentro do docker utilizando o arquivo `./.test-api-feature` que se encontra na raíz do projeto, onde pode ser passado parâmetros também, onde o primeiro parâmetro é o arquivo e o segundo o método, ambos opcionais, ex: `./.test-api-feature HackerNewsControllerTest testGetNewStoriesPaginatedFromTheFirstPage`

Troque para `Unit` se for uma classe que possua teste unitário onde está `Feature`

### Front-end

#### Cypress (E2E)

Este projeto contém testes E2E (end-to-end) com o [Cypress](https://www.cypress.io/). Execute o comando `npm run test:e2e`

Será aberto a janela do Cypress, assim basta clicar no teste que deseja executar

## Deploy

### Front-end

Para realizar a build do front-end local, execute o comando na raíz do projeto: `docker-compose run vue /bin/sh -c "cd front && npm run build"`

Depois disso acesse `http://localhost`
