const fs = require("fs");
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

if (!fs.existsSync("./minhapasta")) {
  // English: Check if the directory 'minhapasta' does not exist.
  // Português: Verifica se o diretório 'minhapasta' não existe.

  console.log("Não existe");
  // English: Log a message to the console indicating that the directory does not exist.
  // Português: Exibe uma mensagem no console indicando que o diretório não existe.
}

fs.mkdirSync("minhapasta");
// English: Create a new directory named 'minhapasta'.
// Português: Cria um novo diretório chamado 'minhapasta'.

if (fs.existsSync("minhapasta")) {
  // English: Check if the directory 'minhapasta' now exists.
  // Português: Verifica se o diretório 'minhapasta' agora existe.

  console.log("Existe");
  // English: Log a message to the console indicating that the directory exists.
  // Português: Exibe uma mensagem no console indicando que o diretório existe.
}
