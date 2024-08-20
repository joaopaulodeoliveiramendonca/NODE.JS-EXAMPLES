// Importa o módulo 'express', que é um framework para criar aplicações web em Node.js
const express = require('express')

// Cria uma instância da aplicação Express
const app = express()

// Define a porta na qual o servidor vai escutar
const port = 3000

// Define uma rota para o caminho raiz ('/')
// Quando um usuário acessa a URL base (http://localhost:3000/), a resposta será 'Olá Mundo!!'
app.get('/', (req, res) => {
  res.send('Olá Mundo!!') // Envia a resposta 'Olá Mundo!!' para o cliente
})

// Inicia o servidor e faz com que ele comece a escutar na porta definida
// Quando o servidor estiver em execução, exibe uma mensagem no console com a URL onde o aplicativo está rodando
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
