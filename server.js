const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create a new Express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Attach Socket.IO to the server
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for incoming connections from clients
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // Broadcast the message to all clients
    io.emit('chat message', msg);
  });

  // Listen for user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
