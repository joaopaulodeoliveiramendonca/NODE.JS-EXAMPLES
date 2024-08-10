const path = require('path'); 
// English: Import the 'path' module for path operations.
// Português: Importa o módulo 'path' para operações com caminhos.

console.log(path.resolve('test.txt')); 
// English: Log the absolute path of 'teste.txt' from the current working directory.
// Português: Exibe o caminho absoluto de 'teste.txt' a partir do diretório de trabalho atual.

const midFolder = 'relatorios'; 
// English: Define a variable for a folder name 'relatorios'.
// Português: Define uma variável para o nome de uma pasta 'relatorios'.

const fileName = 'matheus.txt'; 
// English: Define a variable for a file name 'matheus.txt'.
// Português: Define uma variável para o nome de um arquivo 'matheus.txt'.

const finalPath = path.join('/', 'arquivos', midFolder, fileName); 
// English: Join the path segments into a single path '/arquivos/relatorios/matheus.txt'.
// Português: Une os segmentos de caminho em um único caminho '/arquivos/relatorios/matheus.txt'.

console.log(finalPath); 
// English: Log the final path created by joining the segments.
// Português: Exibe o caminho final criado ao unir os segmentos.
