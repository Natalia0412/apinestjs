  <p align="center">🛠Tecnologias utilizadas: 
    <p align="center">
    </a>
    <a target="_blank"><img src="https://img.shields.io/badge/-NodeJS-green" alt="Nodejs"/></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-Nestjs-blue" alt="Nestjs" /></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-JEST-green" alt="JEST"/></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-Typescript-blue" alt="Typescript" /></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-Postman-orange" alt="Postman" /> </a>
    <a target="_blank"><img src="https://img.shields.io/badge/-Javascript-yellow" alt="Javascript"/></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-JWT-orange" alt="JWT"/></a>
    <a target="_blank"><img src="https://img.shields.io/badge/-Postgres-blue" alt="Postgres"/></a>
    
</p>

## Description

Rest API feita com NodeJS e framework NestJS, consequentemente Typescript e Javascript.
Banco de dados Postgres
Prisma para mapear entidades para as tabelas do banco de dados.
Jwt para atuenticação
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Prisma
npx prisma init 

O comando abaixo cria um migration, ou seja, cria a tabela no banco de dados, e também quando faz uma altração no schema.prisma cria uma migration para isso.

npx prisma migrate dev --name nameMigration

Quando cria primeiro a tabela no banco de dados , pode usar o comando abaixo, ou, quando faz uma alteração no schema.prisma e já gerou a migration dessa alteração. 

npx prisma generate 

## Param Decorator 
Utilizo o conceito de Param decorator no arquivo  user.controller.ts, no método da rota @Get('/:id').


## Stay in touch

- Author - [Natália Barros](https://www.linkedin.com/in/natalia-barros-a78316143/)

## License

Nest is [MIT licensed](LICENSE).
