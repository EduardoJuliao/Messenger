import http from 'http';
import socketio from 'socket.io';

const requestListener = function (_: any, res: any) {
  res.writeHead(200);
  res.end(
    '<!DOCTYPE html>Hello, World! <script src="/socket.io/socket.io.js"></script><script>var socket = io();socket.on("message", (message) => {console.log(message);});</script>'
  );
};

const server = http.createServer(requestListener);
server.listen(3000);

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New conn');
  socket.emit('message', 'fuck you lmao');
});
