/*
* Node.js: é um ambiente de execução de JavaScript no lado do servidor. 
* Ele permite que os desenvolvedores usem JavaScript para criar aplicativos 
* fora do navegador, como servidores web, ferramentas de linha de comando e APIs. 
* Node.js é construído sobre o motor V8 do Google Chrome, que converte JavaScript 
* em código de máquina, tornando-o rápido e eficiente. Uma das características 
* mais notáveis do Node.js é seu modelo de E/S não bloqueante e orientado por 
* eventos, o que o torna ideal para aplicações em tempo real e de alta escalabilidade.

* Para executar Node.js, você precisa:

* 1. Instalar o Node.js: Baixe e instale a versão adequada para seu sistema operacional
* em nodejs.org.

* 2. Ter um editor de código: Use um editor de texto ou IDE, como Visual Studio Code, 
* para escrever seu código JavaScript.

* 3. Usar o terminal ou linha de comando: Utilize o terminal (macOS/Linux) ou a linha de comando
* (Windows) para executar seus scripts.

* 4. Gerenciador de pacotes (opcional): Node.js inclui o npm (Node Package Manager) para
* instalar pacotes e bibliotecas adicionais.

* No JavaScript, incluindo no Node.js, o uso de ponto e vírgula (;) não é estritamente 
* obrigatório devido ao recurso chamado Automatic Semicolon Insertion (ASI), que permite 
* ao JavaScript inserir pontos e vírgulas automaticamente em alguns casos. No entanto,
* é uma boa prática usar ponto e vírgula para evitar problemas e ambiguidades, especialmente 
* em casos onde a inserção automática pode não funcionar como esperado.

* O console é um objeto global em JavaScript que fornece acesso a ferramentas de depuração e 
* informações sobre o código em execução. Ele é comumente usado para exibir mensagens no console 
* do navegador ou do terminal. O console é uma parte do ambiente de execução do JavaScript, como 
* navegadores web e Node.js, e é utilizado principalmente para:
* Depuração: Exibir informações e mensagens para ajudar a entender o comportamento do código.
* Diagnóstico: Verificar o estado e valores das variáveis durante a execução do programa.
* Monitoramento: Avaliar o desempenho e a execução de diferentes partes do código.
* Cada método do console oferece uma forma específica de exibir e organizar informações:
*/

// Exibe mensagens gerais de log.
console.log("Hello World Node.js!");

// Exibe mensagens informativas semelhante a console.log
console.info("Esta é uma mensagem informativa.");

// Exibe mensagens de aviso.
console.warn("Este é um aviso.");

// Exibe mensagens de erro.
console.error("Este é um erro.");

// Exibe mensagens de depuração (nem sempre disponível em todos os navegadores).
console.debug("Esta é uma mensagem de depuração.");

// Exibe uma mensagem de erro se a afirmação for falsa.
console.assert(1 === 2, "A afirmação falhou, 1 não é igual a 2.");

// Limpa todas as mensagens do console

//console.clear(); 

// Exibe dados em formato de tabela.
const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
console.table(data);

// Inicia um cronômetro temporário.
console.time("Timer");

// Para o cronômetro e exibe o tempo decorrido.
console.timeEnd("Timer");

// Agrupa mensagens no console.
console.group("Grupo de Mensagens");
console.log("Mensagem dentro do grupo.");
console.warn("Aviso dentro do grupo.");

// Fecha o grupo de mensagens no console.
console.groupEnd();

// Exibe a pilha de chamada de funções
function foo() {
  bar();
}
function bar() {
  console.trace("Pilha de chamadas:");
}

foo();

// Exibe uma listagem interativa das propriedades de um objeto.
const person = { name: "John", age: 40, profession: "Engineer" };

console.dir(person);

// Conta o número de vezes que essa linha foi chamada com o mesmo rótulo.
console.count("Contagem");
console.count("Contagem");
console.count("Contagem");

process.exit(); // Encerra o processo imediatamente

