// Declara uma constante 'x' com o valor 10
const x = 10;

// Declara uma constante 'y' com o valor "Matheus"
const y = "Matheus";

// Exibe os valores das variáveis 'x' e 'y' no console
// Neste caso, será exibido: "10 Matheus"
console.log(x, y);

// Usa 'console.count' para exibir a contagem de quantas vezes o rótulo especificado foi chamado
// O rótulo "The value of x is: 10 -> count:" será usado para rastrear a quantidade de chamadas
console.count("The value of x is: " + x + " -> count:");

// Chama 'console.count' novamente com o mesmo rótulo
// A contagem será incrementada e exibida no console
console.count("The value of x is: " + x + " -> count:");

// Chama 'console.count' novamente com o mesmo rótulo
// A contagem será incrementada novamente e exibida no console
console.count("The value of x is: " + x + " -> count:");

// Usa 'console.count' com um rótulo diferente para rastrear a quantidade de chamadas com esse rótulo
// O rótulo "The value of y is: Matheus -> count:" será usado para a contagem
console.count("The value of y is: " + y + " -> count:");

// Exibe a string "His name is Matheus" no console, substituindo o marcador %s pelo valor da variável 'y'
console.log("His name is %s", y);

// Define um timer para executar a função após 2000 milissegundos (2 segundos)
// A função executada limpará o console usando 'console.clear'
setTimeout(() => {
  console.clear(); // Limpa a tela do console após 2 segundos
}, 2000);
