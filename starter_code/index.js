/* jshint esversion: 6 */
const Elevator = require('./elevator.js');

// Create an instance of Elevator
let elevator = new Elevator();

// Init elevator
elevator.start();
// setTimeout(() => elevator.stop(), 3000);

// setInterval(() => elevator.floorDown(),1000);
