import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
const app = express();
const server = http.createServer(app);
const port = 5000;
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

io.on('connection', (socket) => {
  // console.log(`This is socket : ${socket}`);
  // console.log(socket);
  console.log(`User connected to websocket server SocketId: ${socket.id}`);
  socket.on('message', (data) => {
    console.log(`User${socket.id} send a message : ${data}`);
    socket.emit('message-recieved', {
      msg: 'Message Recieved',
      data,
    });
  });
});

server.listen(port, () => {
  console.log(`Server is listening at port : ${port}`);
});
