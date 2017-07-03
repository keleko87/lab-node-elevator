/* jshint esversion: 6 */
class Person {
  constructor(name, originFloor, destinationFloor){
    this.name = name;
    this.originFloor = originFloor;
    this.destinationFloor = destinationFloor;
  }
}

module.exports = Person;

/* Iteration 4

When elevators travel up and down, it has to pick up people
so that they can enter the elevator.

To keep a track of everyone, you will have three different lists:

waitingList: people waiting for the elevator -they made
the request and they're waiting the elevator to come
passengers: people currently in the elevator
requests: a list of pending requests. Floors where the elevator
must stop.
The Waiting List

When a person calls the elevator (the call function is executed),
we will add that person into the waitingList array.
Notice they're not in the passengers collection because
they're not yet in the elevator.

Also, add the (originFloor) to the requests array to let
the elevator know where it has to stop to pick the passenger up.

A passenger enters the elevator

When the elevator arrives to any floor, it should check
the waitingList array to verify if a person is waiting there.
If this condition occurs:

add the person into the passengers array
delete the passenger from the waitingList
Add the destination floor of the passenger
 to the elevator requests
We will show a message to indicate what just happens:

Julia has enter the elevator

A passenger leaves the elevator

When the elevator arrives to a floor, it should check
the passengers collection. If a passenger's
destinationFloor matches the current floor:

we will delete that person from the passengers array.
We will show a message to indicate what just happens:

Julia has left the elevator

Good luck! */
