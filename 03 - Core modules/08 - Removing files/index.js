const fs = require('fs'); // English: Import the 'fs' (File System) module to work with the file system in Node.js.
// Português: Importe o módulo 'fs' (File System) para trabalhar com o sistema de arquivos no Node.js.

fs.unlink('file.txt', function (err) { 
  // English: Attempt to delete the file named 'file.txt'. The callback function handles any error and confirms successful deletion.
  // Português: Tente excluir o arquivo chamado 'file.txt'. A função de callback lida com qualquer erro e confirma a exclusão bem-sucedida.

  if (err) { 
    // English: If an error occurs during file deletion, log the error message to the console.
    // Português: Se ocorrer um erro durante a exclusão do arquivo, registre a mensagem de erro no console.
    console.log(err);
    return; 
  }

  console.log('File removed!'); 
  // English: Log a success message to the console indicating the file was removed.
  // Português: Registre uma mensagem de sucesso no console indicando que o arquivo foi removido.
});
