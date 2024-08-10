const http = require("http"); // English: Import the 'http' module to create an HTTP server.
// Português: Importe o módulo 'http' para criar um servidor HTTP.

const fs = require("fs"); // English: Import the 'fs' (File System) module to work with the file system in Node.js.
// Português: Importe o módulo 'fs' (File System) para trabalhar com o sistema de arquivos no Node.js.

const port = 3000; // English: Define a constant 'port' with the value 3000, specifying the port on which the server will listen.
// Português: Defina uma constante 'port' com o valor 3000, especificando a porta na qual o servidor irá escutar.

const server = http.createServer((req, res) => { 
  // English: Create an HTTP server that handles incoming requests and sends responses.
  // Português: Crie um servidor HTTP que lida com requisições recebidas e envia respostas.

  fs.readFile("message.html", function (err, data) { 
    // English: Read the content of 'message.html'. If an error occurs, it will be passed as 'err'.
    // Português: Leia o conteúdo do arquivo 'message.html'. Se ocorrer um erro, ele será passado como 'err'.

    if (err) {
      // English: If there is an error reading the file, send a 500 Internal Server Error response.
      // Português: Se houver um erro ao ler o arquivo, envie uma resposta de erro 500 Internal Server Error.
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" }); 
    // English: Set the HTTP status code to 200 and the Content-Type header to 'text/html', indicating that the response is HTML.
    // Português: Defina o código de status HTTP como 200 e o cabeçalho Content-Type como 'text/html', indicando que a resposta é HTML.

    res.write(data); 
    // English: Write the content of 'message.html' to the response.
    // Português: Escreva o conteúdo do arquivo 'message.html' na resposta.

    return res.end(); 
    // English: End the response to the client.
    // Português: Encerre a resposta ao cliente.
  });
});

server.listen(port, () => { 
  // English: Start the server and listen on the specified port. 
  // When the server is running, log a message with the port number.
  // Português: Inicie o servidor e escute na porta especificada. Quando o servidor estiver em execução, registre uma mensagem com o número da porta.
  console.log(`Server running on port: ${port}`);
});
