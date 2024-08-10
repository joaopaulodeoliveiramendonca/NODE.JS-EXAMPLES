const EventEmitter = require('events'); 
// English: Import the EventEmitter class from the 'events' module.
// Português: Importa a classe EventEmitter do módulo 'events'.

const eventEmitter = new EventEmitter(); 
// English: Create a new instance of EventEmitter to handle events.
// Português: Cria uma nova instância de EventEmitter para gerenciar eventos.

// Set up an event listener for the 'start' event
eventEmitter.on('start', () => {
  console.log('During'); 
  // English: When the 'start' event is emitted, this callback logs 'During' to the console.
  // Português: Quando o evento 'start' é emitido, esse callback exibe 'During' no console.
});

console.log('Before'); 
// English: Logs 'Before' to the console before emitting the event.
// Português: Exibe 'Before' no console antes de emitir o evento.

eventEmitter.emit('start'); 
// English: Emit the 'start' event, triggering the associated event listener.
// Português: Emite o evento 'start', acionando o listener associado.

console.log('After'); 
// English: Logs 'After' to the console after emitting the event.
// Português: Exibe 'After' no console após emitir o evento.
