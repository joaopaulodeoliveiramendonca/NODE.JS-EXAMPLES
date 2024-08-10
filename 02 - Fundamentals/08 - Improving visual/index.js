const chalk = require("chalk"); // Import the chalk library
// English: The 'chalk' library is used for styling the console output with colors and styles.
// Português: A biblioteca 'chalk' é usada para estilizar a saída do console com cores e estilos.

const nota = 5; // The grade to be evaluated
// English: Define a variable 'nota' representing the grade to be evaluated.
// Português: Define uma variável 'nota' representando a nota a ser avaliada.

if (nota >= 7) {
  // If the grade is 7 or higher, print a success message in green with bold text
  console.log(chalk.green.bold("Congratulations, you passed!"));
  // English: Use 'chalk.green.bold' to style the message with green color and bold text, indicating success.
  // Português: Use 'chalk.green.bold' para estilizar a mensagem com cor verde e texto em negrito, indicando sucesso.
} else {
  // If the grade is below 7, print a warning message with a red background and black text
  console.log(chalk.bgRed.black("You need to take the final exam!"));
  // English: Use 'chalk.bgRed.black' to style the message with a red background and black text, indicating a warning.
  // Português: Use 'chalk.bgRed.black' para estilizar a mensagem com fundo vermelho e texto preto, indicando um aviso.
}
