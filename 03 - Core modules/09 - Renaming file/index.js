const fs = require('fs'); 
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

fs.rename('file.txt', 'new-file.txt', function (err) { 
  // English: Rename the file 'file.txt' to 'new-file.txt'.
  // Português: Renomeia o arquivo 'file.txt' para 'new-file.txt'.
  
  if (err) { 
    // English: Check if there was an error during the renaming process.
    // Português: Verifica se houve um erro durante o processo de renomeação.

    console.log(err); 
    // English: Log the error to the console if one occurred.
    // Português: Exibe o erro no console, se ocorrer.

    return; 
    // English: Exit the function if an error occurred.
    // Português: Sai da função se ocorreu um erro.
  }

  console.log('File renamed!'); 
  // English: Log a success message to the console if the file was renamed successfully.
  // Português: Exibe uma mensagem de sucesso no console se o arquivo foi renomeado com sucesso.
});
