console.log('starting...');
var fartList = require('./fartList.js');
var StepperWiringPi = require("stepper-wiringpi");
var socket = require('socket.io-client')('http://dollheadweb.azurewebsites.net');
var Sound = require('aplay');
var player = new Sound();

//StepperWiringPi.setup(stepsInRevolution, pin1, pin2, pin3, pin4);
var motor = StepperWiringPi.setup(513, 17, 18, 27, 22);
motor.setSpeed(60);

var motor2 = StepperWiringPi.setup(513, 26, 19, 13,6);
motor2.setSpeed(60);

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
 if (command === "turnRight2") {
	//move motor
	motor2.forward();
  }
  if (command === "turnLeft2") {
	//move motor
	motor2.backward();
  }
  if (command === "turnStop2") {
	//stop motor
	motor2.stop();
  }
  console.log('Done');
});

