const readline = require("readline").createInterface({
  input: process.stdin,  // Input stream (usually the terminal or command line)
  output: process.stdout // Output stream (where to display the prompt and response)
  // English: Create an interface for input and output streams using the 'readline' module.
  // Português: Crie uma interface para fluxos de entrada e saída usando o módulo 'readline'.
});

// Prompt the user for their preferred programming language
readline.question(`What is your preferred programming language? `, (language) => {
  // English: Ask the user for their preferred programming language and handle the response.
  // The user's input is captured in the 'language' parameter.
  
  // Print the user's preferred language
  console.log(`My preferred programming language is: ${language}`);
  // English: Output the user's response to the console.
  // Português: Exiba a resposta do usuário no console.
  
  // Close the readline interface
  readline.close();
  // English: Close the readline interface to end the input/output session.
  // Português: Feche a interface readline para encerrar a sessão de entrada/saída.
});
