console.log('starting...');
var fartList = require('./fartList.js');
var StepperWiringPi = require("stepper-wiringpi");
var socket = require('socket.io-client')('http://dollheadweb.azurewebsites.net');
var Sound = require('aplay');
var player = new Sound();

//StepperWiringPi.setup(stepsInRevolution, pin1, pin2, pin3, pin4);
var motor = StepperWiringPi.setup(500, 17, 18, 27, 22);
motor.setSpeed(20);

socket.on('connect', function () {
  console.log('Socket connected to server');
});
socket.on('command', function (command, args) {
  console.log('command = '+command + " " + args);
  if (command === "sound") {
      player.play(__dirname +"/"+args);
  }
  if (command === "fart") {
      var fartSound = fartList.getRandomFart();
      player.play(__dirname + "/" +fartSound);
  }
  if (command === "turnRight") {
	//move motor
	motor.forward();
  }
  if (command === "turnLeft") {
	//move motor
	motor.backward();
  }
  if (command === "turnStop") {
	//stop motor
	motor.stop();
  }
  console.log('Done');
});

