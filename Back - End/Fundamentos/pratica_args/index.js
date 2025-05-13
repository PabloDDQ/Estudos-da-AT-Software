// externo
const minimist = require("minimist")

//interno
const soma = require('./soma').soma
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])
 
soma(a, b)

//Comando para o usuario digitar respostas
//node index.js --a=5 --b=7

//Observação: a e b estão como váriaveis e em outros códigos adaptar conforme o nome da variavel.