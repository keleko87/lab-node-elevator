/* jshint esversion: 6 */
class Elevator {
  constructor() {
    this.floor = 10;
    this.MAXFLOOR = 10;
    this.direction = 'up';
    this.requests = [];
    this.passengers = [];
    this.waitingList = [];
  }

  start() {
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }

  update() {
    return this.log();
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "up";
    } else {
      this.stop();
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "down";
    } else {
      this.stop();
    }
  }

  call(person) {
    this.requests.push(person);
    this.waitingList.push(person);
  }


  _passengersEnter() {}
  _passengersLeave() {}



}

module.exports = Elevator;
