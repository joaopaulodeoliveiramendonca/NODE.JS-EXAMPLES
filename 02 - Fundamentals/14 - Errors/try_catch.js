// Define uma variável 'x' com o valor 10
const x = 10;

try {
  // Tenta atribuir o valor 2 à variável 'x'
  // Isso vai gerar um erro porque 'x' é uma constante e não pode ser reatribuída
  x = 2; 
} catch (err) {
  // Captura e trata o erro que ocorre dentro do bloco 'try'
  // Exibe a mensagem de erro no console
  console.log(`Error: ${err}`); 
}
