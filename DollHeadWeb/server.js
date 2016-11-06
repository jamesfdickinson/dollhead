
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', ioConnection);

var port = process.env.port || 1337;
var version = "0.1.0";

http.listen(port, function(){
  console.log('***Server(http) listening at port %d *** version %s', port, version);
});

function ioConnection(socket) {
    socket.on("command", function (command) {
		console.log('command');
        io.sockets.emit('command', command);
    });
	socket.on("reply", function (command) {
		console.log('reply');
        io.sockets.emit('reply', command);
    });
};