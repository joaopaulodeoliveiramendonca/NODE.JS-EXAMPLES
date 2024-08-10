// Order c -> a -> b

function a() {
  console.log("Running a()");
  // English: This function logs "Running a()" to the console.
  // Português: Esta função exibe "Running a()" no console.
}

function b() {
  console.log("Running b()");
  // English: This function logs "Running b()" to the console.
  // Português: Esta função exibe "Running b()" no console.
}

function c() {
  console.log("Running c()");
  // English: This function logs "Running c()" to the console.
  // Português: Esta função exibe "Running c()" no console.

  a();
  // English: Calls function 'a', which logs "Running a()" to the console.
  // Português: Chama a função 'a', que exibe "Running a()" no console.

  b();
  // English: Calls function 'b', which logs "Running b()" to the console.
  // Português: Chama a função 'b', que exibe "Running b()" no console.
}

c();
// English: Calls function 'c', which executes and logs the messages in the order: "Running c()", "Running a()", and "Running b()".
// Português: Chama a função 'c', que executa e exibe as mensagens na ordem: "Running c()", "Running a()" e "Running b()".
