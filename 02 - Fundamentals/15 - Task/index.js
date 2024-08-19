// Importa o módulo 'inquirer' para criar interfaces de linha de comando interativas
const inquirer = require('inquirer'); 

// Importa o módulo 'chalk' para estilizar e colorir a saída no console
const chalk = require('chalk'); 

// Usa 'inquirer' para fazer perguntas ao usuário
inquirer
  .prompt([
    // Pergunta 1: Solicita o nome do usuário
    { name: 'name', message: 'What is your name?' }, 

    // Pergunta 2: Solicita a idade do usuário
    { name: 'age', message: 'How old are you?' }, 
  ])
  // O bloco '.then()' é executado quando o usuário responde às perguntas
  .then((answers) => {
    // Cria uma string de resposta com base nas respostas fornecidas pelo usuário
    const response = `The user's name is ${answers.name} and they are ${answers.age} years old`; 

    // Exibe a resposta no console com um fundo amarelo e texto preto usando 'chalk'
    console.log(chalk.bgYellow.black(response)); 
  })
  // O bloco '.catch()' captura e lida com quaisquer erros que possam ocorrer
  .catch((err) => {
    // Exibe qualquer erro ocorrido no console
    console.log(err); 
  });
