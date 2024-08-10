const fs = require("fs"); 
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

console.log("Start"); 
// English: Logs 'Start' to the console.
// Português: Exibe 'Start' no console.

fs.writeFile("arquivo.txt", "Oi", function (err) {
  // English: Write 'Oi' to 'arquivo.txt'. This function is called once the file writing is complete.
  // Português: Escreve 'Oi' no arquivo 'arquivo.txt'. Esta função é chamada após a conclusão da escrita do arquivo.

  setTimeout(function () {
    console.log("File created!"); 
    // English: Log 'File created!' to the console after a 1-second delay.
    // Português: Exibe 'File created!' no console após um atraso de 1 segundo.
  }, 1000);
});

console.log("End"); 
// English: Logs 'End' to the console.
// Português: Exibe 'End' no console.
