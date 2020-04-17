var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;

app.get('/', (_req: any, res: any) => {
  res.end(
    '<!DOCTYPE html>Hello, World! <script src="/socket.io/socket.io.js"></script><script>var socket = io();socket.on("message", (message) => {console.log(message);});</script>'
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

  io.on('connection', (socket: any) => {
    socket.emit('message', 'fuck you lmao');
    socket.broadcast.emit(
      'message',
      'this will not show to the user currently logging in so fuck them'
    );
    socket.on('disconnect', () => {
      io.emit('message', 'lmao that bitch actually fucking left');
    });
  });

  if (err) throw err;
  var dbo = db.db('mydb');

  app.post('/', (req: any, res: any) => {
    let parsed = req.query;
    parsed = JSON.parse(JSON.stringify(parsed));

    var obj = {
      date: new Date().getTime(),
      name: parsed.name,
      asdf: parsed.asdf,
    };

    console.log(obj);

    dbo.collection('customers').insertOne(obj, function (err: any, res: any) {
      if (err) throw err;

      console.log('1 document inserted');
    });
    res.send();
  });
});
