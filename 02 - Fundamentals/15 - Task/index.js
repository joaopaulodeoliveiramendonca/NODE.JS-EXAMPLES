const inquirer = require('inquirer'); 
// English: Import the inquirer package for interactive prompts.
// Português: Importa o pacote inquirer para prompts interativos.

const chalk = require('chalk'); 
// English: Import the chalk package for coloring console output.
// Português: Importa o pacote chalk para colorir a saída no console.

inquirer
  .prompt([
    { name: 'name', message: 'What is your name?' }, 
    // English: Prompt for the user's name with the question 'What is your name?'.
    // Português: Solicita o nome do usuário com a pergunta 'Qual é o seu nome?'.

    { name: 'age', message: 'How old are you?' }, 
    // English: Prompt for the user's age with the question 'How old are you?'.
    // Português: Solicita a idade do usuário com a pergunta 'Quantos anos você tem?'.
  ])
  .then((answers) => {
    const response = `The user's name is ${answers.name} and they are ${answers.age} years old`; 
    // English: Format the response using the user's inputs.
    // Português: Formata a resposta usando as entradas do usuário.

    console.log(chalk.bgYellow.black(response)); 
    // English: Log the response to the console with a yellow background and black text.
    // Português: Exibe a resposta no console com um fundo amarelo e texto preto.
  })
  .catch((err) => {
    console.log(err); 
    // English: Log any errors that occur during the prompt process.
    // Português: Exibe quaisquer erros que ocorram durante o processo de prompt.
  });
