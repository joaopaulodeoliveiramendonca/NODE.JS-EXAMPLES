// nome=Matheus

console.log(process.argv);
// English: Log the `process.argv` array to the console. This array contains command-line arguments passed to the Node.js process, including the node executable path, the script path, and any additional arguments.
// Português: Exiba o array `process.argv` no console. Este array contém os argumentos de linha de comando passados para o processo Node.js, incluindo o caminho do executável node, o caminho do script e quaisquer argumentos adicionais.

const args = process.argv.slice(2);
// English: Slice the `process.argv` array to get only the arguments passed to the script (excluding the node executable and script path).
// The `slice(2)` method removes the first two elements, which are the node executable and script path.
// Português: Corte o array `process.argv` para obter apenas os argumentos passados para o script (excluindo o executável node e o caminho do script).
// O método `slice(2)` remove os dois primeiros elementos, que são o executável node e o caminho do script.

console.log(args);
// English: Log the sliced arguments to the console. This will show only the arguments passed to the script.
// Português: Exiba os argumentos cortados no console. Isso mostrará apenas os argumentos passados para o script.

const nome = args[0].split("=")[1];
// English: Extract the value of the argument by splitting the first argument (assumed to be in the format 'name=value') at the '=' character and taking the second part.
// This assumes the first argument is in the format 'name=value'.
// Português: Extraia o valor do argumento dividindo o primeiro argumento (presumido como no formato 'name=value') no caractere '=' e pegando a segunda parte.
// Isso assume que o primeiro argumento está no formato 'name=value'.

console.log(nome);
// English: Log the extracted value (`nome`) to the console.
// Português: Exiba o valor extraído (`nome`) no console.
