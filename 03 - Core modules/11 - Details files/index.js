const fs = require("fs");
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

fs.stat("newfile.txt", (err, stats) => {
  // English: Check the status of the file 'newfile.txt', such as if it exists, its type, and other properties.
  // Português: Verifica o status do arquivo 'newfile.txt', como se ele existe, seu tipo e outras propriedades.

  if (err) {
    // English: If there is an error, log it to the console and exit the function.
    // Português: Se houver um erro, exiba-o no console e saia da função.

    console.error(err);
    // English: Log the error to the console.
    // Português: Exibe o erro no console.

    return;
    // English: Exit the function if an error occurred.
    // Português: Sai da função se ocorreu um erro.
  }

  console.log(stats.isFile());
  // English: Log whether the path refers to a file.
  // Português: Exibe se o caminho refere-se a um arquivo.

  console.log(stats.isDirectory());
  // English: Log whether the path refers to a directory.
  // Português: Exibe se o caminho refere-se a um diretório.

  console.log(stats.isSymbolicLink());
  // English: Log whether the path refers to a symbolic link.
  // Português: Exibe se o caminho refere-se a um link simbólico.

  console.log(stats.ctime);
  // English: Log the file's creation time.
  // Português: Exibe o tempo de criação do arquivo.

  console.log(stats.size);
  // English: Log the size of the file in bytes.
  // Português: Exibe o tamanho do arquivo em bytes.
});
