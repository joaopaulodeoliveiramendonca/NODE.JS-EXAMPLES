const fs = require("fs"); 
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

console.log("Start"); 
// English: Logs 'Start' to the console.
// Português: Exibe 'Start' no console.

// Synchronously write 'Hi' to 'arquivo.txt'
fs.writeFileSync("arquivo.txt", "Hi"); 
// English: Synchronously writes 'Hi' to 'arquivo.txt'. This operation blocks the thread until it's complete.
// Português: Escreve 'Hi' de forma síncrona no arquivo 'arquivo.txt'. Esta operação bloqueia a thread até ser concluída.

console.log("End"); 
// English: Logs 'End' to the console.
// Português: Exibe 'End' no console.
