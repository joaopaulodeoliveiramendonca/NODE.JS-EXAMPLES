// Importa o módulo 'fs' (sistema de arquivos) para manipulação de arquivos
const fs = require("fs"); 

// Exibe 'Start' no console antes de qualquer operação de arquivo
console.log("Start"); 

// Usa 'fs.writeFile' para criar um arquivo chamado 'file.txt' com o conteúdo 'Hello'
// A função callback é executada após a operação de escrita ser concluída
fs.writeFile("async.txt", "Hello Async", function (err) {
  // Dentro do callback de 'writeFile', um 'setTimeout' é usado para criar uma pausa de 1 segundo
  setTimeout(function () {
    // Exibe 'File created!' no console após 1 segundo, indicando que o arquivo foi criado
    console.log("File created!"); 
  }, 1000); // 1000 milissegundos = 1 segundo
});

// Exibe 'End' no console imediatamente após a chamada de 'fs.writeFile', antes que o callback tenha a chance de ser executado
console.log("End"); 
