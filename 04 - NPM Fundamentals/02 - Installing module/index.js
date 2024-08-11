const _ = require("lodash"); 
// English: Import the 'lodash' library, a utility library for working with arrays, objects, and more.
// Português: Importa a biblioteca 'lodash', uma biblioteca de utilitários para trabalhar com arrays, objetos e mais.

const a = [1, 2, 3, 4, 5]; 
// English: Define an array 'a' with the elements 1, 2, 3, 4, 5.
// Português: Define um array 'a' com os elementos 1, 2, 3, 4, 5.

const b = [2, 4, 5, 6, 7, 8]; 
// English: Define an array 'b' with the elements 2, 4, 5, 6, 7, 8.
// Português: Define um array 'b' com os elementos 2, 4, 5, 6, 7, 8.

const diff = _.difference(a, b); 
// English: Find the difference between arrays 'a' and 'b', returning elements in 'a' that are not in 'b'.
// Português: Encontra a diferença entre os arrays 'a' e 'b', retornando elementos em 'a' que não estão em 'b'.

console.log(diff); 
// English: Log the result of the difference operation to the console.
// Português: Exibe o resultado da operação de diferença no console.
