// Importa o módulo 'fs' (sistema de arquivos) para manipulação de arquivos
const fs = require("fs"); 

// Exibe 'Start' no console antes de qualquer operação de arquivo
console.log("Start"); 

// Usa 'fs.writeFileSync' para criar um arquivo chamado 'file.txt' com o conteúdo 'Hi'
// 'writeFileSync' é uma versão síncrona que bloqueia a execução até a operação ser concluída
fs.writeFileSync("sync.txt", "Hello Sync"); 

// Exibe 'End' no console após a conclusão da operação de escrita
console.log("End"); 
