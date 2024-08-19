// Importa o módulo 'fs' para operações com o sistema de arquivos
const fs = require('fs'); 

// Renomeia o arquivo 'file.txt' para 'new-file.txt'
fs.rename('file.txt', 'new-file.txt', function (err) { 

  // Verifica se houve um erro ao tentar renomear o arquivo
  if (err) { 

    // Se houver erro, exibe o erro no console
    console.log(err); 

    // Interrompe a execução da função callback
    return; 
  }

  // Se a renomeação do arquivo for bem-sucedida, exibe uma mensagem no console
  console.log('File renamed!'); 
});
