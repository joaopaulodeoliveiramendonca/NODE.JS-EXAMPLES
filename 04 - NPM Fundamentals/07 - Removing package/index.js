const _ = require("lodash");
// English: Import the 'lodash' library, a utility library for working with arrays, objects, and more.
// Português: Importa a biblioteca 'lodash', uma biblioteca de utilitários para trabalhar com arrays, objetos e mais.

const chalk = require("chalk");
// English: Import the 'chalk' library, which is used to style terminal string output with colors and text styles.
// Português: Importa a biblioteca 'chalk', que é usada para estilizar a saída de texto no terminal com cores e estilos de texto.

const a = [1, 2, 3];
// English: Define an array 'a' with the elements 1, 2, 3.
// Português: Define um array 'a' com os elementos 1, 2, 3.

const b = [4, 5, 6];
// English: Define an array 'b' with the elements 4, 5, 6.
// Português: Define um array 'b' com os elementos 4, 5, 6.

const diff = _.merge(a, b);
// English: Merge the arrays 'a' and 'b' into a single array. Lodash's merge is typically used for objects, so the result here combines 'a' and 'b' into 'a'.
// Português: Mescla os arrays 'a' e 'b' em um único array. A função merge do Lodash é geralmente usada para objetos, então o resultado aqui combina 'a' e 'b' em 'a'.

console.log(chalk.red.bold(diff));
// English: Log the merged array 'diff' to the console in bold red text.
// Português: Exibe o array mesclado 'diff' no console em texto vermelho e negrito.
