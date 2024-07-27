// Importing the 'events' module from Node.js
const EventEmitter = require('events');

// Creating an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Example function to handle the event
const eventHandler = () => {
    console.log('Event occurred!');
};

// Attaching the event handler function to the custom event
eventEmitter.on('customEvent', eventHandler);

// Emitting the custom event
eventEmitter.emit('customEvent');