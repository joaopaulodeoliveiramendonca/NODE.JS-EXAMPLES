// Importa a biblioteca 'lodash' que fornece funções utilitárias para operações com arrays e objetos
const _ = require("lodash");

// Importa a biblioteca 'chalk' para estilizar a saída do console com cores e estilos
const chalk = require("chalk");

// Define um array 'a' com os valores 1, 2 e 3
const a = [1, 2, 3];

// Define um array 'b' com os valores 4, 5 e 6
const b = [4, 5, 6];

// Usa a função 'merge' do lodash para combinar os arrays 'a' e 'b'
// Nota: A função 'merge' é usada para combinar objetos, e não arrays.
// Para combinar arrays, normalmente usamos 'concat' ou outras operações de array.
// A função 'merge' aqui não faz sentido para arrays e retornará o primeiro array.
const diff = _.merge(a, b);

// Exibe o resultado no console com formatação
// Usa 'chalk' para colorir e estilizar o texto como vermelho e negrito
console.log(chalk.red.bold(diff));
