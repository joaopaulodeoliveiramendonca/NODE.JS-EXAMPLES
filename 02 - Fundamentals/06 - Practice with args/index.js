// --a=10 --b=20
const minimist = require("minimist");
// English: Import the 'minimist' module to parse command-line arguments into an object.
// Português: Importe o módulo 'minimist' para analisar os argumentos de linha de comando em um objeto.

const myModule = require("./my_module");
// English: Import the module defined in './my_module.js' (assuming it contains the 'sum' function).
// Português: Importe o módulo definido em './my_module.js' (presumindo que contenha a função 'sum').

const sum = myModule.sum;
// English: Extract the 'sum' function from the imported module and assign it to the variable 'sum'.
// Português: Extraia a função 'sum' do módulo importado e atribua-a à variável 'sum'.

const args = minimist(process.argv.slice(2));
// English: Use 'minimist' to parse the command-line arguments (excluding the first two elements of 'process.argv') into an object.
// The object will have properties corresponding to the flags and values provided on the command line.
// Português: Use 'minimist' para analisar os argumentos de linha de comando (excluindo os dois primeiros elementos de 'process.argv') em um objeto.
// O objeto terá propriedades correspondentes às flags e valores fornecidos na linha de comando.

const a = args["a"];
const b = args["b"];
// English: Retrieve the values for the 'a' and 'b' flags from the parsed arguments object.
// 'a' will be 10 and 'b' will be 20 based on the command-line input.
// Português: Recupere os valores para as flags 'a' e 'b' do objeto de argumentos analisado.
// 'a' será 10 e 'b' será 20 com base na entrada da linha de comando.

sum(a, b);
// English: Call the 'sum' function with the values of 'a' and 'b' as arguments. This will execute the function from 'my_module.js'.
// Português: Chame a função 'sum' com os valores de 'a' e 'b' como argumentos. Isso executará a função do 'my_module.js'.
