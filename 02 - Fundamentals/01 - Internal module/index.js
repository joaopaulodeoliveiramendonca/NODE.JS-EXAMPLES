const myModule = require('./my_module'); 
// English: Import the module defined in 'my_module.js' and assign it to the variable 'myModule'.
// Português: Importe o módulo definido em 'my_module.js' e atribua-o à variável 'myModule'.

const sum = myModule.sum; 
// English: Extract the 'sum' function from the imported module and assign it to the variable 'sum'.
// Português: Extraia a função 'sum' do módulo importado e atribua-a à variável 'sum'.

sum(2, 3); 
// English: Call the 'sum' function with arguments 2 and 3. This should execute the function from 'my_module.js' and perform the summation.
// Português: Chame a função 'sum' com os argumentos 2 e 3. Isso deve executar a função do 'my_module.js' e realizar a soma.
