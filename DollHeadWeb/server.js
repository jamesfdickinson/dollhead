var http = require('http');
var express = require('express');
var ioServer = require('socket.io');

var port = process.env.port || 1337;
var version = "0.1.0";

//express server routing
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
console.log('123123');
//http server 
var httpServer = http.createServer(app);
httpServer.listen(port, function () { console.log('***Server(http) listening at port %d *** version %s', port, version); });


//socket io server
var io = new ioServer();
io.attach(httpServer);
io.on('connection', ioConnection);

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