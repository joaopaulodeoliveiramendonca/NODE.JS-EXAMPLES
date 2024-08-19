/*
 * Core modules em Node.js são módulos nativos que vêm integrados diretamente com a
 * instalação do Node.js. Esses módulos oferecem funcionalidades essenciais e comuns
 * que os desenvolvedores frequentemente precisam, como manipulação de arquivos,
 * operações de rede, manipulação de URLs, buffers, streams, entre outros.
*/

// Importa o módulo nativo 'path' do Node.js, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const path = require("path"); 

// Usa a função 'extname' do módulo 'path' para obter a extensão do arquivo "index.php"
// A função retorna a parte do nome do arquivo que vem depois do último ponto (.), neste caso, '.php'
const extension = path.extname("index.php"); 

// Imprime no console a extensão do arquivo, que foi armazenada na variável 'extension'
// Para este exemplo, a saída será '.php'
console.log(extension); 
