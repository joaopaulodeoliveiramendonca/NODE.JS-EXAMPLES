// Importa o módulo 'http', que fornece funcionalidades para criar e gerenciar servidores HTTP
const http = require('http');

// Define a porta em que o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP
const server = http.createServer((req, res) => { 
  // Função de callback que será chamada sempre que o servidor receber uma requisição

  // Define o código de status HTTP da resposta como 200 (OK)
  res.statusCode = 200;
  
  // Define o cabeçalho 'Content-Type' da resposta para 'text/html', indicando que o corpo da resposta é HTML
  res.setHeader('Content-Type', 'text/html');

  // Envia a resposta HTML para o cliente e finaliza a resposta
  res.end('<h1>Hello, this is my first server!</h1>'); 
});

// Faz o servidor escutar na porta definida e exibe uma mensagem no console quando o servidor estiver pronto
server.listen(port, () => { 
  console.log(`Server running on the port http://localhost:${port}`);
});
