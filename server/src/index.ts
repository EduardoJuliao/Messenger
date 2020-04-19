const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
import cors from 'cors';
import * as messaging from './messaging';
app.use(cors());

app.get('/', (_req: any, res: any) => {
  res.end(
    `<!DOCTYPE html>Hello, World!<script src="/socket.io/socket.io.js"></script><script>var obj = {"date": new Date(),"text": "Heyo 😭","sender": {"id": "dsfqwfeqw","name": "Eduardo"}}; var socket = io(); socket.emit("clientSentMessage", obj );</script>`
  );
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

const uri =
  'mongodb+srv://dbUser:48JgP47FXpjSql5i@cluster0-lzsvc.gcp.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err: any, db: any) => {
  // perform actions on the collection object
  var dbo = db.db('mydb');
  if (err) throw err;

  io.on('connection', (socket: any) => {
    function onNewMessage(message: object, dbo: any) {
      messaging.emitMessage(message, socket);
      messaging.recordMessages(message, dbo);
    }

    socket.on('clientSentMessage', (message: object) => {
      onNewMessage(message, dbo);
    });

    messaging.returnMessages(dbo).then((result: any) => {
      socket.emit('messageHistory', result);
    });

    socket.broadcast.emit(
      'message',
      'this will not show to the user currently logging in so fuck them'
    );
    socket.on('disconnect', () => {
      io.emit('message', 'lmao that bitch actually fucking left');
    });
  });
});
