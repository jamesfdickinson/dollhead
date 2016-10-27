console.log('starting...');
var fartList = require('./fartList.js');

var socket = require('socket.io-client')('http://dollheadweb.azurewebsites.net');
var Sound = require('aplay');
var player = new Sound();

socket.on('connect', function () {
  console.log('Socket connected to server');
});
socket.on('command', function (command, args) {
  console.log('command = '+command + " " + args);
  if (command === "sound") {
      player.play(args);
  }
  if (command === "fart") {
      var fartSound = fartList.getRandomFart();
      player.play(fartSound);
  }
  if (command === "turnRight") {
	//todo: move motor
  }
  if (command === "turnLeft") {
	//todo: move motor
  }
  console.log('Done');
});

