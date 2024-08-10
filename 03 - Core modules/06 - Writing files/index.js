const http = require("http"); // English: Import the 'http' module to create an HTTP server.
// Português: Importe o módulo 'http' para criar um servidor HTTP.

const fs = require("fs"); // English: Import the 'fs' (File System) module to work with the file system in Node.js.
// Português: Importe o módulo 'fs' (File System) para trabalhar com o sistema de arquivos no Node.js.

const url = require("url"); // English: Import the 'url' module to parse and work with URLs.
// Português: Importe o módulo 'url' para analisar e trabalhar com URLs.

const port = 3000; // English: Define a constant 'port' with the value 3000, specifying the port on which the server will listen.
// Português: Defina uma constante 'port' com o valor 3000, especificando a porta na qual o servidor irá escutar.

const server = http.createServer((req, res) => { 
  // English: Create an HTTP server that handles incoming requests and sends responses.
  // Português: Crie um servidor HTTP que lida com requisições recebidas e envia respostas.

  var urlInfo = require("url").parse(req.url, true); 
  // English: Parse the request URL to extract query parameters. 
  // The 'true' argument indicates that the query parameters should be parsed into an object.
  // Português: Analise a URL da requisição para extrair os parâmetros de consulta. 
  // O argumento 'true' indica que os parâmetros de consulta devem ser analisados em um objeto.

  const name = urlInfo.query.name; 
  // English: Extract the 'name' query parameter from the parsed URL.
  // Português: Extraia o parâmetro de consulta 'name' da URL analisada.

  res.statusCode = 200; 
  // English: Set the HTTP status code to 200, indicating a successful request.
  // Português: Defina o código de status HTTP como 200, indicando uma requisição bem-sucedida.

  res.setHeader("Content-Type", "text/html"); 
  // English: Set the Content-Type header to 'text/html', indicating that the response is HTML.
  // Português: Defina o cabeçalho Content-Type como 'text/html', indicando que a resposta é HTML.

  if (!name) { 
    // English: If the 'name' query parameter is not provided, read and send the content of 'index.html'.
    // Português: Se o parâmetro de consulta 'name' não for fornecido, leia e envie o conteúdo do arquivo 'index.html'.
    fs.readFile("index.html", function (err, data) { 
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" }); 
      res.write(data); 
      return res.end(); 
    });
  } else { 
    // English: If the 'name' query parameter is provided, write the value to 'file.txt' and redirect to the root URL.
    // Português: Se o parâmetro de consulta 'name' for fornecido, escreva o valor no arquivo 'file.txt' e redirecione para a URL raiz.
    fs.writeFile("file.txt", name, function (err) { 
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }

      res.writeHead(302, {
        Location: "/",
      }); 
      return res.end(); 
    });
  }
});

server.listen(port, () => { 
  // English: Start the server and listen on the specified port. 
  // When the server is running, log a message with the port number.
  // Português: Inicie o servidor e escute na porta especificada. Quando o servidor estiver em execução, registre uma mensagem com o número da porta.
  console.log(`Server running on port: ${port}`);
});
