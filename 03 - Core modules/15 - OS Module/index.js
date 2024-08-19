// Importa o módulo 'os' (operating system) que fornece informações sobre o sistema operacional
const os = require("os");

// Exibe informações sobre os CPUs do sistema, como o número de núcleos e detalhes dos processadores
console.log(os.cpus());

// Exibe a quantidade de memória livre disponível no sistema em bytes
console.log(os.freemem());

// Exibe o diretório inicial do usuário atual, que é onde geralmente são armazenados arquivos pessoais
console.log(os.homedir());

// Exibe o tipo do sistema operacional, como 'Linux', 'Darwin' (para macOS), ou 'Windows_NT'
console.log(os.type());
