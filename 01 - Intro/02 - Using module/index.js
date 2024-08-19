/*
* Um módulo em JavaScript, especialmente no contexto de Node.js, 
* é um pedaço de código independente que pode ser reutilizado e 
* importado para outros arquivos ou módulos. Os módulos permitem que 
* os desenvolvedores organizem melhor o código, dividindo-o em partes 
* menores e mais gerenciáveis.

* Características dos Módulos:

* Encapsulamento: Módulos permitem que o código seja encapsulado, ou seja, 
* as variáveis e funções definidas dentro de um módulo não são visíveis fora dele, 
* a menos que sejam explicitamente exportadas. Isso ajuda a evitar conflitos de 
* nomes e a manter o código mais limpo.

* Reutilização: Módulos podem ser reutilizados em diferentes partes de uma aplicação
* ou mesmo em diferentes projetos. Isso promove a reutilização de código e a manutenção 
* simplificada.

* Organização: Dividir o código em módulos ajuda a organizar grandes projetos em
* pequenos arquivos, tornando mais fácil a navegação e a manutenção.

* Tipos de Módulos em JavaScript:

* Módulos internos/Core Modules do Node.js: Node.js vem com vários módulos internos 
* (também chamados de "core modules") que fornecem funcionalidades básicas, como fs para
* manipulação de arquivos, http para criar servidores, path para manipulação de 
* caminhos de arquivo, etc. Exemplo: const fs = require('fs');

* Módulos de terceiros: São módulos criados por outros desenvolvedores que podem ser
* instalados via npm. Por exemplo, express é um módulo de terceiros popular para
* construir servidores web. Exemplo: const express = require('express');

* Módulos locais: Você também pode criar seus próprios módulos em arquivos separados. 
* Por exemplo, você pode criar um arquivo chamado math.js que contém funções matemáticas 
* e importá-lo em outro arquivo.

* Exemplo de um módulo local (math.js):

* // math.js
* function add(a, b) {
*   return a + b;
* }

* module.exports = add; // Exportando a função 'add'
* E em outro arquivo (app.js):

* const add = require('./math'); // Importando o módulo local 'math'
* console.log(add(5, 3)); // Saída: 8
* Como os Módulos Funcionam em Node.js:

* Exportação: Para disponibilizar uma função, objeto ou variável para outros arquivos,
* você usa module.exports ou exports para exportá-los.

* Importação: Para usar um módulo em outro arquivo, você usa require() 
* para importar o módulo desejado.
*/


// Importa o módulo interno 'fs' (file system), que fornece funções para interagir com o sistema de arquivos.
const fs = require('fs');

// Lê o conteúdo do arquivo 'file.txt' usando a codificação 'utf8'.
// O método 'readFile' é assíncrono e não bloqueia a execução do restante do código.
fs.readFile('file.txt', 'utf8', (err, data) => {

  // Esta é a função de callback que é executada após a leitura do arquivo.

  // Verifica se ocorreu algum erro durante a leitura do arquivo.
  if (err) {
    // Se houver um erro, exibe o erro no console.
    console.error(err);
    // Sai da função para evitar continuar o processamento.
    return;
  }

  // Se a leitura do arquivo for bem-sucedida, exibe o conteúdo do arquivo no console.
  console.log(data);
});

