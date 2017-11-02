var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

var url = require('url');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
  //res.send("HI");
});

http.listen(process.env.PORT, function () {
  console.log('App is listening on port ' + process.env.PORT);
});

io.on('connection', function(socket){
  console.log("connected to new client");
  
  socket.on('disconnect', function(data){
    console.log("DISCONECTED");
  });
  
  socket.on('send message', function(data){
    console.log(data);
  });
});



