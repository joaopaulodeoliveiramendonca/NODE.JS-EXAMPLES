const http = require('http'); // English: Import the 'http' module to create an HTTP server.
// Português: Importe o módulo 'http' para criar um servidor HTTP.

const port = 3000; // English: Define a constant 'port' and assign it the value 3000, specifying the port on which the server will listen.
// Português: Defina uma constante 'port' e atribua a ela o valor 3000, especificando a porta na qual o servidor irá escutar.

const server = http.createServer((req, res) => { 
  // English: Create an HTTP server that handles incoming requests and sends responses.
  // Português: Crie um servidor HTTP que lida com requisições recebidas e envia respostas.
  res.write('HELLO HTTP'); // English: Send the text 'HELLO HTTP' as the response to the client.
  // Português: Envie o texto 'HELLO HTTP' como resposta ao cliente.
  res.end(); // English: End the response to the client.
  // Português: Encerre a resposta ao cliente.
});

server.listen(port, () => { 
  // English: Start the server and listen on the specified port. 
  // When the server is running, log a message with the port number.
  // Português: Inicie o servidor e escute na porta especificada. Quando o servidor estiver em execução, registre uma mensagem com o número da porta.
  console.log(`Server running on the port: ${port}`);
});
