console.log('starting...');

var socket = require('socket.io-client')('http://dollheadweb.azurewebsites.net');
socket.on('connect', function () { });
socket.on('command', function (command, args) {
    if (command === "sound") {

    }
});
socket.on('disconnect', function () { });