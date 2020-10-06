import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
app.use(express.static(publicDirectoryPath));
server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

// eslint-disable-next-line prefer-const
let count = 0;

io.on('connection', (socket) => {
  console.log('New WebSocket connection');

  socket.emit('countUpdated', count);

  socket.on('increment', () => {
    count++;
    io.emit('countUpdated', count);
  });
});
