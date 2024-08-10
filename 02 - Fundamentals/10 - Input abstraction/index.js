const inquirer = require('inquirer'); 
// English: Import the 'inquirer' library for handling interactive prompts in the terminal.
// Português: Importa a biblioteca 'inquirer' para lidar com prompts interativos no terminal.

// Prompt the user for two grades
inquirer
  .prompt([
    { name: 'p1', message: 'What is the first grade?' },
    { name: 'p2', message: 'What is the second grade?' },
  ])
  .then((answers) => {
    // English: Once the user answers the prompts, the 'answers' object contains their responses.
    // Português: Depois que o usuário responde aos prompts, o objeto 'answers' contém suas respostas.
    
    // Output the user's answers
    console.log(answers);
    // English: Print the user's answers to the console.
    // Português: Exibe as respostas do usuário no console.
    
    // Calculate the average of the two grades
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
    // English: Calculate the average of the two grades by converting the string responses to integers.
    // Português: Calcula a média das duas notas convertendo as respostas em strings para inteiros.
    
    // Output the average grade
    console.log(`The average grade is ${media}`);
    // English: Print the calculated average grade to the console.
    // Português: Exibe a média calculada no console.
  })
  .catch((err) => {
    // Handle any errors that occur during the prompts
    console.log(err);
    // English: Print any errors that occur during the prompt process to the console.
    // Português: Exibe qualquer erro que ocorra durante o processo de prompt no console.
  });
