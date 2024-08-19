// Para executar use: node index.js --nome=Matheus


/* process é um objeto global em Node.js que representa o processo atual em execução. 
 * Ele fornece uma interface para interagir com o ambiente de execução do Node.js e
 * oferece informações e métodos que permitem manipular o processo, seus argumentos, 
 * seu ambiente, e seus eventos. Como é um objeto global, não precisa ser importado ou
 * requerido em seu código.
*/

// Exibe no console a lista completa de argumentos passados para o processo Node.js, incluindo o caminho do Node.js, o caminho do arquivo e os argumentos adicionais
console.log(process.argv);

// Remove os dois primeiros elementos da lista (caminho do Node.js e caminho do script) e captura apenas os argumentos fornecidos pelo usuário
const args = process.argv.slice(2);

// Exibe no console a lista de argumentos do usuário, após remover os caminhos do Node.js e do arquivo
console.log(args);

// Extrai o valor do argumento `--nome`, que foi passado no formato `--nome=Matheus`
// A função `split("=")` divide a string em um array com duas partes: antes e depois do sinal de igual
// O `[1]` acessa a segunda parte do array, que contém o valor "Matheus"
const nome = args[0].split("=")[1];

// Exibe no console o valor do nome extraído, neste caso, "Matheus"
console.log(nome);
