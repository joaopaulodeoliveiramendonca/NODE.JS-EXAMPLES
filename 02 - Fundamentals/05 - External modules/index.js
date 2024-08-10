// --nome=Matheus --idade=30
const minimist = require("minimist");
// English: Import the 'minimist' module to parse command-line arguments into a more manageable object format.
// Português: Importe o módulo 'minimist' para analisar os argumentos de linha de comando em um formato de objeto mais manejável.

const args = minimist(process.argv.slice(2));
// English: Use 'minimist' to parse the command-line arguments (excluding the first two elements of 'process.argv') into an object.
// The object will have properties corresponding to the flags and values provided on the command line.
// Português: Use 'minimist' para analisar os argumentos de linha de comando (excluindo os dois primeiros elementos de 'process.argv') em um objeto.
// O objeto terá propriedades correspondentes às flags e valores fornecidos na linha de comando.

console.log(args);
// English: Log the parsed arguments object to the console. This shows the flags and their corresponding values as key-value pairs.
// Português: Exiba o objeto de argumentos analisado no console. Isso mostra as flags e seus valores correspondentes como pares chave-valor.

const nome = args["nome"];
const idade = args["idade"];
// English: Retrieve the values for the 'nome' and 'idade' flags from the parsed arguments object.
// 'nome' will be 'Matheus' and 'idade' will be '30' based on the command-line input.
// Português: Recupere os valores para as flags 'nome' e 'idade' do objeto de argumentos analisado.
// 'nome' será 'Matheus' e 'idade' será '30' com base na entrada da linha de comando.

console.log(nome);
console.log(idade);
// English: Log the values of 'nome' and 'idade' to the console.
// Português: Exiba os valores de 'nome' e 'idade' no console.
