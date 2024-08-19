// Importa o módulo 'http' para criar o servidor HTTP
const http = require("http");

// Importa o módulo 'fs' para manipular o sistema de arquivos
const fs = require("fs");

// Define a porta na qual o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP
const server = http.createServer((req, res) => { 

  // Lê o arquivo 'message.html' do sistema de arquivos
  fs.readFile("message.html", function (err, data) { 

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

    // Finaliza a resposta
    return res.end(); 

  });
});

// Faz o servidor escutar na porta definida e exibe uma mensagem no console quando o servidor estiver pronto
server.listen(port, () => { 
  console.log(`Server running on the port http://localhost:${port}`);
});
