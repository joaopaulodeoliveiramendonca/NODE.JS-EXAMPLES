// Importa o módulo 'inquirer', que é usado para criar prompts interativos no terminal
const inquirer = require('inquirer'); 

// Usa o método 'prompt' do 'inquirer' para exibir perguntas e capturar as respostas do usuário
inquirer
  .prompt([
    // Define a primeira pergunta com o nome 'p1' e a mensagem 'What is the first grade?'
    { name: 'p1', message: 'What is the first grade?' },
    // Define a segunda pergunta com o nome 'p2' e a mensagem 'What is the second grade?'
    { name: 'p2', message: 'What is the second grade?' },
  ])
  // Depois que o usuário responde às perguntas, o 'then' é chamado com as respostas
  .then((answers) => {
    // Exibe as respostas no console
    // 'answers' é um objeto onde as chaves correspondem aos nomes das perguntas definidas anteriormente
    console.log(answers);

    // Calcula a média das notas fornecidas
    // 'parseInt' é usado para converter as respostas de string para números inteiros
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    // Exibe a média das notas no console
    console.log(`The average grade is ${media}`);
  })
  // Captura e exibe qualquer erro que ocorra durante a execução do prompt
  .catch((err) => {
    console.log(err);
  });
