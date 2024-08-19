// Importa os módulos 'http', 'fs' e 'url'
const http = require("http");
const fs = require("fs");
const url = require("url");

// Define a porta em que o servidor irá ouvir
const port = 3000;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {

  // Analisa a URL da requisição para extrair o caminho
  var q = url.parse(req.url, true);

  // Obtém o nome do arquivo a partir do caminho da URL
  var filename = q.pathname.substring(1);

  // Exibe o nome do arquivo no console para depuração
  console.log(filename);

  // Verifica se o nome do arquivo contém a extensão 'html'
  if (filename.includes("html")) {

    // Verifica se o arquivo existe
    if (fs.existsSync(filename)) {

      // Lê o arquivo e o envia na resposta
      fs.readFile(filename, function (err, data) {

        if (err) {
          // Se ocorrer um erro ao ler o arquivo, retorna um erro 500
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        // Define o cabeçalho da resposta para HTML e envia o conteúdo do arquivo
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      // Se o arquivo não existir, lê e envia a página de erro 404
      fs.readFile("404.html", function (err, data) {

        if (err) {
          // Se ocorrer um erro ao ler o arquivo 404, retorna um erro 500
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        // Define o cabeçalho da resposta para HTML e envia o conteúdo da página de erro
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  } else {
    // Se o arquivo não for HTML, retorna um erro 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// Faz o servidor ouvir na porta especificada
server.listen(port, () => {
  // Exibe uma mensagem no console indicando que o servidor está em execução
  console.log(`Server running on the port http://localhost:${port}`);
});
