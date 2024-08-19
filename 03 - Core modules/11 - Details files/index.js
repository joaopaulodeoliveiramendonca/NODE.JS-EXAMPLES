// Importa o módulo 'fs' (File System) para manipulação de arquivos e diretórios
const fs = require("fs");

// Usa o método 'stat' do módulo 'fs' para obter informações sobre o arquivo 'newfile.txt'
fs.stat("newfile.txt", (err, stats) => {

  // Verifica se ocorreu um erro ao obter as informações do arquivo
  if (err) {
    // Exibe o erro no console se houver
    console.error(err);
    // Interrompe a execução da função se houver um erro
    return;
  }

  // Verifica se o caminho corresponde a um arquivo e exibe o resultado no console
  console.log(stats.isFile());

  // Verifica se o caminho corresponde a um diretório e exibe o resultado no console
  console.log(stats.isDirectory());

  // Verifica se o caminho corresponde a um link simbólico e exibe o resultado no console
  console.log(stats.isSymbolicLink());

  // Exibe a data e hora em que o arquivo foi criado
  console.log(stats.ctime);

  // Exibe o tamanho do arquivo em bytes
  console.log(stats.size);

});
