var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

var url = require('url');

var messages = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
});

http.listen(process.env.PORT, function () {
  console.log('App is listening on port ' + process.env.PORT);
});

io.on('connection', function(socket){
  console.log("CONNECTED to new client");
  for(var i = 0; i < messages.length; i++){
    socket.emit('server message', messages[i]);
    console.log(messages[i] + socket.id);
  }
  
  socket.on('disconnect', function(data){
    console.log("DISCONECTED");
  });
  
  socket.on('send message', function(data){
    messages.push(data);
    io.emit('server message', data);
    console.log(data);
  });
});



