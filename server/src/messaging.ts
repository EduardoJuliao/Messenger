export function recordMessages(message: object, dbo: any) {
  dbo.collection('customers').insertOne(message, (err: any, res: any) => {
    if (err) throw err;

    console.log('1 document inserted');
  });
}

export function emitMessage(message: object, socket: any) {
  socket.emit('newChatMessage', message);
}

export function returnMessages(dbo: any) {
  return dbo.collection('customers').find({}).toArray();
}
