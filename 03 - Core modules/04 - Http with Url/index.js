const http = require("http"); // English: Import the 'http' module to create an HTTP server.
// Português: Importe o módulo 'http' para criar um servidor HTTP.

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
    // English: If the 'name' query parameter is not provided, display a form asking the user to enter their name.
    // Português: Se o parâmetro de consulta 'name' não for fornecido, exiba um formulário pedindo ao usuário para inserir seu nome.
    res.end(
      "<h1>Please enter your name:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Submit'></form>"
    );
  } else { 
    // English: If the 'name' query parameter is provided, display a welcome message using the provided name.
    // Português: Se o parâmetro de consulta 'name' for fornecido, exiba uma mensagem de boas-vindas usando o nome fornecido.
    res.end(`<h1>Welcome ${name}!</h1>`);
  }
});

server.listen(port, () => { 
  // English: Start the server and listen on the specified port. 
  // When the server is running, log a message with the port number.
  // Português: Inicie o servidor e escute na porta especificada. Quando o servidor estiver em execução, registre uma mensagem com o número da porta.
  console.log(`Server running on port: ${port}`);
});
