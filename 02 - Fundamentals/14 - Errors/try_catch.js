const x = 10;
// English: Declare a constant variable x with the value 10.
// Português: Declara uma variável constante x com o valor 10.

try {
  x = 2; 
  // English: Attempt to assign a new value 2 to the constant variable x, which will cause an error.
  // Português: Tenta atribuir um novo valor 2 à variável constante x, o que causará um erro.
} catch (err) {
  console.log(`Error: ${err}`); 
  // English: Catch the error and log it to the console.
  // Português: Captura o erro e o exibe no console.
}
