// Define uma variável 'x' com o valor da string "10"
const x = "10"; 

// Verifica se a conversão da string 'x' para número não resulta em um inteiro
if (!Number.isInteger(Number(x))) { 
  // Se a conversão não resultar em um inteiro, lança um erro com a mensagem "The value of x is not an integer"
  throw new Error("The value of x is not an integer"); 
}
