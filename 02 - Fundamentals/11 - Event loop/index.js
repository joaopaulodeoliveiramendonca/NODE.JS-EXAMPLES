// Ordem c -> a -> b

// Define a função 'a' que exibe "Running a()" no console
function a() {
  console.log("Running a()");
}

// Define a função 'b' que exibe "Running b()" no console
function b() {
  console.log("Running b()");
}

// Define a função 'c' que exibe "Running c()" no console, e depois chama as funções 'a' e 'b'
function c() {
  console.log("Running c()");
  a(); // Chama a função 'a'
  b(); // Chama a função 'b'
}

// Chama a função 'c', que por sua vez chama 'a' e 'b'
c();
