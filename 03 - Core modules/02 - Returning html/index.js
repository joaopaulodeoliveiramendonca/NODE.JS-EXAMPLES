const http = require('http'); // English: Import the 'http' module to create an HTTP server.
// Português: Importe o módulo 'http' para criar um servidor HTTP.

const port = 3000; // English: Define a constant 'port' and assign it the value 3000, specifying the port on which the server will listen.
// Português: Defina uma constante 'port' e atribua a ela o valor 3000, especificando a porta na qual o servidor irá escutar.

const server = http.createServer((req, res) => { 
  // English: Create an HTTP server that handles incoming requests and sends responses.
  // Português: Crie um servidor HTTP que lida com requisições recebidas e envia respostas.
  
  res.statusCode = 200; // English: Set the HTTP status code to 200, indicating a successful request.
  // Português: Defina o código de status HTTP como 200, indicando uma requisição bem-sucedida.
  
  res.setHeader('Content-Type', 'text/html'); // English: Set the Content-Type header to 'text/html', indicating that the response is HTML.
  // Português: Defina o cabeçalho Content-Type como 'text/html', indicando que a resposta é HTML.
  
  res.end('<h1>Hello, this is my first server!</h1>'); // English: Send an HTML response with the message 'Hello, this is my first server!' and end the response.
  // Português: Envie uma resposta HTML com a mensagem 'Hello, this is my first server!' e encerre a resposta.
});

server.listen(port, () => { 
  // English: Start the server and listen on the specified port. 
  // When the server is running, log a message with the port number.
  // Português: Inicie o servidor e escute na porta especificada. Quando o servidor estiver em execução, registre uma mensagem com o número da porta.
  console.log(`Server running on the port: ${port}`);
});
