// Importa o módulo 'http' para criar o servidor HTTP
const http = require("http");

// Importa o módulo 'url' para manipular URLs
const url = require("url"); 

// Define a porta na qual o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP
const server = http.createServer((req, res) => { 

  // Analisa a URL da requisição para obter informações de consulta (query)
  var urlInfo = require("url").parse(req.url, true); 

  // Obtém o valor do parâmetro de consulta 'name' da URL
  const name = urlInfo.query.name; 

  // Define o código de status HTTP da resposta como 200 (OK)
  res.statusCode = 200; 

  // Define o cabeçalho 'Content-Type' da resposta como 'text/html'
  res.setHeader("Content-Type", "text/html"); 

  // Verifica se o parâmetro 'name' está presente
  if (!name) { 
    // Se não estiver presente, exibe um formulário para o usuário inserir o nome
    res.end(
      "<h1>Please enter your name:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Submit'></form>"
    );
  } else { 
    // Se o nome estiver presente, exibe uma mensagem de boas-vindas com o nome fornecido
    res.end(`<h1>Welcome ${name}!</h1>`);
  }
});

// Faz o servidor escutar na porta definida e exibe uma mensagem no console quando o servidor estiver pronto
server.listen(port, () => { 
  console.log(`Server running on the port http://localhost:${port}`);
});
