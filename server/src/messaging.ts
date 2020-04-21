export function recordMessages(message: object, dbo: any) {
  dbo.collection('customers').insertOne(message, (err: any, res: any) => {
    if (err) throw err;

    console.log('inserted count: ', res.insertedCount);
  });
}

export function emitMessage(message: object, socket: any) {
  socket.broadcast.emit('newChatMessage', message);
  console.log('asdasdasd');
}

export function returnMessages(dbo: any) {
  return dbo.collection('customers').find({}).toArray();
}
