const path = require('path'); 
// English: Import the 'path' module for path operations.
// Português: Importa o módulo 'path' para operações com caminhos.

const customPath = '/relatorios/matheus/relatorio1.pdf'; 
// English: Define a path to a file named 'relatorio1.pdf' in the 'matheus' directory under 'relatorios'.
// Português: Define um caminho para um arquivo chamado 'relatorio1.pdf' no diretório 'matheus' dentro de 'relatorios'.

console.log(path.dirname(customPath)); 
// English: Log the directory name of the path, which is '/relatorios/matheus'.
// Português: Exibe o nome do diretório do caminho, que é '/relatorios/matheus'.

console.log(path.basename(customPath)); 
// English: Log the base name of the path, which is 'relatorio1.pdf'.
// Português: Exibe o nome base do caminho, que é 'relatorio1.pdf'.

console.log(path.extname(customPath)); 
// English: Log the extension of the path, which is '.pdf'.
// Português: Exibe a extensão do caminho, que é '.pdf'.
