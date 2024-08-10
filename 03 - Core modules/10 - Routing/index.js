const http = require("http");
// English: Import the 'http' module for creating HTTP server and client requests.
// Português: Importa o módulo 'http' para criar servidores e requisições HTTP.

const fs = require("fs");
// English: Import the 'fs' module for file system operations.
// Português: Importa o módulo 'fs' para operações no sistema de arquivos.

const url = require("url");
// English: Import the 'url' module for URL parsing and handling.
// Português: Importa o módulo 'url' para análise e manipulação de URLs.

const port = 3000;
// English: Define the port number on which the server will listen.
// Português: Define o número da porta na qual o servidor irá escutar.

const server = http.createServer((req, res) => {
  // English: Create an HTTP server that handles incoming requests and sends responses.
  // Português: Cria um servidor HTTP que lida com requisições recebidas e envia respostas.

  var q = url.parse(req.url, true);
  // English: Parse the URL from the incoming request to extract useful information.
  // Português: Analisa a URL da requisição recebida para extrair informações úteis.

  var filename = q.pathname.substring(1);
  // English: Extract the filename from the URL path, removing the leading slash.
  // Português: Extrai o nome do arquivo do caminho da URL, removendo a barra inicial.

  console.log(filename);
  // English: Log the filename to the console for debugging purposes.
  // Português: Loga o nome do arquivo no console para fins de depuração.

  if (filename.includes("html")) {
    // English: Check if the requested file has an 'html' extension.
    // Português: Verifica se o arquivo solicitado tem a extensão 'html'.

    if (fs.existsSync(filename)) {
      // English: Check if the file exists in the file system.
      // Português: Verifica se o arquivo existe no sistema de arquivos.

      fs.readFile(filename, function (err, data) {
        // English: Read the file contents asynchronously.
        // Português: Lê o conteúdo do arquivo de forma assíncrona.

        res.writeHead(200, { "Content-Type": "text/html" });
        // English: Set the response header to indicate that the content type is HTML.
        // Português: Define o cabeçalho da resposta para indicar que o tipo de conteúdo é HTML.

        res.write(data);
        // English: Write the file contents to the response.
        // Português: Escreve o conteúdo do arquivo na resposta.

        return res.end();
        // English: End the response after sending the file contents.
        // Português: Finaliza a resposta após enviar o conteúdo do arquivo.
      });
    } else {
      // English: If the file does not exist, handle the error by sending a 404 page.
      // Português: Se o arquivo não existir, trata o erro enviando uma página 404.

      fs.readFile("404.html", function (err, data) {
        // English: Read the 404 error page contents asynchronously.
        // Português: Lê o conteúdo da página de erro 404 de forma assíncrona.

        res.writeHead(404, { "Content-Type": "text/html" });
        // English: Set the response header to indicate that the content type is HTML and the status is 404.
        // Português: Define o cabeçalho da resposta para indicar que o tipo de conteúdo é HTML e o status é 404.

        res.write(data);
        // English: Write the 404 error page contents to the response.
        // Português: Escreve o conteúdo da página de erro 404 na resposta.

        return res.end();
        // English: End the response after sending the 404 error page contents.
        // Português: Finaliza a resposta após enviar o conteúdo da página de erro 404.
      });
    }
  }
});

server.listen(port, () => {
  // English: Start the server and listen on the specified port.
  // Português: Inicia o servidor e escuta na porta especificada.

  console.log(`Server running on the port: ${port}`);
  // English: Log a message to the console indicating that the server is running and on which port.
  // Português: Exibe uma mensagem no console indicando que o servidor está em execução e em qual porta.
});
