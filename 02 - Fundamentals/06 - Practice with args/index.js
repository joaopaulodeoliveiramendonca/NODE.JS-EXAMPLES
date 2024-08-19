// Para executar use: node index.js --a=4 --b=6

// Importa o módulo 'minimist', que é utilizado para processar os argumentos passados via linha de comando
const minimist = require("minimist");

// Importa o módulo personalizado 'my_module', que contém a função 'sum'
const myModule = require("./my_module");

// Acessa a função 'sum' a partir do módulo 'my_module' e a atribui à variável 'sum'
// Isso permite usar a função 'sum' diretamente sem precisar acessar 'myModule.sum'
const sum = myModule.sum;

// Usa o módulo 'minimist' para processar os argumentos passados via linha de comando
// 'slice(2)' remove os dois primeiros itens (caminho do Node.js e do script), capturando apenas os argumentos do usuário
const args = minimist(process.argv.slice(2));

// Acessa o valor do argumento '--a' do objeto 'args' e armazena na variável 'a'
// Neste caso, o valor de 'a' é o número passado pelo usuário após '--a='
const a = args["a"];

// Acessa o valor do argumento '--b' do objeto 'args' e armazena na variável 'b'
// O valor de 'b' é o número passado pelo usuário após '--b='
const b = args["b"];

// Chama a função 'sum' passando os valores 'a' e 'b' como argumentos
// A função 'sum' vai somar 'a' e 'b' e, presumivelmente, exibir o resultado
sum(a, b);
