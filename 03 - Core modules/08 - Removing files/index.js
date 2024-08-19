// Importa o módulo 'fs' para operações com o sistema de arquivos
const fs = require('fs'); 

// Remove o arquivo 'file.txt'
fs.unlink('file.txt', function (err) { 

  // Verifica se houve um erro ao tentar remover o arquivo
  if (err) { 
    // Se houver erro, exibe o erro no console
    console.log(err);
    // Interrompe a execução da função callback
    return; 
  }

  // Se a remoção do arquivo for bem-sucedida, exibe uma mensagem no console
  console.log('File removed!'); 

});
