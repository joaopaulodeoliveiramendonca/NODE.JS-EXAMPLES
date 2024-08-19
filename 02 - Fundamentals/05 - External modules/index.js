// Para executar use: node index.js --nome=Joao --idade=24
// Esse comentário orienta o usuário a executar o script no terminal, passando os argumentos `--nome=Joao` e `--idade=24`

// Importa o módulo 'minimist', que é utilizado para processar os argumentos passados via linha de comando de maneira mais conveniente
const minimist = require("minimist");

// Usa o módulo 'minimist' para processar os argumentos passados, removendo os dois primeiros itens (caminho do Node.js e do script) com 'slice(2)'
// 'minimist' converte os argumentos em um objeto onde cada opção é uma chave com o valor associado
const args = minimist(process.argv.slice(2));

// Exibe no console o objeto 'args', que contém os argumentos passados pelo usuário como pares chave-valor
console.log(args);

// Acessa o valor do argumento '--nome' a partir do objeto 'args' e armazena na variável 'nome'
// Neste caso, o valor será "Joao"
const nome = args["nome"];

// Acessa o valor do argumento '--idade' a partir do objeto 'args' e armazena na variável 'idade'
// Neste caso, o valor será "24"
const idade = args["idade"];

// Exibe no console o valor do argumento 'nome', neste caso "Joao"
console.log(nome);

// Exibe no console o valor do argumento 'idade', neste caso "24"
console.log(idade);
