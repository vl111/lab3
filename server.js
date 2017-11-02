var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

var url = require('url');

//webpack
import '.public/style.css';
import _ from 'lodash';
console.log(_.isEqual(1, 2));
var obj = {
    field: 111,
    someFn() {
        console.log('someFn');
    }
};
obj.someFn();

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
    io.emit('server message', messages[i]);
    console.log(messages[i]);
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



