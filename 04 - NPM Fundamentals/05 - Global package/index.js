// npm link lodash
 
// Importa a biblioteca 'lodash' para usar suas funções utilitárias
const _ = require('lodash');

// Define um array com valores que contêm duplicatas adjacentes
const arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8];

// Usa a função 'sortedUniq' do lodash para remover duplicatas adjacentes do array
// A função 'sortedUniq' pressupõe que o array está ordenado e remove duplicatas consecutivas
console.log(_.sortedUniq(arr));

