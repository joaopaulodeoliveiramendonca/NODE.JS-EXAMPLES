const fs = require('fs'); // English: Import the 'fs' (File System) module to work with the file system in Node.js.
// Português: Importa o módulo 'fs' (File System) para trabalhar com o sistema de arquivos no Node.js.

fs.readFile('gile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err); // English: If an error occurs during file reading, log it to the console.
    // Português: Se ocorrer um erro durante a leitura do arquivo, exiba-o no console.
    return;
  }
  console.log(data); // English: If the file is read successfully, log its content to the console.
  // Português: Se o arquivo for lido com sucesso, exiba seu conteúdo no console.
});
