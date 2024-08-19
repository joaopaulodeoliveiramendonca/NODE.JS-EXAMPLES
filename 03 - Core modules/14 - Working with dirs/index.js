// Importa o módulo 'fs' (file system) para operações de leitura e escrita de arquivos e manipulação de diretórios
const fs = require("fs");

// Verifica se o diretório './my_folder' existe
if (!fs.existsSync("./my_folder")) {
  // Se o diretório não existir, exibe a mensagem "Não existe"
  console.log("Does not exist");
}

// Cria o diretório 'my_folder' de forma síncrona
fs.mkdirSync("my_folder");

// Verifica novamente se o diretório 'my_folder' existe
if (fs.existsSync("my_folder")) {
  // Se o diretório existir, exibe a mensagem "Existe"
  console.log("Exists");
}
