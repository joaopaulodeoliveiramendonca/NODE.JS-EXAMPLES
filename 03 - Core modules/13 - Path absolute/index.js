// Importa o módulo 'path' para manipulação e análise de caminhos de arquivos e diretórios
const path = require('path');

// Resolve o caminho absoluto para o arquivo 'test.txt' baseado no diretório atual
console.log(path.resolve('test.txt'));
// Saída: Caminho absoluto completo para 'test.txt', por exemplo: '/home/user/project/test.txt'

// Define uma variável com o nome de um subdiretório
const midFolder = 'relatorios';

// Define uma variável com o nome de um arquivo
const fileName = 'matheus.txt'; 

// Junta diferentes partes do caminho em um único caminho, começando pela raiz
const finalPath = path.join('/', 'arquivos', midFolder, fileName); 

// Exibe o caminho final resultante da junção
console.log(finalPath); 
// Saída: '/arquivos/relatorios/matheus.txt'
