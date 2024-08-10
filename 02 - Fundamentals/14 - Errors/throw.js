const x = "10"; 
// English: Declare a variable x with the value of a string "10".
// Português: Declara uma variável x com o valor de uma string "10".

if (!Number.isInteger(Number(x))) { 
  // English: Check if the value of x, converted to a number, is not an integer.
  // Português: Verifica se o valor de x, convertido para um número, não é um inteiro.

  throw new Error("The value of x is not an integer"); 
  // English: Throws an error with the message if the value of x is not an integer.
  // Português: Lança um erro com a mensagem se o valor de x não for um inteiro.
}
