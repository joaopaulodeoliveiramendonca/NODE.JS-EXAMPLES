// Importa o módulo 'http' para criar o servidor HTTP
const http = require("http");

// Importa o módulo 'fs' para manipular o sistema de arquivos
const fs = require("fs");

// Importa o módulo 'url' para analisar URLs
const url = require("url");

// Define a porta na qual o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP
const server = http.createServer((req, res) => { 

  // Analisa a URL da requisição e extrai as informações da query string
  var urlInfo = require("url").parse(req.url, true); 

  // Obtém o valor do parâmetro 'name' da query string
  const name = urlInfo.query.name; 

  // Define o código de status da resposta como 200 (OK)
  res.statusCode = 200; 

  // Define o cabeçalho da resposta para indicar que o conteúdo é HTML
  res.setHeader("Content-Type", "text/html"); 

  // Verifica se o parâmetro 'name' não está presente
  if (!name) { 
    // Lê o arquivo 'index.html'
    fs.readFile("index.html", function (err, data) { 
      // Verifica se houve um erro ao ler o arquivo
      if (err) {
        // Se houve erro, responde com um código de status 500 (Erro Interno do Servidor)
        // e um corpo de resposta simples indicando erro
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return; // Interrompe a execução da função callback
      }

      // Se não houve erro, responde com um código de status 200 (OK)
      // e define o tipo de conteúdo como 'text/html'
      res.writeHead(200, { "Content-Type": "text/html" }); 
      // Envia o conteúdo do arquivo como corpo da resposta
      res.write(data); 
      return res.end(); // Finaliza a resposta
    });
  } else { 
    // Se o parâmetro 'name' está presente, grava o valor no arquivo 'file.txt'
    fs.writeFile("file.txt", name, function (err) { 
      // Verifica se houve um erro ao escrever no arquivo
      if (err) {
        // Se houve erro, responde com um código de status 500 (Erro Interno do Servidor)
        // e um corpo de resposta simples indicando erro
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return; // Interrompe a execução da função callback
      }

      // Se não houve erro, responde com um código de status 302 (Redirecionamento Temporário)
      // e define o cabeçalho 'Location' para redirecionar para a página inicial
      res.writeHead(302, {
        Location: "/",
      }); 
      return res.end(); // Finaliza a resposta
    });
  }
});

// Faz o servidor escutar na porta definida e exibe uma mensagem no console quando o servidor estiver pronto
server.listen(port, () => { 
  console.log(`Server running on the port http://localhost:${port}`);
});
