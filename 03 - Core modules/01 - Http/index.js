// Importa o módulo 'http', que fornece funcionalidades para criar e gerenciar servidores HTTP
const http = require('http');

// Define a porta em que o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP
const server = http.createServer((req, res) => { 
  // Função de callback que será chamada sempre que o servidor receber uma requisição
  
  // Envia a resposta 'Hello HTTP' ao cliente
  res.write('Hello HTTP');
  
  // Finaliza a resposta, indicando que não há mais dados a serem enviados
  res.end();
});

// Faz o servidor escutar na porta definida e exibe uma mensagem no console quando o servidor estiver pronto
server.listen(port, () => { 
  console.log(`Server running on the port http://localhost:${port}`);
});
