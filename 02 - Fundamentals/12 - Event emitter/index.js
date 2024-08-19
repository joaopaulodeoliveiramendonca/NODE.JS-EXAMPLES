// Importa o módulo 'events' que fornece a classe 'EventEmitter' para gerenciar eventos
const EventEmitter = require('events'); 

// Cria uma instância de 'EventEmitter' para gerenciar e emitir eventos
const eventEmitter = new EventEmitter(); 

// Registra um listener para o evento 'start'
// Quando o evento 'start' é emitido, a função callback é executada
eventEmitter.on('start', () => {
  console.log('During'); // Exibe 'During' no console quando o evento 'start' é emitido
});

// Exibe 'Before' no console antes do evento ser emitido
console.log('Before'); 

// Emite o evento 'start'
// Isso aciona a execução do listener registrado anteriormente
eventEmitter.emit('start'); 

// Exibe 'After' no console após o evento ter sido emitido e o listener ter sido executado
console.log('After'); 
