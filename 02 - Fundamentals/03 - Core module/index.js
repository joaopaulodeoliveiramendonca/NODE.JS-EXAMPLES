const path = require("path"); 
// English: Import the 'path' module to work with file and directory paths in Node.js.
// Português: Importe o módulo 'path' para trabalhar com caminhos de arquivos e diretórios no Node.js.

const extension = path.extname("index.php"); 
// English: Use 'path.extname' to get the file extension of the provided file path ('index.php').
// The 'extname' method returns the extension including the dot, e.g., '.php'.
// Português: Use 'path.extname' para obter a extensão do arquivo do caminho fornecido ('index.php').
// O método 'extname' retorna a extensão incluindo o ponto, por exemplo, '.php'.

console.log(extension); 
// English: Log the file extension to the console. In this case, it will print '.php'.
// Português: Exiba a extensão do arquivo no console. Neste caso, imprimirá '.php'.
