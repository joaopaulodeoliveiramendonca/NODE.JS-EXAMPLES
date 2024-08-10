// Multiple values
const x = 10;
const y = "Matheus";

console.log(x, y); 
// English: Logs the values of 'x' and 'y' to the console.
// Português: Exibe os valores de 'x' e 'y' no console.

// Count occurrences of log messages
console.count("The value of x is: " + x + " -> count:"); 
// English: Counts and logs the number of times the specified message is logged. This count will increment each time this line is executed.
// Português: Conta e exibe o número de vezes que a mensagem especificada é registrada. Essa contagem será incrementada cada vez que esta linha for executada.

console.count("The value of x is: " + x + " -> count:"); 
// English: Counts and logs the number of times the specified message is logged. This count will increment each time this line is executed.
// Português: Conta e exibe o número de vezes que a mensagem especificada é registrada. Essa contagem será incrementada cada vez que esta linha for executada.

console.count("The value of x is: " + x + " -> count:"); 
// English: Counts and logs the number of times the specified message is logged. This count will increment each time this line is executed.
// Português: Conta e exibe o número de vezes que a mensagem especificada é registrada. Essa contagem será incrementada cada vez que esta linha for executada.

console.count("The value of y is: " + y + " -> count:"); 
// English: Counts and logs the number of times the specified message is logged. This count will increment each time this line is executed.
// Português: Conta e exibe o número de vezes que a mensagem especificada é registrada. Essa contagem será incrementada cada vez que esta linha for executada.

// Variable within a string
console.log("His name is %s", y); 
// English: Logs the value of 'y' within the string. The '%s' is a placeholder for the string value of 'y'.
// Português: Exibe o valor de 'y' dentro da string. O '%s' é um espaço reservado para o valor de string de 'y'.

// Clearing the console after 2 seconds
setTimeout(() => {
  console.clear(); 
  // English: Clears the console after a delay of 2 seconds (2000 milliseconds).
  // Português: Limpa o console após um atraso de 2 segundos (2000 milissegundos).
}, 2000);
