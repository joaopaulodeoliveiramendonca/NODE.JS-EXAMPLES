const express = require('express')
const app = express()
const port = 5000

const projects = require('./projects')

app.use(express.static('public'))

app.use('/projects', projects)


// Inicia o servidor e faz com que ele comece a escutar na porta definida
// Quando o servidor estiver em execução, exibe uma mensagem no console com a URL onde o aplicativo está rodando
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})

