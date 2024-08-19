// Importa o módulo 'path' para manipulação e análise de caminhos de arquivos e diretórios
const path = require('path'); 

// Define uma string representando um caminho de arquivo
const customPath = '/relatorios/matheus/relatorio1.pdf'; 

// Exibe o diretório pai do caminho especificado
console.log(path.dirname(customPath)); 
// Saída: '/relatorios/matheus'

// Exibe o nome do arquivo no caminho especificado
console.log(path.basename(customPath)); 
// Saída: 'relatorio1.pdf'

// Exibe a extensão do arquivo no caminho especificado
console.log(path.extname(customPath)); 
// Saída: '.pdf'
