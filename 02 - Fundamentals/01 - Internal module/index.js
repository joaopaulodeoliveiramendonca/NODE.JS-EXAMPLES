//Importa o módulo definido em 'my_module.js' e atribua-o à variável 'myModule'.
const myModule = require('./my_module'); 

//Extraia a função 'sum' do módulo importado e atribua-a à variável 'sum'.
const sum = myModule.sum; 

//Chame a função 'sum' com os argumentos 2 e 3. Isso deve executar a função do 'my_module.js' e realizar a soma.
sum(2, 3); 