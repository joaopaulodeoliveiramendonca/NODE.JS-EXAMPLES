// Importa o módulo 'express', que é um framework para criar aplicações web em Node.js
const express = require('express')

// Cria uma instância da aplicação Express
const app = express()

// Define a porta na qual o servidor vai escutar
const port = 3000

// Importa o módulo 'path', que fornece utilitários para trabalhar com caminhos de arquivos e diretórios
const path = require('path')

// Define o caminho base para o diretório onde os arquivos de template HTML estão localizados
const basePath = path.join(__dirname, 'templates')

// Middleware de autenticação simulada
var checkAuth = function (req, res, next) {
  // Define o status de autenticação do usuário como falso
  req.authStatus = false

  // Verifica se o usuário está autenticado
  if (req.authStatus) {
    console.log('Logged in, you may proceed')
    next() // Continua para a próxima função
  } else {
    console.log('Not logged in, please log in to continue!')
    // Aqui você pode redirecionar para uma página de login ou retornar um erro
  }
}

// Usa o middleware de autenticação em todas as rotas
app.use(checkAuth)

// Define uma rota para o caminho raiz ('/')
// Quando um usuário acessa a URL base (http://localhost:3000/), o servidor envia o arquivo 'index.html' localizado em 'templates'
app.get('/', (req, res) => {
  // Envia o arquivo 'index.html' como resposta ao cliente
  res.sendFile(`${basePath}/index.html`)
})


// Inicia o servidor e faz com que ele comece a escutar na porta definida
// Quando o servidor estiver em execução, exibe uma mensagem no console com a URL onde o aplicativo está rodando
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
