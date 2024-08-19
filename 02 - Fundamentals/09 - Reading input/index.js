// Importa o módulo interno 'readline' e cria uma interface de leitura com 'process.stdin' como entrada e 'process.stdout' como saída
const readline = require("readline").createInterface({
  input: process.stdin,  // Define a entrada padrão como o fluxo de entrada do processo (teclado)
  output: process.stdout // Define a saída padrão como o fluxo de saída do processo (console)
});

// Usa o método 'question' da interface 'readline' para exibir uma pergunta ao usuário
// O método 'question' exibe a pergunta e espera a entrada do usuário
readline.question(`What is your preferred programming language? `, (language) => {

  // Quando o usuário fornece uma resposta, o callback é chamado com a resposta
  // Exibe a resposta do usuário no console
  console.log(`My preferred programming language is: ${language}`);

  // Fecha a interface de leitura após a resposta ser processada
  readline.close();

});
