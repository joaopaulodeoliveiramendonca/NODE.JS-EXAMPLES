// Importa o pacote 'lodash', que fornece utilitários de manipulação de arrays, objetos e mais
const _ = require("lodash");

// Importa o pacote 'chalk', que é usado para estilizar o texto exibido no console
const chalk = require("chalk");

// Define um array 'a' com os valores [1, 2, 3]
const a = [1, 2, 3];

// Define um array 'b' com os valores [4, 5, 6]
const b = [4, 5, 6];

// Usa a função 'merge' do lodash para combinar os arrays 'a' e 'b'
// No entanto, 'merge' é mais adequada para combinar objetos, não arrays.
// Para arrays, 'merge' irá simplesmente concatenar e substituir elementos.
// O resultado aqui será o array 'b' porque o 'merge' substitui o conteúdo de 'a' por 'b'.
const diff = _.merge(a, b);

// Exibe o resultado no console, estilizando o texto com 'chalk'.
// O texto será exibido em negrito e vermelho.
console.log(chalk.red.bold(diff));
