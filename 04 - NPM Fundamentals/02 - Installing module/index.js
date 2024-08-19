// Importa o módulo 'lodash', uma biblioteca utilitária que fornece funções úteis para operações com arrays, objetos e outros tipos de dados
const _ = require("lodash"); 

// Define um array 'a' com os valores 1, 2, 3, 4 e 5
const a = [1, 2, 3, 4, 5]; 

// Define um array 'b' com os valores 2, 4, 5, 6, 7 e 8
const b = [2, 4, 5, 6, 7, 8]; 

// Usa a função 'difference' do lodash para encontrar os valores que estão em 'a' mas não estão em 'b'
// O resultado é um array contendo apenas os elementos que são exclusivos do array 'a'
const diff = _.difference(a, b); 

// Exibe o array resultante, que são os elementos encontrados em 'a' e não em 'b'
// Neste caso, o resultado será [1, 3] porque 1 e 3 estão em 'a' mas não em 'b'
console.log(diff);
