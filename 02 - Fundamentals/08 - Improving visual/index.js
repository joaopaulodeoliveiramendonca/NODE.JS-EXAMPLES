// Importa o módulo 'chalk', que permite estilizar o texto no console com cores e estilos
const chalk = require("chalk");

// Declara uma constante 'nota' com o valor 5
const nota = 5;

// Verifica se a 'nota' é maior ou igual a 7
if (nota >= 7) {
  // Se a condição for verdadeira, exibe uma mensagem em verde e negrito usando 'chalk'
  // 'chalk.green.bold()' estiliza o texto para ser verde e negrito
  console.log(chalk.green.bold("Congratulations, you passed!"));
} else {
  // Se a condição for falsa, exibe uma mensagem com fundo vermelho e texto preto usando 'chalk'
  // 'chalk.bgRed.black()' estiliza o texto para ter um fundo vermelho e texto preto
  console.log(chalk.bgRed.black("You need to take the final exam!"));
}
