// Importa o framework para criar o servidor HTTP
const express = require('express'); 

// Importa o módulo para manipulação de arquivos
const fs = require('fs');           

// Importa o módulo para lidar com caminhos de arquivos
const path = require('path');       

// Cria uma instância do aplicativo Express
const app = express();              

// Define a porta em que o servidor vai rodar
const PORT = 3000;                  

// Configura o middleware para parsing de JSON
// Permite que o Express parseie o corpo das requisições em JSON
app.use(express.json());            

// Configura o middleware para servir arquivos estáticos da pasta 'public'
// Permite servir arquivos estáticos da pasta 'public' (não usado aqui, mas pode ser útil para outros arquivos)
app.use(express.static('public'));  

// Define o caminho para o arquivo JSON que armazenará os dados dos usuários
const filePath = path.join(__dirname, 'users.json'); 

// Função para ler dados do arquivo JSON
const readData = () => {
  // Verifica se o arquivo existe. Se não, cria um novo arquivo vazio
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  // Lê o conteúdo do arquivo e faz o parse do JSON para um objeto JavaScript
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Função para escrever dados no arquivo JSON
const writeData = (data) => {
  // Converte o objeto JavaScript para JSON e escreve no arquivo
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Define o caminho para a pasta onde está o arquivo HTML
const basePath = path.join(__dirname, 'templates');

// Rota para servir a página HTML com a interface básica
app.get('/', (req, res) => {

  // Envia o arquivo HTML como resposta
  res.sendFile(`${basePath}/index.html`);
});

// Endpoint para criar um novo usuário
app.post('/users', (req, res) => {
  // Lê os dados atuais do arquivo
  const users = readData();
  
  // Obtém os dados do novo usuário do corpo da requisição
  const newUser = req.body;
  
  // Define o ID do novo usuário
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  
  // Adiciona o novo usuário à lista
  users.push(newUser);
  
  // Salva a lista atualizada no arquivo
  writeData(users);
  
  // Retorna o novo usuário com status 201 (Criado)
  res.status(201).json(newUser);
});

// Endpoint para obter todos os usuários
app.get('/users', (req, res) => {
  // Lê os dados do arquivo
  const users = readData();
  
  // Retorna a lista de usuários com status 200 (OK)
  res.status(200).json(users);
});

// Endpoint para obter um usuário específico pelo ID
app.get('/users/:id', (req, res) => {
  // Lê os dados do arquivo
  const users = readData();
  
  // Encontra o usuário pelo ID
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (user) {
    // Retorna o usuário encontrado com status 200 (OK)
    res.status(200).json(user);
  } else {
    // Retorna mensagem de erro se o usuário não for encontrado
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Endpoint para atualizar um usuário específico pelo ID
app.put('/users/:id', (req, res) => {
  // Lê os dados do arquivo
  const users = readData();
  
  // Encontra o índice do usuário a ser atualizado
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  
  if (userIndex !== -1) {
    // Atualiza os dados do usuário
    users[userIndex] = { id: parseInt(req.params.id), ...req.body };
    
    // Salva a lista atualizada no arquivo
    writeData(users);
    
    // Retorna o usuário atualizado com status 200 (OK)
    res.status(200).json(users[userIndex]);
  } else {
    // Retorna mensagem de erro se o usuário não for encontrado
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// Endpoint para deletar um usuário específico pelo ID
app.delete('/users/:id', (req, res) => {
  // Lê os dados do arquivo
  const users = readData();
  
  // Remove o usuário da lista
  const newUsers = users.filter(u => u.id !== parseInt(req.params.id));
  
  if (users.length === newUsers.length) {
    // Retorna mensagem de erro se o usuário não for encontrado
    res.status(404).json({ message: 'Usuário não encontrado' });
  } else {
    // Salva a lista atualizada no arquivo
    writeData(newUsers);
    
    // Retorna status 204 (Sem Conteúdo) após a exclusão
    res.status(204).send();
  }
});


// Inicia o servidor e faz com que ele comece a escutar na porta definida
// Quando o servidor estiver em execução, exibe uma mensagem no console com a URL onde o aplicativo está rodando
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
  })
  